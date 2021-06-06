/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gutenberg/js/frontend_block.dev.js":
/*!************************************************!*\
  !*** ./src/gutenberg/js/frontend_block.dev.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_frontend_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/frontend.scss */ \"./src/css/frontend.scss\");\n\nvar wp_swiper = new function () {\n  var self = this;\n  var $ = jQuery;\n  self.options = {};\n\n  self.init = function () {\n    self.init_options();\n  };\n\n  self.getNumber = function (value, inital = 1) {\n    return Number(value) ? Number(value) : inital;\n  };\n\n  self.init_options = function () {\n    var wpSwipers = document.querySelectorAll(\".wp-swiper\");\n    window.wpSwiper = [];\n\n    for (let i = 0; i < wpSwipers.length; i++) {\n      let swiper_container = wpSwipers[i].querySelector(\".swiper-container\");\n\n      if (swiper_container.hasAttribute(\"data-navigation\")) {\n        if (swiper_container.getAttribute(\"data-navigation\") == \"true\") {\n          self.options.navigation = {\n            nextEl: wpSwipers[i].querySelector(\".swiper-button-next\"),\n            prevEl: wpSwipers[i].querySelector(\".swiper-button-prev\")\n          };\n        }\n      }\n\n      if (swiper_container.hasAttribute(\"data-pagination\")) {\n        if (swiper_container.getAttribute(\"data-pagination\") == \"true\") {\n          self.options.pagination = {\n            el: wpSwipers[i].querySelector(\".swiper-pagination\")\n          };\n\n          if (swiper_container.getAttribute(\"data-paginationtype\")) {\n            self.options.pagination.type = swiper_container.getAttribute(\"data-paginationtype\");\n          }\n\n          if (swiper_container.getAttribute(\"data-clickablepagination\")) {\n            self.options.pagination.clickable = swiper_container.getAttribute(\"data-clickablepagination\");\n          }\n        }\n      }\n\n      if (swiper_container.hasAttribute(\"data-slidespercolumn\")) {\n        self.options.slidesPerColumn = self.getNumber(swiper_container.getAttribute(\"data-slidespercolumn\"), 1);\n      }\n\n      if (swiper_container.hasAttribute(\"data-autoplay\")) {\n        self.options.autoplay = swiper_container.getAttribute(\"data-autoplay\") == \"true\";\n      }\n\n      if (swiper_container.hasAttribute(\"data-delay\")) {\n        self.options.delay = swiper_container.getAttribute(\"data-delay\");\n      }\n\n      if (swiper_container.hasAttribute(\"data-speed\")) {\n        self.options.speed = self.getNumber(swiper_container.getAttribute(\"data-speed\"), 500);\n      }\n\n      if (swiper_container.hasAttribute(\"data-loop\")) {\n        self.options.loop = swiper_container.getAttribute(\"data-loop\") == \"true\";\n      }\n\n      if (swiper_container.hasAttribute(\"data-effect\")) {\n        self.options.effect = swiper_container.getAttribute(\"data-effect\");\n      }\n\n      if (swiper_container.hasAttribute(\"data-slidesperview\")) {\n        self.options.slidesPerView = self.getNumber(swiper_container.getAttribute(\"data-slidesperview\"), 1);\n      }\n\n      if (swiper_container.hasAttribute(\"data-spacebetween\")) {\n        self.options.spaceBetween = self.getNumber(swiper_container.getAttribute(\"data-spacebetween\"), 0);\n      }\n\n      if (swiper_container.hasAttribute(\"data-mousewheel\")) {\n        self.options.mousewheel = swiper_container.getAttribute(\"data-mousewheel\");\n      }\n\n      if (swiper_container.hasAttribute(\"data-releaseonedges\")) {\n        if (\"true\" === swiper_container.getAttribute(\"data-mousewheel\") && \"true\" === swiper_container.getAttribute(\"data-releaseonedges\")) {\n          self.options.mousewheel = {};\n          self.options.mousewheel.releaseOnEdges = swiper_container.getAttribute(\"data-releaseonedges\");\n        }\n      }\n\n      window.wpSwiper[i] = new Swiper(swiper_container, self.options);\n    }\n  };\n\n  $(document).ready(function () {\n    try {\n      self.init();\n    } catch (e) {\n      console.warn('JS Error: ');\n      console.log(e);\n    }\n  });\n}();\n\n//# sourceURL=webpack://wp-swiper/./src/gutenberg/js/frontend_block.dev.js?");

/***/ }),

/***/ "./src/css/frontend.scss":
/*!*******************************!*\
  !*** ./src/css/frontend.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://wp-swiper/./src/css/frontend.scss?");

/***/ })

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
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/gutenberg/js/frontend_block.dev.js");
/******/ 	
/******/ })()
;