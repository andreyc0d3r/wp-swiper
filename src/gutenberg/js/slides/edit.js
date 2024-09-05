/**
 * External dependencies
 */
import classnames from 'classnames/dedupe';

/**
 * WordPress dependencies
 */
import React, { useEffect, useState } from 'react';

import { __ } from '@wordpress/i18n';

import { Fragment } from '@wordpress/element';

import { createBlock } from '@wordpress/blocks';
import { PanelBody, PanelRow, BaseControl, ToggleControl, Tooltip, Button, ColorPicker, RangeControl, TextControl, SelectControl, TextareaControl, __experimentalAlignmentMatrixControl as AlignmentMatrixControl } from '@wordpress/components';

import { useBlockProps, InspectorControls, InnerBlocks, MediaUploadCheck, MediaUpload, store as blockEditorStore } from '@wordpress/block-editor';

import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import RemoveButton from '../components/remove-button';
import getUniqueSlug from '../utils/get-unique-slug';
import get_image from '../utils/get-image';
import { deepClone } from '../utils/shared';

/**
 * Block Edit Class.
 */
function BlockEdit(props) {
	const { clientId, attributes, setAttributes, isSelectedBlockInRoot, getBlocks, replaceInnerBlocks, updateBlockAttributes, block } = props;
	let { className } = props;
	const blockProps = useBlockProps();

	const {
		tabActive,
		buttonsAlign,
		tabsData,
		txtColor,
		overlayColor,
		overlayImg,
		overlayImgOpacity,
		autoplay,
		disableOnInteraction,
		pauseOnMouseEnter,
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
		sticky,
		thumbs,
		thumbsSlidesPerView,
		thumbsSpaceBetween,
		autoHeight,
		debug,
		direction,
		previousIcon,
		nextIcon,
		slidesOffsetBefore,
		slidesOffsetAfter,
	} = attributes;

	const child_blocks = getBlocks(clientId);

	useEffect(() => {
		// const child_values = child_blocks.map(({
		// 	clientId,
		// 	attributes: {
		// 		thumbImg,
		// 		slug
		// 	}
		// }) => ({ clientId, thumbImg }));
		// Extract the client IDs of the inner blocks
		const prevClientIdOrder = block.innerBlocks.map((ib) => ib.clientId);
		const propClientIdOrder = props.attributes.tabsData.map((tabData) => tabData.clientId);

		// Disabled: for now, this was preventing the thumbs to update
		// Check if the order of client IDs has changed

		let counter = 0;

		const newTabsData = block.innerBlocks.map((tabData, index) => {
			counter++;

			// removed: logically we do this step later in setAttributes
			// updateBlockAttributes(tabData.clientId, {
			// 	slug: `slide-${counter}`,
			// });

			return {
				clientId: tabData.clientId,
				slideImg: tabData.attributes.slideImg,
				thumbImg: tabData.attributes.thumbImg,
				slug: `slide-${counter}`,
			};
		});

		// if we disable this line of code, then adding new slide doesnt work
		// intorducing if else , fixed the problem, above line can be removed
		if (areArraysEqualWithoutOrder(prevClientIdOrder, propClientIdOrder)) {
			setAttributes({
				tabsData: newTabsData,
			});
		} else {
			setAttributes({
				tabActive: 'slide-1',
				tabsData: newTabsData,
			});
		}
	}, [child_blocks]);

	const [alignment, setAlignment] = useState('bottom center');

	// Function to check if two arrays are equal without considering the order of elements
	const areArraysEqualWithoutOrder = (arr1, arr2) => {
		// Check if the lengths of the arrays are different, if so, they can't be equal
		if (arr1.length !== arr2.length) {
			// Arrays have different lengths, so they are not equal
			return false;
		}

		// Use the every() method to check if every element at the same index is equal
		return arr1.every((value, index) => value === arr2[index]);
	};

	/**
	 * Returns the layouts configuration for a given number of tabs.
	 *
	 * @param {number} attributes tabs attributes.
	 *
	 * @return {Object[]} Tabs layout configuration.
	 */
	const getTabsTemplate = () => {
		const { tabsData } = attributes;

		return tabsData.map((tabData) => ['da/wp-swiper-slide', tabData]);
	};

	const getTabs = () => {
		return block.innerBlocks;
	};

	const changeLabel = (dataType, value, i) => {
		const { setAttributes, attributes, updateBlockAttributes } = props;

		const { tabsData } = attributes;

		const tabs = getTabs();

		if (tabs[i]) {
			const newSlug = dataType == 'title' ? getUniqueSlug(`tab ${value}`, tabs[i].clientId) : tabsData[i].slug;

			const newTabsData = tabsData.map((oldTabData, newIndex) => {
				if (i === newIndex) {
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
	};

	const removeTab = (i) => {
		const { setAttributes, attributes, block, getBlocks, replaceInnerBlocks, removeBlock } = props;
		const { tabsData = [] } = attributes;

		if (1 >= block.innerBlocks.length) {
			removeBlock(block.clientId);
		} else if (block.innerBlocks[i]) {
			if (tabsData[i]) {
				const newTabsData = deepClone(tabsData);

				newTabsData.splice(i, 1);

				// const slug = i;
				// tabsData[i] = {
				// 	...tabsData[i],
				// 	slug: `slide-${slug}`,
				// };
				// console.log('2', tabsData);

				// update slug attribute
				// for inner blocks (slide)

				removeBlock(block.innerBlocks[i].clientId);

				for (let j = i; j < newTabsData.length; j++) {
					const newSlug = `slide-${j + 1}`;

					newTabsData[j].slug = newSlug;
					updateBlockAttributes(newTabsData[j].clientId, {
						slug: newSlug,
					});
				}

				setAttributes({
					tabsData: newTabsData,
				});
			}
		}
	};

	useEffect(() => {
		return;
		const { block, setAttributes, replaceInnerBlocks } = props;

		// Extract the client IDs of the inner blocks
		const prevClientIdOrder = block.innerBlocks.map((ib) => ib.clientId);
		const propClientIdOrder = props.attributes.tabsData.map((tabData) => tabData.clientId);

		// Check if the order of client IDs has changed
		if (!areArraysEqualWithoutOrder(prevClientIdOrder, propClientIdOrder)) {
			// Update tabsData with the new order
			const newTabsData = block.innerBlocks.map((tabData) => ({
				clientId: tabData.clientId,
				slug: tabData.attributes.slug,
			}));

			setAttributes({
				tabsData: newTabsData,
			});

			// Replace innerBlocks with the updated order
			const innerBlocksInCurrentOrder = props.block.innerBlocks.map((ib) => {
				// Retrieve the correct inner block by client ID
				const correspondingBlock = block.innerBlocks.find((b) => b.clientId === ib.clientId);
				return correspondingBlock;
			});

			replaceInnerBlocks(block.clientId, innerBlocksInCurrentOrder, false);
		}
	}, [tabsData]);

	className = classnames(className, 'wp-swiper__slides');

	let buttonsAlignValForControl = buttonsAlign;
	if (buttonsAlignValForControl === 'start') {
		buttonsAlignValForControl = 'left';
	} else if (buttonsAlignValForControl === 'end') {
		buttonsAlignValForControl = 'right';
	}

	// used for the map function to create numbered tabs
	let counter = 1;

	const style = txtColor ? { color: txtColor } : {};

	const Seperator = () => {
		return (
			<PanelRow>
				<div
					style={{
						borderTop: '1px solid #dddddd',
						marginTop: '16px',
						marginBottom: '16px',
						width: '100%',
					}}
				></div>
			</PanelRow>
		);
	};

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__('Overlay Settings')}
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
					{overlayImg && <PanelRow>{get_image(overlayImg)}</PanelRow>}
					{overlayImg && (
						<PanelRow>
							<Button
								isSecondary
								size="small"
								className="block-library-cover__reset-button"
								onClick={() =>
									setAttributes({
										overlayImg: undefined,
									})
								}
							>
								{__('Clear Media')}
							</Button>
						</PanelRow>
					)}
					{overlayImg && (
						<BaseControl label={__('Image Overlay Opacity', '@@text_domain')}>
							<RangeControl
								label={__('Opacity')}
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
					)}
					<Seperator />
					<BaseControl label={__('Overlay Color', '@@text_domain')}>
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
					title={__('Color Settings')}
					initialOpen={false}
				>
					<BaseControl label={__('Text Color', '@@text_domain')}>
						<ColorPicker
							color={txtColor}
							onChangeComplete={(color) => setAttributes({ txtColor: color.hex })}
						/>
					</BaseControl>
				</PanelBody>
				<PanelBody
					title={__('Swiper Settings')}
					initialOpen={false}
				>
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
							label="Disable On Interaction"
							checked={disableOnInteraction}
							help="Set to false and autoplay will not be disabled after user interactions (swipes), it will be restarted every time after interaction"
							onChange={() => {
								setAttributes({ disableOnInteraction: !disableOnInteraction });
							}}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Pause On Mouse Enter"
							checked={pauseOnMouseEnter}
							help="When enabled autoplay will be paused on pointer (mouse) enter over Swiper container."
							onChange={() => {
								setAttributes({ pauseOnMouseEnter: !pauseOnMouseEnter });
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
								{ label: 'Slide', value: 'slide' },
								{ label: 'Fade', value: 'fade' },
								{ label: 'Cube', value: 'cube' },
								{ label: 'Coverflow', value: 'coverflow' },
								{ label: 'Flip', value: 'flip' },
							]}
							onChange={(option) => {
								setAttributes({ effect: option });
							}}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Free Mode"
							help="Enables free mode functionality"
							checked={freeMode}
							onChange={() => {
								if (freeMode) {
									setAttributes({ sticky: false });
								}
								setAttributes({ freeMode: !freeMode });
							}}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Sticky"
							help="Set to enabled to enable snap to slides positions in free mode"
							disabled={!freeMode}
							checked={sticky}
							onChange={() => {
								setAttributes({ sticky: !sticky });
							}}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							label={__('Container Max Width %')}
							help={__('Frontend: Set the max width for the content with text.')}
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
					<Seperator />
					<PanelRow>
						<h2>Navigation Settings</h2>
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
					{navigation && (
						<>
							<PanelRow>
								<p>You can customize icons by uploading your own. Default icons used otherwise.</p>
							</PanelRow>
							<PanelRow>
								<MediaUploadCheck>
									<MediaUpload
										value={previousIcon}
										onSelect={(media) => {
											let img_url = media.sizes.full.url;
											setAttributes({ previousIcon: img_url });
										}}
										type="image"
										render={(open) => {
											return (
												<Button
													onClick={open.open}
													className="button"
												>
													Select previous slide icon
												</Button>
											);
										}}
									/>
								</MediaUploadCheck>
							</PanelRow>
							{previousIcon && <PanelRow>{get_image(previousIcon)}</PanelRow>}
							{previousIcon && (
								<PanelRow>
									<Button
										isSecondary
										size="small"
										className="block-library-cover__reset-button"
										onClick={() =>
											setAttributes({
												previousIcon: undefined,
											})
										}
									>
										{__('Clear Media')}
									</Button>
								</PanelRow>
							)}
							<PanelRow>
								<MediaUploadCheck>
									<MediaUpload
										value={nextIcon}
										onSelect={(media) => {
											let img_url = media.sizes.full.url;
											setAttributes({ nextIcon: img_url });
										}}
										type="image"
										render={(open) => {
											return (
												<Button
													onClick={open.open}
													className="button"
												>
													Select next slide icon
												</Button>
											);
										}}
									/>
								</MediaUploadCheck>
							</PanelRow>
							{nextIcon && <PanelRow>{get_image(nextIcon)}</PanelRow>}
							{nextIcon && (
								<PanelRow>
									<Button
										isSecondary
										size="small"
										className="block-library-cover__reset-button"
										onClick={() =>
											setAttributes({
												nextIcon: undefined,
											})
										}
									>
										{__('Clear Media')}
									</Button>
								</PanelRow>
							)}
						</>
					)}
					<PanelRow>
						<ToggleControl
							label="Auto Height"
							help="Set to true and slider wrapper will adapt its height to the height of the currently active slide"
							checked={autoHeight}
							onChange={() => {
								setAttributes({ autoHeight: !autoHeight });
							}}
						/>
					</PanelRow>
					<Seperator />
					<PanelRow>
						<h2>Direction Settings</h2>
					</PanelRow>
					<SelectControl
						label="Direction"
						help="For vertical slider, Slides Per View should be set to 1"
						value={direction}
						options={[
							{ label: 'Horizontal', value: 'horizontal' },
							{ label: 'Vertical', value: 'vertical' },
						]}
						onChange={(option) => {
							setAttributes({ direction: option });
						}}
					/>
					<Seperator />
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
								{ label: 'Bullets', value: 'bullets' },
								{ label: 'Fraction', value: 'fraction' },
								{ label: 'Progress Bar', value: 'progressbar' },
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
					<Seperator />
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
								setAttributes({ slidesPerView: option });
							}}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Slides Offset Before"
							help="Add (in px) additional slide offset in the beginning of the container (before all slides)"
							value={slidesOffsetBefore}
							onChange={(option) => {
								setAttributes({ slidesOffsetBefore: parseInt(option) });
							}}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Slides Offset After"
							help="Add (in px) additional slide offset in the end of the container (after all slides)"
							value={slidesOffsetAfter}
							onChange={(option) => {
								setAttributes({ slidesOffsetAfter: parseInt(option) });
							}}
						/>
					</PanelRow>
					<Seperator />
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
					<Seperator />
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
					<Seperator />
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
							label="Thumbs per view"
							help="Number of slides per view (slides visible at the same time on slider's container). Can be a number or auto"
							value={thumbsSlidesPerView}
							onChange={(option) => {
								setAttributes({ thumbsSlidesPerView: parseInt(option) });
							}}
						/>
					</PanelRow>
					<PanelRow>
						<AlignmentMatrixControl
							disableAlignment={['center']}
							value={alignment}
							onChange={(newAlignment) => setAlignment(newAlignment)}
						/>
					</PanelRow>
					<Seperator />
					<PanelRow>
						<h2>Dev Tools</h2>
					</PanelRow>
					<ToggleControl
						label="Debug"
						help="Show (console.log) config JSON object for each slider"
						checked={debug}
						onChange={() => {
							setAttributes({ debug: !debug });
						}}
					/>
				</PanelBody>
			</InspectorControls>
			<div
				{...blockProps}
				className={className}
				data-tab-active={tabActive}
			>
				<div
					className="wb-tabs-buttons-wrapper"
					style={style}
				>
					<div className={classnames('wb-tabs-buttons', `wb-tabs-buttons-align-${buttonsAlign}`)}>
						{tabsData.map((tabData, i) => {
							const { slug } = tabData;
							const selected = tabActive === slug;

							return (
								<div
									className={classnames('wb-tabs-buttons-item', selected ? 'wb-tabs-buttons-item-active' : '')}
									key={`tab_button_${tabData.slug}`}
									onClick={() => setAttributes({ tabActive: slug })}
								>
									<h4>Slide {counter++}</h4>

									<RemoveButton
										show={isSelectedBlockInRoot}
										tooltipText={__('Remove slide?', '@@text_domain')}
										onRemove={() => {
											removeTab(i);
										}}
									/>
								</div>
							);
						})}
						{isSelectedBlockInRoot ? (
							<Tooltip text={__('Add Slide', '@@text_domain')}>
								<Button
									icon={'insert'}
									onClick={() => {
										let newTabsData = [];
										const newDataLength = tabsData.length + 1;
										const block = createBlock('da/wp-swiper-slide', {
											slug: `slide-${newDataLength}`,
										});

										newTabsData = [...tabsData];
										newTabsData.push({
											clientId: block.clientId,
											slug: `slide-${newDataLength}`,
											slideImg: '',
											thumbImg: '',
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
							''
						)}
					</div>
					<div className="wp-swiper__slide-content">
						<InnerBlocks
							template={getTabsTemplate()}
							allowedBlocks={['da/wp-swiper-slide']}
						/>
					</div>
				</div>
			</div>
			<style>
				{`
						[data-block="${props.clientId}"] .wp-swiper__slides .wp-swiper__slide-content .block-editor-inner-blocks .block-editor-block-list__layout [data-tab="${tabActive ?? 'slide-1'}"] {
							display: block;
						}
						`}
			</style>
		</Fragment>
	);
}

export default compose([
	withSelect((select, ownProps) => {
		const { getBlock, isBlockSelected, hasSelectedInnerBlock } = select('core/block-editor');

		const { clientId } = ownProps;

		return {
			blocks: select(blockEditorStore).getBlocks(),
			block: getBlock(clientId),
			isSelectedBlockInRoot: isBlockSelected(clientId) || hasSelectedInnerBlock(clientId, true),
		};
	}),
	withDispatch((dispatch, ownProps, registry) => {
		const { updateBlockAttributes, removeBlock, replaceInnerBlocks, moveBlockToPosition, moveBlocksDown } = dispatch('core/block-editor');
		const { getBlocks } = registry.select('core/block-editor');

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
