/**
 * External dependencies
 */
import classnames from 'classnames/dedupe';

/**
 * WordPress dependencies
 */
import { useState, useCallback } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';
import { useSelect, useDispatch } from '@wordpress/data';
import apiFetch from '@wordpress/api-fetch';
import { store as noticesStore } from '@wordpress/notices';
import {
	PanelBody,
	PanelRow,
	BaseControl,
	ToggleControl,
	Tooltip,
	Button,
	ColorPicker,
	ColorPalette,
	RangeControl,
	TextControl,
	SelectControl,
	TextareaControl,
	__experimentalAlignmentMatrixControl as AlignmentMatrixControl,
	__experimentalUnitControl as UnitControl,
	DropZone,
} from '@wordpress/components';
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
	MediaUploadCheck,
	MediaUpload,
	store as blockEditorStore,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import RemoveButton from '../../components/remove-button';
import getImage from '../../utils/get-image';
import SwiperConfigEditor from './components/swiper-config-editor';
import TemplateSelector from './components/template-selector';
import useActiveSlide from './hooks/use-active-slide';
import useSlideCollection from './hooks/use-slide-collection';
import templates, {
	instantiateSlideTemplate,
	isPristineSlideCollection,
} from './templates';

// Template for default inner blocks (one slide by default)
const INNER_BLOCKS_TEMPLATE = [
	['da/wp-swiper-slide', { slug: 'slide-1' }]
];
const EMPTY_INNER_BLOCKS = [];

/**
 * Helper function to upload a file to the media library
 * @param {File} file - The file to upload
 * @return {Promise} Resolves with the media object.
 */
async function uploadMediaFile(file) {
	const formData = new FormData();
	formData.append('file', file);

	const response = await apiFetch({
		path: '/wp/v2/media',
		method: 'POST',
		body: formData,
	});

	return response;
}

/**
 * Return a useful message from a WordPress REST API error.
 *
 * @param {Error|Object} error Upload error.
 * @return {string} User-facing error message.
 */
function getErrorMessage(error) {
	return error?.message || error?.data?.message || __('Image upload failed.', 'wp-swiper');
}

/**
 * Block Edit Component.
 *
 * @param {Object} props Block props.
 * @return {JSX.Element} Block edit component.
 */
