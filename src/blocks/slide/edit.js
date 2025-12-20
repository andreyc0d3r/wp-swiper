/**
 * External dependencies
 */
import classnames from 'classnames/dedupe';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useCallback, useMemo } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { PanelRow, PanelBody, BaseControl, Button, FocalPointPicker } from '@wordpress/components';
import { InnerBlocks, BlockControls, InspectorControls, MediaUploadCheck, MediaUpload, useBlockProps, store as blockEditorStore } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import BlockAlignmentMatrixControl from '../../components/block-alignment-matrix-control';
import { getPositionClassName } from '../../utils/shared';

/**
 * Block Edit Component.
 *
 * @param {Object} props Block props.
 * @return {JSX.Element} Block edit component.
 */
export default function Edit({ attributes, setAttributes, clientId }) {
	const { slideImg, thumbImg, overlayColor, contentVHalign, slug, focalPoint } = attributes;

	// Use modern useSelect hook instead of withSelect HOC
	const hasChildBlocks = useSelect(
		(select) => select(blockEditorStore).getBlockOrder(clientId).length > 0,
		[clientId]
	);

	// Memoized event handlers
	const onSelectImage = useCallback(
		(media) => {
			const imgUrl = media?.sizes?.full?.url || media?.url;
			if (imgUrl) {
				setAttributes({ slideImg: imgUrl });
			}
		},
		[setAttributes]
	);

	const onSelectThumb = useCallback(
		(media) => {
			const imgUrl = media?.sizes?.full?.url || media?.url;
			if (imgUrl) {
				setAttributes({ thumbImg: imgUrl });
			}
		},
		[setAttributes]
	);

	const setFocalPoint = useCallback(
		(value) => {
			setAttributes({ focalPoint: value });
		},
		[setAttributes]
	);

	const clearSlideImage = useCallback(() => {
		setAttributes({ slideImg: undefined });
	}, [setAttributes]);

	const clearThumbImage = useCallback(() => {
		setAttributes({ thumbImg: undefined });
	}, [setAttributes]);

	// Compute className
	const computedClassName = useMemo(() => {
		let className = classnames('wp-swiper__slide', {
			'has-image': Boolean(slideImg),
		});
		className = classnames(className, getPositionClassName(contentVHalign));
		return className;
	}, [slideImg, contentVHalign]);

	const blockProps = useBlockProps({
		className: computedClassName,
		'data-tab': slug,
	});

	// Compute styles
	const styleOverlayImage = useMemo(() => {
		if (!slideImg) {
			return {};
		}
		return {
			backgroundImage: `url(${slideImg})`,
			backgroundPosition: `${(focalPoint?.x ?? 0.5) * 100}% ${(focalPoint?.y ?? 0.5) * 100}%`,
		};
	}, [slideImg, focalPoint]);

	const styleOverlayColor = useMemo(() => {
		if (!overlayColor?.rgb) {
			return {};
		}
		const { r, g, b, a } = overlayColor.rgb;
		return {
			backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})`,
		};
	}, [overlayColor]);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Image Settings', 'wp-swiper')}>
					<BaseControl label={__('Slide Image', 'wp-swiper')}>
						<PanelRow>
							<MediaUploadCheck>
								<MediaUpload
									value={slideImg}
									onSelect={onSelectImage}
									allowedTypes={['image']}
									render={({ open }) => (
										<Button
											onClick={open}
											variant="secondary"
										>
											{__('Select slide image', 'wp-swiper')}
										</Button>
									)}
								/>
							</MediaUploadCheck>
						</PanelRow>
						{slideImg && (
							<PanelRow>
								<FocalPointPicker
									url={slideImg}
									value={focalPoint}
									onDragStart={setFocalPoint}
									onDrag={setFocalPoint}
									onChange={setFocalPoint}
								/>
							</PanelRow>
						)}
						{slideImg && (
							<PanelRow>
								<Button
									variant="secondary"
									size="small"
									className="block-library-cover__reset-button"
									onClick={clearSlideImage}
								>
									{__('Clear Media', 'wp-swiper')}
								</Button>
							</PanelRow>
						)}
					</BaseControl>
					<BaseControl label={__('Thumbnail Image', 'wp-swiper')}>
						<PanelRow>
							<MediaUploadCheck>
								<MediaUpload
									value={thumbImg}
									onSelect={onSelectThumb}
									allowedTypes={['image']}
									render={({ open }) => (
										<Button
											onClick={open}
											variant="secondary"
										>
											{__('Select thumb image', 'wp-swiper')}
										</Button>
									)}
								/>
							</MediaUploadCheck>
						</PanelRow>
						{thumbImg && (
							<PanelRow>
								<FocalPointPicker
									url={thumbImg}
									value={focalPoint}
									onDragStart={setFocalPoint}
									onDrag={setFocalPoint}
									onChange={setFocalPoint}
								/>
							</PanelRow>
						)}
						{thumbImg && (
							<PanelRow>
								<Button
									variant="secondary"
									size="small"
									className="block-library-cover__reset-button"
									onClick={clearThumbImage}
								>
									{__('Clear Media', 'wp-swiper')}
								</Button>
							</PanelRow>
						)}
					</BaseControl>
				</PanelBody>
			</InspectorControls>
			<BlockControls group="block">
				<BlockAlignmentMatrixControl
					label={__('Change content position', 'wp-swiper')}
					value={contentVHalign}
					onChange={(value) => setAttributes({ contentVHalign: value })}
				/>
			</BlockControls>

			<div {...blockProps}>
				{slideImg && (
					<div
						className="wp-swiper__slide-overlay wp-swiper__slide-overlay--image"
						style={styleOverlayImage}
					/>
				)}
				{overlayColor?.rgb?.a > 0 && (
					<div
						className="wp-swiper__slide-overlay wp-swiper__slide-overlay--color"
						style={styleOverlayColor}
					/>
				)}
				<InnerBlocks
					renderAppender={hasChildBlocks ? undefined : InnerBlocks.ButtonBlockAppender}
				/>
			</div>
		</>
	);
}
