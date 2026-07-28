import {
	buildSwiperConfig,
	normalizeSliderAttributes,
	parseSwiperBreakpoints,
	parseSwiperConfig,
	prepareSwiperOptions,
	SwiperConfigValidationError,
} from './swiper-config';
import { swiperConfigFixtures } from './swiper-config.fixtures';

test( 'normalizes runtime attributes without mutating block attributes', () => {
	const attributes = {
		autoplay: 'false',
		delay: '4500',
		loopAdditionalSlides: '2',
		mousewheel: 'true',
		slidesPerGroup: '2',
		slidesPerView: '1.5',
	};

	expect( normalizeSliderAttributes( attributes ) ).toEqual( {
		autoplay: false,
		delay: 4500,
		loopAdditionalSlides: 2,
		mousewheel: true,
		slidesPerGroup: 2,
		slidesPerView: 1.5,
	} );
	expect( attributes ).toEqual( {
		autoplay: 'false',
		delay: '4500',
		loopAdditionalSlides: '2',
		mousewheel: 'true',
		slidesPerGroup: '2',
		slidesPerView: '1.5',
	} );
} );

test( 'builds independent mousewheel and release-on-edges settings', () => {
	expect(
		buildSwiperConfig( {
			slidesPerView: '1',
			mousewheel: true,
			releaseOnEdges: false,
		} ).mousewheel
	).toEqual( {
		releaseOnEdges: false,
	} );

	expect(
		buildSwiperConfig( {
			slidesPerView: '1',
			mousewheel: true,
			releaseOnEdges: true,
		} ).mousewheel
	).toEqual( {
		releaseOnEdges: true,
	} );

	expect(
		buildSwiperConfig( {
			slidesPerView: '1',
			mousewheel: false,
			releaseOnEdges: true,
		} )
	).not.toHaveProperty( 'mousewheel' );
} );

test( 'keeps disabled pagination disabled', () => {
	expect(
		buildSwiperConfig( {
			slidesPerView: '1',
			pagination: false,
		} ).pagination
	).toBe( false );
} );

test( 'preserves explicit autoplay boolean settings', () => {
	expect(
		buildSwiperConfig( {
			slidesPerView: '1',
			autoplay: true,
			delay: 5000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
			reverseDirection: false,
			stopOnLastSlide: false,
			waitForTransition: true,
		} ).autoplay
	).toEqual( {
		delay: 5000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
		reverseDirection: false,
		stopOnLastSlide: false,
		waitForTransition: true,
	} );
} );

test.each( [
	[ '{"720":{"slidesPerView":2}}', { 720: { slidesPerView: 2 } } ],
	[ '{\\"720\\":{\\"slidesPerView\\":2}}', { 720: { slidesPerView: 2 } } ],
	[ { 720: { slidesPerView: 2 } }, { 720: { slidesPerView: 2 } } ],
] )( 'parses breakpoint representation %p', ( value, expected ) => {
	expect( parseSwiperBreakpoints( value ) ).toEqual( expected );
} );

test.each( [ 'invalid', '[]', '"string"', '42' ] )(
	'rejects invalid breakpoint representation %p',
	( value ) => {
		expect( () => parseSwiperBreakpoints( value ) ).toThrow();
	}
);

test( 'normalizes breakpoint options without mutating saved configuration', () => {
	const savedConfig = {
		slidesPerView: '1.2',
		breakpoints: '{"720":{"slidesPerView":"2.5","spaceBetween":20}}',
	};
	const options = prepareSwiperOptions( savedConfig );

	expect( options ).toEqual( {
		slidesPerView: 1.2,
		watchSlidesProgress: true,
		breakpoints: {
			720: {
				slidesPerView: 2.5,
				spaceBetween: 20,
				watchSlidesProgress: true,
			},
		},
	} );
	expect( savedConfig.breakpoints ).toBe(
		'{"720":{"slidesPerView":"2.5","spaceBetween":20}}'
	);
} );

test( 'accepts equivalent positive slides-per-view number formats', () => {
	const parsed = parseSwiperConfig( {
		slidesPerView: '1.0',
		breakpoints: {
			720: {
				slidesPerView: '01.00',
			},
		},
	} );

	expect( parsed.options.slidesPerView ).toBe( 1 );
	expect( parsed.options.breakpoints[ 720 ].slidesPerView ).toBe( 1 );
	expect( parsed.diagnostics ).toEqual( [] );
} );

test( 'rejects breakpoint entries that are not objects', () => {
	expect( () =>
		prepareSwiperOptions( {
			breakpoints: '{"720":2}',
		} )
	).toThrow( 'Swiper breakpoint 720 must contain a JSON object.' );
} );

