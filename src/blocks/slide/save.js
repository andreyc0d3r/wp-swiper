/**
 * External dependencies
 */
import classnames from 'classnames/dedupe';

/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { getPositionClassName } from '../../utils/shared';

/**
 * Block Save Class.
 */
export default function save(props) {
	const { attributes } = props;
	const { overlayColor, slug, slideImg, contentVHalign, containerWidth, focalPoint } = attributes;

	let className = 'wp-swiper__slide swiper-slide';

	if (contentVHalign != '' && typeof contentVHalign !== 'undefined') {
		className = classnames(className, getPositionClassName(contentVHalign));
	}

	// Display the configured slide image as a full background.
	const style = slideImg
		? {
				backgroundImage: `url(${slideImg})`,
				backgroundSize: 'cover',
				backgroundPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`,
		  }
		: {};

	const contaienr_width_style = containerWidth ? { maxWidth: `${containerWidth}%` } : null;

	const style_overlay_color = overlayColor
		? {
				backgroundColor: `rgba(${overlayColor.rgb.r}, ${overlayColor.rgb.g}, ${overlayColor.rgb.b}, ${overlayColor.rgb.a})`,
		  }
		: null;

	const blockProps = useBlockProps.save();

	return (
		<div
			{...blockProps}
			key={slug}
			data-tab={slug}
			className={className}
			style={style}
		>
			<div
				className="wp-swiper__overlay-color"
				{...(style_overlay_color && { style: style_overlay_color })}
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
