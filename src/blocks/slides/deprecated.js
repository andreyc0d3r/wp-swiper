/**
 * Internal dependencies
 */
import metadata from './block.json';
import oldsave from './oldsave';
import saveV1 from './save-v1';
import saveV1310 from './save-v1-3-10';
import saveV146 from './save-v1-4-6';
import saveV2 from './save-v2';

function withoutAttributes(attributes, names) {
	return Object.fromEntries(
		Object.entries(attributes).filter(([name]) => !names.includes(name))
	);
}

// These attributes did not exist in the older versions.
const oldAttributesBase = withoutAttributes(metadata.attributes, [
	'sliderHeight',
	'navigationColor',
	'paginationColor',
	'autoHeight',
	'carouselLabel',
]);

// Old attributes with autoHeight defaulting to true (old behavior).
const oldAttributes = {
	...oldAttributesBase,
	autoHeight: {
		type: 'boolean',
		default: true, // Old default was true
	},
};

const tabsDataDefault = [
	{
		clientId: '',
		slug: 'slide-1',
		slideImg: '',
		thumbImg: '',
	},
];

const currentAttributes = withoutAttributes(metadata.attributes, [
	'carouselLabel',
]);

const version1310Attributes = {
	...oldAttributes,
	txtColor: {
		type: 'string',
	},
	tabsData: {
		type: 'array',
		default: tabsDataDefault,
	},
};

/**
 * Recreate the integer-forcing output used before fractional values were
 * restored. Keeping this path allows Gutenberg to migrate affected blocks
 * while retaining the decimal stored in their block attributes.
 *
 * @param {Object} props Block save properties.
 * @return {Element} Historical save element.
 */
export function saveIntegerSlidesPerView(props) {
	return saveV146(props);
}

export default [
	// Version 5: Versions 1.4.0-1.4.6 forced fractional values to integers.
	{
		attributes: currentAttributes,
		save: saveIntegerSlidesPerView,
	},
	// Version 4: Version 1.3.10 serialized slidesPerView as a string.
	{
		attributes: version1310Attributes,
		save: saveV1310,
		migrate(attributes) {
			const currentCompatibleAttributes = { ...attributes };
			delete currentCompatibleAttributes.txtColor;

			return {
				...currentCompatibleAttributes,
				sliderHeight: '500px',
				navigationColor: undefined,
				paginationColor: undefined,
			};
		},
	},
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
			txtColor: {
				type: 'string',
			},
			sticky: {
				type: 'boolean',
				default: false,
			},
			tabsData: {
				type: 'array',
				default: tabsDataDefault,
			},
		},
		save: saveV1,
		migrate(attributes) {
			// Migrate old sticky attribute to freeModeSticky
			const { sticky, ...restAttributes } = attributes;
			delete restAttributes.txtColor;
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
