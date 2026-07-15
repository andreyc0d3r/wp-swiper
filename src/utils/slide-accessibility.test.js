import { enableSlideAccessibility } from './slide-accessibility';

function createSlide( markup = '' ) {
	const slide = document.createElement( 'div' );
	slide.className = 'swiper-slide';
	slide.innerHTML = markup;
	return slide;
}

function createSwiper( slides, visibleSlides ) {
	const listeners = new Map();
	const wrapperEl = document.createElement( 'div' );
	wrapperEl.className = 'swiper-wrapper';
	slides.forEach( ( slide ) => wrapperEl.appendChild( slide ) );
	document.body.appendChild( wrapperEl );

	return {
		destroyed: false,
		slides,
		visibleSlides,
		wrapperEl,
		on( events, handler ) {
			events.split( ' ' ).forEach( ( event ) => {
				listeners.set( event, [
					...( listeners.get( event ) || [] ),
					handler,
				] );
			} );
		},
		emit( event ) {
			( listeners.get( event ) || [] ).forEach( ( handler ) =>
				handler( this )
			);
		},
		updateSlidesProgress: jest.fn(),
	};
}

afterEach( () => {
	document.body.innerHTML = '';
} );

test( 'hides non-visible slides and restores tabindex values when they become visible', () => {
	const firstSlide = createSlide(
		'<button tabindex="2">First action</button>'
	);
	const secondSlide = createSlide(
		'<a href="#details">Details</a><input tabindex="4">'
	);
	const swiper = createSwiper( [ firstSlide, secondSlide ], [ firstSlide ] );

	enableSlideAccessibility( swiper );

	expect( firstSlide.hasAttribute( 'aria-hidden' ) ).toBe( false );
	expect(
		firstSlide.querySelector( 'button' ).getAttribute( 'tabindex' )
	).toBe( '2' );
	expect( secondSlide.getAttribute( 'aria-hidden' ) ).toBe( 'true' );
	expect( secondSlide.querySelector( 'a' ).getAttribute( 'tabindex' ) ).toBe(
		'-1'
	);
	expect(
		secondSlide.querySelector( 'input' ).getAttribute( 'tabindex' )
	).toBe( '-1' );

	swiper.visibleSlides = [ secondSlide ];
	swiper.emit( 'setTranslate' );

	expect( firstSlide.getAttribute( 'aria-hidden' ) ).toBe( 'true' );
	expect(
		firstSlide.querySelector( 'button' ).getAttribute( 'tabindex' )
	).toBe( '-1' );
	expect( secondSlide.hasAttribute( 'aria-hidden' ) ).toBe( false );
	expect( secondSlide.querySelector( 'a' ).hasAttribute( 'tabindex' ) ).toBe(
		false
	);
	expect(
		secondSlide.querySelector( 'input' ).getAttribute( 'tabindex' )
	).toBe( '4' );

	swiper.emit( 'destroy' );
} );

test( 'keeps every visible slide exposed when slidesPerView is greater than one', () => {
	const firstSlide = createSlide( '<a href="#first">First</a>' );
	const secondSlide = createSlide( '<a href="#second">Second</a>' );
	const thirdSlide = createSlide( '<a href="#third">Third</a>' );
	const swiper = createSwiper(
		[ firstSlide, secondSlide, thirdSlide ],
		[ firstSlide, secondSlide ]
	);

	enableSlideAccessibility( swiper );

	expect( firstSlide.hasAttribute( 'aria-hidden' ) ).toBe( false );
	expect( secondSlide.hasAttribute( 'aria-hidden' ) ).toBe( false );
	expect( thirdSlide.getAttribute( 'aria-hidden' ) ).toBe( 'true' );
	expect( thirdSlide.querySelector( 'a' ).getAttribute( 'tabindex' ) ).toBe(
		'-1'
	);

	swiper.emit( 'destroy' );
} );

test( 'updates focusability when content is added to or removed from a hidden slide', async () => {
	const visibleSlide = createSlide();
	const hiddenSlide = createSlide();
	const swiper = createSwiper(
		[ visibleSlide, hiddenSlide ],
		[ visibleSlide ]
	);

	enableSlideAccessibility( swiper );

	const button = document.createElement( 'button' );
	hiddenSlide.appendChild( button );
	await new Promise( ( resolve ) => setTimeout( resolve, 0 ) );

	expect( button.getAttribute( 'tabindex' ) ).toBe( '-1' );

	hiddenSlide.removeChild( button );
	await new Promise( ( resolve ) => setTimeout( resolve, 0 ) );

	expect( button.hasAttribute( 'tabindex' ) ).toBe( false );

	swiper.emit( 'destroy' );
} );

test( 'restores managed attributes when Swiper is destroyed', () => {
	const slide = createSlide( '<button tabindex="5">Action</button>' );
	slide.setAttribute( 'aria-hidden', 'false' );
	const swiper = createSwiper( [ slide ], [] );

	enableSlideAccessibility( swiper );
	expect( slide.getAttribute( 'aria-hidden' ) ).toBe( 'true' );
	expect( slide.querySelector( 'button' ).getAttribute( 'tabindex' ) ).toBe(
		'-1'
	);

	swiper.emit( 'destroy' );

	expect( slide.getAttribute( 'aria-hidden' ) ).toBe( 'false' );
	expect( slide.querySelector( 'button' ).getAttribute( 'tabindex' ) ).toBe(
		'5'
	);
} );
