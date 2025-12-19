/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/frontend.scss"
/*!**********************************!*\
  !*** ./src/styles/frontend.scss ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_frontend_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/frontend.scss */ "./src/styles/frontend.scss");

var wp_swiper = new function () {
  var self = this;
  self.init = function () {
    self.init_options();
  };
  self.getNumber = function (value, inital = 1) {
    return Number(value) ? Number(value) : inital;
  };
  this.JSONify = obj => {
    var o = {};
    for (var i in obj) {
      o['"' + i + '"'] = obj[i]; // make the quotes
    }
    return o;
  };
  self.init_options = function () {
    var wpSwipers = document.querySelectorAll('.wp-swiper');
    window.wpSwiper = [];
    window.wpSwiperThumbs = [];
    for (let i = 0; i < wpSwipers.length; i++) {
      let options = {};
      wpSwipers[i].classList.add(`wp-swiper--${i}`);
      let swiper_container = wpSwipers[i].querySelector('.swiper-container');
      let swiper_config = JSON.parse(swiper_container.getAttribute('data-swiper'));
      options = swiper_config;

      // Convert slidesPerView to integer if it's not 'auto'
      if (options.slidesPerView && options.slidesPerView !== 'auto') {
        options.slidesPerView = parseInt(options.slidesPerView, 10);
      }
      if (options.navigation) {
        options.navigation = {
          nextEl: `.wp-swiper--${i} .swiper-button-next`,
          prevEl: `.wp-swiper--${i} .swiper-button-prev`
        };
      }
      if (options.pagination) {
        options.pagination.el = wpSwipers[i].querySelector('.swiper-pagination');
      } else {
        options.pagination = false;
      }
      if (options.breakpoints) {
        if (typeof options.breakpoints === "string") {
          options.breakpoints = JSON.parse(options.breakpoints.replace(/\\/g, ''));
        }
      }

      // Swiper Thumbs
      if (swiper_container.hasAttribute('data-thumbs')) {
        let thumbsConfig = {
          spaceBetween: 10,
          slidesPerView: 4,
          freeMode: true,
          watchSlidesProgress: true
        };
        const slides = wpSwipers[i].querySelectorAll('.wp-swiper__slide');
        const thumbsSwiper = wpSwipers[i].querySelector('.wp-swiper__thumbs .swiper-container');
        const thumbsWrapper = wpSwipers[i].querySelector('.wp-swiper__thumbs .swiper-wrapper');
        const existingThumbs = thumbsWrapper.querySelectorAll('.wp-swiper__thumb');
        let thumbSlidesArray = [];
        Array.from(slides).forEach((slide, index) => {
          const thumbNumber = index + 1; // Assuming thumb numbers start from 1
          const matchingThumb = Array.from(existingThumbs).find(thumb => parseInt(thumb.getAttribute('data-thumb')) === thumbNumber);
          if (matchingThumb) {
            thumbSlidesArray[index] = matchingThumb.cloneNode(true);
          } else {
            thumbSlidesArray[index] = slide.cloneNode(true);
            thumbSlidesArray[index].removeAttribute('data-tab');
            thumbSlidesArray[index].classList.remove('wp-swiper__slide');
            thumbSlidesArray[index].classList.add('wp-swiper__thumb');
          }
        });
        thumbsWrapper.innerHTML = ''; // Clear existing content
        thumbSlidesArray.forEach(element => {
          thumbsWrapper.appendChild(element);
        });
        thumbsConfig = JSON.parse(swiper_container.getAttribute('data-thumbs'));
        window.wpSwiperThumbs[i] = new Swiper(thumbsSwiper, thumbsConfig);
        options = {
          ...options,
          thumbs: {
            swiper: window.wpSwiperThumbs[i]
          }
        };
      }
      if (options.direction == 'vertical') {
        options.on = {
          init: function () {
            var swiperWrapper = this.wrapperEl;
            var swiperSlideHeight = swiperWrapper.children[this.activeIndex].querySelector('.wp-swiper__slide-content').offsetHeight;
            swiperWrapper.style.height = swiperSlideHeight + 'px';
          },
          slideChangeTransitionEnd: function () {
            var swiperWrapper = this.wrapperEl;
            var swiperSlideHeight = swiperWrapper.children[this.activeIndex].querySelector('.wp-swiper__slide-content').offsetHeight;
            swiperWrapper.style.height = swiperSlideHeight + 'px';
          }
        };
      }
      if (swiper_container.hasAttribute('data-debug')) {
        if (swiper_container.getAttribute('data-debug') == 'true') {
          console.log({
            swiper_container,
            options: options
          });
        }
      }

      // Auto Slide Width logic - attach lifecycle events to override Swiper's width calculations
      if (options.autoSlideWidth) {
        // Width fix function that sets each slide to auto width (with redundancy check)
        const fixWidths = swiper => {
          swiper.slides.forEach(slide => {
            if (slide.style.width !== 'auto') {
              slide.style.width = 'auto';
            }
          });
        };

        // Helper to wrap event handlers while preserving existing handlers
        const wrapHandler = existingHandler => {
          return function (swiper) {
            if (existingHandler) {
              existingHandler.call(this, swiper);
            }
            fixWidths(swiper);
          };
        };

        // Merge with existing 'on' handlers if any (e.g., vertical direction)
        // Only essential events to minimize performance impact
        const existingOn = options.on || {};
        options.on = {
          ...existingOn,
          init: wrapHandler(existingOn.init),
          update: wrapHandler(existingOn.update),
          slideChangeTransitionStart: wrapHandler(existingOn.slideChangeTransitionStart),
          resize: wrapHandler(existingOn.resize),
          beforeResize: wrapHandler(existingOn.beforeResize)
        };

        // Remove autoSlideWidth from options as it's not a native Swiper property
        delete options.autoSlideWidth;
      }
      window.wpSwiper[i] = new Swiper(swiper_container, options);
    }
  };
  window.addEventListener('DOMContentLoaded', event => {
    try {
      self.init();
    } catch (e) {
      console.warn('JS Error: ');
      console.log(e);
    }
  });
}();
})();

/******/ })()
;
//# sourceMappingURL=frontend.build.js.map