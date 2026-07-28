import { normalizeSlidesPerView } from './slides-per-view';

const BOOLEAN_ATTRIBUTE_NAMES = [
	'autoHeight',
	'autoSlideWidth',
	'autoplay',
	'clickable_pagination',
	'disableOnInteraction',
	'freeMode',
	'freeModeMomentum',
	'freeModeMomentumBounce',
	'freeModeSticky',
	'loop',
	'loopAddBlankSlides',
	'mousewheel',
	'navigation',
	'pagination',
	'pauseOnMouseEnter',
	'releaseOnEdges',
	'reverseDirection',
	'slidesPerGroupAuto',
	'stopOnLastSlide',
	'waitForTransition',
];

const NUMERIC_ATTRIBUTE_RULES = {
	delay: { defaultValue: 3000, minimum: 0 },
	freeModeMinimumVelocity: { defaultValue: 0.02, minimum: 0 },
	freeModeMomentumBounceRatio: { defaultValue: 1, minimum: 0 },
	freeModeMomentumRatio: { defaultValue: 1, minimum: 0 },
	freeModeMomentumVelocityRatio: { defaultValue: 1, minimum: 0 },
	loopAdditionalSlides: {
		defaultValue: 0,
		integer: true,
		minimum: 0,
	},
	slidesOffsetAfter: { defaultValue: 0 },
	slidesOffsetBefore: { defaultValue: 0 },
	slidesPerGroup: { defaultValue: 1, integer: true, minimum: 1 },
	slidesPerGroupSkip: {
		defaultValue: 0,
		integer: true,
		minimum: 0,
	},
	spaceBetween: { defaultValue: 0 },
	speed: { defaultValue: 500, minimum: 0 },
	thumbsSlidesPerView: { defaultValue: 4, minimum: 1 },
	thumbsSpaceBetween: { defaultValue: 10 },
};

const RUNTIME_NUMERIC_RULES = {
	delay: NUMERIC_ATTRIBUTE_RULES.delay,
	loopAdditionalSlides: NUMERIC_ATTRIBUTE_RULES.loopAdditionalSlides,
	slidesOffsetAfter: NUMERIC_ATTRIBUTE_RULES.slidesOffsetAfter,
	slidesOffsetBefore: NUMERIC_ATTRIBUTE_RULES.slidesOffsetBefore,
	slidesPerGroup: NUMERIC_ATTRIBUTE_RULES.slidesPerGroup,
	slidesPerGroupSkip: NUMERIC_ATTRIBUTE_RULES.slidesPerGroupSkip,
	spaceBetween: NUMERIC_ATTRIBUTE_RULES.spaceBetween,
	speed: NUMERIC_ATTRIBUTE_RULES.speed,
};

const FREE_MODE_NUMERIC_RULES = {
	minimumVelocity: NUMERIC_ATTRIBUTE_RULES.freeModeMinimumVelocity,
	momentumBounceRatio: NUMERIC_ATTRIBUTE_RULES.freeModeMomentumBounceRatio,
	momentumRatio: NUMERIC_ATTRIBUTE_RULES.freeModeMomentumRatio,
	momentumVelocityRatio:
		NUMERIC_ATTRIBUTE_RULES.freeModeMomentumVelocityRatio,
};

const SINGLE_SLIDE_EFFECTS = new Set( [ 'cube', 'fade', 'flip' ] );
const UNSUPPORTED_BREAKPOINT_OPTIONS = [ 'direction', 'effect', 'loop' ];

function isPlainObject( value ) {
	return (
		typeof value === 'object' && value !== null && ! Array.isArray( value )
	);
}

function hasOwn( object, property ) {
	return Object.prototype.hasOwnProperty.call( object, property );
}

function normalizeBoolean( value ) {
	if ( value === 'true' || value === 1 ) {
		return true;
	}
	if ( value === 'false' || value === 0 || value === '' ) {
		return false;
	}
	return Boolean( value );
}

