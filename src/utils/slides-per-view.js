/**
 * Convert the block's string attribute into the value expected by Swiper.
 *
 * The attribute remains a string so the editor can support both decimal values
 * and Swiper's special "auto" value.
 *
 * @param {string|number} value Slides per view block attribute.
 * @return {string|number} "auto" or a positive numeric value.
 */
export function normalizeSlidesPerView( value ) {
	if ( typeof value === 'string' && value.trim().toLowerCase() === 'auto' ) {
		return 'auto';
	}

	const numericValue =
		typeof value === 'string' && value.trim() === ''
			? Number.NaN
			: Number( value );

	return Number.isFinite( numericValue ) && numericValue > 0
		? numericValue
		: 1;
}
