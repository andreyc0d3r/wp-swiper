/**
 * External dependencies
 */
import classnames from 'classnames/dedupe';

/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks, useInnerBlocksProps } from '@wordpress/block-editor';

/**
 * Block Save Class - Version 1 (with old sticky attribute)
 * This is for backward compatibility with blocks created before Free Mode parameters were added
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
		txtColor,
		autoplay,
		disableOnInteraction,
		pauseOnMouseEnter,
		reverseDirection,
		stopOnLastSlide,
		waitForTransition,
		delay,
		speed,
		loop,
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
		freeMode,
		sticky,
		debug,
		direction,
		tabsData,
		previousIcon,
		nextIcon,
		slidesOffsetBefore,
		slidesOffsetAfter,
		overflowVisible,
	} = props.attributes;

	className = classnames(className, 'wp-swiper');

	if (align) {
		className = classnames(className, `align${align}`);
	}

	const blockProps = useBlockProps.save({
		className: className,
	});

	const innerBlocksProps = useInnerBlocksProps;

	const style_overlay_image = overlayImg ? { backgroundImage: `url(${overlayImg})` } : {};
	if (overlayImgOpacity) {
		style_overlay_image.opacity = overlayImgOpacity;
	}

	const style_overlay_wrapper = txtColor ? { color: txtColor } : {};

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

	// Mousewheel and release on edges logic
	if (mousewheel && releaseOnEdges) {
		data_atts.mousewheel = {
			releaseOnEdges: releaseOnEdges === 'true',
		};
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

	// Freemode (old version with sticky attribute)
	if (freeMode) {
		data_atts.freeMode = {
			enabled: true,
		};

		// If both freeMode and sticky are true, enable sticky mode
		if (sticky) {
			data_atts.freeMode.sticky = true;
		}
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

	return (
		<div {...blockProps}>
			{getOverlayImg(overlayImg, style_overlay_image)}
			<div
				className="wp-swiper__wrapper"
				style={style_overlay_wrapper}
			>
				<div
					className={swiperContainerClassName}
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
