import { parseSwiperConfig } from '../../../utils/swiper-config';

/**
 * Convert an edited Swiper JSON configuration back into block attributes.
 *
 * @param {string} jsonValue Serialized Swiper configuration.
 * @return {Object} Block attributes and parser diagnostics.
 */
export function getAttributesFromSwiperConfig( jsonValue ) {
	const parsedConfig = parseSwiperConfig( jsonValue );
	const parsed = parsedConfig.options;
	const sourceConfig = JSON.parse( jsonValue );
	const attributes = {};

	if ( parsed.slidesPerView !== undefined ) {
		attributes.slidesPerView = String( parsed.slidesPerView );
	}
	if ( parsed.slidesPerGroup !== undefined ) {
		attributes.slidesPerGroup = parsed.slidesPerGroup;
	}
	if ( parsed.slidesPerGroupAuto !== undefined ) {
		attributes.slidesPerGroupAuto = parsed.slidesPerGroupAuto;
	}
	if ( parsed.slidesPerGroupSkip !== undefined ) {
		attributes.slidesPerGroupSkip = parsed.slidesPerGroupSkip;
	}
	if ( parsed.spaceBetween !== undefined ) {
		attributes.spaceBetween = parsed.spaceBetween;
	}
	if ( parsed.autoSlideWidth !== undefined ) {
		attributes.autoSlideWidth = parsed.autoSlideWidth;
	}
	if ( parsed.navigation !== undefined ) {
		attributes.navigation = parsed.navigation;
	}
	if ( parsed.delay !== undefined ) {
		attributes.delay = parsed.delay;
	}
	if ( parsed.speed !== undefined ) {
		attributes.speed = parsed.speed;
	}
	if ( parsed.loop !== undefined ) {
		attributes.loop = parsed.loop;
	}
	if ( parsed.direction !== undefined ) {
		attributes.direction = parsed.direction;
	}
	if ( parsed.slidesOffsetBefore !== undefined ) {
		attributes.slidesOffsetBefore = parsed.slidesOffsetBefore;
	}
	if ( parsed.slidesOffsetAfter !== undefined ) {
		attributes.slidesOffsetAfter = parsed.slidesOffsetAfter;
	}
	if ( parsed.autoHeight !== undefined ) {
		attributes.autoHeight = parsed.autoHeight;
	}
	if ( parsed.releaseOnEdges !== undefined ) {
		attributes.releaseOnEdges = parsed.releaseOnEdges;
	}
	if ( parsed.effect !== undefined ) {
		attributes.effect = parsed.effect;
	}
	if ( parsed.loopAddBlankSlides !== undefined ) {
		attributes.loopAddBlankSlides = parsed.loopAddBlankSlides;
	}
	if ( parsed.loopAdditionalSlides !== undefined ) {
		attributes.loopAdditionalSlides = parsed.loopAdditionalSlides;
	}
	if ( parsed.showAutoplayControl !== undefined ) {
		attributes.showAutoplayControl = parsed.showAutoplayControl;
	}

	if ( parsed.autoplay !== undefined ) {
		if ( parsed.autoplay === true || typeof parsed.autoplay === 'object' ) {
			attributes.autoplay = true;
			if ( typeof parsed.autoplay === 'object' ) {
				if ( parsed.autoplay.delay !== undefined ) {
					attributes.delay = parsed.autoplay.delay;
				}
				if ( parsed.autoplay.disableOnInteraction !== undefined ) {
					attributes.disableOnInteraction =
						parsed.autoplay.disableOnInteraction;
				}
				if ( parsed.autoplay.pauseOnMouseEnter !== undefined ) {
					attributes.pauseOnMouseEnter =
						parsed.autoplay.pauseOnMouseEnter;
				}
				if ( parsed.autoplay.reverseDirection !== undefined ) {
					attributes.reverseDirection =
						parsed.autoplay.reverseDirection;
				}
				if ( parsed.autoplay.stopOnLastSlide !== undefined ) {
					attributes.stopOnLastSlide =
						parsed.autoplay.stopOnLastSlide;
				}
				if ( parsed.autoplay.waitForTransition !== undefined ) {
					attributes.waitForTransition =
						parsed.autoplay.waitForTransition;
				}
			}
		} else {
			attributes.autoplay = false;
		}
	}

	if ( parsed.freeMode !== undefined ) {
		if ( typeof parsed.freeMode === 'object' && parsed.freeMode.enabled ) {
			attributes.freeMode = true;
			if ( parsed.freeMode.minimumVelocity !== undefined ) {
				attributes.freeModeMinimumVelocity =
					parsed.freeMode.minimumVelocity;
			}
			if ( parsed.freeMode.momentum !== undefined ) {
				attributes.freeModeMomentum = parsed.freeMode.momentum;
			}
			if ( parsed.freeMode.momentumBounce !== undefined ) {
				attributes.freeModeMomentumBounce =
					parsed.freeMode.momentumBounce;
			}
			if ( parsed.freeMode.momentumBounceRatio !== undefined ) {
				attributes.freeModeMomentumBounceRatio =
					parsed.freeMode.momentumBounceRatio;
			}
			if ( parsed.freeMode.momentumRatio !== undefined ) {
				attributes.freeModeMomentumRatio =
					parsed.freeMode.momentumRatio;
			}
			if ( parsed.freeMode.momentumVelocityRatio !== undefined ) {
				attributes.freeModeMomentumVelocityRatio =
					parsed.freeMode.momentumVelocityRatio;
			}
			if ( parsed.freeMode.sticky !== undefined ) {
				attributes.freeModeSticky = parsed.freeMode.sticky;
			}
		} else {
			attributes.freeMode = false;
		}
	}

	if ( parsed.pagination !== undefined ) {
		attributes.pagination = parsed.pagination !== false;
		if (
			typeof parsed.pagination === 'object' &&
			parsed.pagination !== null
		) {
			if ( parsed.pagination.type !== undefined ) {
				attributes.pagination_type = parsed.pagination.type;
			}
			if ( parsed.pagination.clickable !== undefined ) {
				attributes.clickable_pagination = parsed.pagination.clickable;
			}
		}
	}

	if ( sourceConfig.breakpoints !== undefined ) {
		attributes.breakpoints =
			typeof sourceConfig.breakpoints === 'string'
				? sourceConfig.breakpoints
				: JSON.stringify( sourceConfig.breakpoints );
	}

	if ( parsed.mousewheel !== undefined ) {
		attributes.mousewheel = parsed.mousewheel !== false;
		if (
			typeof parsed.mousewheel === 'object' &&
			parsed.mousewheel.releaseOnEdges !== undefined
		) {
			attributes.releaseOnEdges = Boolean(
				parsed.mousewheel.releaseOnEdges
			);
		}
	}

	return {
		attributes,
		diagnostics: parsedConfig.diagnostics,
	};
}
