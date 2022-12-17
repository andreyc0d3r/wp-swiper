/**
 * External dependencies
 */
import classnames from "classnames/dedupe";

/**
 * WordPress dependencies
 */

import { __ } from "@wordpress/i18n";

import { Component, Fragment } from "@wordpress/element";

import { createBlock } from "@wordpress/blocks";
import { PanelBody, PanelRow, BaseControl, ToggleControl, Tooltip, Button, ColorPicker, RangeControl, TextControl, SelectControl, TextareaControl } from "@wordpress/components";

import { InspectorControls, InnerBlocks, MediaUploadCheck, MediaUpload, store as blockEditorStore } from "@wordpress/block-editor";

import { compose } from "@wordpress/compose";

import { withSelect, withDispatch } from "@wordpress/data";

/**
 * Internal dependencies
 */
import RemoveButton from "../components/remove-button";
import getUniqueSlug from "../utils/get-unique-slug";
import get_image from "../utils/get-image";

import { isEqual } from "lodash";

/**
 * Block Edit Class.
 */
class BlockEdit extends Component {
	constructor() {
		super(...arguments);

		this.getTabsTemplate = this.getTabsTemplate.bind(this);
		this.getTabs = this.getTabs.bind(this);
		this.changeLabel = this.changeLabel.bind(this);
		this.removeTab = this.removeTab.bind(this);
	}

	/**
	 * Returns the layouts configuration for a given number of tabs.
	 *
	 * @param {number} attributes tabs attributes.
	 *
	 * @return {Object[]} Tabs layout configuration.
	 */
	getTabsTemplate() {
		const { tabsData } = this.props.attributes;

		const result = tabsData.map((tabData) => {
			return ["da/wp-swiper-slide", tabData];
		});

		return result;
	}

	getTabs() {
		return this.props.block.innerBlocks;
	}

	changeLabel(dataType, value, i) {
		const { setAttributes, attributes, updateBlockAttributes } = this.props;

		const { tabsData } = attributes;

		const tabs = this.getTabs();

		if (tabs[i]) {
			const newSlug = dataType == "title" ? getUniqueSlug(`tab ${value}`, tabs[i].clientId) : tabsData[i].slug;

			const newTabsData = tabsData.map((oldTabData, newIndex) => {
				if (i === newIndex) {
					return {
						...oldTabData,
						...{
							title: dataType == "title" ? value : tabsData[i].title,
							subtitle: dataType == "subtitle" ? value : tabsData[i].subtitle,
							image: dataType == "image" ? value : tabsData[i].image,
							overlayImg: dataType == "overlayImg" ? value : tabsData[i].overlayImg,
							overlayColor: dataType == "overlayColor" ? value : tabsData[i].overlayColor,
							slug: newSlug,
						},
					};
				}

				return oldTabData;
			});

			setAttributes({
				currentSlide: i,
				tabActive: newSlug,
				tabsData: newTabsData,
			});

			updateBlockAttributes(tabs[i].clientId, {
				slug: newSlug,
			});
		}
	}

	removeTab(i) {
		const { setAttributes, attributes, block, getBlocks, replaceInnerBlocks } = this.props;

		const { tabsData = [] } = attributes;

		if (1 >= block.innerBlocks.length) {
			this.props.removeBlock(block.clientId);
		} else if (block.innerBlocks[i]) {
			this.props.removeBlock(block.innerBlocks[i].clientId);

			if (tabsData[i]) {
				const newTabsData = [...tabsData];
				newTabsData.splice(i, 1);

				const innerBlocks = [...getBlocks(block.clientId)];
				innerBlocks.splice(i, 1);

				replaceInnerBlocks(block.clientId, innerBlocks, false);

				setAttributes({
					tabsData: newTabsData,
				});
			}
		}
	}

