// WordPress provides these packages at runtime.
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
import { BaseControl, Button, PanelRow } from '@wordpress/components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { __ } from '@wordpress/i18n';

import useSwiperConfigEditor from '../hooks/use-swiper-config-editor';

const helperTextStyle = {
	marginTop: '8px',
	fontSize: '12px',
	fontStyle: 'normal',
	color: 'rgb(117, 117, 117)',
	marginBottom: '12px',
};

/**
 * Display the editable JSON representation of the Swiper configuration.
 *
 * @param {Object}   props               Component props.
 * @param {Object}   props.attributes    Slider block attributes.
 * @param {string}   props.clientId      Slider block client ID.
 * @param {Function} props.setAttributes Slider block attribute updater.
 * @return {Object} Configuration editor controls.
 */
export default function SwiperConfigEditor( {
	attributes,
	clientId,
	setAttributes,
} ) {
	const {
		handleJsonChange,
		handleReset,
		handleSave,
		hasChanges,
		isValid,
		jsonValue,
		validationMessage,
	} = useSwiperConfigEditor( { attributes, setAttributes } );
	const configEditorId = `wp-swiper-config-json-${ clientId }`;

	return (
		<>
			<BaseControl
				id={ configEditorId }
				label={ __( 'Swiper Configuration (JSON)', 'wp-swiper' ) }
				help={
					validationMessage ||
					( ! isValid
						? __(
								'Invalid JSON format. Please fix the syntax errors.',
								'wp-swiper'
						  )
						: '' )
				}
			>
				<textarea
					id={ configEditorId }
					value={ jsonValue }
					onChange={ ( event ) =>
						handleJsonChange( event.target.value )
					}
					rows={ 15 }
					style={ {
						width: '100%',
						fontFamily: 'monospace',
						fontSize: '11px',
						padding: '8px',
						border: `1px solid ${
							isValid ? '#8c8f94' : '#cc1818'
						}`,
						borderRadius: '4px',
						backgroundColor: isValid ? '#fff' : '#fff5f5',
						resize: 'vertical',
					} }
				/>
			</BaseControl>

			<PanelRow>
				<Button
					variant="primary"
					onClick={ handleSave }
					disabled={ ! isValid || ! hasChanges }
					style={ { marginRight: '8px' } }
				>
					{ __( 'Apply Changes', 'wp-swiper' ) }
				</Button>
				<Button
					variant="secondary"
					onClick={ handleReset }
					disabled={ ! hasChanges }
				>
					{ __( 'Reset', 'wp-swiper' ) }
				</Button>
			</PanelRow>

			<p style={ helperTextStyle }>
				{ __(
					'This JSON object represents the Swiper initialization configuration. You can edit properties directly here and click "Apply Changes" to update the slider settings. This is useful for advanced customizations or copying configurations between sliders.',
					'wp-swiper'
				) }
			</p>
			<p style={ helperTextStyle }>
				<strong>{ __( 'Tip:', 'wp-swiper' ) }</strong>{ ' ' }
				{ __(
					'Changes made here will update the corresponding settings in the sidebar panels. Some nested properties (like autoplay options) will be extracted to their respective settings.',
					'wp-swiper'
				) }
			</p>
		</>
	);
}
