import {
	destroySwiperElement,
	initializeSwiperElement,
	initializeSwipers,
	observeSwipers,
	reinitializeSwiperElement,
} from './swiper-lifecycle';

jest.mock( './slide-accessibility', () => ( {
	enableSlideAccessibility: jest.fn(),
} ) );

function createSlider( config = {}, additionalMarkup = '' ) {
	const slider = document.createElement( 'div' );
	slider.className = 'wp-swiper';
	slider.innerHTML = `
		<div class="wp-swiper__wrapper">
			<div class="swiper-container" data-swiper='${ JSON.stringify( config ) }'>
				<div class="swiper-wrapper">
					<div class="swiper-slide wp-swiper__slide"></div>
				</div>
			</div>
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
			<div class="swiper-pagination"></div>
		</div>
		${ additionalMarkup }
	`;
	return slider;
}

function createSwiperClass() {
	return jest.fn().mockImplementation( ( element, options ) => {
		const instance = {
			element,
			options,
			destroyed: false,
			slides: Array.from( element.querySelectorAll( '.swiper-slide' ) ),
			visibleSlides: [],
			wrapperEl: element.querySelector( '.swiper-wrapper' ),
			on: jest.fn(),
		};
		if ( options.autoplay ) {
			instance.autoplay = {
				paused: false,
				running: true,
				pause: jest.fn(),
				resume: jest.fn(),
				start: jest.fn(),
			};
		}
		instance.destroy = jest.fn( () => {
			instance.destroyed = true;
		} );
		return instance;
	} );
}

beforeEach( () => {
	document.body.innerHTML = '';
	window.wpSwiper = [];
	window.wpSwiperThumbs = [];
} );

test( 'initializes navigation and pagination with elements from its own slider', () => {
	const SwiperClass = createSwiperClass();
	const slider = createSlider( {
		navigation: true,
		pagination: {
			type: 'bullets',
		},
	} );

	const instance = initializeSwiperElement( slider, {
		SwiperClass,
		index: 3,
	} );

	expect( slider.classList.contains( 'wp-swiper--3' ) ).toBe( true );
	expect( instance.options.navigation ).toEqual( {
		nextEl: slider.querySelector( '.swiper-button-next' ),
		prevEl: slider.querySelector( '.swiper-button-prev' ),
	} );
	expect( instance.options.pagination.el ).toBe(
		slider.querySelector( '.swiper-pagination' )
	);
} );

test( 'keeps controls isolated across multiple sliders', () => {
	const SwiperClass = createSwiperClass();
	const firstSlider = createSlider( {
		navigation: true,
		pagination: true,
	} );
	const secondSlider = createSlider( {
		navigation: true,
		pagination: true,
	} );
	document.body.append( firstSlider, secondSlider );

	const instances = initializeSwipers( document, {
		SwiperClass,
	} );

	expect( instances ).toHaveLength( 2 );
	expect( instances[ 0 ].options.navigation.nextEl ).toBe(
		firstSlider.querySelector( '.swiper-button-next' )
	);
	expect( instances[ 0 ].options.pagination.el ).toBe(
		firstSlider.querySelector( '.swiper-pagination' )
	);
	expect( instances[ 1 ].options.navigation.nextEl ).toBe(
		secondSlider.querySelector( '.swiper-button-next' )
	);
	expect( instances[ 1 ].options.pagination.el ).toBe(
		secondSlider.querySelector( '.swiper-pagination' )
	);
} );

test( 'only renders the autoplay control when explicitly enabled', () => {
	const SwiperClass = createSwiperClass();
	const defaultSlider = createSlider( {
		autoplay: {
			delay: 3000,
		},
	} );
	const enabledSlider = createSlider( {
		autoplay: {
			delay: 3000,
		},
		showAutoplayControl: true,
	} );

	initializeSwiperElement( defaultSlider, {
		SwiperClass,
	} );
	const enabledInstance = initializeSwiperElement( enabledSlider, {
		SwiperClass,
		index: 1,
	} );

	expect(
		defaultSlider.querySelector( '.wp-swiper__autoplay-toggle' )
	).toBeNull();
	expect(
		enabledSlider.querySelector( '.wp-swiper__autoplay-toggle' )
	).not.toBeNull();
	expect( enabledInstance.options ).not.toHaveProperty(
		'showAutoplayControl'
	);
} );

