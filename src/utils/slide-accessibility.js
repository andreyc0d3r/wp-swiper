const FOCUSABLE_ELEMENT_SELECTOR = [
	'a[href]',
	'area[href]',
	'button',
	'input',
	'select',
	'textarea',
	'iframe',
	'object',
	'embed',
	'audio[controls]',
	'video[controls]',
	'summary',
	'[contenteditable]:not([contenteditable="false"])',
	'[tabindex]',
].join( ', ' );

const ACCESSIBILITY_UPDATE_EVENTS = [
	'setTranslate',
	'slideChange',
	'update',
	'resize',
	'breakpoint',
	'observerUpdate',
	'slidesUpdated',
].join( ' ' );

function haveSameElements( elements, previousElements ) {
	return (
		elements.length === previousElements.length &&
		elements.every(
			( element, index ) => element === previousElements[ index ]
		)
	);
}

/**
 * Keep content in non-visible Swiper slides out of the accessibility tree and
 * keyboard tab order without losing author-defined tabindex values.
 *
 * @param {Object} swiper Initialized Swiper instance.
 * @return {Function} Cleanup callback.
 */
export function enableSlideAccessibility( swiper ) {
	if ( ! swiper || typeof swiper.on !== 'function' ) {
		return () => {};
	}

	const managedSlides = new Set();
	const managedFocusableElements = new Set();
	const originalAriaHiddenValues = new WeakMap();
	const originalTabIndexValues = new WeakMap();
	let previousSlides = [];
	let previousVisibleSlides = [];
	let isDestroyed = false;

	const restoreFocusableElement = ( element ) => {
		if ( ! originalTabIndexValues.has( element ) ) {
			managedFocusableElements.delete( element );
			return;
		}

		const originalTabIndex = originalTabIndexValues.get( element );
		if ( originalTabIndex === null ) {
			element.removeAttribute( 'tabindex' );
		} else {
			element.setAttribute( 'tabindex', originalTabIndex );
		}

		originalTabIndexValues.delete( element );
		managedFocusableElements.delete( element );
	};

	const restoreSlide = ( slide ) => {
		if ( ! originalAriaHiddenValues.has( slide ) ) {
			managedSlides.delete( slide );
			return;
		}

		const originalAriaHidden = originalAriaHiddenValues.get( slide );
		if ( originalAriaHidden === null ) {
			slide.removeAttribute( 'aria-hidden' );
		} else {
			slide.setAttribute( 'aria-hidden', originalAriaHidden );
		}

		originalAriaHiddenValues.delete( slide );
		managedSlides.delete( slide );
	};

	const disableFocusableElement = ( element ) => {
		if ( ! originalTabIndexValues.has( element ) ) {
			originalTabIndexValues.set(
				element,
				element.hasAttribute( 'tabindex' )
					? element.getAttribute( 'tabindex' )
					: null
			);
		}

		managedFocusableElements.add( element );
		if ( element.getAttribute( 'tabindex' ) !== '-1' ) {
			element.setAttribute( 'tabindex', '-1' );
		}
	};

	const getFocusableElements = ( slide ) => {
		const focusableElements = Array.from(
			slide.querySelectorAll( FOCUSABLE_ELEMENT_SELECTOR )
		);

		if ( slide.matches( FOCUSABLE_ELEMENT_SELECTOR ) ) {
			focusableElements.unshift( slide );
		}

		return focusableElements;
	};

	const updateSlideAccessibility = ( force = false ) => {
		if ( isDestroyed || swiper.destroyed ) {
			return;
		}

		if (
			swiper.params?.watchSlidesProgress !== true &&
			typeof swiper.updateSlidesProgress === 'function'
		) {
			swiper.updateSlidesProgress();
		}

		const slides = Array.from( swiper.slides || [] );
		const visibleSlideSet = new Set(
			Array.from( swiper.visibleSlides || [] )
		);
		const visibleSlides = slides.filter( ( slide ) =>
			visibleSlideSet.has( slide )
		);

		if (
			! force &&
			haveSameElements( slides, previousSlides ) &&
			haveSameElements( visibleSlides, previousVisibleSlides )
		) {
			return;
		}

		previousSlides = slides;
		previousVisibleSlides = visibleSlides;

		const currentSlideSet = new Set( slides );
		managedSlides.forEach( ( slide ) => {
			if ( ! currentSlideSet.has( slide ) ) {
				restoreSlide( slide );
			}
		} );

		const hiddenSlides = new Set();
		slides.forEach( ( slide ) => {
			if ( ! originalAriaHiddenValues.has( slide ) ) {
				originalAriaHiddenValues.set(
					slide,
					slide.hasAttribute( 'aria-hidden' )
						? slide.getAttribute( 'aria-hidden' )
						: null
				);
			}
			managedSlides.add( slide );

			if ( visibleSlideSet.has( slide ) ) {
				if ( slide.hasAttribute( 'aria-hidden' ) ) {
					slide.removeAttribute( 'aria-hidden' );
				}
			} else {
				hiddenSlides.add( slide );
				if ( slide.getAttribute( 'aria-hidden' ) !== 'true' ) {
					slide.setAttribute( 'aria-hidden', 'true' );
				}
			}
		} );

		managedFocusableElements.forEach( ( element ) => {
			const containingSlide = slides.find( ( slide ) =>
				slide.contains( element )
			);
			if ( ! containingSlide || ! hiddenSlides.has( containingSlide ) ) {
				restoreFocusableElement( element );
			}
		} );

		hiddenSlides.forEach( ( slide ) => {
			getFocusableElements( slide ).forEach( disableFocusableElement );
		} );
	};

	const handleSwiperUpdate = () => updateSlideAccessibility();
	const MutationObserverClass =
		typeof window === 'undefined' ? null : window.MutationObserver || null;
	const mutationObserver =
		MutationObserverClass === null
			? null
			: new MutationObserverClass( ( mutations ) => {
					mutations.forEach( ( mutation ) => {
						if (
							mutation.type === 'attributes' &&
							mutation.attributeName === 'tabindex' &&
							managedFocusableElements.has( mutation.target ) &&
							mutation.target.getAttribute( 'tabindex' ) !== '-1'
						) {
							originalTabIndexValues.set(
								mutation.target,
								mutation.target.getAttribute( 'tabindex' )
							);
						}
					} );

					updateSlideAccessibility( true );
			  } );

	const cleanup = () => {
		if ( isDestroyed ) {
			return;
		}

		isDestroyed = true;
		mutationObserver?.disconnect();
		managedFocusableElements.forEach( restoreFocusableElement );
		managedSlides.forEach( restoreSlide );
		previousSlides = [];
		previousVisibleSlides = [];
	};

	updateSlideAccessibility( true );
	mutationObserver?.observe( swiper.wrapperEl, {
		attributes: true,
		attributeFilter: [
			'aria-hidden',
			'contenteditable',
			'controls',
			'disabled',
			'href',
			'tabindex',
		],
		childList: true,
		subtree: true,
	} );

	swiper.on( ACCESSIBILITY_UPDATE_EVENTS, handleSwiperUpdate );
	swiper.on( 'destroy', cleanup );

	return cleanup;
}
