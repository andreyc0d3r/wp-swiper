import './styles/editor.scss';

import * as slides from './blocks/slides';
import * as slide from './blocks/slide';

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
	{
		name: 'thumbnails-bottom-right',
		label: 'Thumbnails Bottom Right',
	},
	{
		name: 'overlayed-text-right',
		label: 'Overlayed Text Right',
	},
]);
