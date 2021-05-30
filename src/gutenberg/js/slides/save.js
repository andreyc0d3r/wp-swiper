/**
 * External dependencies
 */
import classnames from 'classnames/dedupe';

/**
 * WordPress dependencies
 */
const { applyFilters } = wp.hooks;

const { Component } = wp.element;

const { RichText, InnerBlocks } = wp.blockEditor;

/**
 * Internal dependencies
 */
import metadata from './block.json';
import get_image from '../utils/get-image';

const { name } = metadata;

/**
 * Block Save Class.
 */
class BlockSave extends Component {
    render() {
        const {
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
            clickable_pagination
        } = this.props.attributes;

        let className = classnames('wp-swiper');

        const style_overlay_image = overlayImg
            ? { backgroundImage: `url(${overlayImg})` }
            : {};
        if (overlayImgOpacity) {
            style_overlay_image.opacity = overlayImgOpacity;
        }

        const style_overlay_wrapper = txtColor ? { color: txtColor } : {};

        const data_atts = {
            'data-slidesperview': slidesPerView,
            'data-spacebetween': spaceBetween,
            'data-navigation': navigation,
            'data-pagination': pagination,
            'data-autoplay': autoplay,
            'data-delay': delay,
            'data-speed': speed,
            'data-loop': loop,
            'data-effect': effect
        };

        mousewheel == true ? data_atts['data-mousewheel'] = true : data_atts['data-mousewheel'] = false;
        releaseOnEdges == true ? data_atts['data-releaseonedges'] = true : data_atts['data-releaseonedges'] = false;
        pagination_type != 'bullets' ? data_atts['data-paginationtype'] = pagination_type : '';
        clickable_pagination == true ? data_atts['data-clickablepagination'] = true : '';

        return (
            <div className={className}>
                {this.getOverlayImg(overlayImg, style_overlay_image)}
                <div
                    className="wp-swiper__wrapper"
                    style={style_overlay_wrapper}
                >
                    <div
                        className="swiper-container"
                        {...data_atts}
                    >
                        <div className="swiper-wrapper">
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>

                {this.getQuoteSVG(this.props)}
                {this.getPagination(this.props)}
                {this.getNavigation(this.props)}
            </div>
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

export default BlockSave;
