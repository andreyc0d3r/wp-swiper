import {
	enableCarouselAccessibility,
	prefersReducedMotion,
} from './carousel-accessibility';
import { enableSlideAccessibility } from './slide-accessibility';
import { parseSwiperConfig } from './swiper-config';

const INITIALIZED_PROPERTY = '__wpSwiperInstances';
const SWIPER_INSTANCE_PROPERTY = '__wpSwiperInstance';

function dispatchSwiperEvent( name, detail ) {
	if (
		typeof window !== 'undefined' &&
		typeof window.dispatchEvent === 'function'
	) {
		window.dispatchEvent(
			new CustomEvent( name, {
				detail,
			} )
		);
	}
}

function getMainContainer( sliderElement ) {
	return sliderElement.querySelector(
		'.wp-swiper__wrapper .swiper-container'
	);
}

function dispatchConfigDiagnostics( element, diagnostics ) {
	diagnostics.forEach( ( diagnostic ) => {
		dispatchSwiperEvent( 'wp-swiper:warning', {
			diagnostic,
			element,
		} );
	} );
}

function getSwiperConfig( swiperContainer ) {
	const serializedConfig = swiperContainer.getAttribute( 'data-swiper' );
	if ( ! serializedConfig ) {
		throw new Error(
			'WP Swiper is missing its data-swiper configuration.'
		);
	}

	const parsedConfig = parseSwiperConfig( serializedConfig );
	dispatchConfigDiagnostics( swiperContainer, parsedConfig.diagnostics );
	return parsedConfig.options;
}

function addNavigationOptions( sliderElement, options ) {
	if ( ! options.navigation ) {
		return;
	}

	options.navigation = {
		...( typeof options.navigation === 'object' ? options.navigation : {} ),
		nextEl: sliderElement.querySelector( '.swiper-button-next' ),
		prevEl: sliderElement.querySelector( '.swiper-button-prev' ),
	};
}

function addPaginationOptions( sliderElement, options ) {
	if ( ! options.pagination ) {
		options.pagination = false;
		return;
	}

	options.pagination = {
		...( typeof options.pagination === 'object' ? options.pagination : {} ),
		el: sliderElement.querySelector( '.swiper-pagination' ),
	};
}

function createThumbsSwiper( sliderElement, swiperContainer, SwiperClass ) {
	if ( ! swiperContainer.hasAttribute( 'data-thumbs' ) ) {
		return null;
	}

	const thumbsContainer = sliderElement.querySelector(
		'.wp-swiper__thumbs .swiper-container'
	);
	const thumbsWrapper = thumbsContainer?.querySelector( '.swiper-wrapper' );
	if ( ! thumbsContainer || ! thumbsWrapper ) {
		throw new Error( 'WP Swiper thumbnail markup is incomplete.' );
	}

	const mainWrapper = Array.from( swiperContainer.children ).find(
		( child ) => child.classList.contains( 'swiper-wrapper' )
	);
	const slides = Array.from( mainWrapper?.children || [] ).filter(
		( child ) => child.classList.contains( 'wp-swiper__slide' )
	);
	const existingThumbs = Array.from(
		thumbsWrapper.querySelectorAll( '.wp-swiper__thumb' )
	);
	const thumbSlides = slides.map( ( slide, index ) => {
		const matchingThumb = existingThumbs.find(
			( thumb ) =>
				Number.parseInt( thumb.getAttribute( 'data-thumb' ), 10 ) ===
				index + 1
		);

		if ( matchingThumb ) {
			return matchingThumb.cloneNode( true );
		}

		const generatedThumb = slide.cloneNode( true );
		generatedThumb.removeAttribute( 'data-tab' );
		generatedThumb.classList.remove( 'wp-swiper__slide' );
		generatedThumb.classList.add( 'wp-swiper__thumb' );
		return generatedThumb;
	} );

	thumbsWrapper.replaceChildren( ...thumbSlides );

	const parsedThumbsConfig = parseSwiperConfig(
		swiperContainer.getAttribute( 'data-thumbs' ),
		{ kind: 'thumbs' }
	);
	dispatchConfigDiagnostics(
		thumbsContainer,
		parsedThumbsConfig.diagnostics
	);
	const thumbsConfig = parsedThumbsConfig.options;

	const thumbsSwiper = new SwiperClass( thumbsContainer, thumbsConfig );
	thumbsContainer[ SWIPER_INSTANCE_PROPERTY ] = thumbsSwiper;
	enableSlideAccessibility( thumbsSwiper );
	return thumbsSwiper;
}