test( 'returns structured compatibility diagnostics and safe runtime options', () => {
	const parsed = parseSwiperConfig( {
		autoSlideWidth: true,
		autoplay: {
			stopOnLastSlide: true,
		},
		effect: 'fade',
		freeMode: {
			enabled: true,
		},
		loop: true,
		slidesPerGroup: 3,
		slidesPerGroupAuto: true,
		slidesPerView: 'auto',
	} );

	expect( parsed.options ).toEqual(
		expect.objectContaining( {
			autoplay: {
				stopOnLastSlide: false,
			},
			effect: 'fade',
			freeMode: false,
			loop: true,
			slidesPerGroup: 1,
			slidesPerGroupAuto: false,
			slidesPerView: 1,
			watchSlidesProgress: true,
		} )
	);
	expect( parsed.options ).not.toHaveProperty( 'autoSlideWidth' );
	expect(
		parsed.diagnostics.map( ( diagnostic ) => diagnostic.code )
	).toEqual(
		expect.arrayContaining( [
			'auto_width_disabled_for_effect',
			'effect_requires_single_group',
			'effect_requires_single_slide',
			'free_mode_disabled_for_effect',
			'group_auto_disabled',
			'loop_ignores_last_slide',
		] )
	);
	expect(
		parsed.diagnostics.every(
			( diagnostic ) =>
				diagnostic.level === 'warning' &&
				diagnostic.message &&
				diagnostic.path
		)
	).toBe( true );
} );

test( 'migrates the legacy mousewheel release option at runtime', () => {
	const parsed = parseSwiperConfig( {
		mousewheel: {
			releaseOnEdges: false,
		},
		releaseOnEdges: true,
	} );

	expect( parsed.options.mousewheel ).toEqual( {
		releaseOnEdges: true,
	} );
	expect( parsed.options ).not.toHaveProperty( 'releaseOnEdges' );
	expect( parsed.diagnostics ).toContainEqual(
		expect.objectContaining( {
			code: 'legacy_release_on_edges',
			level: 'warning',
		} )
	);
} );

test( 'removes unsupported breakpoint options and preserves supported values', () => {
	const parsed = parseSwiperConfig( {
		effect: 'slide',
		breakpoints: {
			720: {
				direction: 'vertical',
				effect: 'fade',
				loop: true,
				slidesPerView: '2.5',
				spaceBetween: '20',
			},
		},
	} );

	expect( parsed.options.breakpoints ).toEqual( {
		720: {
			slidesPerView: 2.5,
			spaceBetween: 20,
			watchSlidesProgress: true,
		},
	} );
	expect(
		parsed.diagnostics.filter(
			( diagnostic ) =>
				diagnostic.code === 'unsupported_breakpoint_option'
		)
	).toHaveLength( 3 );
} );

test( 'validates breakpoint grouping against inherited base options', () => {
	const parsed = parseSwiperConfig( {
		slidesPerGroup: 2,
		slidesPerView: 'auto',
		breakpoints: {
			720: {
				slidesPerGroupAuto: true,
			},
		},
	} );

	expect( parsed.options.breakpoints[ 720 ].slidesPerGroupAuto ).toBe(
		false
	);
	expect( parsed.diagnostics ).toContainEqual(
		expect.objectContaining( {
			code: 'group_auto_disabled',
			path: 'config.breakpoints.720.slidesPerGroupAuto',
		} )
	);
} );

test.each( [
	[ '{invalid', 'invalid_json' ],
	[ '[]', 'invalid_config' ],
	[ '{"breakpoints":{"wide":{"slidesPerView":2}}}', 'invalid_breakpoint' ],
	[ '{"slidesPerGroup":0}', 'invalid_number' ],
] )( 'rejects unsafe runtime configuration %p', ( value, code ) => {
	let thrownError;
	try {
		parseSwiperConfig( value );
	} catch ( error ) {
		thrownError = error;
	}

	expect( thrownError ).toBeInstanceOf( SwiperConfigValidationError );
	expect( thrownError.diagnostics ).toContainEqual(
		expect.objectContaining( {
			code,
			level: 'error',
		} )
	);
} );

test( 'prepares thumbnail configuration through the same parser', () => {
	const parsed = parseSwiperConfig(
		'{"freeMode":true,"slidesPerView":"4","spaceBetween":"10"}',
		{ kind: 'thumbs' }
	);

	expect( parsed.options ).toEqual( {
		freeMode: true,
		slidesPerView: 4,
		spaceBetween: 10,
		watchSlidesProgress: true,
	} );
	expect( parsed.diagnostics ).toEqual( [] );
} );

test.each( swiperConfigFixtures )(
	'$name keeps builder and frontend parser output in parity',
	( { attributes, expectedRuntime } ) => {
		const serializedConfig = JSON.stringify(
			buildSwiperConfig( attributes )
		);
		const parsed = parseSwiperConfig( serializedConfig );

		expect( parsed.options ).toEqual(
			expect.objectContaining( expectedRuntime )
		);
	}
);