export default function Edit({ clientId, attributes, setAttributes, className }) {
	const blockProps = useBlockProps();

	// Use modern hooks instead of withSelect/withDispatch HOCs
	const { block, isSelectedBlockInRoot } = useSelect(
		(select) => {
			const { getBlock, isBlockSelected, hasSelectedInnerBlock } = select(blockEditorStore);
			return {
				block: getBlock(clientId),
				isSelectedBlockInRoot: isBlockSelected(clientId) || hasSelectedInnerBlock(clientId, true),
			};
		},
		[clientId]
	);

	const {
		updateBlockAttributes,
		removeBlock,
		replaceInnerBlocks,
	} = useDispatch(blockEditorStore);
	const { createErrorNotice } = useDispatch(noticesStore);
	const { getBlocks } = useSelect((select) => ({
		getBlocks: select(blockEditorStore).getBlocks,
	}), []);
	const getInnerBlocks = useCallback(
		() => getBlocks(clientId),
		[clientId, getBlocks]
	);

	const {
		tabActive,
		buttonsAlign,
		selectedTemplate,
		tabsData,
		overlayColor,
		overlayImg,
		overlayImgOpacity,
		autoplay,
		showAutoplayControl,
		disableOnInteraction,
		pauseOnMouseEnter,
		reverseDirection,
		stopOnLastSlide,
		waitForTransition,
		delay,
		speed,
		loop,
		loopAddBlankSlides,
		loopAdditionalSlides,
		effect,
		slidesPerView,
		slidesPerGroup,
		slidesPerGroupAuto,
		slidesPerGroupSkip,
		spaceBetween,
		autoSlideWidth,
		navigation,
		pagination,
		containerWidth,
		mousewheel,
		releaseOnEdges,
		pagination_type,
		clickable_pagination,
		breakpoints,
		freeMode,
		freeModeMinimumVelocity,
		freeModeMomentum,
		freeModeMomentumBounce,
		freeModeMomentumBounceRatio,
		freeModeMomentumRatio,
		freeModeMomentumVelocityRatio,
		freeModeSticky,
		thumbs,
		thumbsSlidesPerView,
		thumbsSpaceBetween,
		autoHeight,
		sliderHeight,
		debug,
		carouselLabel,
		direction,
		previousIcon,
		nextIcon,
		slidesOffsetBefore,
		slidesOffsetAfter,
		overflowVisible,
		navigationColor,
		paginationColor,
	} = attributes;

	const innerBlocks = block?.innerBlocks || EMPTY_INNER_BLOCKS;
	const isTemplateSelectorVisible =
		! selectedTemplate &&
		isPristineSlideCollection( innerBlocks, tabsData );
	const { isActiveSlide, selectSlide } = useActiveSlide( {
		tabActive,
		setAttributes,
	} );
	const {
		addMedia,
		addSlide,
		removeSlide,
		repairSlideSlugs,
	} = useSlideCollection( {
		clientId,
		createSlideBlock: createBlock,
		getInnerBlocks,
		innerBlocks,
		removeBlock,
		replaceInnerBlocks,
		setAttributes,
		tabActive,
		tabsData,
		updateBlockAttributes,
	} );
	const applyTemplate = useCallback(
		( template ) => {
			const instantiatedTemplate = instantiateSlideTemplate(
				template,
				createBlock
			);

			replaceInnerBlocks(
				clientId,
				instantiatedTemplate.innerBlocks,
				false
			);
			setAttributes( instantiatedTemplate.attributes );
		},
		[ clientId, replaceInnerBlocks, setAttributes ]
	);

	const [alignment, setAlignment] = useState('bottom center');
	const [isDraggingOver, setIsDraggingOver] = useState(false);
	const [isUploading, setIsUploading] = useState(false);

	/**
	 * Handle files dropped onto the swiper block
	 * Creates new slides for each image dropped
	 * If the first slide is empty, it will be replaced with the first dropped image
	 */
	const handleFilesDropped = async (files) => {
		if (!files || files.length === 0) return;

		// Filter only image files
		const imageFiles = Array.from(files).filter(file => file.type.startsWith('image/'));
		if (imageFiles.length === 0) return;

		setIsUploading(true);
		setIsDraggingOver(false);

		try {
			const uploadResults = await Promise.allSettled(
				imageFiles.map(uploadMediaFile)
			);
			const uploadedMedia = uploadResults
				.filter((result) => result.status === 'fulfilled')
				.map((result) => result.value);
			const failedUploads = uploadResults.filter(
				(result) => result.status === 'rejected'
			);

			addMedia(uploadedMedia);

			if (failedUploads.length > 0) {
				createErrorNotice(
					__(
						'Some images could not be uploaded. Successfully uploaded images were added as slides.',
						'wp-swiper'
					),
					{
						type: 'snackbar',
						isDismissible: true,
					}
				);
			}
		} catch (error) {
			createErrorNotice(getErrorMessage(error), {
				type: 'snackbar',
				isDismissible: true,
			});
		} finally {
			setIsUploading(false);
		}
	};

	const handleMediaLibrarySelect = useCallback((media) => {
		setIsUploading(true);

		try {
			addMedia(media);
		} catch (error) {
			createErrorNotice(getErrorMessage(error), {
				type: 'snackbar',
				isDismissible: true,
			});
		} finally {
			setIsUploading(false);
		}
	}, [addMedia, createErrorNotice]);

	className = classnames(className, 'wp-swiper__slides');

	if ( isTemplateSelectorVisible ) {
		return (
			<div
				{ ...blockProps }
				className={ classnames( blockProps.className, className ) }
			>
				<TemplateSelector
					clientId={ clientId }
					onSelect={ applyTemplate }
					templates={ templates }
				/>
			</div>
		);
	}

	let buttonsAlignValForControl = buttonsAlign;
	if (buttonsAlignValForControl === 'start') {
		buttonsAlignValForControl = 'left';
	} else if (buttonsAlignValForControl === 'end') {
		buttonsAlignValForControl = 'right';
	}

	// used for the map function to create numbered tabs
	let counter = 1;

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
		<>
			<InspectorControls>
				<PanelBody
					title={__('Overlay Settings', 'wp-swiper')}
					initialOpen={false}
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								value={overlayImg}
								onSelect={(media) => {
									const imgUrl = media.sizes?.full?.url || media.url;
									setAttributes({ overlayImg: imgUrl });
								}}
								allowedTypes={['image']}
								render={({ open }) => (
									<Button
										onClick={open}
										className="button"
									>
										{__('Select overlay image', 'wp-swiper')}
									</Button>
								)}
							/>
						</MediaUploadCheck>
					</PanelRow>
					{overlayImg && <PanelRow>{getImage(overlayImg)}</PanelRow>}
					{overlayImg && (
						<PanelRow>
							<Button
								variant="secondary"
								size="small"
								className="block-library-cover__reset-button"
								onClick={() =>
									setAttributes({
										overlayImg: undefined,
									})
								}
							>
								{__('Clear Media', 'wp-swiper')}
							</Button>
						</PanelRow>
					)}
					{overlayImg && (
						<BaseControl label={__('Image Overlay Opacity', 'wp-swiper')}>
							<RangeControl
								label={__('Opacity', 'wp-swiper')}
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
					<BaseControl label={__('Overlay Color', 'wp-swiper')}>
						<ColorPalette
							value={typeof overlayColor === 'object' ? `rgba(${overlayColor.rgb.r}, ${overlayColor.rgb.g}, ${overlayColor.rgb.b}, ${overlayColor.rgb.a})` : overlayColor}
							onChange={(color) => {
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
					{overlayColor?.rgb?.a > 0 && (
						<PanelRow>
							<Button
								variant="secondary"
								size="small"
								className="block-library-cover__reset-button"
								onClick={() => {
									const defaultColor = { rgb: { r: 0, g: 0, b: 0, a: 0 } };
									setAttributes({ overlayColor: defaultColor });

									// Update all inner blocks
									const iBlocks = block?.innerBlocks || [];
									iBlocks.forEach((iBlock) => {
										updateBlockAttributes(iBlock.clientId, {
											overlayColor: defaultColor,
										});
									});
								}}
							>
								{__('Clear Color', 'wp-swiper')}
							</Button>
						</PanelRow>
					)}
			</PanelBody>
		<PanelBody
			title={__('Color Settings', 'wp-swiper')}
			initialOpen={false}
		>
				<BaseControl label={__('Navigation Color', 'wp-swiper')}>
					<ColorPalette
						value={navigationColor}
						onChange={(color) => setAttributes({ navigationColor: color })}
					/>
				</BaseControl>
				{navigationColor && (
					<PanelRow>
						<Button
							variant="secondary"
							size="small"
							onClick={() => setAttributes({ navigationColor: '' })}
						>
							{__('Clear Navigation Color', 'wp-swiper')}
						</Button>
					</PanelRow>
				)}
				<Seperator />
				<BaseControl label={__('Pagination Color', 'wp-swiper')}>
					<ColorPalette
						value={paginationColor}
						onChange={(color) => setAttributes({ paginationColor: color })}
					/>
				</BaseControl>
				{paginationColor && (
					<PanelRow>
						<Button
							variant="secondary"
							size="small"
							onClick={() => setAttributes({ paginationColor: '' })}
						>
							{__('Clear Pagination Color', 'wp-swiper')}
						</Button>
					</PanelRow>
				)}
			</PanelBody>
			<PanelBody
				title={__('Basic Slider Settings', 'wp-swiper')}
				icon="controls-play"
				initialOpen={true}
			>
				{!autoHeight && (
					<PanelRow>
						<UnitControl
							label={__('Slider Height', 'wp-swiper')}
							help={__('Set a fixed height for the slider', 'wp-swiper')}
							value={sliderHeight}
							onChange={(value) => {
								setAttributes({ sliderHeight: value });
							}}
							units={[
								{ value: 'px', label: 'px', default: 500 },
								{ value: 'vh', label: 'vh', default: 50 },
								{ value: '%', label: '%', default: 100 },
								{ value: 'em', label: 'em', default: 20 },
							]}
						/>
					</PanelRow>
				)}
				<PanelRow>
					<ToggleControl
						label={__('Auto Height', 'wp-swiper')}
						help={__('Slider wrapper will adapt its height to the height of the currently active slide', 'wp-swiper')}
						checked={autoHeight}
						onChange={() => {
							setAttributes({ autoHeight: !autoHeight });
						}}
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={__('Auto Play', 'wp-swiper')}
						checked={autoplay}
						onChange={() => {
							setAttributes({ autoplay: !autoplay });
						}}
					/>
				</PanelRow>
				{autoplay && (
					<PanelRow>
						<ToggleControl
							label={__('Show Pause/Play Control', 'wp-swiper')}
							help={__('Display a minimal pause/play control on the frontend.', 'wp-swiper')}
							checked={showAutoplayControl}
							onChange={() => {
								setAttributes({ showAutoplayControl: !showAutoplayControl });
							}}
						/>
					</PanelRow>
				)}
				<PanelRow>
					<ToggleControl
						label={__('Loop', 'wp-swiper')}
						checked={loop}
						onChange={() => {
							setAttributes({ loop: !loop });
						}}
					/>
				</PanelRow>
				{loop && (
					<>
						<PanelRow>
							<ToggleControl
								label={__('Loop Add Blank Slides', 'wp-swiper')}
								help={__('Automatically adds blank slides if you use Grid or slidesPerGroup and the total amount of slides is not even to slidesPerGroup or to grid.rows', 'wp-swiper')}
								checked={loopAddBlankSlides}
								onChange={() => {
									setAttributes({ loopAddBlankSlides: !loopAddBlankSlides });
								}}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label={__('Loop Additional Slides', 'wp-swiper')}
								help={__('Increase the number of looped slides.', 'wp-swiper')}
								value={loopAdditionalSlides}
								type="number"
								onChange={(option) => {
									setAttributes({ loopAdditionalSlides: parseInt(option) });
								}}
							/>
						</PanelRow>
					</>
				)}
				<PanelRow>
					<TextControl
						label={__('Speed', 'wp-swiper')}
						help={__('Duration of transition between slides (in ms)', 'wp-swiper')}
						value={speed}
						type="number"
						onChange={(option) => {
							setAttributes({ speed: parseInt(option) });
						}}
					/>
				</PanelRow>
				<PanelRow>
					<TextControl
						label={__('Delay', 'wp-swiper')}
						help={__('Delay between transitions (in ms)', 'wp-swiper')}
						value={delay}
						type="number"
						onChange={(option) => {
							setAttributes({ delay: parseInt(option) });
						}}
					/>
				</PanelRow>
				<PanelRow>
					<RangeControl
						label={__('Container Max Width %', 'wp-swiper')}
						help={__('Frontend: Set the max width for the content with text.', 'wp-swiper')}
						value={containerWidth}
						onChange={(value) => {
							setAttributes({
								containerWidth: value,
							});

							const iBlocks = block?.innerBlocks || [];
							iBlocks.forEach((iBlock) => {
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
						label={__('Overflow Visible', 'wp-swiper')}
						help={__('Apply overflow visible to the swiper container', 'wp-swiper')}
						checked={overflowVisible}
						onChange={() => {
							setAttributes({ overflowVisible: !overflowVisible });
						}}
					/>
				</PanelRow>
			</PanelBody>
			<PanelBody
				title={__('Slides Configuration', 'wp-swiper')}
				icon="grid-view"
				initialOpen={false}
			>
			<PanelRow>
				<TextControl
					label={__('Slides per view', 'wp-swiper')}
					help={__('Number of visible slides. Enter a positive number, including decimals such as 1.2, or auto.', 'wp-swiper')}
					value={slidesPerView}
					onChange={(option) => {
						setAttributes({ slidesPerView: option });
					}}
				/>
			</PanelRow>
			<PanelRow>
				<TextControl
					label={__('Slides Per Group', 'wp-swiper')}
					help={__('Set numbers of slides to define and enable group sliding. Useful to use with slidesPerView > 1', 'wp-swiper')}
					value={slidesPerGroup}
					type="number"
					onChange={(option) => {
						setAttributes({ slidesPerGroup: parseInt(option) });
					}}
				/>
			</PanelRow>
			<PanelRow>
				<ToggleControl
					label={__('Slides Per Group Auto', 'wp-swiper')}
					help={__('This param intended to be used only with slidesPerView: \'auto\' and slidesPerGroup: 1. When enabled, it will skip all slides in view on .slideNext() & .slidePrev() methods calls, on Navigation buttons clicks and in autoplay.', 'wp-swiper')}
					checked={slidesPerGroupAuto}
					onChange={() => {
						setAttributes({ slidesPerGroupAuto: !slidesPerGroupAuto });
					}}
				/>
			</PanelRow>
			<PanelRow>
				<TextControl
					label={__('Slides Per Group Skip', 'wp-swiper')}
					help={__('If slidesPerGroupSkip equals 0 (default), no slides are excluded from grouping. If slidesPerGroupSkip is equal or greater than 1, the first X slides are treated as single groups, whereas all following slides are grouped by the slidesPerGroup value.', 'wp-swiper')}
					value={slidesPerGroupSkip}
					type="number"
					onChange={(option) => {
						setAttributes({ slidesPerGroupSkip: parseInt(option) });
					}}
				/>
			</PanelRow>
			<PanelRow>
				<TextControl
					label={__('Space Between', 'wp-swiper')}
					help={__('Distance between slides in px.', 'wp-swiper')}
					value={spaceBetween}
					onChange={(option) => {
						setAttributes({ spaceBetween: parseInt(option) });
					}}
				/>
			</PanelRow>
			<PanelRow>
				<ToggleControl
					label={__('Auto Slide Width', 'wp-swiper')}
					help={__('Makes each slide size itself based on its content instead of being evenly distributed. Useful for logos, badges, small cards, or any element that should not be stretched.', 'wp-swiper')}
					checked={autoSlideWidth}
					onChange={() => {
						setAttributes({ autoSlideWidth: !autoSlideWidth });
					}}
				/>
			</PanelRow>
				<PanelRow>
					<TextControl
						label={__('Slides Offset Before', 'wp-swiper')}
						help={__('Add (in px) additional slide offset in the beginning of the container (before all slides)', 'wp-swiper')}
						value={slidesOffsetBefore}
						onChange={(option) => {
							setAttributes({ slidesOffsetBefore: parseInt(option) });
						}}
					/>
				</PanelRow>
				<PanelRow>
					<TextControl
						label={__('Slides Offset After', 'wp-swiper')}
						help={__('Add (in px) additional slide offset in the end of the container (after all slides)', 'wp-swiper')}
						value={slidesOffsetAfter}
						onChange={(option) => {
							setAttributes({ slidesOffsetAfter: parseInt(option) });
						}}
					/>
				</PanelRow>
			</PanelBody>
			<PanelBody
				title={__('Navigation & Controls', 'wp-swiper')}
				icon="leftright"
				initialOpen={false}
			>
				<PanelRow>
					<ToggleControl
						label={__('Show Navigation', 'wp-swiper')}
						checked={navigation}
						onChange={() => {
							setAttributes({ navigation: !navigation });
						}}
					/>
				</PanelRow>
				{navigation && (
					<>
						<PanelRow>
							<p>{__('You can customize icons by uploading your own. Default icons used otherwise.', 'wp-swiper')}</p>
						</PanelRow>
						<PanelRow>
							<MediaUploadCheck>
								<MediaUpload
									value={previousIcon}
									onSelect={(media) => {
										const imgUrl = media.sizes?.full?.url || media.url;
										setAttributes({ previousIcon: imgUrl });
									}}
									allowedTypes={['image']}
									render={({ open }) => (
										<Button
											onClick={open}
											className="button"
										>
											{__('Select previous slide icon', 'wp-swiper')}
										</Button>
									)}
								/>
							</MediaUploadCheck>
						</PanelRow>
						{previousIcon && <PanelRow>{getImage(previousIcon)}</PanelRow>}
						{previousIcon && (
							<PanelRow>
								<Button
									variant="secondary"
									size="small"
									className="block-library-cover__reset-button"
									onClick={() =>
										setAttributes({
											previousIcon: undefined,
										})
									}
								>
									{__('Clear Media', 'wp-swiper')}
								</Button>
							</PanelRow>
						)}
						<PanelRow>
							<MediaUploadCheck>
								<MediaUpload
									value={nextIcon}
									onSelect={(media) => {
										const imgUrl = media.sizes?.full?.url || media.url;
										setAttributes({ nextIcon: imgUrl });
									}}
									allowedTypes={['image']}
									render={({ open }) => (
										<Button
											onClick={open}
											className="button"
										>
											{__('Select next slide icon', 'wp-swiper')}
										</Button>
									)}
								/>
							</MediaUploadCheck>
						</PanelRow>
						{nextIcon && <PanelRow>{getImage(nextIcon)}</PanelRow>}
						{nextIcon && (
							<PanelRow>
								<Button
									variant="secondary"
									size="small"
									className="block-library-cover__reset-button"
									onClick={() =>
										setAttributes({
											nextIcon: undefined,
										})
									}
								>
									{__('Clear Media', 'wp-swiper')}
								</Button>
							</PanelRow>
						)}
					</>
				)}
				<Seperator />
				<PanelRow>
					<ToggleControl
						label={__('Show Pagination', 'wp-swiper')}
						checked={pagination}
						onChange={() => {
							setAttributes({ pagination: !pagination });
						}}
					/>
				</PanelRow>
				{pagination && (
					<>
						<PanelRow>
							<SelectControl
								label={__('Type of pagination', 'wp-swiper')}
								value={pagination_type}
								options={[
									{ label: __('Bullets', 'wp-swiper'), value: 'bullets' },
									{ label: __('Fraction', 'wp-swiper'), value: 'fraction' },
									{ label: __('Progress Bar', 'wp-swiper'), value: 'progressbar' },
								]}
								onChange={(option) => {
									setAttributes({ pagination_type: option });
								}}
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label={__('Clickable Pagination', 'wp-swiper')}
								checked={clickable_pagination}
								onChange={() => {
									setAttributes({ clickable_pagination: !clickable_pagination });
								}}
							/>
						</PanelRow>
					</>
				)}
			</PanelBody>
			<PanelBody
				title={__('Direction Settings', 'wp-swiper')}
				icon="sort"
				initialOpen={false}
			>
				<SelectControl
					label={__('Direction', 'wp-swiper')}
					help={__('For vertical slider, Slides Per View should be set to 1', 'wp-swiper')}
					value={direction}
					options={[
						{ label: __('Horizontal', 'wp-swiper'), value: 'horizontal' },
						{ label: __('Vertical', 'wp-swiper'), value: 'vertical' },
					]}
					onChange={(option) => {
						setAttributes({ direction: option });
					}}
				/>
			</PanelBody>
			<PanelBody
				title={__('Autoplay Behavior', 'wp-swiper')}
				icon="controls-repeat"
				initialOpen={false}
			>
				<PanelRow>
					<ToggleControl
						label={__('Disable On Interaction', 'wp-swiper')}
						checked={disableOnInteraction}
						help={__('Set to false and autoplay will not be disabled after user interactions (swipes), it will be restarted every time after interaction', 'wp-swiper')}
						onChange={() => {
							setAttributes({ disableOnInteraction: !disableOnInteraction });
						}}
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={__('Pause On Mouse Enter', 'wp-swiper')}
						checked={pauseOnMouseEnter}
						help={__('When enabled autoplay will be paused on pointer (mouse) enter over Swiper container.', 'wp-swiper')}
						onChange={() => {
							setAttributes({ pauseOnMouseEnter: !pauseOnMouseEnter });
						}}
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={__('Reverse Direction', 'wp-swiper')}
						checked={reverseDirection}
						help={__('Enables autoplay in reverse direction', 'wp-swiper')}
						onChange={() => {
							setAttributes({ reverseDirection: !reverseDirection });
						}}
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={__('Stop On Last Slide', 'wp-swiper')}
						checked={stopOnLastSlide}
						help={__('Enable this parameter and autoplay will be stopped when it reaches last slide (has no effect in loop mode)', 'wp-swiper')}
						onChange={() => {
							setAttributes({ stopOnLastSlide: !stopOnLastSlide });
						}}
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={__('Wait For Transition', 'wp-swiper')}
						checked={waitForTransition}
						help={__('When enabled autoplay will wait for wrapper transition to continue. Can be disabled in case of using Virtual Translate when your slider may not have transition', 'wp-swiper')}
						onChange={() => {
							setAttributes({ waitForTransition: !waitForTransition });
						}}
					/>
				</PanelRow>
			</PanelBody>
			<PanelBody
				title={__('Advanced Features', 'wp-swiper')}
				icon="admin-generic"
				initialOpen={false}
			>
				<PanelRow>
					<SelectControl
						label={__('Transition effect', 'wp-swiper')}
						value={effect}
						options={[
							{ label: __('Slide', 'wp-swiper'), value: 'slide' },
							{ label: __('Fade', 'wp-swiper'), value: 'fade' },
							{ label: __('Cube', 'wp-swiper'), value: 'cube' },
							{ label: __('Coverflow', 'wp-swiper'), value: 'coverflow' },
							{ label: __('Flip', 'wp-swiper'), value: 'flip' },
						]}
						onChange={(option) => {
							setAttributes({ effect: option });
						}}
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={__('Mouse Wheel', 'wp-swiper')}
						help={__('Enables navigation through slides using mouse wheel.', 'wp-swiper')}
						checked={mousewheel}
						onChange={() => {
							setAttributes({ mousewheel: !mousewheel });
						}}
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={__('Release On Edges', 'wp-swiper')}
						help={__('Allow page scrolling when the slider reaches its first or last slide. Mouse wheel navigation must also be enabled.', 'wp-swiper')}
						checked={releaseOnEdges}
						onChange={() => {
							setAttributes({ releaseOnEdges: !releaseOnEdges });
						}}
					/>
				</PanelRow>
			</PanelBody>
			<PanelBody
				title={__('Free Mode', 'wp-swiper')}
				icon="controls-play"
				initialOpen={false}
			>
				<PanelRow>
					<ToggleControl
						label={__('Enable Free Mode', 'wp-swiper')}
						help={__('Whether the free mode is enabled. Slide will continue moving for a while after you release it.', 'wp-swiper')}
						checked={freeMode}
						onChange={() => {
							if (freeMode) {
								setAttributes({ freeModeSticky: false });
							}
							setAttributes({ freeMode: !freeMode });
						}}
					/>
				</PanelRow>
				{freeMode && (
					<>
						<PanelRow>
							<RangeControl
								label={__('Minimum Velocity', 'wp-swiper')}
								help={__('Minimum touchmove-velocity required to trigger free mode momentum', 'wp-swiper')}
								value={freeModeMinimumVelocity}
								onChange={(value) => {
									setAttributes({ freeModeMinimumVelocity: value });
								}}
								min={0}
								max={1}
								step={0.01}
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label={__('Momentum', 'wp-swiper')}
								help={__('If enabled, then slide will keep moving for a while after you release it', 'wp-swiper')}
								checked={freeModeMomentum}
								onChange={() => {
									setAttributes({ freeModeMomentum: !freeModeMomentum });
								}}
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label={__('Momentum Bounce', 'wp-swiper')}
								help={__('Set to false if you want to disable momentum bounce in free mode', 'wp-swiper')}
								checked={freeModeMomentumBounce}
								onChange={() => {
									setAttributes({ freeModeMomentumBounce: !freeModeMomentumBounce });
								}}
							/>
						</PanelRow>
						<PanelRow>
							<RangeControl
								label={__('Momentum Bounce Ratio', 'wp-swiper')}
								help={__('Higher value produces larger momentum bounce effect', 'wp-swiper')}
								value={freeModeMomentumBounceRatio}
								onChange={(value) => {
									setAttributes({ freeModeMomentumBounceRatio: value });
								}}
								min={0}
								max={10}
								step={0.1}
							/>
						</PanelRow>
						<PanelRow>
							<RangeControl
								label={__('Momentum Ratio', 'wp-swiper')}
								help={__('Higher value produces larger momentum distance after you release slider', 'wp-swiper')}
								value={freeModeMomentumRatio}
								onChange={(value) => {
									setAttributes({ freeModeMomentumRatio: value });
								}}
								min={0}
								max={10}
								step={0.1}
							/>
						</PanelRow>
						<PanelRow>
							<RangeControl
								label={__('Momentum Velocity Ratio', 'wp-swiper')}
								help={__('Higher value produces larger momentum velocity after you release slider', 'wp-swiper')}
								value={freeModeMomentumVelocityRatio}
								onChange={(value) => {
									setAttributes({ freeModeMomentumVelocityRatio: value });
								}}
								min={0}
								max={10}
								step={0.1}
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label={__('Sticky', 'wp-swiper')}
								help={__('Set to enabled to enable snap to slides positions in free mode', 'wp-swiper')}
								checked={freeModeSticky}
								onChange={() => {
									setAttributes({ freeModeSticky: !freeModeSticky });
								}}
							/>
						</PanelRow>
					</>
				)}
			</PanelBody>
			<PanelBody
				title={__('Responsive Breakpoints', 'wp-swiper')}
				icon="smartphone"
				initialOpen={false}
			>
				<PanelRow>
					<TextareaControl
						label={__('Responsive breakpoints (JSON Object)', 'wp-swiper')}
						help={__('Set layout options such as slidesPerView, slidesPerGroup, spaceBetween, and grid.rows for different viewport widths. Options such as loop and effect cannot be changed at breakpoints.', 'wp-swiper')}
						value={breakpoints}
						onChange={(option) => {
							setAttributes({ breakpoints: option });
						}}
					/>
				</PanelRow>
				<PanelRow>
					<p>{__('Example:', 'wp-swiper')} {'{\"720\":{\"slidesPerView\":2}}'} - {__('Notice the double quotes', 'wp-swiper')}</p>
				</PanelRow>
			</PanelBody>
			<PanelBody
				title={__('Thumbnails', 'wp-swiper')}
				icon="images-alt2"
				initialOpen={false}
			>
				<PanelRow>
					<ToggleControl
						label={__('Thumbs', 'wp-swiper')}
						help={__('Enables thumbs to be used as pagination.', 'wp-swiper')}
						checked={thumbs}
						onChange={() => {
							setAttributes({ thumbs: !thumbs });
						}}
					/>
				</PanelRow>
				{thumbs && (
					<>
						<PanelRow>
							<TextControl
								label={__('Space Between', 'wp-swiper')}
								help={__('Distance between slides in px.', 'wp-swiper')}
								value={thumbsSpaceBetween}
								onChange={(option) => {
									setAttributes({ thumbsSpaceBetween: parseInt(option) });
								}}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label={__('Thumbs per view', 'wp-swiper')}
								help={__('Number of slides per view (slides visible at the same time on slider\'s container). Can be a number or auto', 'wp-swiper')}
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
					</>
				)}
			</PanelBody>
			<PanelBody
				title={__('Accessibility', 'wp-swiper')}
				icon="universal-access-alt"
				initialOpen={false}
			>
				<TextControl
					label={__('Carousel name', 'wp-swiper')}
					help={__(
						'Describe this carousel for screen reader users, for example “Featured products”. A numbered name is generated when this is empty.',
						'wp-swiper'
					)}
					value={carouselLabel}
					onChange={(value) => {
						setAttributes({ carouselLabel: value });
					}}
				/>
				<p>
					{__(
						'Autoplay carousels can optionally include a pause or start control and pause automatically when reduced motion is requested.',
						'wp-swiper'
					)}
				</p>
			</PanelBody>
			<PanelBody
				title={__('Developer Tools', 'wp-swiper')}
				icon="admin-tools"
				initialOpen={false}
			>
				<ToggleControl
					label={__('Debug', 'wp-swiper')}
					help={__('Dispatch a wp-swiper:debug browser event containing the slider configuration.', 'wp-swiper')}
					checked={debug}
					onChange={() => {
						setAttributes({ debug: !debug });
					}}
				/>
				<PanelRow>
					<Button
						onClick={repairSlideSlugs}
						className="button"
					>
						{__('Fix Slide Slugs', 'wp-swiper')}
					</Button>
				</PanelRow>
				<PanelRow>
					<p
						style={{
							marginTop: 'calc(8px)',
							fontSize: '12px',
							fontStyle: 'normal',
							color: 'rgb(117, 117, 117)',
							marginBottom: 'revert',
						}}
					>
						{__('If slide tabs and content become out of sync, use this tool to rebuild the slide identifiers in their current order.', 'wp-swiper')}
					</p>
				</PanelRow>

				<SwiperConfigEditor
					attributes={attributes}
					clientId={clientId}
					setAttributes={setAttributes}
				/>
			</PanelBody>
			</InspectorControls>
			<div
				{...blockProps}
				className={classnames(blockProps.className, className)}
				data-tab-active={tabActive}
			>
			<div
				className="wb-tabs-buttons-wrapper"
			>
					<div className={classnames('wb-tabs-buttons', `wb-tabs-buttons-align-${buttonsAlign}`)}>
						{tabsData.map((tabData, i) => {
							const { slug } = tabData;
							const selected = isActiveSlide( slug );

							return (
								<div
									className={classnames('wb-tabs-buttons-item', selected ? 'wb-tabs-buttons-item-active' : '')}
									key={`tab_button_${tabData.slug}`}
								>
									<Button
										className="wp-swiper__tab-select"
										onClick={() => selectSlide( slug )}
										aria-pressed={selected}
									>
										<span className="wp-swiper__tab-label">
											{__('Slide', 'wp-swiper')} {counter++}
										</span>
									</Button>

									<RemoveButton
										show={isSelectedBlockInRoot}
										tooltipText={__('Remove slide?', 'wp-swiper')}
										onRemove={() => removeSlide( i )}
									/>
								</div>
							);
						})}
						{isSelectedBlockInRoot ? (
							<Tooltip text={__('Add Slide', 'wp-swiper')}>
								<Button
									aria-label={__('Add Slide', 'wp-swiper')}
									icon="insert"
									onClick={addSlide}
								/>
							</Tooltip>
						) : (
							''
						)}
					</div>
				<div className="wp-swiper__slide-content">
					<InnerBlocks
						template={INNER_BLOCKS_TEMPLATE}
						templateLock={false}
						allowedBlocks={['da/wp-swiper-slide']}
					/>
				</div>

				{/* Drop Zone for dragging images */}
				<div
					className={classnames('wp-swiper__drop-zone-wrapper', {
						'is-dragging-over': isDraggingOver,
						'is-uploading': isUploading,
					})}
				>
					<DropZone
						onFilesDrop={handleFilesDropped}
						onDragEnter={() => setIsDraggingOver(true)}
						onDragLeave={() => setIsDraggingOver(false)}
					/>
					<div className="wp-swiper__drop-zone-content">
				{isUploading ? (
					<>
						<svg className="wp-swiper__drop-zone-spinner" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity="0.3"/>
							<path d="M12 2v4c3.31 0 6 2.69 6 6h4c0-5.52-4.48-10-10-10z">
								<animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/>
							</path>
						</svg>
						<p>{__('Uploading images...', 'wp-swiper')}</p>
					</>
				) : (
					<>
						<svg width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
							<path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"/>
						</svg>
						<p>{__('Drop images here to create slides', 'wp-swiper')}</p>
						<div className="wp-swiper__drop-zone-divider">
							<span>{__('or', 'wp-swiper')}</span>
						</div>
						<MediaUploadCheck>
							<MediaUpload
								multiple
								value={[]}
								onSelect={handleMediaLibrarySelect}
								allowedTypes={['image']}
								render={({ open }) => (
									<Button
										onClick={open}
										variant="primary"
										className="wp-swiper__media-library-button"
									>
										{__(
											'Select images from Media Library',
											'wp-swiper'
										)}
									</Button>
								)}
							/>
						</MediaUploadCheck>
					</>
				)}
					</div>
				</div>
				</div>
			</div>
			<style>
				{`
						[data-block="${clientId}"] [data-tab] {
							display: none;
						}
						[data-block="${clientId}"] [data-tab="${tabActive ?? 'slide-1'}"] {
							display: flex !important;
						}
						`}
			</style>
		</>
	);
}
