import templates, {
	instantiateSlideTemplate,
	isPristineSlideCollection,
} from './templates';

const expectedTemplateNames = [
	'blank',
	'image-gallery',
	'hero',
	'cards',
	'logo-strip',
	'testimonials',
	'gallery-thumbnails',
];

function createBlockFactory() {
	let blockNumber = 0;

	return jest.fn( ( name, attributes = {}, innerBlocks = [] ) => ( {
		name,
		attributes,
		innerBlocks,
		clientId: `created-block-${ ++blockNumber }`,
	} ) );
}

test( 'provides one set of internal editable carousel templates', () => {
	expect( templates.map( ( template ) => template.name ) ).toEqual(
		expectedTemplateNames
	);

	templates.forEach( ( template ) => {
		expect( template ).not.toHaveProperty( 'scope' );
		expect( template.attributes ).not.toHaveProperty( 'templateLock' );
		expect( template.innerBlocks.length ).toBeGreaterThan( 0 );
		template.innerBlocks.forEach( ( slide, index ) => {
			expect( slide[ 0 ] ).toBe( 'da/wp-swiper-slide' );
			expect( slide[ 1 ].slug ).toBe( `slide-${ index + 1 }` );
		} );
	} );
} );

test( 'instantiates nested blocks and synchronized parent metadata', () => {
	const cards = templates.find( ( template ) => template.name === 'cards' );
	const createBlock = createBlockFactory();
	const result = instantiateSlideTemplate( cards, createBlock );

	expect( result.innerBlocks ).toHaveLength( 3 );
	expect( result.innerBlocks[ 0 ].name ).toBe( 'da/wp-swiper-slide' );
	expect( result.innerBlocks[ 0 ].innerBlocks[ 0 ].name ).toBe(
		'core/group'
	);
	expect( result.tabsData ).toEqual(
		result.innerBlocks.map( ( block, index ) => ( {
			clientId: block.clientId,
			slug: `slide-${ index + 1 }`,
			slideImg: '',
			thumbImg: '',
		} ) )
	);
	expect( result.attributes ).toEqual(
		expect.objectContaining( {
			selectedTemplate: 'cards',
			tabActive: 'slide-1',
			tabsData: result.tabsData,
		} )
	);
} );

test( 'configures the responsive card template with stable breakpoints', () => {
	const cards = templates.find( ( template ) => template.name === 'cards' );

	expect( JSON.parse( cards.attributes.breakpoints ) ).toEqual( {
		600: {
			slidesPerView: 2,
		},
		960: {
			slidesPerView: 3,
		},
	} );
	expect( cards.attributes ).toEqual(
		expect.objectContaining( {
			navigation: true,
			pagination: false,
			slidesPerView: '1',
			spaceBetween: 24,
		} )
	);
	expect( cards.innerBlocks ).toHaveLength( 3 );
} );

test( 'keeps the starter hero content readable before media is selected', () => {
	const hero = templates.find( ( template ) => template.name === 'hero' );
	const heroSlideAttributes = hero.innerBlocks[ 0 ][ 1 ];

	expect( heroSlideAttributes.overlayColor.rgb.a ).toBeGreaterThanOrEqual(
		0.6
	);
} );

test( 'stores testimonial copy in the current core quote block structure', () => {
	const testimonials = templates.find(
		( template ) => template.name === 'testimonials'
	);
	const quote = testimonials.innerBlocks[ 0 ][ 2 ][ 0 ];
	const paragraph = quote[ 2 ][ 0 ];

	expect( quote[ 0 ] ).toBe( 'core/quote' );
	expect( quote[ 1 ].citation ).toBe( 'Customer name' );
	expect( quote[ 1 ] ).not.toHaveProperty( 'value' );
	expect( paragraph ).toEqual( [
		'core/paragraph',
		{ content: 'Add a customer testimonial or review.' },
	] );
} );

test( 'keeps media-first templates compatible with multi-image selection', () => {
	[ 'image-gallery', 'logo-strip', 'gallery-thumbnails' ].forEach(
		( templateName ) => {
			const template = templates.find(
				( item ) => item.name === templateName
			);

			expect( template.innerBlocks ).toEqual( [
				[ 'da/wp-swiper-slide', { slug: 'slide-1' }, [] ],
			] );
		}
	);
} );

test( 'uses only core content blocks inside content templates', () => {
	const allowedContentBlocks = new Set( [
		'core/button',
		'core/buttons',
		'core/group',
		'core/heading',
		'core/paragraph',
		'core/quote',
	] );
	const contentBlockNames = [];

	function inspectTemplate( template ) {
		const [ blockName, , innerBlocks = [] ] = template;

		if ( blockName !== 'da/wp-swiper-slide' ) {
			contentBlockNames.push( blockName );
		}
		innerBlocks.forEach( inspectTemplate );
	}

	templates.forEach( ( template ) => {
		template.innerBlocks.forEach( inspectTemplate );
	} );
	expect(
		contentBlockNames.every( ( blockName ) =>
			allowedContentBlocks.has( blockName )
		)
	).toBe( true );
} );

test( 'shows the selector only for a pristine slide collection', () => {
	const blankSlide = {
		name: 'da/wp-swiper-slide',
		attributes: {
			slideImg: '',
			thumbImg: '',
		},
		innerBlocks: [],
	};

	expect( isPristineSlideCollection( [], [] ) ).toBe( true );
	expect( isPristineSlideCollection( [ blankSlide ], [] ) ).toBe( true );
	expect(
		isPristineSlideCollection(
			[ { ...blankSlide, innerBlocks: [ { name: 'core/paragraph' } ] } ],
			[]
		)
	).toBe( false );
	expect(
		isPristineSlideCollection(
			[
				{
					...blankSlide,
					attributes: { slideImg: 'image.jpg', thumbImg: '' },
				},
			],
			[]
		)
	).toBe( false );
	expect(
		isPristineSlideCollection(
			[ blankSlide ],
			[ { slideImg: '', thumbImg: 'thumb.jpg' } ]
		)
	).toBe( false );
	expect( isPristineSlideCollection( [ blankSlide, blankSlide ], [] ) ).toBe(
		false
	);
} );
