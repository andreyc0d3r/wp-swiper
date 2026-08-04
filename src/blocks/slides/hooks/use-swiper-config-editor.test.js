// React and react-dom are provided transitively by the WordPress test environment.
// eslint-disable-next-line import/no-extraneous-dependencies
const React = require( 'react' );
// eslint-disable-next-line import/no-extraneous-dependencies
const { createRoot } = require( 'react-dom/client' );

const useSwiperConfigEditor = require( './use-swiper-config-editor' ).default;
const {
	getAttributesFromSwiperConfig,
} = require( '../utils/swiper-config-editor' );

global.IS_REACT_ACT_ENVIRONMENT = true;

const mountedRoots = [];

function renderHook( hook, initialProps ) {
	let current;
	const container = document.createElement( 'div' );
	const root = createRoot( container );

	function HookHarness( { hookProps } ) {
		current = hook( hookProps );
		return null;
	}

	React.act( () => {
		root.render(
			React.createElement( HookHarness, {
				hookProps: initialProps,
			} )
		);
	} );
	mountedRoots.push( root );

	return () => current;
}

afterEach( () => {
	while ( mountedRoots.length > 0 ) {
		const root = mountedRoots.pop();
		React.act( () => root.unmount() );
	}
} );

test( 'maps nested Swiper options back to their existing block attributes', () => {
	const mappedConfig = getAttributesFromSwiperConfig(
		JSON.stringify( {
			slidesPerView: 2,
			autoplay: {
				delay: 3200,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
				reverseDirection: true,
				stopOnLastSlide: true,
				waitForTransition: false,
			},
			freeMode: {
				enabled: true,
				minimumVelocity: 0.1,
				momentum: false,
				momentumBounce: false,
				momentumBounceRatio: 0.5,
				momentumRatio: 0.8,
				momentumVelocityRatio: 0.9,
				sticky: true,
			},
			pagination: {
				type: 'fraction',
				clickable: true,
			},
			breakpoints: {
				720: {
					slidesPerView: 3,
				},
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		} )
	);

	expect( mappedConfig.attributes ).toEqual( {
		slidesPerView: '2',
		autoplay: true,
		delay: 3200,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
		reverseDirection: true,
		stopOnLastSlide: true,
		waitForTransition: false,
		freeMode: true,
		freeModeMinimumVelocity: 0.1,
		freeModeMomentum: false,
		freeModeMomentumBounce: false,
		freeModeMomentumBounceRatio: 0.5,
		freeModeMomentumRatio: 0.8,
		freeModeMomentumVelocityRatio: 0.9,
		freeModeSticky: true,
		pagination: true,
		pagination_type: 'fraction',
		clickable_pagination: true,
		breakpoints: '{"720":{"slidesPerView":3}}',
		mousewheel: true,
		releaseOnEdges: true,
	} );
	expect( mappedConfig.diagnostics ).toEqual( [] );
} );

test( 'initializes JSON from the current block attributes', () => {
	const getHook = renderHook( useSwiperConfigEditor, {
		attributes: {
			pagination: false,
			slidesPerView: '1.5',
		},
		setAttributes: jest.fn(),
	} );

	expect( JSON.parse( getHook().jsonValue ) ).toEqual(
		expect.objectContaining( {
			pagination: false,
			slidesPerView: 1.5,
		} )
	);
	expect( getHook().hasChanges ).toBe( false );
	expect( getHook().isValid ).toBe( true );
} );

test( 'reports invalid JSON and resets to the current configuration', () => {
	const getHook = renderHook( useSwiperConfigEditor, {
		attributes: {
			slidesPerView: '1',
		},
		setAttributes: jest.fn(),
	} );

	React.act( () => getHook().handleJsonChange( '{invalid' ) );

	expect( getHook().hasChanges ).toBe( true );
	expect( getHook().isValid ).toBe( false );
	expect( getHook().validationMessage ).not.toBe( '' );

	React.act( () => getHook().handleReset() );

	expect( JSON.parse( getHook().jsonValue ).slidesPerView ).toBe( 1 );
	expect( getHook().hasChanges ).toBe( false );
	expect( getHook().isValid ).toBe( true );
	expect( getHook().validationMessage ).toBe( '' );
} );

test( 'applies valid JSON through the block attribute updater', () => {
	const setAttributes = jest.fn();
	const getHook = renderHook( useSwiperConfigEditor, {
		attributes: {
			navigation: true,
			slidesPerView: '1',
		},
		setAttributes,
	} );

	React.act( () =>
		getHook().handleJsonChange(
			JSON.stringify( {
				navigation: false,
				slidesPerView: 2,
			} )
		)
	);
	React.act( () => getHook().handleSave() );

	expect( setAttributes ).toHaveBeenCalledWith( {
		navigation: false,
		slidesPerView: '2',
	} );
	expect( getHook().hasChanges ).toBe( false );
	expect( getHook().isValid ).toBe( true );
} );
