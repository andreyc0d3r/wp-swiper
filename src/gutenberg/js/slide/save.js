/**
 * External dependencies
 */
import classnames from 'classnames/dedupe';

/**
 * WordPress dependencies
 */
const { applyFilters } = wp.hooks;

const { Component } = wp.element;

const { InnerBlocks } = wp.blockEditor;

/**
 * Internal dependencies
 */
import metadata from './block.json';

const { name } = metadata;

/**
 * Block Save Class.
 */
class BlockSave extends Component {
    render() {
        const {
            overlayColor,
            slug,
            slideImg,
            contentValign,
            contentHalign,
            containerWidth,
        } = this.props.attributes;

        let className = 'wp-swiper__slide swiper-slide';

        if (contentValign != '' && typeof contentValign !== 'undefined') {
            className = classnames(
                className,
                `wp-swiper--valign-${contentValign}`
            );
        }

        if (contentHalign != '' && typeof contentHalign !== 'undefined') {
            className = classnames(
                className,
                `wp-swiper--halign-${contentHalign}`
            );
        }

        const style = slideImg ? { backgroundImage: `url(${slideImg})` } : {};
        const contaienr_width_style = containerWidth
            ? { maxWidth: `${containerWidth}%` }
            : null;

        const style_overlay_color = overlayColor
            ? {
                  backgroundColor: `rgba(${overlayColor.rgb.r}, ${overlayColor.rgb.g}, ${overlayColor.rgb.b}, ${overlayColor.rgb.a})`,
              }
            : {};

        return (
            <div className={className} data-tab={slug} style={style}>
                <div
                    className="wp-swiper__overlay-color"
                    style={style_overlay_color}
                ></div>
                <div
                    className="wp-swiper__slide-content"
                    style={contaienr_width_style}
                >
                    <InnerBlocks.Content />
                </div>
            </div>
        );
    }
}

export default BlockSave;