function normalizeNumber( value, rule ) {
	const numericValue =
		typeof value === 'string' && value.trim() === ''
			? Number.NaN
			: Number( value );

	if (
		! Number.isFinite( numericValue ) ||
		( rule.minimum !== undefined && numericValue < rule.minimum ) ||
		( rule.integer && ! Number.isInteger( numericValue ) )
	) {
		return rule.defaultValue;
	}

	return numericValue;
}

function isValidSlidesPerView( value ) {
	if ( typeof value === 'string' && value.trim().toLowerCase() === 'auto' ) {
		return true;
	}

	const numericValue =
		typeof value === 'string' && value.trim() === ''
			? Number.NaN
			: Number( value );

	return Number.isFinite( numericValue ) && numericValue > 0;
}

/**
 * Normalize the block attributes used to construct a Swiper configuration.
 *
 * This function deliberately leaves persisted editor and content attributes
 * untouched. It only normalizes values that are copied into runtime
 * configuration.
 *
 * @param {Object} attributes Slider block attributes.
 * @return {Object} A normalized copy of the supplied attributes.
 */
export function normalizeSliderAttributes( attributes = {} ) {
	if ( ! isPlainObject( attributes ) ) {
		return {};
	}

	const normalized = {
		...attributes,
	};

	if ( hasOwn( normalized, 'slidesPerView' ) ) {
		normalized.slidesPerView = normalizeSlidesPerView(
			normalized.slidesPerView
		);
	}

	BOOLEAN_ATTRIBUTE_NAMES.forEach( ( name ) => {
		if ( hasOwn( normalized, name ) ) {
			normalized[ name ] = normalizeBoolean( normalized[ name ] );
		}
	} );

	Object.entries( NUMERIC_ATTRIBUTE_RULES ).forEach( ( [ name, rule ] ) => {
		if ( hasOwn( normalized, name ) ) {
			normalized[ name ] = normalizeNumber( normalized[ name ], rule );
		}
	} );

	return normalized;
}

/**
 * A machine-readable configuration diagnostic.
 *
 * @param {string} code          Stable diagnostic identifier.
 * @param {string} message       User-facing explanation.
 * @param {Object} options       Diagnostic options.
 * @param {string} options.level Diagnostic severity.
 * @param {string} options.path  Configuration property path.
 * @return {Object} Structured diagnostic.
 */
export function createSwiperConfigDiagnostic(
	code,
	message,
	{ level = 'error', path = 'config' } = {}
) {
	return {
		code,
		level,
		message,
		path,
	};
}

export class SwiperConfigValidationError extends Error {
	constructor( message, diagnostics ) {
		super( message );
		this.name = 'SwiperConfigValidationError';
		this.diagnostics = diagnostics;
	}
}

function throwForErrors( diagnostics ) {
	const errors = diagnostics.filter(
		( diagnostic ) => diagnostic.level === 'error'
	);

	if ( errors.length > 0 ) {
		throw new SwiperConfigValidationError(
			errors[ 0 ].message,
			diagnostics
		);
	}
}

/**
 * Parse the current and legacy breakpoint representations.
 *
 * @param {Object|string} value Breakpoint configuration.
 * @return {Object|undefined} Parsed breakpoint configuration.
 * @throws {Error} When the value cannot be represented as an object.
 */
