// WordPress provides this package at runtime.
// eslint-disable-next-line import/no-extraneous-dependencies
import { useCallback, useEffect } from '@wordpress/element';

import {
	addMediaToSlideCollection,
	removeSlideFromCollection,
	shouldSynchronizeSlideCollection,
	synchronizeSlideCollection,
} from '../../../utils/slide-collection';

/**
 * Coordinate slide block mutations with the parent slide metadata.
 *
 * @param {Object}   settings                       Hook settings.
 * @param {string}   settings.clientId              Parent block client ID.
 * @param {Function} settings.createSlideBlock      WordPress block factory.
 * @param {Function} settings.getInnerBlocks        Read the latest slide blocks.
 * @param {Object[]} settings.innerBlocks           Current ordered slide blocks.
 * @param {Function} settings.removeBlock           WordPress block remover.
 * @param {Function} settings.replaceInnerBlocks    WordPress child block updater.
 * @param {Function} settings.setAttributes         Parent block attribute updater.
 * @param {string}   settings.tabActive             Current active slide slug.
 * @param {Object[]} settings.tabsData              Current parent slide metadata.
 * @param {Function} settings.updateBlockAttributes Child block attribute updater.
 * @return {Object} Slide collection actions.
 */
export default function useSlideCollection( {
	clientId,
	createSlideBlock,
	getInnerBlocks,
	innerBlocks,
	removeBlock,
	replaceInnerBlocks,
	setAttributes,
	tabActive,
	tabsData,
	updateBlockAttributes,
} ) {
	const updateSlugsForInnerBlocks = useCallback(
		( blocks ) => {
			blocks.forEach( ( innerBlock, index ) => {
				const slug = `slide-${ index + 1 }`;

				if ( innerBlock.attributes.slug !== slug ) {
					updateBlockAttributes( innerBlock.clientId, { slug } );
				}
			} );
		},
		[ updateBlockAttributes ]
	);

	const repairSlideSlugs = useCallback( () => {
		const synchronizedCollection = synchronizeSlideCollection(
			innerBlocks,
			tabsData,
			tabActive
		);

		updateSlugsForInnerBlocks( innerBlocks );
		setAttributes( synchronizedCollection );

		return synchronizedCollection;
	}, [
		innerBlocks,
		setAttributes,
		tabActive,
		tabsData,
		updateSlugsForInnerBlocks,
	] );

	useEffect( () => {
		if (
			shouldSynchronizeSlideCollection( innerBlocks, tabsData, tabActive )
		) {
			repairSlideSlugs();
		}
	}, [ innerBlocks, repairSlideSlugs, tabActive, tabsData ] );

	const addMedia = useCallback(
		( media ) => {
			const mediaItems = Array.isArray( media ) ? media : [ media ];
			const collection = addMediaToSlideCollection( {
				mediaItems,
				tabsData,
				innerBlocks: getInnerBlocks(),
				createBlock: createSlideBlock,
			} );

			if ( collection.addedCount === 0 ) {
				return false;
			}

			replaceInnerBlocks( clientId, collection.innerBlocks, false );
			setAttributes( {
				tabsData: collection.tabsData,
				tabActive: collection.tabActive,
			} );

			return true;
		},
		[
			clientId,
			createSlideBlock,
			getInnerBlocks,
			replaceInnerBlocks,
			setAttributes,
			tabsData,
		]
	);

	const addSlide = useCallback( () => {
		const newDataLength = tabsData.length + 1;
		const slug = `slide-${ newDataLength }`;
		const newBlock = createSlideBlock( 'da/wp-swiper-slide', { slug } );
		const newTabsData = [
			...tabsData,
			{
				clientId: newBlock.clientId,
				slug,
				slideImg: '',
				thumbImg: '',
			},
		];

		replaceInnerBlocks(
			clientId,
			[ ...getInnerBlocks(), newBlock ],
			false
		);
		setAttributes( {
			tabsData: newTabsData,
			tabActive: slug,
		} );

		return newBlock;
	}, [
		clientId,
		createSlideBlock,
		getInnerBlocks,
		replaceInnerBlocks,
		setAttributes,
		tabsData,
	] );

	const removeSlide = useCallback(
		( index ) => {
			if ( innerBlocks.length <= 1 ) {
				removeBlock( clientId );
				return;
			}

			if ( ! innerBlocks[ index ] || ! tabsData[ index ] ) {
				return;
			}

			const nextCollection = removeSlideFromCollection(
				tabsData,
				index,
				tabActive
			);

			removeBlock( innerBlocks[ index ].clientId );
			nextCollection.tabsData.forEach( ( tab ) => {
				updateBlockAttributes( tab.clientId, {
					slug: tab.slug,
				} );
			} );
			setAttributes( {
				tabsData: nextCollection.tabsData,
				tabActive: nextCollection.tabActive,
			} );
		},
		[
			clientId,
			innerBlocks,
			removeBlock,
			setAttributes,
			tabActive,
			tabsData,
			updateBlockAttributes,
		]
	);

	return {
		addMedia,
		addSlide,
		removeSlide,
		repairSlideSlugs,
	};
}
