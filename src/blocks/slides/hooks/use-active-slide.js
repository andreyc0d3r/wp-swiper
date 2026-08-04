// WordPress provides this package at runtime.
// eslint-disable-next-line import/no-extraneous-dependencies
import { useCallback } from '@wordpress/element';

/**
 * Provide the active-slide state helpers used by the editor controls.
 *
 * The active slide remains a persisted block attribute so existing content and
 * serialization remain unchanged.
 *
 * @param {Object}   settings               Hook settings.
 * @param {string}   settings.tabActive     Current active slide slug.
 * @param {Function} settings.setAttributes Parent block attribute updater.
 * @return {Object} Active-slide helpers.
 */
export default function useActiveSlide( { tabActive, setAttributes } ) {
	const isActiveSlide = useCallback(
		( slug ) => tabActive === slug,
		[ tabActive ]
	);
	const selectSlide = useCallback(
		( slug ) => {
			setAttributes( { tabActive: slug } );
		},
		[ setAttributes ]
	);

	return {
		isActiveSlide,
		selectSlide,
	};
}
