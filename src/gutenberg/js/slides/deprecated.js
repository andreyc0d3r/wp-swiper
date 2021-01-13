/**
 * Internal dependencies
 */
import metadata from './block.json';
import deprecated_save from './deprecated_save';

export default [
    {
        supports: metadata.supports,
        attributes: {
            ...metadata.attributes,
        },
        save: deprecated_save
    },
];