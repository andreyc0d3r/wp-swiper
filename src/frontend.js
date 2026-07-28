import './styles/frontend.scss';

import {
	destroySwiperElement,
	initializeSwipers,
	observeSwipers,
	reinitializeSwiperElement,
} from './utils/swiper-lifecycle';

function initializeFrontend() {
	const settings = {
		SwiperClass: window.Swiper,
	};

	window.wpSwiperInit = ( scope = document ) =>
		initializeSwipers( scope, settings );
	window.wpSwiperDestroy = ( element ) => destroySwiperElement( element );
	window.wpSwiperReinit = ( element, index = 0 ) =>
		reinitializeSwiperElement( element, {
			...settings,
			index,
		} );

	window.wpSwiperInit();
	observeSwipers( document.body, settings );
}

if ( document.readyState === 'loading' ) {
	window.addEventListener( 'DOMContentLoaded', initializeFrontend, {
		once: true,
	} );
} else {
	initializeFrontend();
}