test( 'does not initialize the same slider twice', () => {
	const SwiperClass = createSwiperClass();
	const slider = createSlider();

	const first = initializeSwiperElement( slider, {
		SwiperClass,
	} );
	const second = initializeSwiperElement( slider, {
		SwiperClass,
	} );

	expect( second ).toBe( first );
	expect( SwiperClass ).toHaveBeenCalledTimes( 1 );
	expect(
		slider.querySelector( '.swiper-container' ).__wpSwiperInstance
	).toBe( first );
} );

test( 'isolates invalid configuration to one slider', () => {
	const SwiperClass = createSwiperClass();
	const invalidSlider = createSlider();
	invalidSlider
		.querySelector( '.swiper-container' )
		.setAttribute( 'data-swiper', '{invalid' );
	const validSlider = createSlider( {
		slidesPerView: 2,
	} );
	document.body.append( invalidSlider, validSlider );

	const errors = [];
	window.addEventListener(
		'wp-swiper:error',
		( event ) => errors.push( event.detail ),
		{ once: true }
	);

	const initialized = initializeSwipers( document, {
		SwiperClass,
	} );

	expect( initialized ).toHaveLength( 1 );
	expect( initialized[ 0 ].element ).toBe(
		validSlider.querySelector( '.swiper-container' )
	);
	expect( errors ).toHaveLength( 1 );
	expect( errors[ 0 ].element ).toBe( invalidSlider );
} );

test( 'initializes sliders inserted after page load', async () => {
	const SwiperClass = createSwiperClass();
	const observer = observeSwipers( document.body, {
		SwiperClass,
	} );
	const slider = createSlider();

	document.body.appendChild( slider );
	await new Promise( ( resolve ) => setTimeout( resolve, 0 ) );

	expect( SwiperClass ).toHaveBeenCalledTimes( 1 );
	observer.disconnect();
} );

test( 'dispatches structured warnings for corrected compatibility options', () => {
	const SwiperClass = createSwiperClass();
	const slider = createSlider( {
		autoSlideWidth: true,
		effect: 'fade',
		slidesPerGroup: 2,
		slidesPerView: 3,
	} );
	const warnings = [];
	window.addEventListener( 'wp-swiper:warning', ( event ) =>
		warnings.push( event.detail )
	);

	const instance = initializeSwiperElement( slider, {
		SwiperClass,
	} );

	expect( instance.options.slidesPerGroup ).toBe( 1 );
	expect( instance.options.slidesPerView ).toBe( 1 );
	expect( instance.options ).not.toHaveProperty( 'autoSlideWidth' );
	expect( warnings.map( ( warning ) => warning.diagnostic.code ) ).toEqual(
		expect.arrayContaining( [
			'auto_width_disabled_for_effect',
			'effect_requires_single_group',
			'effect_requires_single_slide',
		] )
	);
	expect(
		warnings.every(
			( warning ) =>
				warning.element ===
					slider.querySelector( '.swiper-container' ) &&
				warning.diagnostic.level === 'warning'
		)
	).toBe( true );
} );

test( 'destroys and reinitializes instances owned by their containers', () => {
	const SwiperClass = createSwiperClass();
	const slider = createSlider();
	const first = initializeSwiperElement( slider, {
		SwiperClass,
		index: 2,
	} );

	expect( destroySwiperElement( slider ) ).toBe( true );
	expect( first.destroy ).toHaveBeenCalledWith( true, true );
	expect(
		slider.querySelector( '.swiper-container' ).__wpSwiperInstance
	).toBeUndefined();

	const second = reinitializeSwiperElement( slider, {
		SwiperClass,
		index: 2,
	} );

	expect( second ).not.toBe( first );
	expect( SwiperClass ).toHaveBeenCalledTimes( 2 );
	expect(
		slider.querySelector( '.swiper-container' ).__wpSwiperInstance
	).toBe( second );
} );
