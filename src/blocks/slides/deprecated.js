/**
 * Internal dependencies
 */
import metadata from './block.json';
import oldsave from './oldsave';
import saveV1 from './save-v1';
import saveV2 from './save-v2';

// Create a copy of attributes without sliderHeight, navigationColor, paginationColor
// These didn't exist in the old version
const { sliderHeight, navigationColor, paginationColor, autoHeight, ...oldAttributesBase } = metadata.attributes;

// Old attributes with autoHeight defaulting to true (old behavior)
// Also include attributes that are defined in index.js but not in block.json
const oldAttributes = {
	...oldAttributesBase,
	autoHeight: {
		type: 'boolean',
		default: true, // Old default was true
	},
	// These attributes are defined in index.js, not block.json
	pagination_type: {
		type: 'string',
		default: 'bullets',
	},
	mousewheel: {
		type: 'boolean',
		default: false,
	},
	releaseOnEdges: {
		type: 'boolean',
		default: false,
	},
};

export default [
	// Version 3: Migrate from version without sliderHeight/navigationColor/paginationColor
	// This handles blocks created before height and color customization was added
	{
		attributes: {
			...oldAttributes,
			// Old version didn't have sliderHeight, navigationColor, paginationColor
			// and tabsData had a different default structure
			tabsData: {
				type: 'array',
				default: [],
			},
		},
		save: saveV2,
		migrate(attributes) {
			// Add the new attributes with their defaults
			return {
				...attributes,
				sliderHeight: '500px',
				navigationColor: undefined,
				paginationColor: undefined,
			};
		},
	},
	// Version 2: Migrate from sticky to freeModeSticky
	{
		attributes: {
			...oldAttributes,
			sticky: {
				type: 'boolean',
				default: false,
			},
			tabsData: {
				type: 'array',
				default: [],
			},
		},
		save: saveV1,
		migrate(attributes) {
			// Migrate old sticky attribute to freeModeSticky
			const { sticky, ...restAttributes } = attributes;
			return {
				...restAttributes,
				freeModeSticky: sticky || false,
				sliderHeight: '500px',
				navigationColor: undefined,
				paginationColor: undefined,
			};
		},
	},
	// Version 1: Original old save format
	{
		attributes: {
			...oldAttributes,
			tabsData: {
				type: 'array',
				default: [],
			},
		},
		save: oldsave,
		migrate(attributes) {
			return {
				...attributes,
				sliderHeight: '500px',
				navigationColor: undefined,
				paginationColor: undefined,
			};
		},
	}
];
