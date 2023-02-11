/**
 * External dependencies
 */
import classnames from "classnames/dedupe";

/**
 * WordPress dependencies
 */

const { Component } = wp.element;

const { InnerBlocks } = wp.blockEditor;

/**
 * Internal dependencies
 */
import metadata from "./block.json";
// import get_image from '../utils/get-image';

// const { name } = metadata;

/**
 * Block Save Class.
 */
class BlockSave extends Component {
	render() {
		let {
			className
		} = this.props.attributes;
		const {
			align,
			overlayColor,
			overlayImg,
			overlayImgOpacity,
			slidesPerView,
			spaceBetween,
			txtColor,
			autoplay,
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
			debug
		} = this.props.attributes;

		className = classnames(className, "wp-swiper");

		if(align) {
			className = classnames(className, `align${align}`);
		}

		const style_overlay_image = overlayImg ? { backgroundImage: `url(${overlayImg})` } : {};
		if (overlayImgOpacity) {
			style_overlay_image.opacity = overlayImgOpacity;
		}

		const style_overlay_wrapper = txtColor ? { color: txtColor } : {};

		let thumbsConfig = {
			'data-thumbsconfig': {}
		};
		let data_atts = {
			"data-slidesperview": slidesPerView,
			"data-navigation": navigation,
			"data-pagination": pagination,
			"data-autoplay": autoplay,
			"data-delay": delay,
			"data-speed": speed,
			"data-loop": loop,
			"data-effect": effect,
		};

		if(debug) {
			data_atts["data-debug"] = debug;
		}

		if(freeMode && sticky) {
			data_atts["data-sticky"] = sticky;
		}
		data_atts["data-freemode"] = freeMode;
		data_atts["data-autoheight"] = autoHeight;
		data_atts["data-spacebetween"] = spaceBetween;
		data_atts["data-mousewheel"] = mousewheel;
		data_atts["data-releaseonedges"] = releaseOnEdges;
		data_atts["data-paginationtype"] = pagination_type != "bullets" ? pagination_type : "bullets";
		data_atts["data-clickablepagination"] = clickable_pagination ? true : "";
	
		if (typeof breakpoints !== "undefined" && breakpoints != "") {
			data_atts["data-breakpoints"] = JSON.stringify(breakpoints.replace(/^\s+|\s+|\n$/gm, ""));
			data_atts["data-breakpoints"] = data_atts["data-breakpoints"].substring(1, data_atts["data-breakpoints"].length - 1);
		}

		if(thumbs) {
			thumbsConfig['data-thumbsconfig'] = JSON.stringify(
				{
					spaceBetween: thumbsSpaceBetween,
					slidesPerView: thumbsSlidesPerView,
					freeMode: true,
					watchSlidesProgress: true,
					navigation: false
				}
			);
		}

		return (
			<>
				<div className={className}>
					{this.getOverlayImg(overlayImg, style_overlay_image)}
					<div
						className="wp-swiper__wrapper"
						style={style_overlay_wrapper}
					>
						<div
							className="swiper-container swiper"
							data-swiperconfig={JSON.stringify(data_atts)}
							{...thumbsConfig}
							{...data_atts}
						>
							<div className="swiper-wrapper">
								<InnerBlocks.Content />
							</div>
						</div>
						{this.getNavigation(this.props)}
						{this.getPagination(this.props)}
					</div>

					{this.getQuoteSVG(this.props)}
					
					{thumbs && <div 
						className="wp-swiper__thumbs"
						>
						<div
							className="wp-swiper__wrapper"
							>
							<div
								className="swiper-container swiper"
								>
								<div className="swiper-wrapper"></div>
							</div>
						</div>
					</div>}
				</div>
			</>
		);
	}

	getOverlayImg(overlayImg, style_overlay_image) {
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

	getPagination({ attributes }) {
		const { pagination } = attributes;

		if (pagination) {
			return <div className="swiper-pagination"></div>;
		}
	}

	getNavigation({ attributes }) {
		const { navigation } = attributes;

		if (navigation) {
			return (
				<>
					<div className="swiper-button-prev"></div>
					<div className="swiper-button-next"></div>
				</>
			);
		}
	}

	getQuoteSVG({ attributes }) {
		let { className } = attributes;

		className = className ? className.toString() : "";

		if (className.indexOf("is-style-testimonials") !== -1) {
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

export default BlockSave;