export function parseSwiperBreakpoints( value ) {
	if ( value === undefined || value === null || value === '' ) {
		return undefined;
	}

	let parsed = value;

	for (
		let attempt = 0;
		attempt < 2 && typeof parsed === 'string';
		attempt++
	) {
		const trimmedValue = parsed.trim();

		try {
			parsed = JSON.parse( trimmedValue );
		} catch {
			if ( attempt > 0 ) {
				throw new Error( 'Invalid Swiper breakpoints JSON.' );
			}

			const legacyValue = trimmedValue.replace( /\\"/g, '"' );
			if ( legacyValue === trimmedValue ) {
				throw new Error( 'Invalid Swiper breakpoints JSON.' );
			}
			parsed = legacyValue;
		}
	}

	if ( ! isPlainObject( parsed ) ) {
		throw new Error( 'Swiper breakpoints must be a JSON object.' );
	}

	return parsed;
}

function addInvalidNumberDiagnostic( diagnostics, path, rule, originalValue ) {
	const requirement = rule.integer ? 'an integer' : 'a finite number';
	const minimum =
		rule.minimum === undefined
			? ''
			: ` greater than or equal to ${ rule.minimum }`;

	diagnostics.push(
		createSwiperConfigDiagnostic(
			'invalid_number',
			`${ path } must be ${ requirement }${ minimum }; received ${ String(
				originalValue
			) }.`,
			{ path }
		)
	);
}

function normalizeNumericOptions(
	options,
	rules,
	diagnostics,
	pathPrefix = 'config'
) {
	Object.entries( rules ).forEach( ( [ name, rule ] ) => {
		if ( ! hasOwn( options, name ) ) {
			return;
		}

		const originalValue = options[ name ];
		const normalizedValue = normalizeNumber( originalValue, rule );
		const numericValue =
			typeof originalValue === 'string' && originalValue.trim() === ''
				? Number.NaN
				: Number( originalValue );
		const isInvalid =
			! Number.isFinite( numericValue ) ||
			( rule.minimum !== undefined && numericValue < rule.minimum ) ||
			( rule.integer && ! Number.isInteger( numericValue ) );

		if ( isInvalid ) {
			addInvalidNumberDiagnostic(
				diagnostics,
				`${ pathPrefix }.${ name }`,
				rule,
				originalValue
			);
		}

		options[ name ] = normalizedValue;
	} );
}

function normalizeBooleanOptions( options, names, diagnostics, pathPrefix ) {
	names.forEach( ( name ) => {
		if ( ! hasOwn( options, name ) ) {
			return;
		}

		const value = options[ name ];
		if (
			typeof value !== 'boolean' &&
			value !== 'true' &&
			value !== 'false' &&
			value !== 0 &&
			value !== 1
		) {
			diagnostics.push(
				createSwiperConfigDiagnostic(
					'invalid_boolean',
					`${ pathPrefix }.${ name } must be a boolean.`,
					{ path: `${ pathPrefix }.${ name }` }
				)
			);
		}
		options[ name ] = normalizeBoolean( value );
	} );
}

function normalizeModuleOption(
	options,
	name,
	diagnostics,
	pathPrefix = 'config'
) {
	if ( ! hasOwn( options, name ) ) {
		return;
	}

	if ( typeof options[ name ] === 'boolean' ) {
		return;
	}

	if ( isPlainObject( options[ name ] ) ) {
		options[ name ] = {
			...options[ name ],
		};
		return;
	}

	diagnostics.push(
		createSwiperConfigDiagnostic(
			'invalid_module_options',
			`${ pathPrefix }.${ name } must be a boolean or JSON object.`,
			{ path: `${ pathPrefix }.${ name }` }
		)
	);
	options[ name ] = false;
}

function normalizeModuleOptions( options, diagnostics, pathPrefix ) {
	[
		'autoplay',
		'freeMode',
		'mousewheel',
		'navigation',
		'pagination',
	].forEach( ( name ) =>
		normalizeModuleOption( options, name, diagnostics, pathPrefix )
	);

	if ( isPlainObject( options.autoplay ) ) {
		normalizeNumericOptions(
			options.autoplay,
			{ delay: NUMERIC_ATTRIBUTE_RULES.delay },
			diagnostics,
			`${ pathPrefix }.autoplay`
		);
		normalizeBooleanOptions(
			options.autoplay,
			[
				'disableOnInteraction',
				'pauseOnMouseEnter',
				'reverseDirection',
				'stopOnLastSlide',
				'waitForTransition',
			],
			diagnostics,
			`${ pathPrefix }.autoplay`
		);
	}

	if ( isPlainObject( options.freeMode ) ) {
		normalizeNumericOptions(
			options.freeMode,
			FREE_MODE_NUMERIC_RULES,
			diagnostics,
			`${ pathPrefix }.freeMode`
		);
		normalizeBooleanOptions(
			options.freeMode,
			[ 'enabled', 'momentum', 'momentumBounce', 'sticky' ],
			diagnostics,
			`${ pathPrefix }.freeMode`
		);
	}

	if ( isPlainObject( options.mousewheel ) ) {
		normalizeBooleanOptions(
			options.mousewheel,
			[ 'releaseOnEdges' ],
			diagnostics,
			`${ pathPrefix }.mousewheel`
		);
	}

	if ( isPlainObject( options.pagination ) ) {
		normalizeBooleanOptions(
			options.pagination,
			[ 'clickable' ],
			diagnostics,
			`${ pathPrefix }.pagination`
		);
	}
}

function isFreeModeEnabled( freeMode ) {
	return (
		freeMode === true ||
		( isPlainObject( freeMode ) && freeMode.enabled !== false )
	);
}

function addCompatibilityWarning( diagnostics, code, message, path ) {
	diagnostics.push(
		createSwiperConfigDiagnostic( code, message, {
			level: 'warning',
			path,
		} )
	);
}

function applyCompatibilityRules(
	options,
	diagnostics,
	pathPrefix = 'config',
	inheritedOptions = {}
) {
	const effect = options.effect || inheritedOptions.effect || 'slide';
	const slidesPerView = hasOwn( options, 'slidesPerView' )
		? options.slidesPerView
		: inheritedOptions.slidesPerView;
	const slidesPerGroup = hasOwn( options, 'slidesPerGroup' )
		? options.slidesPerGroup
		: inheritedOptions.slidesPerGroup;
	const loop = hasOwn( options, 'loop' )
		? options.loop
		: inheritedOptions.loop;

	if (
		options.slidesPerGroupAuto &&
		( slidesPerView !== 'auto' ||
			( slidesPerGroup !== undefined && slidesPerGroup !== 1 ) )
	) {
		options.slidesPerGroupAuto = false;
		addCompatibilityWarning(
			diagnostics,
			'group_auto_disabled',
			`${ pathPrefix }.slidesPerGroupAuto was disabled because it requires slidesPerView "auto" and slidesPerGroup 1.`,
			`${ pathPrefix }.slidesPerGroupAuto`
		);
	}

	if ( SINGLE_SLIDE_EFFECTS.has( effect ) ) {
		if (
			options.slidesPerView !== undefined &&
			options.slidesPerView !== 1
		) {
			options.slidesPerView = 1;
			addCompatibilityWarning(
				diagnostics,
				'effect_requires_single_slide',
				`${ pathPrefix }.slidesPerView was set to 1 because the ${ effect } effect displays one slide at a time.`,
				`${ pathPrefix }.slidesPerView`
			);
		}

		if (
			options.slidesPerGroup !== undefined &&
			options.slidesPerGroup !== 1
		) {
			options.slidesPerGroup = 1;
			addCompatibilityWarning(
				diagnostics,
				'effect_requires_single_group',
				`${ pathPrefix }.slidesPerGroup was set to 1 because the ${ effect } effect advances one slide at a time.`,
				`${ pathPrefix }.slidesPerGroup`
			);
		}

		if ( isFreeModeEnabled( options.freeMode ) ) {
			options.freeMode = false;
			addCompatibilityWarning(
				diagnostics,
				'free_mode_disabled_for_effect',
				`${ pathPrefix }.freeMode was disabled because it is incompatible with the ${ effect } effect.`,
				`${ pathPrefix }.freeMode`
			);
		}

		if ( options.autoSlideWidth ) {
			delete options.autoSlideWidth;
			addCompatibilityWarning(
				diagnostics,
				'auto_width_disabled_for_effect',
				`${ pathPrefix }.autoSlideWidth was disabled because it is only supported by multi-slide layouts.`,
				`${ pathPrefix }.autoSlideWidth`
			);
		}
	}

	if (
		loop &&
		isPlainObject( options.autoplay ) &&
		options.autoplay.stopOnLastSlide
	) {
		options.autoplay.stopOnLastSlide = false;
		addCompatibilityWarning(
			diagnostics,
			'loop_ignores_last_slide',
			`${ pathPrefix }.autoplay.stopOnLastSlide was disabled because loop mode has no last slide.`,
			`${ pathPrefix }.autoplay.stopOnLastSlide`
		);
	}
}

function normalizeLegacyMousewheelOptions( options, diagnostics ) {
	if ( ! hasOwn( options, 'releaseOnEdges' ) ) {
		return;
	}

	const releaseOnEdges = normalizeBoolean( options.releaseOnEdges );
	delete options.releaseOnEdges;

	if ( options.mousewheel ) {
		options.mousewheel = {
			...( isPlainObject( options.mousewheel )
				? options.mousewheel
				: {} ),
			releaseOnEdges,
		};
	}

	addCompatibilityWarning(
		diagnostics,
		'legacy_release_on_edges',
		'The legacy top-level releaseOnEdges option was migrated to mousewheel.releaseOnEdges.',
		'config.releaseOnEdges'
	);
}

function normalizeBreakpointOptions( options, diagnostics ) {
	const parsedBreakpoints = parseSwiperBreakpoints( options.breakpoints );
	if ( ! parsedBreakpoints ) {
		delete options.breakpoints;
		return;
	}

	const normalizedBreakpoints = {};
	Object.entries( parsedBreakpoints ).forEach(
		( [ breakpoint, breakpointOptions ] ) => {
			const numericBreakpoint = Number( breakpoint );
			const pathPrefix = `config.breakpoints.${ breakpoint }`;

			if (
				! Number.isFinite( numericBreakpoint ) ||
				numericBreakpoint < 0
			) {
				diagnostics.push(
					createSwiperConfigDiagnostic(
						'invalid_breakpoint',
						`${ pathPrefix } must use a non-negative numeric minimum width.`,
						{ path: pathPrefix }
					)
				);
				return;
			}

			if ( ! isPlainObject( breakpointOptions ) ) {
				diagnostics.push(
					createSwiperConfigDiagnostic(
						'invalid_breakpoint_options',
						`Swiper breakpoint ${ breakpoint } must contain a JSON object.`,
						{ path: pathPrefix }
					)
				);
				return;
			}

			const normalizedOptions = {
				...breakpointOptions,
			};
			if ( hasOwn( normalizedOptions, 'slidesPerView' ) ) {
				const originalSlidesPerView = normalizedOptions.slidesPerView;
				const normalizedSlidesPerView = normalizeSlidesPerView(
					originalSlidesPerView
				);

				if ( ! isValidSlidesPerView( originalSlidesPerView ) ) {
					diagnostics.push(
						createSwiperConfigDiagnostic(
							'invalid_slides_per_view',
							`${ pathPrefix }.slidesPerView must be "auto" or a positive number.`,
							{
								path: `${ pathPrefix }.slidesPerView`,
							}
						)
					);
				}
				normalizedOptions.slidesPerView = normalizedSlidesPerView;
			}

			normalizeNumericOptions(
				normalizedOptions,
				RUNTIME_NUMERIC_RULES,
				diagnostics,
				pathPrefix
			);
			normalizeModuleOptions(
				normalizedOptions,
				diagnostics,
				pathPrefix
			);

			UNSUPPORTED_BREAKPOINT_OPTIONS.forEach( ( name ) => {
				if ( ! hasOwn( normalizedOptions, name ) ) {
					return;
				}
				delete normalizedOptions[ name ];
				addCompatibilityWarning(
					diagnostics,
					'unsupported_breakpoint_option',
					`${ pathPrefix }.${ name } was removed because Swiper does not support changing ${ name } at a breakpoint.`,
					`${ pathPrefix }.${ name }`
				);
			} );

			applyCompatibilityRules(
				normalizedOptions,
				diagnostics,
				pathPrefix,
				options
			);
			normalizedOptions.watchSlidesProgress = true;
			normalizedBreakpoints[ breakpoint ] = normalizedOptions;
		}
	);

	options.breakpoints = normalizedBreakpoints;
}

function prepareSwiperConfig( config, { kind = 'main' } = {} ) {
	if ( ! isPlainObject( config ) ) {
		const diagnostics = [
			createSwiperConfigDiagnostic(
				'invalid_config',
				'Swiper configuration must be a JSON object.'
			),
		];
		throwForErrors( diagnostics );
	}

	const diagnostics = [];
	const options = {
		...config,
	};

	if ( hasOwn( options, 'slidesPerView' ) ) {
		const originalSlidesPerView = options.slidesPerView;
		const normalizedSlidesPerView = normalizeSlidesPerView(
			originalSlidesPerView
		);
		if ( ! isValidSlidesPerView( originalSlidesPerView ) ) {
			diagnostics.push(
				createSwiperConfigDiagnostic(
					'invalid_slides_per_view',
					'config.slidesPerView must be "auto" or a positive number.',
					{ path: 'config.slidesPerView' }
				)
			);
		}
		options.slidesPerView = normalizedSlidesPerView;
	}

	normalizeNumericOptions( options, RUNTIME_NUMERIC_RULES, diagnostics );
	normalizeModuleOptions( options, diagnostics, 'config' );
	normalizeLegacyMousewheelOptions( options, diagnostics );

	try {
		normalizeBreakpointOptions( options, diagnostics );
	} catch ( error ) {
		diagnostics.push(
			createSwiperConfigDiagnostic(
				'invalid_breakpoints',
				error.message,
				{ path: 'config.breakpoints' }
			)
		);
	}

	applyCompatibilityRules( options, diagnostics );
	options.watchSlidesProgress = true;

	if ( kind === 'thumbs' && options.slidesPerView === undefined ) {
		options.slidesPerView = 4;
	}

	throwForErrors( diagnostics );

	return {
		diagnostics,
		options,
	};
}

/**
 * Parse and validate serialized or object-form Swiper configuration.
 *
 * @param {Object|string} value        Serialized data attribute or configuration.
 * @param {Object}        options      Parser options.
 * @param {string}        options.kind Configuration kind.
 * @return {{diagnostics: Object[], options: Object}} Prepared configuration.
 */
export function parseSwiperConfig( value, options = {} ) {
	let parsed = value;

	if ( typeof value === 'string' ) {
		if ( value.trim() === '' ) {
			const diagnostics = [
				createSwiperConfigDiagnostic(
					'missing_config',
					'WP Swiper is missing its Swiper configuration.'
				),
			];
			throwForErrors( diagnostics );
		}

		try {
			parsed = JSON.parse( value );
		} catch {
			const diagnostics = [
				createSwiperConfigDiagnostic(
					'invalid_json',
					'WP Swiper contains invalid Swiper configuration JSON.'
				),
			];
			throwForErrors( diagnostics );
		}
	}

	return prepareSwiperConfig( parsed, options );
}

/**
 * Normalize configuration read from saved markup before passing it to Swiper.
 *
 * @param {Object} config Saved Swiper configuration.
 * @return {Object} Runtime-ready configuration.
 */
export function prepareSwiperOptions( config ) {
	return prepareSwiperConfig( config ).options;
}