	componentDidUpdate(prevProps, prevState) {
		const { block, setAttributes, replaceInnerBlocks, getBlocks } = this.props;

		const prevClientId = prevProps.block.innerBlocks.map(function (ib) {
			return ib.clientId;
		});

		const propClientId = block.innerBlocks.map(function (ib) {
			return ib.clientId;
		});

		if (!isEqual(prevClientId, propClientId)) {
			let newTabsData = [];
			block.innerBlocks.map((tabData, i) => {
				newTabsData.push({
					slug: tabData.attributes.slug,
				});
			});

			setAttributes({
				tabsData: newTabsData,
			});

			const innerBlocks = [...getBlocks(block.clientId)];
			replaceInnerBlocks(block.clientId, innerBlocks, false);
		}
	}

	render() {
		const { clientId, attributes, setAttributes, isSelectedBlockInRoot, getBlocks, replaceInnerBlocks, updateBlockAttributes, block } = this.props;

		let { className = "" } = this.props;

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
			containerWidth,
			mousewheel,
			releaseOnEdges,
			pagination_type,
			clickable_pagination,
			breakpoints,
			freeMode,
			thumbs,
			thumbsSlidesPerView,
			thumbsSpaceBetween
		} = attributes;

		className = classnames(className, "wp-swiper__slides");

		let buttonsAlignValForControl = buttonsAlign;
		if (buttonsAlignValForControl === "start") {
			buttonsAlignValForControl = "left";
		} else if (buttonsAlignValForControl === "end") {
			buttonsAlignValForControl = "right";
		}

		// used for the map function to create numbered tabs
		let counter = 1;

		const style = txtColor ? { color: txtColor } : {};

