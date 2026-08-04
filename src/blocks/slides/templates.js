// WordPress provides this package at runtime.
// eslint-disable-next-line import/no-extraneous-dependencies
import { __ } from '@wordpress/i18n';

const cardsBreakpoints = JSON.stringify( {
	600: {
		slidesPerView: 2,
	},
	960: {
		slidesPerView: 3,
	},
} );

function createSlide( index, innerBlocks = [], attributes = {} ) {
	return [
		'da/wp-swiper-slide',
		{
			slug: `slide-${ index }`,
			...attributes,
		},
		innerBlocks,
	];
}

function createCardSlide( index, title ) {
	return createSlide( index, [
		[
			'core/group',
			{
				layout: {
					type: 'constrained',
				},
			},
			[
				[
					'core/heading',
					{
						content: title,
						level: 3,
					},
				],
				[
					'core/paragraph',
					{
						content: __(
							'Add card content, images, buttons, or any other blocks.',
							'wp-swiper'
						),
					},
				],
			],
		],
	] );
}

function createTestimonialSlide( index ) {
	return createSlide( index, [
		[
			'core/quote',
			{
				citation: __( 'Customer name', 'wp-swiper' ),
			},
			[
				[
					'core/paragraph',
					{
						content: __(
							'Add a customer testimonial or review.',
							'wp-swiper'
						),
					},
				],
			],
		],
	] );
}

const templates = [
	{
		name: 'blank',
		title: __( 'Start blank', 'wp-swiper' ),
		description: __(
			'Create an empty carousel and add your own slides.',
			'wp-swiper'
		),
		icon: 'plus-alt2',
		attributes: {},
		innerBlocks: [ createSlide( 1 ) ],
	},
	{
		name: 'image-gallery',
		title: __( 'Image Gallery', 'wp-swiper' ),
		description: __(
			'A large image carousel with navigation and clickable pagination.',
			'wp-swiper'
		),
		icon: 'format-gallery',
		attributes: {
			autoHeight: false,
			clickable_pagination: true,
			navigation: true,
			pagination: true,
			sliderHeight: '600px',
			slidesPerView: '1',
		},
		innerBlocks: [ createSlide( 1 ) ],
	},
	{
		name: 'hero',
		title: __( 'Hero Carousel', 'wp-swiper' ),
		description: __(
			'A full-height promotional slide with editable heading, copy, and button.',
			'wp-swiper'
		),
		icon: 'cover-image',
		attributes: {
			autoHeight: false,
			clickable_pagination: true,
			navigation: true,
			pagination: true,
			sliderHeight: '650px',
			slidesPerView: '1',
		},
		innerBlocks: [
			createSlide(
				1,
				[
					[
						'core/group',
						{
							layout: {
								type: 'constrained',
							},
							style: {
								color: {
									text: '#ffffff',
								},
							},
						},
						[
							[
								'core/heading',
								{
									content: __(
										'Add a hero headline',
										'wp-swiper'
									),
									level: 2,
								},
							],
							[
								'core/paragraph',
								{
									content: __(
										'Add supporting copy for this hero slide.',
										'wp-swiper'
									),
								},
							],
							[
								'core/buttons',
								{},
								[
									[
										'core/button',
										{
											text: __(
												'Call to action',
												'wp-swiper'
											),
										},
									],
								],
							],
						],
					],
				],
				{
					containerWidth: 75,
					contentVHalign: 'center left',
					overlayColor: {
						rgb: {
							a: 0.65,
							b: 0,
							g: 0,
							r: 0,
						},
					},
				}
			),
		],
	},
	{
		name: 'cards',
		title: __( 'Card Carousel', 'wp-swiper' ),
		description: __(
			'A responsive three-card layout for features, services, or products.',
			'wp-swiper'
		),
		icon: 'columns',
		attributes: {
			breakpoints: cardsBreakpoints,
			navigation: true,
			pagination: false,
			slidesPerView: '1',
			spaceBetween: 24,
		},
		innerBlocks: [
			createCardSlide( 1, __( 'Card one', 'wp-swiper' ) ),
			createCardSlide( 2, __( 'Card two', 'wp-swiper' ) ),
			createCardSlide( 3, __( 'Card three', 'wp-swiper' ) ),
		],
	},
	{
		name: 'logo-strip',
		title: __( 'Logo Strip', 'wp-swiper' ),
		description: __(
			'A free-scrolling row of naturally sized logos.',
			'wp-swiper'
		),
		icon: 'images-alt2',
		attributes: {
			autoHeight: false,
			autoSlideWidth: true,
			freeMode: true,
			navigation: false,
			pagination: false,
			sliderHeight: '180px',
			slidesPerView: 'auto',
			spaceBetween: 32,
		},
		innerBlocks: [ createSlide( 1 ) ],
	},
	{
		name: 'testimonials',
		title: __( 'Testimonial Carousel', 'wp-swiper' ),
		description: __(
			'A simple paginated carousel containing three editable testimonials.',
			'wp-swiper'
		),
		icon: 'format-quote',
		attributes: {
			clickable_pagination: true,
			navigation: false,
			pagination: true,
			slidesPerView: '1',
			spaceBetween: 24,
		},
		innerBlocks: [
			createTestimonialSlide( 1 ),
			createTestimonialSlide( 2 ),
			createTestimonialSlide( 3 ),
		],
	},
	{
		name: 'gallery-thumbnails',
		title: __( 'Gallery with Thumbnails', 'wp-swiper' ),
		description: __(
			'A large image carousel controlled by a thumbnail strip.',
			'wp-swiper'
		),
		icon: 'images-alt',
		attributes: {
			autoHeight: false,
			navigation: true,
			pagination: false,
			sliderHeight: '600px',
			slidesPerView: '1',
			thumbs: true,
			thumbsSlidesPerView: 5,
			thumbsSpaceBetween: 12,
		},
		innerBlocks: [ createSlide( 1 ) ],
	},
];

