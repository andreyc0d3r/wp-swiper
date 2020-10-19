/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/gutenberg/js/frontend_block.dev.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/frontend.scss":
/*!*******************************!*\
  !*** ./src/css/frontend.scss ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/css/frontend.scss?");

/***/ }),

/***/ "./src/gutenberg/js/frontend_block.dev.js":
/*!************************************************!*\
  !*** ./src/gutenberg/js/frontend_block.dev.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_frontend_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/frontend.scss */ \"./src/css/frontend.scss\");\n\nvar wp_swiper = new function () {\n  var self = this;\n  var $ = jQuery;\n  self.options = {};\n\n  self.init = function () {\n    self.init_options();\n  };\n\n  self.getNumber = function (value) {\n    var inital = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n    return Number(value) ? Number(value) : inital;\n  };\n\n  self.init_options = function () {\n    var wpSwipers = document.getElementsByClassName(\"swiper-container\");\n    window.wpSwiper = [];\n\n    for (var i = 0; i < wpSwipers.length; i++) {\n      if (wpSwipers[i].hasAttribute(\"data-navigation\")) {\n        if (wpSwipers[i].getAttribute(\"data-navigation\") == \"true\") {\n          self.options.navigation = {\n            nextEl: '.swiper-button-next',\n            prevEl: '.swiper-button-prev'\n          };\n        }\n      }\n\n      if (wpSwipers[i].hasAttribute(\"data-pagination\")) {\n        if (wpSwipers[i].getAttribute(\"data-pagination\") == \"true\") {\n          self.options.pagination = {\n            el: '.swiper-pagination'\n          };\n        }\n      }\n\n      if (wpSwipers[i].hasAttribute(\"data-slidespercolumn\")) {\n        self.options.slidesPerColumn = self.getNumber(wpSwipers[i].getAttribute(\"data-slidespercolumn\"), 1);\n      }\n\n      if (wpSwipers[i].hasAttribute(\"data-autoplay\")) {\n        self.options.autoplay = wpSwipers[i].getAttribute(\"data-autoplay\") == \"true\";\n      }\n\n      if (wpSwipers[i].hasAttribute(\"data-delay\")) {\n        self.options.delay = wpSwipers[i].getAttribute(\"data-delay\");\n      }\n\n      if (wpSwipers[i].hasAttribute(\"data-speed\")) {\n        self.options.speed = self.getNumber(wpSwipers[i].getAttribute(\"data-speed\"), 500);\n      }\n\n      if (wpSwipers[i].hasAttribute(\"data-loop\")) {\n        self.options.loop = wpSwipers[i].getAttribute(\"data-loop\") == \"true\";\n      }\n\n      if (wpSwipers[i].hasAttribute(\"data-effect\")) {\n        self.options.effect = wpSwipers[i].getAttribute(\"data-effect\");\n      }\n\n      if (wpSwipers[i].hasAttribute(\"data-slidesperview\")) {\n        self.options.slidesPerView = self.getNumber(wpSwipers[i].getAttribute(\"data-slidesperview\"), 1);\n      }\n\n      if (wpSwipers[i].hasAttribute(\"data-spacebetween\")) {\n        self.options.spaceBetween = self.getNumber(wpSwipers[i].getAttribute(\"data-spacebetween\"), 0);\n      }\n\n      window.wpSwiper[i] = new Swiper(wpSwipers[i], self.options);\n    }\n  };\n\n  $(document).ready(function () {\n    try {\n      self.init();\n    } catch (e) {\n      console.warn('JS Error: ');\n      console.log(e);\n    }\n  });\n}();\n\n//# sourceURL=webpack:///./src/gutenberg/js/frontend_block.dev.js?");

/***/ })

/******/ });