/**
 * External dependencies
 */
import classnames from "classnames/dedupe";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

import { Component, Fragment } from "@wordpress/element";

import { withSelect } from "@wordpress/data";

import BlockAlignmentMatrixControl from "../components/block-alignment-matrix-control"

import {
    PanelRow,
    PanelBody,
    BaseControl,
    Button
} from "@wordpress/components";

import {
    InnerBlocks,
    BlockControls,
    InspectorControls,
    MediaUploadCheck,
    MediaUpload
} from "@wordpress/block-editor";

import get_image from "../utils/get-image";

import {
	getPositionClassName,
} from '../utils/shared';

/**
 * Block Edit Class.
 */
class BlockEdit extends Component {
    onSelectImage = (media) => {
        let img_url = media.sizes.full.url;
        this.props.setAttributes({ slideImg: img_url });
    };

    isEmpty = (val) => {
        return true;
    };

    getOverlayImage = (style) => {
        if (this.props.attributes.slideImg) {
            style.backgroundImage = `url(${this.props.attributes.slideImg})`;
        }
        return style;
    };

    getOverlayColor = (style) => {
        if (this.props.attributes.overlayColor) {
            let { overlayColor } = this.props.attributes;
            style.backgroundColor = `rgba(${overlayColor.rgb.r}, ${overlayColor.rgb.g}, ${overlayColor.rgb.b}, ${overlayColor.rgb.a})`
            
        }
        return style;
    };

    render() {
        const { setAttributes, hasChildBlocks, attributes } = this.props;

        let { className = "" } = this.props;

        const { slideImg, overlayColor, contentVHalign } = attributes;

        className = classnames(className, "wp-swiper__slide");
        className = classnames(className, { "has-image": this.isEmpty(slideImg) });
        
        className = classnames(className, getPositionClassName( contentVHalign ));
        
        let style_overlay_image = {};
        let style_overlay_color = {};
    
        style_overlay_image = this.getOverlayImage(style_overlay_image);
        style_overlay_color = this.getOverlayColor(style_overlay_color);

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title={__("Image Settings")}>
                        <BaseControl label={__("Slide Image", "@@text_domain")}>
                            <PanelRow>
                                <MediaUploadCheck>
                                    <MediaUpload
                                        value={slideImg}
                                        onSelect={this.onSelectImage}
                                        type="image"
                                        render={(open) => {
                                            return (
                                                <Button
                                                    onClick={open.open}
                                                    className="button"
                                                >
                                                    Select slide image
                                                </Button>
                                            );
                                        }}
                                    />
                                </MediaUploadCheck>
                            </PanelRow>
                            <PanelRow>{get_image(slideImg)}</PanelRow>
                            <PanelRow>
                                <Button
                                    isSecondary
                                    isSmall
                                    className="block-library-cover__reset-button"
                                    onClick={() =>
                                        setAttributes({
                                            slideImg: undefined,
                                        })
                                    }
                                >
                                    {__("Clear Media")}
                                </Button>
                            </PanelRow>
                        </BaseControl>
                    </PanelBody>
                </InspectorControls>
                <BlockControls group="block">
                    <BlockAlignmentMatrixControl
                        label={ __( 'Change content position' ) }
                        value={contentVHalign}
                        onChange={ ( value ) => {
							setAttributes({ contentVHalign: value });
						} }
                    />
                </BlockControls>

                <div className={className}>
                    { slideImg &&
                        <div className="wp-swiper__slide-overlay wp-swiper__slide-overlay--image" style={style_overlay_image} />
                    }
                    { overlayColor.rgb.a > 0 &&
                        <div className="wp-swiper__slide-overlay wp-swiper__slide-overlay--color" style={style_overlay_color} />
                    }
                    <InnerBlocks
                        renderAppender={
                            hasChildBlocks
                                ? undefined
                                : () => <InnerBlocks.ButtonBlockAppender />
                        }
                    />
                </div>
            </Fragment>
        );
    }
}

export default withSelect((select, props) => {
    const { clientId } = props;
    const { getBlockOrder } = select("core/block-editor");

    return {
        hasChildBlocks: getBlockOrder(clientId).length > 0,
    };
})(BlockEdit);
