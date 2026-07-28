import {
	addMediaToSlideCollection,
	getSlideMediaAttributes,
	removeSlideFromCollection,
	synchronizeSlideCollection,
} from './slide-collection';

function createBlock( name, attributes, innerBlocks = [] ) {
	return {
		name,
		attributes,
		innerBlocks,
		clientId: `client-${ attributes.slideImgId || attributes.slug }`,
	};
}

test( 'normalizes media returned by MediaUpload and the REST API', () => {
	expect(
		getSlideMediaAttributes( {
			id: 10,
			url: 'original.jpg',
			sizes: {
				full: {
					url: 'full.jpg',
				},
				thumbnail: {
					url: 'thumb.jpg',
				},
			},
		} )
	).toEqual( {
		slideImg: 'full.jpg',
		slideImgId: 10,
		thumbImg: 'thumb.jpg',
	} );

	expect(
		getSlideMediaAttributes( {
			id: 11,
			source_url: 'rest-full.jpg',
			media_details: {
				sizes: {
					medium: {
						source_url: 'rest-medium.jpg',
					},
				},
			},
		} )
	).toEqual( {
		slideImg: 'rest-full.jpg',
		slideImgId: 11,
		thumbImg: 'rest-medium.jpg',
	} );
} );

test( 'uses the empty initial slide for the first selected image', () => {
	const existingContent = [
		{
			name: 'core/paragraph',
		},
	];
	const result = addMediaToSlideCollection( {
		mediaItems: [
			{
				id: 10,
				url: 'first.jpg',
			},
			{
				id: 11,
				url: 'second.jpg',
			},
		],
		tabsData: [
			{
				clientId: 'empty',
				slug: 'slide-1',
				slideImg: '',
				thumbImg: '',
			},
		],
		innerBlocks: [
			{
				clientId: 'empty',
				attributes: {
					slug: 'slide-1',
				},
				innerBlocks: existingContent,
			},
		],
		createBlock,
	} );

	expect( result.addedCount ).toBe( 2 );
	expect( result.innerBlocks ).toHaveLength( 2 );
	expect( result.innerBlocks[ 0 ].innerBlocks ).toBe( existingContent );
	expect( result.tabsData.map( ( tab ) => tab.slideImg ) ).toEqual( [
		'first.jpg',
		'second.jpg',
	] );
	expect( result.tabActive ).toBe( 'slide-1' );
} );

test( 'appends selected images when the current slide contains media', () => {
	const result = addMediaToSlideCollection( {
		mediaItems: [
			{
				id: 10,
				url: 'new.jpg',
			},
		],
		tabsData: [
			{
				clientId: 'existing',
				slug: 'slide-1',
				slideImg: 'existing.jpg',
			},
		],
		innerBlocks: [
			{
				clientId: 'existing',
				attributes: {
					slug: 'slide-1',
					slideImg: 'existing.jpg',
				},
			},
		],
		createBlock,
	} );

	expect( result.tabsData ).toHaveLength( 2 );
	expect( result.tabsData[ 1 ].slideImg ).toBe( 'new.jpg' );
	expect( result.tabActive ).toBe( 'slide-2' );
} );

test( 'preserves the active slide identity after reordering', () => {
	const tabsData = [
		{
			clientId: 'first',
			slug: 'slide-1',
		},
		{
			clientId: 'second',
			slug: 'slide-2',
		},
	];
	const result = synchronizeSlideCollection(
		[
			{
				clientId: 'second',
				attributes: {
					slug: 'slide-2',
				},
			},
			{
				clientId: 'first',
				attributes: {
					slug: 'slide-1',
				},
			},
		],
		tabsData,
		'slide-2'
	);

	expect( result.tabsData.map( ( tab ) => tab.clientId ) ).toEqual( [
		'second',
		'first',
	] );
	expect( result.tabActive ).toBe( 'slide-1' );
} );

test( 'selects the next available slide after removing the active slide', () => {
	const tabsData = [
		{
			clientId: 'first',
			slug: 'slide-1',
		},
		{
			clientId: 'second',
			slug: 'slide-2',
		},
		{
			clientId: 'third',
			slug: 'slide-3',
		},
	];

	expect( removeSlideFromCollection( tabsData, 1, 'slide-2' ) ).toEqual( {
		tabsData: [
			{
				clientId: 'first',
				slug: 'slide-1',
			},
			{
				clientId: 'third',
				slug: 'slide-2',
			},
		],
		tabActive: 'slide-2',
	} );
} );

test( 'preserves active slide identity when another slide is removed', () => {
	const tabsData = [
		{
			clientId: 'first',
			slug: 'slide-1',
		},
		{
			clientId: 'second',
			slug: 'slide-2',
		},
		{
			clientId: 'third',
			slug: 'slide-3',
		},
	];

	expect(
		removeSlideFromCollection( tabsData, 0, 'slide-3' ).tabActive
	).toBe( 'slide-2' );
} );
