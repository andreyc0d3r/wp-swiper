/**
 * Internal dependencies
 */
import metadata from './block.json';
import oldsave from './oldsave';
import saveV1 from './save-v1';

export default [
	// Version 2: Migrate from sticky to freeModeSticky
	{
		attributes: {
			...metadata.attributes,
			sticky: {
				type: 'boolean',
				default: false,
			},
		},
		save: saveV1,
		migrate(attributes) {
			// Migrate old sticky attribute to freeModeSticky
			const { sticky, ...restAttributes } = attributes;
			return {
				...restAttributes,
				freeModeSticky: sticky || false,
			};
		},
	},
	// Version 1: Original old save format
	{
		save: oldsave
	}
];
