/**
 * Internal dependencies
 */
import metadata from './block.json';
import save1033 from './save1033';

// Old attributes without focalPoint
const { focalPoint, ...oldAttributesBase } = metadata.attributes;

export default [
    // Version 2: Without focalPoint attribute
    {
        supports: metadata.supports,
        attributes: {
            ...oldAttributesBase,
            // focalPoint didn't exist in old version
        },
        save: save1033,
        migrate(attributes) {
            return {
                ...attributes,
                focalPoint: { x: 0.5, y: 0.5 },
            };
        },
    },
    // Version 1: Original old save format
    {
        supports: metadata.supports,
        attributes: {
            ...metadata.attributes,
        },
        save: save1033
    },
];