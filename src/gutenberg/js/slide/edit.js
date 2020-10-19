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

import {
    PanelRow,
    PanelBody,
    BaseControl,
    Button,
} from "@wordpress/components";

import {
    InnerBlocks,
    BlockControls,
    InspectorControls,
    AlignmentToolbar,
    BlockVerticalAlignmentToolbar,
    MediaUploadCheck,
    MediaUpload,
} from "@wordpress/block-editor";

import get_image from "../utils/get-image";

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

    getBgStyle = (style) => {
        if (this.props.attributes.slideImg) {
            style.backgroundImage = `url(${this.props.attributes.slideImg})`;
        }
        return style;
    };

    getBgStyle = (style) => {
        if (this.props.attributes.slideImg) {
            style.backgroundImage = `url(${this.props.attributes.slideImg})`;
        }
        return style;
    };

    render() {
        const { setAttributes, hasChildBlocks, attributes } = this.props;

        let { className = "" } = this.props;

        const { slideImg, contentHalign, contentValign } = attributes;

        className = classnames(className, "wp-swiper__slide");
        className = classnames(className, { "has-image": this.isEmpty(slideImg) });
        
        className = classnames(className, { "valign-center": contentValign ===  'center' });
        className = classnames(className, { "valign-bottom": contentValign ===  'bottom' });
        className = classnames(className, { "halign-center": contentHalign ===  'center' });
        className = classnames(className, { "halign-right": contentHalign ===  'right' });

        console.log('ish');
        console.log("className: ", className );
        console.log( "contentValign: ", contentValign );
        
        let style = {};
        style = this.getBgStyle(style);

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
                <BlockControls>
                    <AlignmentToolbar
                        value={contentHalign}
                        onChange={(value) => {
                            setAttributes({ contentHalign: value });
                        }}
                        controls={["left", "center", "right"]}
                    />
                    <BlockVerticalAlignmentToolbar
                        value={contentValign}
                        onChange={(value) => {
                            setAttributes({ contentValign: value });
                        }}
                    />
                </BlockControls>

                <div className={className}>
                    { slideImg &&
                        <div className="wp-swiper__slide-image" style={style} />
                    }
                    <InnerBlocks
                        templateLock={false}
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
