// React and react-dom are provided transitively by the WordPress test environment.
// eslint-disable-next-line import/no-extraneous-dependencies
const React = require( 'react' );
// eslint-disable-next-line import/no-extraneous-dependencies
const { createRoot } = require( 'react-dom/client' );

const useActiveSlide = require( './use-active-slide' ).default;
const useSlideCollection = require( './use-slide-collection' ).default;

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

function createSlide( clientId, index, overrides = {} ) {
	return {
		clientId,
		attributes: {
			slug: `slide-${ index }`,
			slideImg: '',
			thumbImg: '',
			...overrides,
		},
		innerBlocks: [],
	};
}

function createTab( clientId, index, overrides = {} ) {
	return {
		clientId,
		slug: `slide-${ index }`,
		slideImg: '',
		thumbImg: '',
		...overrides,
	};
}

function getCollectionSettings( overrides = {} ) {
	const innerBlocks = [ createSlide( 'first', 1 ) ];
	const tabsData = [ createTab( 'first', 1 ) ];

	return {
		clientId: 'parent',
		createSlideBlock: jest.fn( ( name, attributes, childBlocks = [] ) => ( {
			name,
			attributes,
			clientId: `created-${ attributes.slug }`,
			innerBlocks: childBlocks,
		} ) ),
		getInnerBlocks: jest.fn( () => innerBlocks ),
		innerBlocks,
		removeBlock: jest.fn(),
		replaceInnerBlocks: jest.fn(),
		setAttributes: jest.fn(),
		tabActive: 'slide-1',
		tabsData,
		updateBlockAttributes: jest.fn(),
		...overrides,
	};
}

afterEach( () => {
	while ( mountedRoots.length > 0 ) {
		const root = mountedRoots.pop();
		React.act( () => root.unmount() );
	}
} );

test( 'active-slide helpers read and update the persisted active slug', () => {
	const setAttributes = jest.fn();
	const getHook = renderHook( useActiveSlide, {
		tabActive: 'slide-1',
		setAttributes,
	} );

	expect( getHook().isActiveSlide( 'slide-1' ) ).toBe( true );
	expect( getHook().isActiveSlide( 'slide-2' ) ).toBe( false );

	React.act( () => getHook().selectSlide( 'slide-2' ) );

	expect( setAttributes ).toHaveBeenCalledWith( {
		tabActive: 'slide-2',
	} );
} );

test( 'collection hook synchronizes reordered slide identity', () => {
	const first = createSlide( 'first', 1 );
	const second = createSlide( 'second', 2 );
	const settings = getCollectionSettings( {
		innerBlocks: [ second, first ],
		tabsData: [ createTab( 'first', 1 ), createTab( 'second', 2 ) ],
		tabActive: 'slide-2',
	} );

	renderHook( useSlideCollection, settings );

	expect( settings.updateBlockAttributes ).toHaveBeenNthCalledWith(
		1,
		'second',
		{
			slug: 'slide-1',
		}
	);
	expect( settings.updateBlockAttributes ).toHaveBeenNthCalledWith(
		2,
		'first',
		{
			slug: 'slide-2',
		}
	);
	expect( settings.setAttributes ).toHaveBeenCalledWith( {
		tabsData: [ createTab( 'second', 1 ), createTab( 'first', 2 ) ],
		tabActive: 'slide-1',
	} );
} );

test( 'collection hook appends and selects a blank slide', () => {
	const settings = getCollectionSettings();
	const getHook = renderHook( useSlideCollection, settings );

	React.act( () => getHook().addSlide() );

	const newBlock = {
		name: 'da/wp-swiper-slide',
		attributes: {
			slug: 'slide-2',
		},
		clientId: 'created-slide-2',
		innerBlocks: [],
	};
	expect( settings.replaceInnerBlocks ).toHaveBeenCalledWith(
		'parent',
		[ settings.innerBlocks[ 0 ], newBlock ],
		false
	);
	expect( settings.setAttributes ).toHaveBeenCalledWith( {
		tabsData: [
			createTab( 'first', 1 ),
			createTab( 'created-slide-2', 2 ),
		],
		tabActive: 'slide-2',
	} );
} );

test( 'collection hook adds media through the existing collection contract', () => {
	const settings = getCollectionSettings();
	const getHook = renderHook( useSlideCollection, settings );

	let wasAdded;
	React.act( () => {
		wasAdded = getHook().addMedia( {
			id: 10,
			url: 'image.jpg',
		} );
	} );

	expect( wasAdded ).toBe( true );
	expect( settings.replaceInnerBlocks ).toHaveBeenCalledWith(
		'parent',
		[
			expect.objectContaining( {
				clientId: 'created-slide-1',
				attributes: expect.objectContaining( {
					slideImg: 'image.jpg',
					slideImgId: 10,
					slug: 'slide-1',
					thumbImg: 'image.jpg',
				} ),
			} ),
		],
		false
	);
	expect( settings.setAttributes ).toHaveBeenCalledWith( {
		tabsData: [
			{
				clientId: 'created-slide-1',
				slideImg: 'image.jpg',
				slug: 'slide-1',
				thumbImg: 'image.jpg',
			},
		],
		tabActive: 'slide-1',
	} );
} );

test( 'collection actions read the latest inner blocks when they run', () => {
	const settings = getCollectionSettings();
	const getHook = renderHook( useSlideCollection, settings );
	const latestChild = {
		clientId: 'nested-content',
	};
	settings.getInnerBlocks.mockImplementation( () => [
		{
			...createSlide( 'first', 1 ),
			innerBlocks: [ latestChild ],
		},
	] );

	React.act( () => {
		getHook().addMedia( {
			id: 10,
			url: 'image.jpg',
		} );
	} );

	expect( settings.getInnerBlocks ).toHaveBeenCalledTimes( 1 );
	expect(
		settings.replaceInnerBlocks.mock.calls[ 0 ][ 1 ][ 0 ].innerBlocks
	).toEqual( [ latestChild ] );
} );

test( 'collection hook removes a slide and preserves a valid selection', () => {
	const settings = getCollectionSettings( {
		innerBlocks: [
			createSlide( 'first', 1 ),
			createSlide( 'second', 2 ),
			createSlide( 'third', 3 ),
		],
		tabsData: [
			createTab( 'first', 1 ),
			createTab( 'second', 2 ),
			createTab( 'third', 3 ),
		],
		tabActive: 'slide-2',
	} );
	const getHook = renderHook( useSlideCollection, settings );

	React.act( () => getHook().removeSlide( 1 ) );

	expect( settings.removeBlock ).toHaveBeenCalledWith( 'second' );
	expect( settings.updateBlockAttributes ).toHaveBeenNthCalledWith(
		1,
		'first',
		{
			slug: 'slide-1',
		}
	);
	expect( settings.updateBlockAttributes ).toHaveBeenNthCalledWith(
		2,
		'third',
		{
			slug: 'slide-2',
		}
	);
	expect( settings.setAttributes ).toHaveBeenCalledWith( {
		tabsData: [ createTab( 'first', 1 ), createTab( 'third', 2 ) ],
		tabActive: 'slide-2',
	} );
} );

test( 'collection hook removes the parent when its only slide is removed', () => {
	const settings = getCollectionSettings();
	const getHook = renderHook( useSlideCollection, settings );

	React.act( () => getHook().removeSlide( 0 ) );

	expect( settings.removeBlock ).toHaveBeenCalledWith( 'parent' );
	expect( settings.setAttributes ).not.toHaveBeenCalled();
} );
