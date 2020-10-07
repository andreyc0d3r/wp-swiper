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

const { createBlock } = wp.blocks;
const {
    PanelBody,
    PanelRow,
    BaseControl,
    ToggleControl,
    IconButton,
    Tooltip,
    Button,
    ColorPicker,
    RangeControl,
    TextControl,
    SelectControl
} = wp.components;

const {
    RichText,
    InspectorControls,
    InnerBlocks,
    BlockControls,
    AlignmentToolbar,
    MediaUploadCheck,
    MediaUpload
} = wp.blockEditor;

const {
    compose,
} = wp.compose;

const {
    withSelect,
    withDispatch,
} = wp.data;

/**
 * Internal dependencies
 */
import RemoveButton from '../components/remove-button';
import getUniqueSlug from '../utils/get-unique-slug';
import get_image from '../utils/get-image';

/**
 * Block Edit Class.
 */
class BlockEdit extends Component {
    constructor() {
        super( ...arguments );

        this.getTabsTemplate = this.getTabsTemplate.bind( this );
        this.getTabs = this.getTabs.bind( this );
        this.changeLabel = this.changeLabel.bind( this );
        this.removeTab = this.removeTab.bind( this );
    }

    /**
     * Returns the layouts configuration for a given number of tabs.
     *
     * @param {number} attributes tabs attributes.
     *
     * @return {Object[]} Tabs layout configuration.
     */
    getTabsTemplate() {
        const {
            tabsData
        } = this.props.attributes;
        
        const result = tabsData.map( ( tabData ) => {
            return [ 'da/wp-swiper-slide', tabData ];
        } );

        return result;
    }

    getTabs() {
        return this.props.block.innerBlocks;
    }

    changeLabel( dataType, value, i ) {
        const {
            setAttributes,
            attributes,
            updateBlockAttributes,
        } = this.props;

        const {
            tabsData,
        } = attributes;

        const tabs = this.getTabs();

        if ( tabs[ i ] ) {
            const newSlug = dataType == 'title' ? getUniqueSlug( `tab ${ value }`, tabs[ i ].clientId ) : tabsData[i].slug;

            const newTabsData = tabsData.map( ( oldTabData, newIndex ) => {
                if ( i === newIndex ) {

                    return {
                        ...oldTabData,
                        ...{
                            title: dataType == 'title' ? value : tabsData[i].title,
                            subtitle: dataType == 'subtitle' ? value : tabsData[i].subtitle,
                            image: dataType == 'image' ? value : tabsData[i].image,
                            overlayImg: dataType == 'overlayImg' ? value : tabsData[i].overlayImg,
                            overlayColor: dataType == 'overlayColor' ? value : tabsData[i].overlayColor,
                            slug: newSlug,
                        },
                    };
                }

                return oldTabData;
            } );

            setAttributes( {
                currentSlide: i,
                tabActive: newSlug,
                tabsData: newTabsData,
            } );

            updateBlockAttributes( tabs[ i ].clientId, {
                slug: newSlug,
            } );
        }
    }

    
    removeTab( i ) {
        const {
            setAttributes,
            attributes,
            block,
            getBlocks,
            replaceInnerBlocks,
        } = this.props;

        const {
            tabsData = [],
        } = attributes;

        if ( 1 >= block.innerBlocks.length ) {
            this.props.removeBlock( block.clientId );
        } else if ( block.innerBlocks[ i ] ) {
            this.props.removeBlock( block.innerBlocks[ i ].clientId );

            if ( tabsData[ i ] ) {
                const newTabsData = [ ...tabsData ];
                newTabsData.splice( i, 1 );

                const innerBlocks = [ ...getBlocks( block.clientId ) ];
                innerBlocks.splice( i, 1 );

                replaceInnerBlocks( block.clientId, innerBlocks, false );

                setAttributes( {
                    tabsData: newTabsData,
                } );
            }
        }
    }

