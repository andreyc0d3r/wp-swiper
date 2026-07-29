import {
	enableCarouselAccessibility,
	getCarouselLabel,
} from './carousel-accessibility';

function createSwiper() {
	const listeners = new Map();
	const autoplay = {
		paused: false,
		running: true,
		pause: jest.fn( () => {
			autoplay.paused = true;
		} ),
		resume: jest.fn( () => {
			autoplay.paused = false;
			autoplay.running = true;
		} ),
		start: jest.fn( () => {
			autoplay.paused = false;
			autoplay.running = true;
		} ),
	};

	return {
		autoplay,
		on( events, handler ) {
			events.split( ' ' ).forEach( ( event ) => {
				listeners.set( event, handler );
			} );
		},
		emit( event ) {
			listeners.get( event )?.();
		},
	};
}

function createSlider( label = '' ) {
	const slider = document.createElement( 'div' );
	slider.className = 'wp-swiper';
	if ( label ) {
		slider.dataset.carouselLabel = label;
	}
	slider.innerHTML = `
		<div class="wp-swiper__wrapper">
			<div class="swiper-container"></div>
		</div>
	`;
	document.body.appendChild( slider );
	return slider;
}

afterEach( () => {
	document.body.innerHTML = '';
} );

test( 'uses a custom carousel label or a numbered fallback', () => {
	expect( getCarouselLabel( createSlider( 'Featured products' ), 0 ) ).toBe(
		'Featured products'
	);
	expect( getCarouselLabel( createSlider(), 2 ) ).toBe( 'Carousel 3' );
} );

test( 'adds carousel semantics and toggles autoplay', () => {
	const slider = createSlider( 'Customer stories' );
	const swiper = createSwiper();
	const reducedMotionQuery = {
		matches: false,
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
	};

	enableCarouselAccessibility( slider, swiper, {
		index: 0,
		reducedMotionQuery,
	} );

	expect( slider.getAttribute( 'role' ) ).toBe( 'region' );
	expect( slider.getAttribute( 'aria-roledescription' ) ).toBe( 'carousel' );
	expect( slider.getAttribute( 'aria-label' ) ).toBe( 'Customer stories' );
	expect(
		slider.querySelector( '.swiper-container' ).getAttribute( 'aria-label' )
	).toBe( 'Customer stories' );

	const button = slider.querySelector( '.wp-swiper__autoplay-toggle' );
	expect( button.textContent ).toBe( 'Pause autoplay' );
	expect( button.getAttribute( 'aria-label' ) ).toBe( 'Pause autoplay' );
	expect( button.getAttribute( 'title' ) ).toBe( 'Pause autoplay' );
	expect( button.getAttribute( 'data-autoplay-running' ) ).toBe( 'true' );
	expect(
		button.querySelector( '.wp-swiper__autoplay-label' ).textContent
	).toBe( 'Pause autoplay' );

	button.click();
	expect( swiper.autoplay.pause ).toHaveBeenCalledTimes( 1 );
	expect( button.textContent ).toBe( 'Start autoplay' );
	expect( button.getAttribute( 'data-autoplay-running' ) ).toBe( 'false' );

	button.click();
	expect( swiper.autoplay.resume ).toHaveBeenCalledTimes( 1 );
	expect( button.textContent ).toBe( 'Pause autoplay' );
} );

test( 'pauses autoplay when reduced motion is requested', () => {
	const slider = createSlider();
	const swiper = createSwiper();
	const reducedMotionQuery = {
		matches: true,
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
	};

	enableCarouselAccessibility( slider, swiper, {
		reducedMotionQuery,
	} );

	expect( swiper.autoplay.pause ).toHaveBeenCalledTimes( 1 );
	expect(
		slider.querySelector( '.wp-swiper__autoplay-toggle' ).textContent
	).toBe( 'Start autoplay' );
} );

test( 'does not add an autoplay control when autoplay is unavailable', () => {
	const slider = createSlider();
	const swiper = {
		on: jest.fn(),
	};

	enableCarouselAccessibility( slider, swiper );

	expect( slider.querySelector( '.wp-swiper__autoplay-toggle' ) ).toBeNull();
} );

test( 'does not add an autoplay control when autoplay is disabled', () => {
	const slider = createSlider();
	const swiper = createSwiper();

	enableCarouselAccessibility( slider, swiper, {
		autoplayEnabled: false,
	} );

	expect( slider.querySelector( '.wp-swiper__autoplay-toggle' ) ).toBeNull();
} );

test( 'honors reduced motion when the autoplay control is hidden', () => {
	const slider = createSlider();
	const swiper = createSwiper();
	const reducedMotionQuery = {
		matches: true,
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
	};

	enableCarouselAccessibility( slider, swiper, {
		reducedMotionQuery,
		showControl: false,
	} );

	expect( slider.querySelector( '.wp-swiper__autoplay-toggle' ) ).toBeNull();
	expect( swiper.autoplay.pause ).toHaveBeenCalledTimes( 1 );
	expect( reducedMotionQuery.addEventListener ).toHaveBeenCalledWith(
		'change',
		expect.any( Function )
	);
} );

test( 'starts autoplay again after it has stopped', () => {
	const slider = createSlider();
	const swiper = createSwiper();
	swiper.autoplay.running = false;

	enableCarouselAccessibility( slider, swiper, {
		autoplayEnabled: true,
	} );
	slider.querySelector( '.wp-swiper__autoplay-toggle' ).click();

	expect( swiper.autoplay.start ).toHaveBeenCalledTimes( 1 );
	expect( swiper.autoplay.resume ).not.toHaveBeenCalled();
} );