function addVerticalHeightHandlers( options ) {
	if ( options.direction !== 'vertical' ) {
		return;
	}

	const updateHeight = function () {
		const activeSlide = this.wrapperEl?.children?.[ this.activeIndex ];
		const slideContent = activeSlide?.querySelector(
			'.wp-swiper__slide-content'
		);

		if ( slideContent ) {
			this.wrapperEl.style.height = `${ slideContent.offsetHeight }px`;
		}
	};

	options.on = {
		...( options.on || {} ),
		init: updateHeight,
		slideChangeTransitionEnd: updateHeight,
	};
}

function addAutoWidthHandlers( options ) {
	if ( ! options.autoSlideWidth ) {
		return;
	}

	const fixWidths = ( swiper ) => {
		swiper.slides.forEach( ( slide ) => {
			if ( slide.style.width !== 'auto' ) {
				slide.style.width = 'auto';
			}
		} );
	};

	const wrapHandler = ( existingHandler ) =>
		function ( swiper ) {
			if ( existingHandler ) {
				existingHandler.call( this, swiper );
			}
			fixWidths( swiper );
		};

	const existingOn = options.on || {};
	options.on = {
		...existingOn,
		init: wrapHandler( existingOn.init ),
		update: wrapHandler( existingOn.update ),
		slideChangeTransitionStart: wrapHandler(
			existingOn.slideChangeTransitionStart
		),
		resize: wrapHandler( existingOn.resize ),
		beforeResize: wrapHandler( existingOn.beforeResize ),
	};

	delete options.autoSlideWidth;
}

/**
 * Initialize one WP Swiper block.
 *
 * @param {HTMLElement} sliderElement        WP Swiper block wrapper.
 * @param {Object}      settings             Initialization settings.
 * @param {Function}    settings.SwiperClass Swiper constructor.
 * @param {number}      settings.index       Stable page-level slider index.
 * @return {Object} Main Swiper instance.
 */
export function initializeSwiperElement(
	sliderElement,
	{ SwiperClass, index = 0 } = {}
) {
	if ( ! sliderElement || typeof SwiperClass !== 'function' ) {
		throw new Error( 'WP Swiper could not find the Swiper constructor.' );
	}

	const swiperContainer = getMainContainer( sliderElement );
	if ( ! swiperContainer ) {
		throw new Error( 'WP Swiper container markup is incomplete.' );
	}

	const existingMain = swiperContainer[ SWIPER_INSTANCE_PROPERTY ];
	if ( existingMain && ! existingMain.destroyed ) {
		return existingMain;
	}

	sliderElement.classList.add( `wp-swiper--${ index }` );

	const options = getSwiperConfig( swiperContainer );
	addNavigationOptions( sliderElement, options );
	addPaginationOptions( sliderElement, options );

	const thumbs = createThumbsSwiper(
		sliderElement,
		swiperContainer,
		SwiperClass
	);
	if ( thumbs ) {
		options.thumbs = {
			swiper: thumbs,
		};
	}

	addVerticalHeightHandlers( options );
	addAutoWidthHandlers( options );
	if ( prefersReducedMotion() ) {
		options.speed = 0;
	}

	if ( swiperContainer.getAttribute( 'data-debug' ) === 'true' ) {
		dispatchSwiperEvent( 'wp-swiper:debug', {
			element: swiperContainer,
			options,
		} );
	}

	const main = new SwiperClass( swiperContainer, options );
	swiperContainer[ SWIPER_INSTANCE_PROPERTY ] = main;
	enableSlideAccessibility( main );
	enableCarouselAccessibility( sliderElement, main, {
		autoplayEnabled: Boolean( options.autoplay ),
		index,
	} );
	sliderElement[ INITIALIZED_PROPERTY ] = {
		main,
		thumbs,
	};

	if ( typeof main.on === 'function' ) {
		main.on( 'destroy', () => {
			if ( swiperContainer[ SWIPER_INSTANCE_PROPERTY ] === main ) {
				delete swiperContainer[ SWIPER_INSTANCE_PROPERTY ];
			}
			if ( sliderElement[ INITIALIZED_PROPERTY ]?.main === main ) {
				delete sliderElement[ INITIALIZED_PROPERTY ];
			}
		} );
	}

	return main;
}

/**
 * Destroy the Swiper instances owned by one block.
 *
 * @param {HTMLElement} sliderElement WP Swiper block wrapper.
 * @return {boolean} Whether at least one instance was destroyed.
 */
