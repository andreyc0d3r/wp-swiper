/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';

const { name } = metadata;

export { metadata, name };

export const settings = {
	...metadata,
	title: __('Slide', 'wp-swiper'),
	description: __('A single slide within a WP Swiper block.', 'wp-swiper'),
	icon: (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="3"
				y="5"
				width="18"
				height="14"
				rx="2"
				stroke="currentColor"
				fill="transparent"
				stroke-width="1.5"
			/>
			<circle cx="8" cy="10" r="1.5" fill="currentColor" />
			<path
				d="M3 15 L8 11 L12 14 L16 10 L21 14 L21 17 C21 18.1 20.1 19 19 19 L5 19 C3.9 19 3 18.1 3 17 Z"
				fill="currentColor"
				opacity="0.4"
			/>
		</svg>
	),
	getEditWrapperProps(attributes) {
		return { 'data-tab': attributes.slug };
	},
	edit,
	save,
	deprecated,
};
