const fs = require( 'node:fs/promises' );
const path = require( 'node:path' );

const { expect, test } = require( '@wordpress/e2e-test-utils-playwright' );

const ONE_PIXEL_PNG = Buffer.from(
	'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Y9ZlS8AAAAASUVORK5CYII=',
	'base64'
);

async function seedImages( requestUtils, testInfo ) {
	const fixtureDirectory = testInfo.outputPath( 'media' );
	const imagePaths = [
		path.join( fixtureDirectory, 'swiper-first.png' ),
		path.join( fixtureDirectory, 'swiper-second.png' ),
	];

	await fs.mkdir( fixtureDirectory, { recursive: true } );
	await Promise.all(
		imagePaths.map( ( imagePath ) =>
			fs.writeFile( imagePath, ONE_PIXEL_PNG )
		)
	);

	return Promise.all(
		imagePaths.map( ( imagePath ) => requestUtils.uploadMedia( imagePath ) )
	);
}

async function insertConfiguredCarousel( editor, media ) {
	await editor.insertBlock( {
		name: 'da/wp-swiper-slides',
		attributes: {
			autoplay: true,
			breakpoints: JSON.stringify( {
				900: {
					slidesPerView: 2,
					spaceBetween: 24,
				},
			} ),
			carouselLabel: 'Release carousel',
			delay: 10000,
			navigation: true,
			pagination: true,
			showAutoplayControl: true,
			slidesPerView: '1.25',
			tabsData: media.map( ( item, index ) => ( {
				clientId: '',
				slideImg: item.source_url,
				slug: `slide-${ index + 1 }`,
				thumbImg: item.source_url,
			} ) ),
			thumbs: true,
		},
		innerBlocks: media.map( ( item, index ) => ( {
			name: 'da/wp-swiper-slide',
			attributes: {
				slideImg: item.source_url,
				slug: `slide-${ index + 1 }`,
				thumbImg: item.source_url,
			},
			innerBlocks: [
				{
					name: 'core/paragraph',
					attributes: {
						content: `Release slide ${ index + 1 }`,
					},
				},
			],
		} ) ),
	} );
}

