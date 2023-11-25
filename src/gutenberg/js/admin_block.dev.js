import '../../css/editor.scss';

import * as slides from './slides';
import * as slide from './slide';

const { registerBlockType, registerBlockStyle } = wp.blocks;

/**
 * Register blocks
 */
registerBlockType(slides.name, slides.settings);
registerBlockType(slide.name, slide.settings);

registerBlockStyle(slides.name, [
	{
		name: 'testimonials',
		label: 'Testimonials',
	},
]);
