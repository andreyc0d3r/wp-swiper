/**
 * Internal dependencies
 */
import metadata from './block.json';
import deprecated, { saveIntegerSlidesPerView } from './deprecated';
import saveCurrent from './save';
import saveV1310 from './save-v1-3-10';
import { buildSwiperConfig } from '../../utils/swiper-config';
import { swiperConfigFixtures } from '../../utils/swiper-config.fixtures';

jest.mock(
	'@wordpress/block-editor',
	() => ( {
		useBlockProps: {
			save: ( props = {} ) => ( {
				...props,
				className: [ 'wp-block-da-wp-swiper-slides', props.className ]
					.filter( Boolean )
					.join( ' ' ),
			} ),
		},
		InnerBlocks: {
			Content: () => null,
		},
		useInnerBlocksProps: () => ( {} ),
	} ),
	{ virtual: true }
);

const { TextDecoder, TextEncoder } = require( 'util' );

global.TextDecoder = TextDecoder;
global.TextEncoder = TextEncoder;

// react-dom is provided transitively by the WordPress test environment.
// eslint-disable-next-line import/no-extraneous-dependencies
const { renderToStaticMarkup } = require( 'react-dom/server' );

function getDefaultAttributes( overrides = {} ) {
	const attributes = Object.entries( metadata.attributes ).reduce(
		( defaults, [ name, definition ] ) => {
			if (
				Object.prototype.hasOwnProperty.call( definition, 'default' )
			) {
				defaults[ name ] = definition.default;
			}
			return defaults;
		},
		{}
	);

	return {
		...attributes,
		pagination_type: 'bullets',
		mousewheel: false,
		releaseOnEdges: false,
		...overrides,
	};
}

function renderSwiperConfig( save, attributes ) {
	const container = document.createElement( 'div' );
	container.innerHTML = renderToStaticMarkup( save( { attributes } ) );

	return JSON.parse(
		container
			.querySelector( '.swiper-container' )
			.getAttribute( 'data-swiper' )
	);
}

test( 'current save output preserves fractional slides per view', () => {
	const config = renderSwiperConfig(
		saveCurrent,
		getDefaultAttributes( { slidesPerView: '1.2' } )
	);

	expect( config.slidesPerView ).toBe( 1.2 );
} );

test( 'integer-era output remains available for block validation', () => {
	const attributes = getDefaultAttributes( { slidesPerView: '1.2' } );
	const config = renderSwiperConfig( saveIntegerSlidesPerView, attributes );

	expect( config.slidesPerView ).toBe( 1 );
} );

test( 'current output fixes mousewheel while version 1.4.6 output remains valid', () => {
	const attributes = getDefaultAttributes( {
		mousewheel: true,
		releaseOnEdges: true,
	} );
	const currentConfig = renderSwiperConfig( saveCurrent, attributes );
	const historicalConfig = renderSwiperConfig(
		saveIntegerSlidesPerView,
		attributes
	);

	expect( currentConfig.mousewheel ).toEqual( {
		releaseOnEdges: true,
	} );
	expect( currentConfig ).not.toHaveProperty( 'releaseOnEdges' );
	expect( historicalConfig.mousewheel ).toEqual( {
		releaseOnEdges: false,
	} );
	expect( historicalConfig.releaseOnEdges ).toBe( true );
} );

test( 'current output does not enable mousewheel or thumbnails unless selected', () => {
	const attributes = getDefaultAttributes( {
		mousewheel: false,
		releaseOnEdges: true,
		thumbs: false,
	} );
	const container = document.createElement( 'div' );
	container.innerHTML = renderToStaticMarkup(
		saveCurrent( {
			attributes,
		} )
	);
	const swiperContainer = container.querySelector( '.swiper-container' );
	const config = JSON.parse( swiperContainer.getAttribute( 'data-swiper' ) );

	expect( config ).not.toHaveProperty( 'mousewheel' );
	expect( swiperContainer.hasAttribute( 'data-thumbs' ) ).toBe( false );
} );

test( 'current output saves a custom carousel label and decorative navigation icons', () => {
	const attributes = getDefaultAttributes( {
		carouselLabel: 'Featured products',
		navigation: true,
		previousIcon: 'previous.svg',
		nextIcon: 'next.svg',
	} );
	const container = document.createElement( 'div' );
	container.innerHTML = renderToStaticMarkup(
		saveCurrent( {
			attributes,
		} )
	);

	expect(
		container
			.querySelector( '.wp-swiper' )
			.getAttribute( 'data-carousel-label' )
	).toBe( 'Featured products' );
	expect(
		Array.from(
			container.querySelectorAll(
				'.swiper-button-prev img, .swiper-button-next img'
			)
		).map( ( image ) => image.getAttribute( 'alt' ) )
	).toEqual( [ '', '' ] );
} );

test( 'version 1.3.10 output and attributes remain available for migration', () => {
	const version1310 = deprecated.find(
		( entry ) => entry.save === saveV1310
	);
	const attributes = getDefaultAttributes( {
		slidesPerView: '1.2',
		txtColor: '#123456',
	} );
	const config = renderSwiperConfig( saveV1310, attributes );
	const migratedAttributes = version1310.migrate( attributes );

	expect( version1310.attributes.txtColor ).toEqual( { type: 'string' } );
	expect( config.slidesPerView ).toBe( '1.2' );
	expect( migratedAttributes.slidesPerView ).toBe( '1.2' );
	expect( migratedAttributes ).not.toHaveProperty( 'txtColor' );
} );

test( 'older sticky-mode blocks discard removed text color during migration', () => {
	const stickyVersion = deprecated.find(
		( entry ) => entry.attributes.sticky !== undefined
	);
	const migratedAttributes = stickyVersion.migrate( {
		sticky: true,
		txtColor: '#123456',
	} );

	expect( migratedAttributes.freeModeSticky ).toBe( true );
	expect( migratedAttributes ).not.toHaveProperty( 'sticky' );
	expect( migratedAttributes ).not.toHaveProperty( 'txtColor' );
} );

test.each( swiperConfigFixtures )(
	'$name saves the same configuration used by the shared builder',
	( { attributes: overrides } ) => {
		const attributes = getDefaultAttributes( overrides );

		expect( renderSwiperConfig( saveCurrent, attributes ) ).toEqual(
			JSON.parse( JSON.stringify( buildSwiperConfig( attributes ) ) )
		);
	}
);