test.describe( 'WP Swiper release smoke tests', () => {
	test.beforeEach( async ( { requestUtils } ) => {
		await requestUtils.deleteAllPosts();
		await requestUtils.deleteAllMedia();
	} );

	test( 'adds, selects, reorders, removes, saves, and reopens slides', async ( {
		admin,
		editor,
		page,
		requestUtils,
	}, testInfo ) => {
		const media = await seedImages( requestUtils, testInfo );

		await admin.createNewPost( { title: 'WP Swiper editor smoke test' } );
		await editor.insertBlock( { name: 'da/wp-swiper-slides' } );

		const carousel = editor.canvas.locator(
			'[data-type="da/wp-swiper-slides"]'
		);
		await expect( carousel ).toBeVisible();
		await carousel.getByRole( 'button', { name: /Start blank/ } ).click();

		await carousel
			.getByRole( 'button', {
				name: 'Select images from Media Library',
			} )
			.click();

		const mediaModal = page.locator( '.media-modal' );
		await expect( mediaModal ).toBeVisible();
		await mediaModal.getByText( 'Media Library', { exact: true } ).click();
		for ( const item of media ) {
			await mediaModal
				.locator( `.attachment[data-id="${ item.id }"]` )
				.click( { modifiers: [ 'ControlOrMeta' ] } );
		}
		await expect(
			mediaModal.locator( '.attachment[aria-checked="true"]' )
		).toHaveCount( 2 );
		await mediaModal
			.getByRole( 'button', { name: 'Select', exact: true } )
			.click();

		const slideButtons = carousel.locator( '.wp-swiper__tab-select' );
		await expect( slideButtons ).toHaveCount( 2 );
		await expect(
			carousel.getByRole( 'button', { name: 'Slide 1' } )
		).toHaveAttribute( 'aria-pressed', 'true' );

		await carousel.getByRole( 'button', { name: 'Add Slide' } ).click();
		await expect( slideButtons ).toHaveCount( 3 );
		await carousel.getByRole( 'button', { name: 'Slide 2' } ).click();

		await page.evaluate( () => {
			const selector = window.wp.data.select( 'core/block-editor' );
			const dispatcher = window.wp.data.dispatch( 'core/block-editor' );
			const parent = selector
				.getBlocks()
				.find( ( block ) => block.name === 'da/wp-swiper-slides' );
			const children = selector.getBlocks( parent.clientId );

			dispatcher.moveBlocksToPosition(
				[ children[ 1 ].clientId ],
				parent.clientId,
				parent.clientId,
				0
			);
		} );

		await expect(
			carousel.getByRole( 'button', { name: 'Slide 1' } )
		).toHaveAttribute( 'aria-pressed', 'true' );

		await carousel
			.getByRole( 'button', { name: 'Remove slide?' } )
			.last()
			.click();
		await page
			.getByRole( 'button', { name: 'Remove', exact: true } )
			.click();
		await expect( slideButtons ).toHaveCount( 2 );

		const postId = await editor.publishPost();
		expect( postId ).not.toBeNull();

		await admin.editPost( postId );
		await expect(
			editor.canvas.locator( '[data-type="da/wp-swiper-slides"]' )
		).toBeVisible();
		await expect(
			editor.canvas.locator(
				'.block-editor-block-list__block.is-invalid'
			)
		).toHaveCount( 0 );
		await expect(
			page.getByText( 'Block contains unexpected or invalid content.' )
		).toHaveCount( 0 );
	} );

	test( 'initializes configured controls and responsive settings on the frontend', async ( {
		admin,
		editor,
		page,
		requestUtils,
	}, testInfo ) => {
		const media = await seedImages( requestUtils, testInfo );

		await admin.createNewPost( { title: 'WP Swiper frontend smoke test' } );
		await insertConfiguredCarousel( editor, media );

		const postId = await editor.publishPost();
		expect( postId ).not.toBeNull();

		await page.setViewportSize( { width: 800, height: 700 } );
		await page.goto( `/?p=${ postId }` );

		const carousel = page.getByRole( 'region', {
			name: 'Release carousel',
		} );
		await expect( carousel ).toBeVisible();
		await expect(
			carousel.locator( '.swiper-container' ).first()
		).toHaveClass( /swiper-initialized/ );
		await expect( carousel.locator( '.swiper-button-prev' ) ).toBeVisible();
		await expect( carousel.locator( '.swiper-button-next' ) ).toBeVisible();
		await expect(
			carousel.locator(
				'.swiper-button-next .swiper-navigation-icon'
			)
		).toHaveCSS( 'width', '24px' );
		await expect(
			carousel.locator(
				'.swiper-button-next .swiper-navigation-icon'
			)
		).toHaveCSS( 'height', '24px' );
		await expect( carousel.locator( '.swiper-pagination' ) ).toBeVisible();
		await expect(
			carousel.locator( '.wp-swiper__thumbs .swiper-container' )
		).toHaveClass( /swiper-initialized/ );

		const config = await carousel
			.locator( '.swiper-container' )
			.first()
			.getAttribute( 'data-swiper' );
		expect( JSON.parse( config ) ).toMatchObject( {
			autoplay: {
				delay: 10000,
			},
			breakpoints: JSON.stringify( {
				900: {
					slidesPerView: 2,
					spaceBetween: 24,
				},
			} ),
			navigation: true,
			pagination: {
				type: 'bullets',
			},
			slidesPerView: 1.25,
		} );
		const runtimeBreakpoints = await carousel
			.locator( '.swiper-container' )
			.first()
			.evaluate(
				( element ) => element.__wpSwiperInstance.params.breakpoints
			);
		expect( runtimeBreakpoints ).toMatchObject( {
			900: {
				slidesPerView: 2,
				spaceBetween: 24,
			},
		} );

		const autoplayControl = carousel.locator(
			'.wp-swiper__autoplay-toggle'
		);
		await expect( autoplayControl ).toHaveAccessibleName(
			'Start autoplay'
		);
		await autoplayControl.click();
		await expect( autoplayControl ).toHaveAccessibleName(
			'Pause autoplay'
		);
		await autoplayControl.click();
		await expect( autoplayControl ).toHaveAccessibleName(
			'Start autoplay'
		);
	} );

	test( 'selects, saves, and reopens a template inside one WP Swiper block', async ( {
		admin,
		editor,
		page,
	} ) => {
		await admin.createNewPost( { title: 'WP Swiper template smoke test' } );

		const registeredVariationNames = await page.evaluate( () =>
			window.wp.blocks
				.getBlockVariations( 'da/wp-swiper-slides', 'inserter' )
				.map( ( variation ) => variation.name )
		);
		expect( registeredVariationNames ).toEqual( [] );

		await editor.insertBlock( { name: 'da/wp-swiper-slides' } );

		const carousel = editor.canvas.locator(
			'[data-type="da/wp-swiper-slides"]'
		);
		await expect( carousel ).toBeVisible();

		const templateSelector = carousel.getByRole( 'region', {
			name: 'Choose a starting template',
		} );
		await expect( templateSelector ).toBeVisible();
		await expect( templateSelector.getByRole( 'button' ) ).toHaveCount( 7 );
		await templateSelector
			.getByRole( 'button', { name: /Card Carousel/ } )
			.click();

		await expect( templateSelector ).toHaveCount( 0 );
		await expect(
			carousel.locator( '.wp-swiper__tab-select' )
		).toHaveCount( 3 );
		await expect( carousel.getByText( 'Card one' ) ).toBeVisible();

		const insertedTemplate = await page.evaluate( () => {
			const selector = window.wp.data.select( 'core/block-editor' );
			const carouselBlock = selector
				.getBlocks()
				.find( ( block ) => block.name === 'da/wp-swiper-slides' );

			return {
				attributes: carouselBlock.attributes,
				slideCount: selector.getBlocks( carouselBlock.clientId ).length,
			};
		} );
		expect( insertedTemplate.slideCount ).toBe( 3 );
		expect( insertedTemplate.attributes ).toMatchObject( {
			navigation: true,
			pagination: false,
			selectedTemplate: 'cards',
			slidesPerView: '1',
			spaceBetween: 24,
		} );
		expect( JSON.parse( insertedTemplate.attributes.breakpoints ) ).toEqual(
			{
				600: {
					slidesPerView: 2,
				},
				960: {
					slidesPerView: 3,
				},
			}
		);

		const postId = await editor.publishPost();
		expect( postId ).not.toBeNull();

		await admin.editPost( postId );
		await expect(
			editor.canvas.locator( '[data-type="da/wp-swiper-slides"]' )
		).toBeVisible();
		await expect(
			editor.canvas.getByRole( 'region', {
				name: 'Choose a starting template',
			} )
		).toHaveCount( 0 );
		await expect(
			editor.canvas.locator(
				'.block-editor-block-list__block.is-invalid'
			)
		).toHaveCount( 0 );
	} );
} );