		console.log("RE RENDER");

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={__("Overlay Settings")}
						initialOpen={false}
					>
						<PanelRow>
							<MediaUploadCheck>
								<MediaUpload
									value={overlayImg}
									onSelect={(media) => {
										let img_url = media.sizes.full.url;
										setAttributes({ overlayImg: img_url });
									}}
									type="image"
									render={(open) => {
										return (
											<Button
												onClick={open.open}
												className="button"
											>
												Select overlay image
											</Button>
										);
									}}
								/>
							</MediaUploadCheck>
						</PanelRow>
						<PanelRow>{get_image(overlayImg)}</PanelRow>
						<PanelRow>
							<Button
								isSecondary
								isSmall
								className="block-library-cover__reset-button"
								onClick={() =>
									setAttributes({
										overlayImg: undefined,
									})
								}
							>
								{__("Clear Media")}
							</Button>
						</PanelRow>
						<BaseControl label={__("Image Overlay Opacity", "@@text_domain")}>
							<RangeControl
								label={__("Opacity")}
								value={overlayImgOpacity}
								onChange={(value) =>
									setAttributes({
										overlayImgOpacity: value,
									})
								}
								min={0}
								max={1}
								step={0.01}
								required
							/>
						</BaseControl>
						<BaseControl label={__("Overlay Color", "@@text_domain")}>
							<ColorPicker
								color={overlayColor.rgb}
								onChangeComplete={(color) => {
									setAttributes({ overlayColor: color });

									let iBlocks = block.innerBlocks;
									iBlocks.map((iBlock) => {
										updateBlockAttributes(iBlock.clientId, {
											overlayColor: color,
										});
									});
								}}
							/>
						</BaseControl>
					</PanelBody>
					<PanelBody
						title={__("Color Settings")}
						initialOpen={false}
					>
						<BaseControl label={__("Text Color", "@@text_domain")}>
							<ColorPicker
								color={txtColor}
								onChangeComplete={(color) => setAttributes({ txtColor: color.hex })}
							/>
						</BaseControl>
					</PanelBody>
					<PanelBody
						title={__("Swiper Settings")}
						initialOpen={false}
					>
						<PanelRow>
							<RangeControl
								label={__("Container Max Width %")}
								help={__("Frontend: Set the max width for the content with text.")}
								value={containerWidth}
								onChange={(value) => {
									setAttributes({
										containerWidth: value,
									});

									let iBlocks = block.innerBlocks;
									iBlocks.map((iBlock) => {
										updateBlockAttributes(iBlock.clientId, {
											containerWidth: value,
										});
									});
								}}
								min={1}
								max={100}
								step={1}
								required
							/>
						</PanelRow>
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
							<h2>Pagination Settings</h2>
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
							<SelectControl
								label="Type of pagination"
								value={pagination_type}
								options={[
									{ label: "Bullets", value: "bullets" },
									{ label: "Fraction", value: "fraction" },
									{ label: "Progress Bar", value: "progressbar" },
								]}
								onChange={(option) => {
									setAttributes({ pagination_type: option });
								}}
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label="Clickable Pagination"
								checked={clickable_pagination}
								onChange={() => {
									setAttributes({ clickable_pagination: !clickable_pagination });
								}}
							/>
						</PanelRow>
						<PanelRow>
							<h2>Slide Settings</h2>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="Space Between"
								help="Distance between slides in px."
								value={spaceBetween}
								onChange={(option) => {
									setAttributes({ spaceBetween: parseInt(option) });
								}}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="Slides per view"
								help="Number of slides per view (slides visible at the same time on slider's container). Can be a number or auto"
								value={slidesPerView}
								onChange={(option) => {
									setAttributes({ slidesPerView: parseInt(option) });
								}}
							/>
						</PanelRow>
						<PanelRow>
							<h2>Breakpoints</h2>
						</PanelRow>
						<PanelRow>
							<TextareaControl
								label="Responsive breakpoints (JSON Object)"
								help="Allows to set different parameter for different responsive breakpoints (screen sizes). Not all parameters can be changed in breakpoints, only those which are not required different layout and logic, like slidesPerView, slidesPerGroup, spaceBetween, grid.rows. Such parameters like loop and effect won't work"
								value={breakpoints}
								onChange={(option) => {
									setAttributes({ breakpoints: option });
								}}
							/>
						</PanelRow>
						<PanelRow>
							<p>Example: {'{"720":{"slidesPerView":2}}'} - Notice the double quotes</p>
						</PanelRow>
						<PanelRow>
							<h2>Slider Settings</h2>
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
								type="number"
								onChange={(option) => {
									setAttributes({ delay: parseInt(option) });
								}}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="Speed"
								value={speed}
								type="number"
								onChange={(option) => {
									setAttributes({ speed: parseInt(option) });
								}}
							/>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label="Effect (Under Consttruction)"
								value={effect}
								options={[
									{ label: "Slide", value: "slide" },
									{ label: "Fade", value: "fade" },
									{ label: "Cube", value: "cube" },
									{ label: "Coverflow", value: "coverflow" },
									{ label: "Flip", value: "flip" },
								]}
								onChange={(option) => {
									setAttributes({ effect: option });
								}}
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label="Free Mode"
								checked={freeMode}
								onChange={() => {
									setAttributes({ freeMode: !freeMode });
								}}
							/>
						</PanelRow>
						<PanelRow>
							<h2>Mouse Settings</h2>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label="Mouse Wheel"
								help="Enables navigation through slides using mouse wheel."
								checked={mousewheel}
								onChange={() => {
									setAttributes({ mousewheel: !mousewheel });
								}}
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label="Release On Edges"
								help="Set to true and swiper will release mousewheel event and allow page scrolling when swiper is on edge positions (in the beginning or in the end) NOTE: Mouse Wheel must be set to true for this to work."
								checked={releaseOnEdges}
								onChange={() => {
									setAttributes({ releaseOnEdges: !releaseOnEdges });

									// if(!releaseOnEdges) {
									//     setAttributes({ mousewheel: !releaseOnEdges });
									// }
								}}
							/>
						</PanelRow>
						<PanelRow>
							<hr/>
						</PanelRow>
						<PanelRow>
							<h2>Thumbs Settings</h2>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label="Thumbs"
								help="Enables thumbs to be used as pagination."
								checked={thumbs}
								onChange={() => {
									setAttributes({ thumbs: !thumbs });
								}}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								disabled={!thumbs}
								label="Space Between"
								help="Distance between slides in px."
								value={thumbsSpaceBetween}
								onChange={(option) => {
									setAttributes({ thumbsSpaceBetween: parseInt(option) });
								}}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								disabled={!thumbs}
								label="Slides per view"
								help="Number of slides per view (slides visible at the same time on slider's container). Can be a number or auto"
								value={thumbsSlidesPerView}
								onChange={(option) => {
									setAttributes({ thumbsSlidesPerView: parseInt(option) });
								}}
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
				<div
					className={className}
					data-tab-active={tabActive}
				>
					<div
						className="wb-tabs-buttons-wrapper"
						style={style}
					>
						<div className={classnames("wb-tabs-buttons", `wb-tabs-buttons-align-${buttonsAlign}`)}>
							{tabsData.map((tabData, i) => {
								const { slug } = tabData;
								const selected = tabActive === slug;

								return (
									<div
										className={classnames("wb-tabs-buttons-item", selected ? "wb-tabs-buttons-item-active" : "")}
										key={`tab_button_${i}`}
										onClick={() => setAttributes({ tabActive: slug })}
									>
										<h4>Slide {counter++}</h4>

										<RemoveButton
											show={isSelectedBlockInRoot}
											tooltipText={__("Remove slide?", "@@text_domain")}
											onRemove={() => {
												this.removeTab(i);
											}}
										/>
									</div>
								);
							})}
							{isSelectedBlockInRoot ? (
								<Tooltip text={__("Add Slide", "@@text_domain")}>
									<Button
										icon={"insert"}
										onClick={() => {
											let newTabsData = [];
											const newDataLength = tabsData.length + 1;

											newTabsData = [...tabsData];
											newTabsData.push({
												slug: `slide-${newDataLength}`,
											});

											const block = createBlock("da/wp-swiper-slide", {
												slug: `slide-${newDataLength}`,
											});

											let innerBlocks = getBlocks(clientId);
											innerBlocks = [...innerBlocks, block];

											replaceInnerBlocks(clientId, innerBlocks, false);
											setAttributes({
												tabsData: newTabsData,
											});
										}}
									/>
								</Tooltip>
							) : (
								""
							)}
						</div>
						<div className="wp-swiper__slide-content">
							<InnerBlocks
								template={this.getTabsTemplate()}
								allowedBlocks={["da/wp-swiper-slide"]}
							/>
						</div>
					</div>
				</div>
				<style>
					{`
                    [data-block="${this.props.clientId}"] .wp-swiper__slides .wp-swiper__slide-content .block-editor-inner-blocks .block-editor-block-list__layout [data-tab="${tabActive}"] {
                        display: block;
                    }
                    `}
				</style>
			</Fragment>
		);
	}
}

export default compose([
	withSelect((select, ownProps) => {
		const { getBlock, isBlockSelected, hasSelectedInnerBlock } = select("core/block-editor");

		const { clientId } = ownProps;

		return {
			blocks: select(blockEditorStore).getBlocks(),
			block: getBlock(clientId),
			isSelectedBlockInRoot: isBlockSelected(clientId) || hasSelectedInnerBlock(clientId, true),
		};
	}),
	withDispatch((dispatch, ownProps, registry) => {
		const { updateBlockAttributes, removeBlock, replaceInnerBlocks, moveBlockToPosition, moveBlocksDown } = dispatch("core/block-editor");

		console.log("DISPATCHER");

		const { getBlocks } = registry.select("core/block-editor");

		return {
			moveBlocksDown,
			moveBlockToPosition,
			replaceInnerBlocks,
			getBlocks,
			updateBlockAttributes,
			removeBlock,
		};
	}),
])(BlockEdit);
