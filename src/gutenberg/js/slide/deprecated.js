/**
 * Internal dependencies
 */
import metadata from './block.json';
import save1033 from './save1033';

export default [
    {
        supports: metadata.supports,
        attributes: {
            ...metadata.attributes,
        },
        save: save1033
    },
];