    render() {
        const {
            clientId,
            attributes,
            setAttributes,
            isSelectedBlockInRoot,
            getBlocks,
            replaceInnerBlocks,
            updateBlockAttributes,
            block
        } = this.props;
  
        let { className = '' } = this.props;

        const {
            tabActive,
            buttonsAlign,
            tabsData,
            txtColor,
            overlayColor,
            overlayImg,
            overlayImgOpacity,
            autoplay,
            delay,
            speed,
            loop,
            effect,
            slidesPerView,
            spaceBetween,
            navigation,
            pagination,
        } = attributes;
        
        className = classnames(
            className,
            'wp-swiper__slides'
        );

        let buttonsAlignValForControl = buttonsAlign;
        if ( buttonsAlignValForControl === 'start' ) {
            buttonsAlignValForControl = 'left';
        } else if ( buttonsAlignValForControl === 'end' ) {
            buttonsAlignValForControl = 'right';
        }

        // used for the map function to create numbered tabs
        let counter = 1;

        const style = txtColor ? { color: txtColor } : {};
        
        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title={__("Overlay Settings")} initialOpen={false}>
						<PanelRow>
                            <MediaUploadCheck>
                                <MediaUpload
                                    value={ overlayImg }
                                    onSelect={( media ) => {
                                        //console.log( 'selected: ' + media );
                                        let img_url = media.sizes.full.url;
                                        setAttributes( { overlayImg: img_url } );
                                    }}
                                    type='image'
                                    render={( open ) => {
                                        return <Button onClick={open.open} className="button">Select overlay image</Button>;
                                    }}
                                />
                            </MediaUploadCheck>
                        </PanelRow>
                        <PanelRow>
                            { get_image( overlayImg ) }
                        </PanelRow>
                        <BaseControl label={ __( 'Background Image Overlay', '@@text_domain' ) }>
							<RangeControl
								label={ __( 'Opacity' ) }
								value={ overlayImgOpacity }
								onChange={ ( value ) =>
									setAttributes( {
										overlayImgOpacity: value,
									} )
								}
								min={ 0 }
								max={ 1 }
								step={0.01}
								required
							/>
						</BaseControl>
                    </PanelBody>
                    <PanelBody title={__("Color Settings")} initialOpen={false}>
                        <BaseControl label={ __( 'Text Color', '@@text_domain' ) }>
                            <ColorPicker
                              color = {txtColor}
                              onChangeComplete = { ( color ) => setAttributes( { txtColor: color.hex } ) }
                            />
                        </BaseControl>
                        <BaseControl label={ __( 'Overlay Color', '@@text_domain' ) }>
                            <ColorPicker
                                color = {overlayColor.rgb}
                                onChangeComplete = { ( color ) => { 
                                    
                                    setAttributes( { overlayColor: color } );
                                    
                                    let iBlocks = block.innerBlocks;
                                    iBlocks.map( ( iBlock ) => {
                                        updateBlockAttributes(
                                            iBlock.clientId, {
                                            overlayColor: color,
                                        } );
                                    });

                                } }
                            />
                        </BaseControl>
                    </PanelBody>
                    <PanelBody title={__("Swiper Settings")} initialOpen={false}>
                        <PanelRow>
							<ToggleControl
								label="Show Navigation"
                                checked={navigation}
								onChange={() => {
                                    setAttributes({ navigation: !navigation });
								}}
							/>
                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
								label="Show pagination"
                                checked={pagination}
								onChange={() => {
                                    setAttributes({ pagination: !pagination });
								}}
							/>
						</PanelRow>
                        <PanelRow>
                            <TextControl
                                label="Space Beween"
                                help="Distance between slides in px."
								value={spaceBetween}
								onChange={option => {
									setAttributes({ spaceBetween: option });
								}}
							/>
						</PanelRow>
                        <PanelRow>
                            <TextControl
                                label="Slides per view"
                                help="Number of slides per view (slides visible at the same time on slider's container)."
								value={slidesPerView}
								onChange={option => {
									setAttributes({ slidesPerView: option });
								}}
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label="Auto Play"
                                checked={autoplay}
								onChange={() => {
                                    setAttributes({ autoplay: !autoplay });
								}}
							/>
						</PanelRow>
                        <PanelRow>
							<ToggleControl
								label="Loop"
                                checked={loop}
								onChange={() => {
                                    setAttributes({ loop: !loop });
								}}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="Delay"
								value={delay}
								onChange={option => {
									setAttributes({ delay: option });
								}}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="Speed"
								value={speed}
								onChange={option => {
									setAttributes({ speed: option });
								}}
							/>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label="Effect"
								selected={effect}
								options={[
									{ label: "Slide", value: "slide" },
									{ label: "Fade", value: "fade" },
									{ label: "Cube", value: "cube" },
									{ label: "Coverflow", value: "coverflow" },
									{ label: "Flip", value: "flip" }
								]}
								onChange={option => {
									setAttributes({ effect: option });
								}}
							/>
						</PanelRow>
					</PanelBody>
                </InspectorControls>
                <div className={ className } data-tab-active={ tabActive }>
                    <div className="wb-tabs-buttons-wrapper" style={ style }>
                        <div className={ classnames(
                            'wb-tabs-buttons',
                            `wb-tabs-buttons-align-${ buttonsAlign }`
                        ) }>
                            {
                                tabsData.map( ( tabData, i ) => {
                                    const {
                                        slug,
                                    } = tabData;
                                    const selected = tabActive === slug;

                                    return (
                                        <div
                                            className={ classnames( 'wb-tabs-buttons-item', selected ? 'wb-tabs-buttons-item-active' : '' ) }
                                            key={ `tab_button_${ i }` }
                                            onClick={ () => setAttributes( { tabActive: slug } ) }
                                        >                                            
                                            <h4>Slide {counter++}</h4>
        
                                            <RemoveButton
                                                show={ isSelectedBlockInRoot }
                                                tooltipText={ __( 'Remove slide?', '@@text_domain' ) }
                                                onRemove={ () => {
                                                    this.removeTab( i );
                                                } }
                                            />
                                        </div>
                                    );
                                } )
                            }
                            { isSelectedBlockInRoot ? (
                                <Tooltip text={ __( 'Add Slide', '@@text_domain' ) }>
                                    <IconButton
                                        icon={ 'insert' }
                                        onClick={ () => {
                                            let newTabsData = [];
                                            const newDataLength = tabsData.length + 1;
    
                                            newTabsData = [...tabsData];
                                            newTabsData.push( {
                                                slug: `slide-${ newDataLength }`
                                            } );
                                                            
                                            const block = createBlock('da/wp-swiper-slide', { slug: `slide-${ newDataLength }` });

                                            let innerBlocks = getBlocks( clientId );
                                            innerBlocks = [
                                                ...innerBlocks,
                                                block
                                            ];

                                            replaceInnerBlocks( clientId, innerBlocks, false );
                                            setAttributes( { tabsData: newTabsData } );
                                        } }
                                    />
                                </Tooltip>
                            ) : '' }
                        </div>
                        <div className="wp-swiper__slide-content">
                            <InnerBlocks
                                template={ this.getTabsTemplate() }
                                templateLock="all"
                                allowedBlocks={ [ 'da/wp-swiper-slide' ] }
                            />
                        </div>
                    </div>
                </div>
                <style>
                    { `
                    [data-block="${ this.props.clientId }"] .wp-swiper__slides .wp-swiper__slide-content .block-editor-inner-blocks .block-editor-block-list__layout [data-tab="${ tabActive }"] {
                        display: block;
                    }
                    ` }
                </style>
            </Fragment>
        );
    }
}

export default compose( [
    withSelect( ( select, ownProps ) => {
        const {
            getBlock,
            isBlockSelected,
            hasSelectedInnerBlock,
        } = select( 'core/block-editor' );

        const { clientId } = ownProps;
        
        return {
            block: getBlock( clientId ),
            isSelectedBlockInRoot: isBlockSelected( clientId ) || hasSelectedInnerBlock( clientId, true ),
        };
    } ),
    withDispatch( ( dispatch, ownProps, registry ) => {
        const {
            updateBlockAttributes,
            removeBlock,
            replaceInnerBlocks
        } = dispatch( 'core/block-editor' );
        
        const { getBlocks } = registry.select( 'core/block-editor' );

        return {
            replaceInnerBlocks,
            getBlocks,
            updateBlockAttributes,
            removeBlock,
        };
    } ),
] )( BlockEdit );
