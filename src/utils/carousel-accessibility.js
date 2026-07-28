// WordPress provides this package as a registered script dependency.
// eslint-disable-next-line import/no-extraneous-dependencies
import { __, sprintf } from '@wordpress/i18n';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

/**
 * Return the accessible name for a carousel.
 *
 * @param {HTMLElement} sliderElement WP Swiper block wrapper.
 * @param {number}      index         Page-level slider index.
 * @return {string} Accessible carousel name.
 */
export function getCarouselLabel( sliderElement, index ) {
	const customLabel = sliderElement.dataset.carouselLabel?.trim();
	if ( customLabel ) {
		return customLabel;
	}

	return sprintf(
		/* translators: %d: carousel number on the current page. */
		__( 'Carousel %d', 'wp-swiper' ),
		index + 1
	);
}

function isAutoplayRunning( swiper ) {
	return Boolean( swiper.autoplay?.running && ! swiper.autoplay?.paused );
}

function pauseAutoplay( swiper ) {
	if ( typeof swiper.autoplay?.pause === 'function' ) {
		swiper.autoplay.pause();
	} else if ( typeof swiper.autoplay?.stop === 'function' ) {
		swiper.autoplay.stop();
	}
}

function resumeAutoplay( swiper ) {
	if (
		! swiper.autoplay?.running &&
		typeof swiper.autoplay?.start === 'function'
	) {
		swiper.autoplay.start();
	} else if ( typeof swiper.autoplay?.resume === 'function' ) {
		swiper.autoplay.resume();
	} else if ( typeof swiper.autoplay?.start === 'function' ) {
		swiper.autoplay.start();
	}
}

/**
 * Add carousel boundary semantics and an autoplay control.
 *
 * @param {HTMLElement}    sliderElement               WP Swiper block wrapper.
 * @param {Object}         swiper                      Initialized Swiper instance.
 * @param {Object}         settings                    Accessibility settings.
 * @param {boolean}        settings.autoplayEnabled    Whether autoplay is configured.
 * @param {number}         settings.index              Page-level slider index.
 * @param {MediaQueryList} settings.reducedMotionQuery Reduced-motion query.
 * @return {Function} Cleanup callback.
 */
export function enableCarouselAccessibility(
	sliderElement,
	swiper,
	{
		autoplayEnabled = Boolean( swiper.autoplay?.running ),
		index = 0,
		reducedMotionQuery = window.matchMedia?.( REDUCED_MOTION_QUERY ),
	} = {}
) {
	const label = getCarouselLabel( sliderElement, index );
	sliderElement.setAttribute( 'role', 'region' );
	sliderElement.setAttribute(
		'aria-roledescription',
		__( 'carousel', 'wp-swiper' )
	);
	sliderElement.setAttribute( 'aria-label', label );

	const swiperContainer = sliderElement.querySelector( '.swiper-container' );
	if ( swiperContainer ) {
		swiperContainer.setAttribute( 'aria-label', label );
	}

	if ( ! autoplayEnabled || ! swiper.autoplay ) {
		return () => {};
	}

	const controlsContainer =
		sliderElement.querySelector( '.wp-swiper__wrapper' ) || sliderElement;
	const autoplayButton = document.createElement( 'button' );
	autoplayButton.type = 'button';
	autoplayButton.className = 'wp-swiper__autoplay-toggle';

	const updateButton = () => {
		const running = isAutoplayRunning( swiper );
		const text = running
			? __( 'Pause autoplay', 'wp-swiper' )
			: __( 'Start autoplay', 'wp-swiper' );
		autoplayButton.textContent = text;
		autoplayButton.setAttribute( 'aria-label', text );
		autoplayButton.setAttribute(
			'data-autoplay-running',
			String( running )
		);
	};

	const toggleAutoplay = () => {
		if ( isAutoplayRunning( swiper ) ) {
			pauseAutoplay( swiper );
		} else {
			resumeAutoplay( swiper );
		}
		updateButton();
	};

	const handleReducedMotion = ( event ) => {
		if ( event.matches ) {
			pauseAutoplay( swiper );
			updateButton();
		}
	};

	autoplayButton.addEventListener( 'click', toggleAutoplay );
	controlsContainer.appendChild( autoplayButton );
	swiper.on?.(
		'autoplayPause autoplayResume autoplayStart autoplayStop',
		updateButton
	);

	if ( reducedMotionQuery?.matches ) {
		pauseAutoplay( swiper );
	}
	if ( typeof reducedMotionQuery?.addEventListener === 'function' ) {
		reducedMotionQuery.addEventListener( 'change', handleReducedMotion );
	} else {
		reducedMotionQuery?.addListener?.( handleReducedMotion );
	}
	updateButton();

	const cleanup = () => {
		autoplayButton.removeEventListener( 'click', toggleAutoplay );
		autoplayButton.remove();
		if ( typeof reducedMotionQuery?.removeEventListener === 'function' ) {
			reducedMotionQuery.removeEventListener(
				'change',
				handleReducedMotion
			);
		} else {
			reducedMotionQuery?.removeListener?.( handleReducedMotion );
		}
		swiper.off?.(
			'autoplayPause autoplayResume autoplayStart autoplayStop',
			updateButton
		);
	};

	swiper.on?.( 'destroy', cleanup );
	return cleanup;
}

/**
 * Match the user's reduced-motion preference before Swiper initializes.
 *
 * @return {boolean} Whether reduced motion is requested.
 */
export function prefersReducedMotion() {
	return Boolean( window.matchMedia?.( REDUCED_MOTION_QUERY ).matches );
}
