/**
 * External dependencies
 */
import classnames from 'classnames/dedupe';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import { Fragment } from '@wordpress/element';

import { withSelect } from '@wordpress/data';

import BlockAlignmentMatrixControl from '../../components/block-alignment-matrix-control';

import { PanelRow, PanelBody, BaseControl, Button, FocalPointPicker } from '@wordpress/components';

import { InnerBlocks, BlockControls, InspectorControls, MediaUploadCheck, MediaUpload } from '@wordpress/block-editor';

import { getPositionClassName } from '../../utils/shared';

/**
 * Block Edit Class.
 */
function edit(props) {
	const onSelectImage = (media) => {
		let img_url = media.sizes.full.url;
		props.setAttributes({ slideImg: img_url });
	};

	const onSelectThumb = (media) => {
		let img_url = media.sizes.full.url;
		props.setAttributes({ thumbImg: img_url });
	};

	const isEmpty = (val) => {
		return true;
	};

	const getOverlayImage = (style) => {
		if (props.attributes.slideImg) {
			style.backgroundImage = `url(${props.attributes.slideImg})`;
		}
		return style;
	};

	const getOverlayColor = (style) => {
		if (props.attributes.overlayColor) {
			let { overlayColor } = props.attributes;
			style.backgroundColor = `rgba(${overlayColor.rgb.r}, ${overlayColor.rgb.g}, ${overlayColor.rgb.b}, ${overlayColor.rgb.a})`;
		}
		return style;
	};

	const setFocalPoint = (value) => {
		props.setAttributes({ focalPoint: value });
	};

	const { setAttributes, hasChildBlocks, attributes } = props;

	let { className = '' } = props;

	const { slideImg, thumbImg, overlayColor, contentVHalign } = attributes;

	className = classnames(className, 'wp-swiper__slide');
	className = classnames(className, { 'has-image': isEmpty(slideImg) });
	className = classnames(className, getPositionClassName(contentVHalign));

	/* Example function to render the CSS styles based on Focal Point Picker value */
	const style = {
		backgroundImage: `url(${slideImg})`,
		backgroundPosition: `${props.attributes.focalPoint.x * 100}% ${props.attributes.focalPoint.y * 100}%`,
	};

	let style_overlay_image = {};
	let style_overlay_color = {};

	style_overlay_image = getOverlayImage(style_overlay_image);
	style_overlay_color = getOverlayColor(style_overlay_color);

	style_overlay_image = {
		...style_overlay_image,
		...style,
	};

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={__('Image Settings')}>
					<BaseControl label={__('Slide Image', '@@text_domain')}>
						<PanelRow>
							<MediaUploadCheck>
								<MediaUpload
									value={slideImg}
									onSelect={onSelectImage}
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
						{slideImg && (
							<PanelRow>
								<FocalPointPicker
									url={slideImg}
									value={props.attributes.focalPoint}
									onDragStart={setFocalPoint}
									onDrag={setFocalPoint}
									onChange={setFocalPoint}
								/>
							</PanelRow>
						)}
						{/* <PanelRow>{get_image(slideImg)}</PanelRow> */}
						{slideImg && (
							<PanelRow>
								<Button
									isSecondary
									size="small"
									className="block-library-cover__reset-button"
									onClick={() =>
										setAttributes({
											slideImg: undefined,
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
									value={thumbImg}
									onSelect={onSelectThumb}
									type="image"
									render={(open) => {
										return (
											<Button
												onClick={open.open}
												className="button"
											>
												Select thumb image
											</Button>
										);
									}}
								/>
							</MediaUploadCheck>
						</PanelRow>
						{thumbImg && (
							<PanelRow>
								<FocalPointPicker
									url={thumbImg}
									value={props.attributes.focalPoint}
									onDragStart={setFocalPoint}
									onDrag={setFocalPoint}
									onChange={setFocalPoint}
								/>
							</PanelRow>
						)}
						{thumbImg && (
							<PanelRow>
								<Button
									isSecondary
									size="small"
									className="block-library-cover__reset-button"
									onClick={() =>
										setAttributes({
											thumbImg: undefined,
										})
									}
								>
									{__('Clear Media')}
								</Button>
							</PanelRow>
						)}
					</BaseControl>
				</PanelBody>
			</InspectorControls>
			<BlockControls group="block">
				<BlockAlignmentMatrixControl
					label={__('Change content position')}
					value={contentVHalign}
					onChange={(value) => {
						setAttributes({ contentVHalign: value });
					}}
				/>
			</BlockControls>

			<div className={className}>
				{slideImg && (
					<div
						className="wp-swiper__slide-overlay wp-swiper__slide-overlay--image"
						style={style_overlay_image}
					/>
				)}
				{overlayColor.rgb.a > 0 && (
					<div
						className="wp-swiper__slide-overlay wp-swiper__slide-overlay--color"
						style={style_overlay_color}
					/>
				)}
				<InnerBlocks renderAppender={hasChildBlocks ? undefined : () => <InnerBlocks.ButtonBlockAppender />} />
			</div>
		</Fragment>
	);
}

export default withSelect((select, props) => {
	const { clientId } = props;
	const { getBlockOrder } = select('core/block-editor');

	return {
		hasChildBlocks: getBlockOrder(clientId).length > 0,
	};
})(edit);
