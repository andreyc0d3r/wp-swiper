function getSizedMediaUrl( media, size ) {
	return (
		media?.sizes?.[ size ]?.url ||
		media?.sizes?.[ size ]?.source_url ||
		media?.media_details?.sizes?.[ size ]?.source_url ||
		media?.media_details?.sizes?.[ size ]?.url ||
		''
	);
}

/**
 * Normalize WordPress MediaUpload and REST API media objects.
 *
 * @param {Object} media Media item.
 * @return {Object|null} Slide media attributes.
 */
export function getSlideMediaAttributes( media ) {
	const slideImg =
		getSizedMediaUrl( media, 'full' ) ||
		media?.source_url ||
		media?.url ||
		'';
	if ( ! slideImg ) {
		return null;
	}

	return {
		slideImg,
		slideImgId: media?.id,
		thumbImg:
			getSizedMediaUrl( media, 'thumbnail' ) ||
			getSizedMediaUrl( media, 'medium' ) ||
			slideImg,
	};
}

/**
 * Add selected media to a slide collection.
 *
 * @param {Object}   settings             Collection settings.
 * @param {Object[]} settings.mediaItems  Selected WordPress media items.
 * @param {Object[]} settings.tabsData    Current parent slide metadata.
 * @param {Object[]} settings.innerBlocks Current slide blocks.
 * @param {Function} settings.createBlock WordPress createBlock function.
 * @return {Object} Updated collection.
 */
export function addMediaToSlideCollection( {
	mediaItems,
	tabsData,
	innerBlocks,
	createBlock,
} ) {
	const mediaAttributes = mediaItems
		.map( getSlideMediaAttributes )
		.filter( Boolean );
	const nextTabs = tabsData.map( ( tab ) => ( {
		...tab,
	} ) );
	const nextBlocks = [ ...innerBlocks ];
	const firstSlideIsEmpty =
		nextTabs.length === 1 &&
		! nextTabs[ 0 ]?.slideImg &&
		nextBlocks.length === 1 &&
		! nextBlocks[ 0 ]?.attributes?.slideImg;
	let mediaIndex = 0;

	if ( firstSlideIsEmpty && mediaAttributes.length > 0 ) {
		const existingSlide = nextBlocks[ 0 ];
		const replacement = createBlock(
			'da/wp-swiper-slide',
			{
				...existingSlide.attributes,
				...mediaAttributes[ 0 ],
				slug: 'slide-1',
			},
			existingSlide.innerBlocks
		);

		nextBlocks[ 0 ] = replacement;
		nextTabs[ 0 ] = {
			clientId: replacement.clientId,
			slug: 'slide-1',
			slideImg: mediaAttributes[ 0 ].slideImg,
			thumbImg: mediaAttributes[ 0 ].thumbImg,
		};
		mediaIndex = 1;
	}

	for ( ; mediaIndex < mediaAttributes.length; mediaIndex++ ) {
		const slug = `slide-${ nextTabs.length + 1 }`;
		const newBlock = createBlock( 'da/wp-swiper-slide', {
			...mediaAttributes[ mediaIndex ],
			slug,
		} );

		nextBlocks.push( newBlock );
		nextTabs.push( {
			clientId: newBlock.clientId,
			slug,
			slideImg: mediaAttributes[ mediaIndex ].slideImg,
			thumbImg: mediaAttributes[ mediaIndex ].thumbImg,
		} );
	}

	let tabActive = null;
	if ( mediaAttributes.length > 0 ) {
		tabActive = firstSlideIsEmpty
			? 'slide-1'
			: nextTabs[ nextTabs.length - 1 ].slug;
	}

	return {
		addedCount: mediaAttributes.length,
		innerBlocks: nextBlocks,
		tabsData: nextTabs,
		tabActive,
	};
}

/**
 * Rebuild parent slide metadata from the current inner block order while
 * preserving the active slide by client ID.
 *
 * @param {Object[]} innerBlocks Current ordered slide blocks.
 * @param {Object[]} tabsData    Existing parent slide metadata.
 * @param {string}   tabActive   Existing active slide slug.
 * @return {Object} Synchronized tabs and active slug.
 */
export function synchronizeSlideCollection( innerBlocks, tabsData, tabActive ) {
	const activeClientId =
		tabsData.find( ( tab ) => tab.slug === tabActive )?.clientId ||
		innerBlocks.find( ( block ) => block.attributes.slug === tabActive )
			?.clientId;
	const synchronizedTabs = innerBlocks.map( ( block, index ) => ( {
		clientId: block.clientId,
		slideImg: block.attributes.slideImg,
		thumbImg: block.attributes.thumbImg,
		slug: `slide-${ index + 1 }`,
	} ) );
	const synchronizedActive =
		synchronizedTabs.find( ( tab ) => tab.clientId === activeClientId )
			?.slug ||
		synchronizedTabs[ 0 ]?.slug ||
		'slide-1';

	return {
		tabActive: synchronizedActive,
		tabsData: synchronizedTabs,
	};
}

/**
 * Remove one slide and preserve a valid active slide.
 *
 * @param {Object[]} tabsData  Existing parent slide metadata.
 * @param {number}   index     Slide index to remove.
 * @param {string}   tabActive Existing active slide slug.
 * @return {Object} Reindexed tabs and active slug.
 */
export function removeSlideFromCollection( tabsData, index, tabActive ) {
	const activeClientId = tabsData.find(
		( tab ) => tab.slug === tabActive
	)?.clientId;
	const removedClientId = tabsData[ index ]?.clientId;
	const remainingTabs = tabsData
		.filter( ( tab, tabIndex ) => tabIndex !== index )
		.map( ( tab, tabIndex ) => ( {
			...tab,
			slug: `slide-${ tabIndex + 1 }`,
		} ) );
	const nextActiveClientId =
		activeClientId && activeClientId !== removedClientId
			? activeClientId
			: remainingTabs[ Math.min( index, remainingTabs.length - 1 ) ]
					?.clientId;

	return {
		tabActive:
			remainingTabs.find( ( tab ) => tab.clientId === nextActiveClientId )
				?.slug ||
			remainingTabs[ 0 ]?.slug ||
			'slide-1',
		tabsData: remainingTabs,
	};
}
