/**
 * External dependencies
 */
import classnames from 'classnames/dedupe';

/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks, useInnerBlocksProps } from '@wordpress/block-editor';

/**
 * Block Save Class.
 */
function save(props) {
	let { className } = props.attributes;
	const {
		align,
		overlayImg,
		overlayImgOpacity,
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
		pagination_type,
		clickable_pagination,
		breakpoints,
		thumbs,
		thumbsSpaceBetween,
		thumbsSlidesPerView,
		autoHeight,
		sliderHeight,
		freeMode,
		freeModeMinimumVelocity,
		freeModeMomentum,
		freeModeMomentumBounce,
		freeModeMomentumBounceRatio,
		freeModeMomentumRatio,
		freeModeMomentumVelocityRatio,
		freeModeSticky,
		debug,
		direction,
		tabsData,
		previousIcon,
		nextIcon,
		slidesOffsetBefore,
		slidesOffsetAfter,
		overflowVisible,
		navigationColor,
		paginationColor,
	} = props.attributes;

	className = classnames(className, 'wp-swiper');

	if (align) {
		className = classnames(className, `align${align}`);
	}

	const blockStyle = {};

	if (navigationColor) {
		blockStyle['--wp-swiper-navigation-color'] = navigationColor;
	}

	if (paginationColor) {
		blockStyle['--wp-swiper-pagination-color'] = paginationColor;
	}

	const blockProps = useBlockProps.save({
		className: className,
		style: blockStyle,
	});

	const innerBlocksProps = useInnerBlocksProps;

	const style_overlay_image = overlayImg ? { backgroundImage: `url(${overlayImg})` } : {};
	if (overlayImgOpacity) {
		style_overlay_image.opacity = overlayImgOpacity;
	}

	let thumbsConfig = {
		'data-thumbs': {},
	};

	let data_atts = {
		slidesPerView: slidesPerView === 'auto' ? 'auto' : parseInt(slidesPerView, 10),
		slidesPerGroup,
		slidesPerGroupAuto,
		slidesPerGroupSkip,
		navigation,
		pagination: {},
		delay: delay,
		speed: speed,
		loop: loop,
		direction,
		slidesOffsetBefore,
		slidesOffsetAfter,
		autoHeight,
		spaceBetween,
		releaseOnEdges,
	};

	// Auto Slide Width logic - only include if true
	if (autoSlideWidth) {
		data_atts.autoSlideWidth = true;
	}

	// Mousewheel and release on edges logic
	if (mousewheel && releaseOnEdges) {
		data_atts.mousewheel = {
			releaseOnEdges: releaseOnEdges === 'true',
		};
	}

	// Loop logic
	if (loop) {
		data_atts.loopAddBlankSlides = loopAddBlankSlides;
		data_atts.loopAdditionalSlides = loopAdditionalSlides;
	}

	// Effect logic
	if (effect) {
		data_atts.effect = effect;

		// If the effect is 'fade', enable crossFade
		if (effect === 'fade') {
			data_atts.fadeEffect = {
				crossFade: true,
			};
		}
	}

	// Autoplay
	// -- START -- Autoplay logic
	if (autoplay) {
		data_atts.autoplay = true;

		// Delay logic
		if (delay !== null && delay !== undefined) {
			data_atts.autoplay = {
				delay: Number(delay),
			};
		}

		// Disable on interaction
		if (disableOnInteraction) {
			if (!data_atts.autoplay) {
				data_atts.autoplay = {};
			}
			data_atts.autoplay.disableOnInteraction = true;
		}

		// Pause on mouse enter
		if (pauseOnMouseEnter) {
			if (!data_atts.autoplay) {
				data_atts.autoplay = {};
			}
			data_atts.autoplay.pauseOnMouseEnter = true;
		}

		// Reverse direction
		if (reverseDirection) {
			if (!data_atts.autoplay) {
				data_atts.autoplay = {};
			}
			data_atts.autoplay.reverseDirection = true;
		}

		// Stop on last slide
		if (stopOnLastSlide) {
			if (!data_atts.autoplay) {
				data_atts.autoplay = {};
			}
			data_atts.autoplay.stopOnLastSlide = true;
		}

		// Wait for transition
		if (waitForTransition !== undefined && waitForTransition !== null) {
			if (!data_atts.autoplay) {
				data_atts.autoplay = {};
			}
			data_atts.autoplay.waitForTransition = waitForTransition;
		}
	}
	// -- END -- Autoplay logic

	// Freemode
	if (freeMode) {
		data_atts.freeMode = {
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

	// Pagination
	data_atts.pagination.type = pagination_type != 'bullets' ? pagination_type : 'bullets';
	if (clickable_pagination) {
		data_atts.pagination.clickable = clickable_pagination ? true : '';
	}

	if (typeof breakpoints !== 'undefined' && breakpoints != '') {
		data_atts.breakpoints = breakpoints;
	}

	if (thumbs) {
		thumbsConfig['data-thumbs'] = JSON.stringify({
			spaceBetween: thumbsSpaceBetween,
			slidesPerView: thumbsSlidesPerView,
			freeMode: true,
			watchSlidesProgress: true,
			navigation: false,
		});
	}

	const thumbsElements = (typeof tabsData !== 'undefined' ? tabsData : []).map((tab, index) => {
		return (
			(tab.thumbImg || tab.slideImg) && (
				<div
					key={index}
					className="swiper-slide wp-swiper__thumb"
					data-thumb={index + 1}
				>
					<img
						src={tab.thumbImg || tab.slideImg}
						alt={`Thumbnail ${index + 1}`}
					/>
				</div>
			)
		);
	});

	const swiperContainerClassName = classnames('swiper-container', 'swiper', {
		'swiper-overflow-visible': overflowVisible,
	});

	// Build container style with height if provided
	// Only add height style if autoHeight is false AND sliderHeight is set
	const swiperContainerStyle = {};
	if (sliderHeight && !autoHeight) {
		swiperContainerStyle.height = sliderHeight;
	}

	return (
		<div {...blockProps}>
			{getOverlayImg(overlayImg, style_overlay_image)}
			<div
				className="wp-swiper__wrapper"
			>
				<div
					className={swiperContainerClassName}
					style={Object.keys(swiperContainerStyle).length > 0 ? swiperContainerStyle : undefined}
					{...(debug ? { 'data-debug': true } : {})}
					data-swiper={JSON.stringify(data_atts)}
					{...thumbsConfig}
				>
					<div className="swiper-wrapper">
						<InnerBlocks.Content />
					</div>
				</div>
				{getNavigation(props)}
				{getPagination(props)}
			</div>

			{getQuoteSVG(props)}

			{thumbs && (
				<div className="wp-swiper__thumbs">
					<div className="wp-swiper__wrapper">
						<div className="swiper-container">
							<div className="swiper-wrapper">{thumbsElements}</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);

	function getOverlayImg(overlayImg, style_overlay_image) {
		if (overlayImg === undefined) {
			return;
		}
		return (
			<div
				className="wp-swiper__overlay-img"
				style={style_overlay_image}
			></div>
		);
	}

	function getPagination({ attributes }) {
		const { pagination } = attributes;

		if (pagination) {
			return <div className="swiper-pagination"></div>;
		}
	}

	function getNavigation({ attributes }) {
		const { navigation } = attributes;

		if (navigation) {
			return (
				<>
					<div className="wp_swiper__navigation">
						<div className="wp_swiper__navigation-container">
							<div className={`swiper-button-prev ${previousIcon ? 'wp_swiper__button-prev' : ''}`}>
								{previousIcon ? (
									<img
										src={previousIcon}
										alt="Previous"
									/>
								) : null}
							</div>

							<div className={`swiper-button-next ${nextIcon ? 'wp_swiper__button-next' : ''}`}>
								{nextIcon ? (
									<img
										src={nextIcon}
										alt="Previous"
									/>
								) : null}
							</div>
						</div>
					</div>
				</>
			);
		}
	}

	function getQuoteSVG({ attributes }) {
		let { className } = attributes;

		className = className ? className.toString() : '';

		if (className.indexOf('is-style-testimonials') !== -1) {
			return (
				<>
					<div className="wp-swiper__quotes">
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="quote-right"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							class="svg-inline--fa fa-quote-right fa-w-16 fa-5x"
						>
							<path
								fill="currentColor"
								d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"
								class=""
							></path>
						</svg>
					</div>
				</>
			);
		}
	}
}

export default save;
