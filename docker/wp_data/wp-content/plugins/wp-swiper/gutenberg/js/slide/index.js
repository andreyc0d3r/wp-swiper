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

const { name } = metadata;

export { metadata, name };

export const settings = {
    ...metadata,
    title: __( 'Slide', '@@text_domain' ),
    description: __( 'A single slide within a wp-swiper block.', '@@text_domain' ),
    icon: 'admin',
    getEditWrapperProps( attributes ) {
        return { 'data-tab': attributes.slug };
    },
    edit,
    save,
};