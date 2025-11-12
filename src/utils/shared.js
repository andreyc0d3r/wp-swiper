const POSITION_CLASSNAMES = {
	'top left': 'is-position-top-left',
	'top center': 'is-position-top-center',
	'top right': 'is-position-top-right',
	'center left': 'is-position-center-left',
	'center center': 'is-position-center-center',
	center: 'is-position-center-center',
	'center right': 'is-position-center-right',
	'bottom left': 'is-position-bottom-left',
	'bottom center': 'is-position-bottom-center',
	'bottom right': 'is-position-bottom-right',
};

export function isContentPositionCenter(contentPosition) {
	return !contentPosition || contentPosition === 'center center' || contentPosition === 'center';
}

export function getPositionClassName(contentPosition) {
	/*
	 * Only render a className if the contentPosition is not center (the default).
	 */
	if (isContentPositionCenter(contentPosition)) return '';

	return POSITION_CLASSNAMES[contentPosition];
}

export function deepClone(obj) {
	if (Array.isArray(obj)) {
		return obj.map((item) => deepClone(item));
	} else if (typeof obj === 'object' && obj !== null) {
		const clone = {};
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				clone[key] = deepClone(obj[key]);
			}
		}
		return clone;
	} else {
		return obj;
	}
}
