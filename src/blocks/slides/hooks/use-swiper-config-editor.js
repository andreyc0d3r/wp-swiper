// WordPress provides these packages at runtime.
// eslint-disable-next-line import/no-extraneous-dependencies
import { useCallback, useEffect, useState } from '@wordpress/element';
// eslint-disable-next-line import/no-extraneous-dependencies
import { __ } from '@wordpress/i18n';

import {
	buildSwiperConfig,
	parseSwiperConfig,
} from '../../../utils/swiper-config';
import { getAttributesFromSwiperConfig } from '../utils/swiper-config-editor';

/**
 * Manage the advanced Swiper JSON configuration editor.
 *
 * @param {Object}   settings               Hook settings.
 * @param {Object}   settings.attributes    Slider block attributes.
 * @param {Function} settings.setAttributes Slider block attribute updater.
 * @return {Object} Configuration editor state and actions.
 */
export default function useSwiperConfigEditor( { attributes, setAttributes } ) {
	const [ jsonValue, setJsonValue ] = useState( '' );
	const [ isValid, setIsValid ] = useState( true );
	const [ hasChanges, setHasChanges ] = useState( false );
	const [ validationMessage, setValidationMessage ] = useState( '' );
	const currentConfigJson = JSON.stringify(
		buildSwiperConfig( attributes ),
		null,
		2
	);

	useEffect( () => {
		if ( ! hasChanges ) {
			setJsonValue( currentConfigJson );
		}
	}, [ currentConfigJson, hasChanges ] );

	const handleJsonChange = useCallback( ( value ) => {
		setJsonValue( value );
		setHasChanges( true );

		try {
			const parsedConfig = parseSwiperConfig( value );
			setIsValid( true );
			setValidationMessage(
				parsedConfig.diagnostics[ 0 ]?.message || ''
			);
		} catch ( error ) {
			setIsValid( false );
			setValidationMessage(
				error?.message ||
					__( 'Invalid Swiper configuration.', 'wp-swiper' )
			);
		}
	}, [] );

	const handleSave = useCallback( () => {
		if ( ! isValid ) {
			return;
		}

		try {
			const mappedConfig = getAttributesFromSwiperConfig( jsonValue );

			setAttributes( mappedConfig.attributes );
			setHasChanges( false );
			setValidationMessage(
				mappedConfig.diagnostics[ 0 ]?.message || ''
			);
		} catch ( error ) {
			setIsValid( false );
			setValidationMessage(
				error?.message ||
					__( 'Invalid Swiper configuration.', 'wp-swiper' )
			);
		}
	}, [ isValid, jsonValue, setAttributes ] );

	const handleReset = useCallback( () => {
		setJsonValue( currentConfigJson );
		setHasChanges( false );
		setIsValid( true );
		setValidationMessage( '' );
	}, [ currentConfigJson ] );

	return {
		handleJsonChange,
		handleReset,
		handleSave,
		hasChanges,
		isValid,
		jsonValue,
		validationMessage,
	};
}
