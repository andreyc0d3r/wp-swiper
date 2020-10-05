/**
 * External dependencies
 */
import classnames from 'classnames/dedupe';

/**
 * WordPress dependencies
 */
const {
    applyFilters,
} = wp.hooks;

const { __ } = wp.i18n;

const { Component, Fragment } = wp.element;

const {
    withSelect,
} = wp.data;

const {
    PanelRow,
    PanelBody,
    BaseControl,
    Button
} = wp.components;

const {
    InnerBlocks,
    BlockControls,
    InspectorControls,
    AlignmentToolbar,
    BlockVerticalAlignmentToolbar,
    MediaUploadCheck,
    MediaUpload
} = wp.blockEditor;

import get_image from '../utils/get-image';

/**
 * Block Edit Class.
 */
class BlockEdit extends Component {
    render() {
        const {
            setAttributes,
            hasChildBlocks,
            attributes
        } = this.props;
        
        let {
            className = '',
        } = this.props;

        const {
            slideImg,
            contentHalign,
            contentValign
        } = attributes;

        className = classnames( className, 'wp-swiper__slide' );

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title={__("Image Settings")}>
                        <BaseControl label={ __( 'Slide Image', '@@text_domain' ) }>
                            <PanelRow>
                                <MediaUploadCheck>
                                    <MediaUpload
                                        value={ slideImg }
                                        onSelect={( media ) => {
                                            //console.log( 'selected: ' + media );
                                            let img_url = media.sizes.full.url;
                                            setAttributes( { slideImg: img_url } );
                                        }}
                                        type='image'
                                        render={( open ) => {
                                            return <Button onClick={open.open} className="button">Select slide image</Button>;
                                        }}
                                    />
                                </MediaUploadCheck>
                            </PanelRow>
                            <PanelRow>
                                { get_image( slideImg ) }
                            </PanelRow>
                        </BaseControl>
                    </PanelBody>
                </InspectorControls>
                <BlockControls>
                    <AlignmentToolbar
                        value={ contentHalign }
                        onChange={ ( value ) => {
                            if ( value === 'left' ) {
                                value = 'start';
                            } else if ( value === 'right' ) {
                                value = 'end';
                            }
                            setAttributes( { contentHalign: value } );
                        } }
                        controls={ [ 'left', 'center', 'right' ] }
                    />
                    <BlockVerticalAlignmentToolbar
                        value={ contentValign }
                        onChange={ ( value ) => {
                            setAttributes( { contentValign: value } );
                        } }
                    />
                </BlockControls>
                <div className={ className }>
                    <InnerBlocks
                        templateLock={ false }
                        renderAppender={ (
                            hasChildBlocks
                                ? undefined
                                : () => <InnerBlocks.ButtonBlockAppender />
                        ) }
                    />
                </div>
            </Fragment>
        );
    }
}

export default withSelect( ( select, props ) => {
    const { clientId } = props;
    const  { getBlockOrder } = select( 'core/block-editor' );

    return {
        hasChildBlocks: getBlockOrder( clientId ).length > 0,
    };
} )( BlockEdit );