export function destroySwiperElement( sliderElement ) {
	if ( ! sliderElement ) {
		return false;
	}

	const swiperContainer = getMainContainer( sliderElement );
	const thumbsContainer = sliderElement.querySelector(
		'.wp-swiper__thumbs .swiper-container'
	);
	const instances = sliderElement[ INITIALIZED_PROPERTY ] || {};
	const main =
		swiperContainer?.[ SWIPER_INSTANCE_PROPERTY ] || instances.main;
	const thumbs =
		thumbsContainer?.[ SWIPER_INSTANCE_PROPERTY ] || instances.thumbs;
	let destroyed = false;

	[ thumbs, main ].forEach( ( instance ) => {
		if (
			instance &&
			! instance.destroyed &&
			typeof instance.destroy === 'function'
		) {
			instance.destroy( true, true );
			destroyed = true;
		}
	} );

	if ( swiperContainer ) {
		delete swiperContainer[ SWIPER_INSTANCE_PROPERTY ];
	}
	if ( thumbsContainer ) {
		delete thumbsContainer[ SWIPER_INSTANCE_PROPERTY ];
	}
	delete sliderElement[ INITIALIZED_PROPERTY ];

	if ( Array.isArray( window.wpSwiper ) && main ) {
		const mainIndex = window.wpSwiper.indexOf( main );
		if ( mainIndex >= 0 ) {
			window.wpSwiper[ mainIndex ] = undefined;
		}
	}
	if ( Array.isArray( window.wpSwiperThumbs ) && thumbs ) {
		const thumbsIndex = window.wpSwiperThumbs.indexOf( thumbs );
		if ( thumbsIndex >= 0 ) {
			window.wpSwiperThumbs[ thumbsIndex ] = undefined;
		}
	}

	if ( destroyed ) {
		dispatchSwiperEvent( 'wp-swiper:destroy', {
			element: sliderElement,
		} );
	}

	return destroyed;
}

/**
 * Destroy and initialize one WP Swiper block.
 *
 * @param {HTMLElement} sliderElement        WP Swiper block wrapper.
 * @param {Object}      settings             Initialization settings.
 * @param {Function}    settings.SwiperClass Swiper constructor.
 * @param {number}      settings.index       Page-level slider index.
 * @return {Object} Reinitialized main Swiper instance.
 */
export function reinitializeSwiperElement(
	sliderElement,
	{ SwiperClass = window.Swiper, index = 0 } = {}
) {
	destroySwiperElement( sliderElement );
	return initializeSwiperElement( sliderElement, {
		SwiperClass,
		index,
	} );
}

function findSliderElements( scope ) {
	const sliders = [];
	if ( scope?.matches?.( '.wp-swiper' ) ) {
		sliders.push( scope );
	}
	if ( typeof scope?.querySelectorAll === 'function' ) {
		sliders.push( ...scope.querySelectorAll( '.wp-swiper' ) );
	}
	return sliders;
}

/**
 * Initialize every uninitialized WP Swiper block in a document or subtree.
 *
 * @param {Document|HTMLElement} scope                Search root.
 * @param {Object}               settings             Initialization settings.
 * @param {Function}             settings.SwiperClass Swiper constructor.
 * @return {Object[]} Successfully initialized main Swiper instances.
 */
export function initializeSwipers(
	scope = document,
	{ SwiperClass = window.Swiper } = {}
) {
	if ( ! Array.isArray( window.wpSwiper ) ) {
		window.wpSwiper = [];
	}
	if ( ! Array.isArray( window.wpSwiperThumbs ) ) {
		window.wpSwiperThumbs = [];
	}

	const initialized = [];
	findSliderElements( scope ).forEach( ( sliderElement ) => {
		const index = window.wpSwiper.length;

		try {
			const main = initializeSwiperElement( sliderElement, {
				SwiperClass,
				index,
			} );

			if ( ! window.wpSwiper.includes( main ) ) {
				window.wpSwiper.push( main );
				const instances = sliderElement[ INITIALIZED_PROPERTY ];
				if ( instances?.thumbs ) {
					window.wpSwiperThumbs[ index ] = instances.thumbs;
				}
			}
			initialized.push( main );
		} catch ( error ) {
			dispatchSwiperEvent( 'wp-swiper:error', {
				element: sliderElement,
				error,
			} );
		}
	} );

	return initialized;
}

/**
 * Watch for WP Swiper blocks inserted after the initial page load.
 *
 * @param {HTMLElement} root                 Mutation observer root.
 * @param {Object}      settings             Initialization settings.
 * @param {Function}    settings.SwiperClass Swiper constructor.
 * @return {MutationObserver|null} Observer instance.
 */
export function observeSwipers(
	root = document.body,
	{ SwiperClass = window.Swiper } = {}
) {
	if ( ! root || typeof window.MutationObserver !== 'function' ) {
		return null;
	}

	const observer = new window.MutationObserver( ( mutations ) => {
		mutations.forEach( ( mutation ) => {
			mutation.addedNodes.forEach( ( node ) => {
				if ( node.nodeType === window.Node.ELEMENT_NODE ) {
					initializeSwipers( node, {
						SwiperClass,
					} );
				}
			} );
		} );
	} );

	observer.observe( root, {
		childList: true,
		subtree: true,
	} );

	return observer;
}
