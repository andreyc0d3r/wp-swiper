/**
 * External dependencies
 */
import classnames from 'classnames/dedupe';

/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { buildSwiperConfig } from '../../utils/swiper-config';

/**
 * Block Save Class.
 */
function save(props) {
	let { className } = props.attributes;
	const {
		align,
		overlayImg,
		overlayImgOpacity,
		thumbs,
		thumbsSpaceBetween,
		thumbsSlidesPerView,
		autoHeight,
		sliderHeight,
		debug,
		carouselLabel,
		tabsData,
		previousIcon,
		nextIcon,
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
		...(carouselLabel ? { 'data-carousel-label': carouselLabel } : {}),
	});

	const style_overlay_image = overlayImg ? { backgroundImage: `url(${overlayImg})` } : {};
	if (overlayImgOpacity) {
		style_overlay_image.opacity = overlayImgOpacity;
	}

	const thumbsConfig = {};

	const data_atts = buildSwiperConfig(props.attributes);

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
										alt=""
									/>
								) : null}
							</div>

							<div className={`swiper-button-next ${nextIcon ? 'wp_swiper__button-next' : ''}`}>
								{nextIcon ? (
									<img
										src={nextIcon}
										alt=""
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
							className="svg-inline--fa fa-quote-right fa-w-16 fa-5x"
						>
							<path
								fill="currentColor"
								d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"
								className=""
							></path>
						</svg>
					</div>
				</>
			);
		}
	}
}

export default save;