function createBlockFromTemplate( template, createBlock ) {
	const [ blockName, attributes = {}, innerBlocks = [] ] = template;

	return createBlock(
		blockName,
		attributes,
		innerBlocks.map( ( innerBlock ) =>
			createBlockFromTemplate( innerBlock, createBlock )
		)
	);
}

/**
 * Turn a starting template into editable WordPress blocks and parent metadata.
 *
 * @param {Object}   template    Starting template definition.
 * @param {Function} createBlock WordPress block factory.
 * @return {Object} Instantiated parent attributes, blocks, and tab metadata.
 */
export function instantiateSlideTemplate( template, createBlock ) {
	const innerBlocks = template.innerBlocks.map( ( innerBlock ) =>
		createBlockFromTemplate( innerBlock, createBlock )
	);
	const tabsData = innerBlocks.map( ( block, index ) => ( {
		clientId: block.clientId,
		slug: `slide-${ index + 1 }`,
		slideImg: block.attributes.slideImg || '',
		thumbImg: block.attributes.thumbImg || '',
	} ) );

	return {
		attributes: {
			...template.attributes,
			selectedTemplate: template.name,
			tabActive: 'slide-1',
			tabsData,
		},
		innerBlocks,
		tabsData,
	};
}

/**
 * Decide whether the block still needs its initial template choice.
 *
 * @param {Object[]} innerBlocks Current slide blocks.
 * @param {Object[]} tabsData    Persisted parent slide metadata.
 * @return {boolean} Whether the carousel has no authored content or media.
 */
export function isPristineSlideCollection( innerBlocks, tabsData ) {
	if ( innerBlocks.length === 0 ) {
		return true;
	}

	if ( innerBlocks.length !== 1 ) {
		return false;
	}

	const [ slide ] = innerBlocks;
	const hasSlideMedia = Boolean(
		slide.attributes?.slideImg || slide.attributes?.thumbImg
	);
	const hasTabMedia = tabsData.some( ( tab ) =>
		Boolean( tab.slideImg || tab.thumbImg )
	);

	return (
		slide.name === 'da/wp-swiper-slide' &&
		( slide.innerBlocks || [] ).length === 0 &&
		! hasSlideMedia &&
		! hasTabMedia
	);
}

export default templates;
