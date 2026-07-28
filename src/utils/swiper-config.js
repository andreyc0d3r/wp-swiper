import { normalizeSlidesPerView } from './slides-per-view';
import { normalizeSliderAttributes } from './swiper-config-validation';

export {
	createSwiperConfigDiagnostic,
	normalizeSliderAttributes,
	parseSwiperBreakpoints,
	parseSwiperConfig,
	prepareSwiperOptions,
	SwiperConfigValidationError,
} from './swiper-config-validation';

/**
 * Build the Swiper runtime configuration saved by the block and used by the
 * editor preview.
 *
 * @param {Object} attributes Slider block attributes.
 * @return {Object} Swiper configuration.
 */
export function buildSwiperConfig( attributes ) {
	const normalizedAttributes = normalizeSliderAttributes( attributes );
	const {
		slidesPerView,
		slidesPerGroup,
		slidesPerGroupAuto,
		slidesPerGroupSkip,
		spaceBetween,
		autoSlideWidth,
		autoplay,
		disableOnInteraction,
		pauseOnMouseEnter,
		reverseDirection,
		stopOnLastSlide,
		waitForTransition,
		delay,
		speed,
		loop,
		loopAddBlankSlides,
		loopAdditionalSlides,
		effect,
		navigation,
		pagination,
		mousewheel,
		releaseOnEdges,
		pagination_type: paginationType,
		clickable_pagination: clickablePagination,
		breakpoints,
		freeMode,
		freeModeMinimumVelocity,
		freeModeMomentum,
		freeModeMomentumBounce,
		freeModeMomentumBounceRatio,
		freeModeMomentumRatio,
		freeModeMomentumVelocityRatio,
		freeModeSticky,
		autoHeight,
		direction,
		slidesOffsetBefore,
		slidesOffsetAfter,
	} = normalizedAttributes;

	const config = {
		slidesPerView: normalizeSlidesPerView( slidesPerView ),
		slidesPerGroup,
		slidesPerGroupAuto,
		slidesPerGroupSkip,
		navigation,
		pagination: pagination
			? {
					type:
						paginationType !== 'bullets'
							? paginationType
							: 'bullets',
					...( clickablePagination ? { clickable: true } : {} ),
			  }
			: false,
		speed,
		loop,
		direction,
		slidesOffsetBefore,
		slidesOffsetAfter,
		autoHeight,
		spaceBetween,
	};

	if ( autoSlideWidth ) {
		config.autoSlideWidth = true;
	}

	if ( mousewheel ) {
		config.mousewheel = {
			releaseOnEdges: Boolean( releaseOnEdges ),
		};
	}

	if ( loop ) {
		config.loopAddBlankSlides = loopAddBlankSlides;
		config.loopAdditionalSlides = loopAdditionalSlides;
	}

	if ( effect ) {
		config.effect = effect;

		if ( effect === 'fade' ) {
			config.fadeEffect = {
				crossFade: true,
			};
		}
	}

	if ( autoplay ) {
		config.autoplay = {
			delay: Number( delay ),
			disableOnInteraction: Boolean( disableOnInteraction ),
			pauseOnMouseEnter: Boolean( pauseOnMouseEnter ),
			reverseDirection: Boolean( reverseDirection ),
			stopOnLastSlide: Boolean( stopOnLastSlide ),
			waitForTransition: Boolean( waitForTransition ),
		};
	}

	if ( freeMode ) {
		config.freeMode = {
			enabled: true,
			minimumVelocity: freeModeMinimumVelocity,
			momentum: freeModeMomentum,
			momentumBounce: freeModeMomentumBounce,
			momentumBounceRatio: freeModeMomentumBounceRatio,
			momentumRatio: freeModeMomentumRatio,
			momentumVelocityRatio: freeModeMomentumVelocityRatio,
			sticky: freeModeSticky,
		};
	}

	if ( breakpoints !== undefined && breakpoints !== '' ) {
		config.breakpoints = breakpoints;
	}

	return config;
}
