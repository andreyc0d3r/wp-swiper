/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/classnames/dedupe.js"
/*!*******************************************!*\
  !*** ./node_modules/classnames/dedupe.js ***!
  \*******************************************/
(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var classNames = (function () {
		// don't inherit from Object so we can skip hasOwnProperty check later
		// http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
		function StorageObject() {}
		StorageObject.prototype = Object.create(null);

		function _parseArray (resultSet, array) {
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				_parse(resultSet, array[i]);
			}
		}

		var hasOwn = {}.hasOwnProperty;

		function _parseNumber (resultSet, num) {
			resultSet[num] = true;
		}

		function _parseObject (resultSet, object) {
			if (object.toString !== Object.prototype.toString && !object.toString.toString().includes('[native code]')) {
				resultSet[object.toString()] = true;
				return;
			}

			for (var k in object) {
				if (hasOwn.call(object, k)) {
					// set value to false instead of deleting it to avoid changing object structure
					// https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
					resultSet[k] = !!object[k];
				}
			}
		}

		var SPACE = /\s+/;
		function _parseString (resultSet, str) {
			var array = str.split(SPACE);
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				resultSet[array[i]] = true;
			}
		}

		function _parse (resultSet, arg) {
			if (!arg) return;
			var argType = typeof arg;

			// 'foo bar'
			if (argType === 'string') {
				_parseString(resultSet, arg);

			// ['foo', 'bar', ...]
			} else if (Array.isArray(arg)) {
				_parseArray(resultSet, arg);

			// { 'foo': true, ... }
			} else if (argType === 'object') {
				_parseObject(resultSet, arg);

			// '130'
			} else if (argType === 'number') {
				_parseNumber(resultSet, arg);
			}
		}

		function _classNames () {
			// don't leak arguments
			// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
			var len = arguments.length;
			var args = Array(len);
			for (var i = 0; i < len; i++) {
				args[i] = arguments[i];
			}

			var classSet = new StorageObject();
			_parseArray(classSet, args);

			var list = [];

			for (var k in classSet) {
				if (classSet[k]) {
					list.push(k)
				}
			}

			return list.join(' ');
		}

		return _classNames;
	})();

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else // removed by dead control flow
{}
}());


/***/ },

/***/ "./src/blocks/slide/block.json"
/*!*************************************!*\
  !*** ./src/blocks/slide/block.json ***!
  \*************************************/
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":3,"name":"da/wp-swiper-slide","parent":["da/wp-swiper-slides"],"category":"media","supports":{"html":false,"className":false,"anchor":true,"inserter":false,"reusable":false},"attributes":{"align":{"type":"string","default":"undefined"},"slideImgId":{"type":"number"},"slideImg":{"type":"string"},"thumbImg":{"type":"string"},"slug":{"type":"string"},"contentValign":{"type":"string","default":""},"contentHalign":{"type":"string","default":""},"contentVHalign":{"type":"string"},"focalPoint":{"type":"object","default":{"x":0.5,"y":0.5}},"overlayColor":{"type":"object","default":{"rgb":{"r":0,"g":0,"b":0,"a":0}}},"containerWidth":{"type":"number"}}}');

/***/ },

/***/ "./src/blocks/slide/deprecated.js"
/*!****************************************!*\
  !*** ./src/blocks/slide/deprecated.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/slide/block.json");
/* harmony import */ var _save1033__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save1033 */ "./src/blocks/slide/save1033.js");
/**
 * Internal dependencies
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  supports: _block_json__WEBPACK_IMPORTED_MODULE_0__.supports,
  attributes: {
    ..._block_json__WEBPACK_IMPORTED_MODULE_0__.attributes
  },
  save: _save1033__WEBPACK_IMPORTED_MODULE_1__["default"]
}]);

/***/ },

/***/ "./src/blocks/slide/edit.js"
/*!**********************************!*\
  !*** ./src/blocks/slide/edit.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_block_alignment_matrix_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/block-alignment-matrix-control */ "./src/components/block-alignment-matrix-control/index.js");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/shared */ "./src/utils/shared.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



/**
 * Block Edit Component.
 *
 * @param {Object} props Block props.
 * @return {JSX.Element} Block edit component.
 */

function Edit({
  attributes,
  setAttributes,
  clientId
}) {
  const {
    slideImg,
    thumbImg,
    overlayColor,
    contentVHalign,
    slug,
    focalPoint
  } = attributes;

  // Use modern useSelect hook instead of withSelect HOC
  const hasChildBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store).getBlockOrder(clientId).length > 0, [clientId]);

  // Memoized event handlers
  const onSelectImage = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(media => {
    const imgUrl = media?.sizes?.full?.url || media?.url;
    if (imgUrl) {
      setAttributes({
        slideImg: imgUrl
      });
    }
  }, [setAttributes]);
  const onSelectThumb = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(media => {
    const imgUrl = media?.sizes?.full?.url || media?.url;
    if (imgUrl) {
      setAttributes({
        thumbImg: imgUrl
      });
    }
  }, [setAttributes]);
  const setFocalPoint = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(value => {
    setAttributes({
      focalPoint: value
    });
  }, [setAttributes]);
  const clearSlideImage = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    setAttributes({
      slideImg: undefined
    });
  }, [setAttributes]);
  const clearThumbImage = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    setAttributes({
      thumbImg: undefined
    });
  }, [setAttributes]);

  // Compute className
  const computedClassName = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    let className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default()('wp-swiper__slide', {
      'has-image': Boolean(slideImg)
    });
    className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default()(className, (0,_utils_shared__WEBPACK_IMPORTED_MODULE_7__.getPositionClassName)(contentVHalign));
    return className;
  }, [slideImg, contentVHalign]);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)({
    className: computedClassName,
    'data-tab': slug
  });

  // Compute styles
  const styleOverlayImage = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    var _focalPoint$x, _focalPoint$y;
    if (!slideImg) {
      return {};
    }
    return {
      backgroundImage: `url(${slideImg})`,
      backgroundPosition: `${((_focalPoint$x = focalPoint?.x) !== null && _focalPoint$x !== void 0 ? _focalPoint$x : 0.5) * 100}% ${((_focalPoint$y = focalPoint?.y) !== null && _focalPoint$y !== void 0 ? _focalPoint$y : 0.5) * 100}%`
    };
  }, [slideImg, focalPoint]);
  const styleOverlayColor = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if (!overlayColor?.rgb) {
      return {};
    }
    const {
      r,
      g,
      b,
      a
    } = overlayColor.rgb;
    return {
      backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})`
    };
  }, [overlayColor]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image Settings', 'wp-swiper'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slide Image', 'wp-swiper'),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.MediaUploadCheck, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.MediaUpload, {
                value: slideImg,
                onSelect: onSelectImage,
                allowedTypes: ['image'],
                render: ({
                  open
                }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
                  onClick: open,
                  variant: "secondary",
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select slide image', 'wp-swiper')
                })
              })
            })
          }), slideImg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.FocalPointPicker, {
              url: slideImg,
              value: focalPoint,
              onDragStart: setFocalPoint,
              onDrag: setFocalPoint,
              onChange: setFocalPoint
            })
          }), slideImg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
              variant: "secondary",
              size: "small",
              className: "block-library-cover__reset-button",
              onClick: clearSlideImage,
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clear Media', 'wp-swiper')
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Thumbnail Image', 'wp-swiper'),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.MediaUploadCheck, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.MediaUpload, {
                value: thumbImg,
                onSelect: onSelectThumb,
                allowedTypes: ['image'],
                render: ({
                  open
                }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
                  onClick: open,
                  variant: "secondary",
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select thumb image', 'wp-swiper')
                })
              })
            })
          }), thumbImg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.FocalPointPicker, {
              url: thumbImg,
              value: focalPoint,
              onDragStart: setFocalPoint,
              onDrag: setFocalPoint,
              onChange: setFocalPoint
            })
          }), thumbImg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
              variant: "secondary",
              size: "small",
              className: "block-library-cover__reset-button",
              onClick: clearThumbImage,
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clear Media', 'wp-swiper')
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.BlockControls, {
      group: "block",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_block_alignment_matrix_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Change content position', 'wp-swiper'),
        value: contentVHalign,
        onChange: value => setAttributes({
          contentVHalign: value
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      ...blockProps,
      children: [slideImg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "wp-swiper__slide-overlay wp-swiper__slide-overlay--image",
        style: styleOverlayImage
      }), overlayColor?.rgb?.a > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "wp-swiper__slide-overlay wp-swiper__slide-overlay--color",
        style: styleOverlayColor
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks, {
        renderAppender: hasChildBlocks ? undefined : _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks.ButtonBlockAppender
      })]
    })]
  });
}

/***/ },

/***/ "./src/blocks/slide/index.js"
/*!***********************************!*\
  !*** ./src/blocks/slide/index.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   metadata: () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   settings: () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/slide/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/slide/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/slide/save.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deprecated */ "./src/blocks/slide/deprecated.js");
/**
 * WordPress dependencies
 */
const {
  __
} = wp.i18n;

/**
 * Internal dependencies
 */




const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_0__;

const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_0__,
  title: __('Slide', '@@text_domain'),
  description: __('A single slide within a wp-swiper block.', '@@text_domain'),
  icon: 'admin',
  getEditWrapperProps(attributes) {
    return {
      'data-tab': attributes.slug
    };
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_3__["default"]
};

/***/ },

/***/ "./src/blocks/slide/save.js"
/*!**********************************!*\
  !*** ./src/blocks/slide/save.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/shared */ "./src/utils/shared.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Block Save Class.
 */


function save(props) {
  const {
    attributes
  } = props;
  const {
    overlayColor,
    slug,
    slideImg,
    contentVHalign,
    containerWidth,
    focalPoint
  } = attributes;
  let className = 'wp-swiper__slide swiper-slide';
  if (contentVHalign != '' && typeof contentVHalign !== 'undefined') {
    className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default()(className, (0,_utils_shared__WEBPACK_IMPORTED_MODULE_2__.getPositionClassName)(contentVHalign));
  }

  // background size: cover
  // needed becaue some people
  // use Slide Image
  // under Image Settings
  const style = slideImg ? {
    backgroundImage: `url(${slideImg})`,
    backgroundSize: 'cover',
    backgroundPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`
  } : {};
  const contaienr_width_style = containerWidth ? {
    maxWidth: `${containerWidth}%`
  } : null;
  const style_overlay_color = overlayColor ? {
    backgroundColor: `rgba(${overlayColor.rgb.r}, ${overlayColor.rgb.g}, ${overlayColor.rgb.b}, ${overlayColor.rgb.a})`
  } : null;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.createElement)("div", {
    ...blockProps,
    key: slug,
    "data-tab": slug,
    className: className,
    style: style
  }, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "wp-swiper__overlay-color",
    ...(style_overlay_color && {
      style: style_overlay_color
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "wp-swiper__slide-content",
    style: contaienr_width_style,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, {})
  }));
}

/***/ },

/***/ "./src/blocks/slide/save1033.js"
/*!**************************************!*\
  !*** ./src/blocks/slide/save1033.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/slide/block.json");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/shared */ "./src/utils/shared.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */
const {
  applyFilters
} = wp.hooks;
const {
  Component
} = wp.element;
const {
  InnerBlocks
} = wp.blockEditor;

/**
 * Internal dependencies
 */



const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_1__;

/**
 * Block Save Class.
 */
class BlockSave extends Component {
  render() {
    const {
      overlayColor,
      slug,
      slideImg,
      contentVHalign,
      containerWidth
    } = this.props.attributes;
    let className = 'wp-swiper__slide swiper-slide';
    if (contentVHalign != '' && typeof contentVHalign !== 'undefined') {
      className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default()(className, (0,_utils_shared__WEBPACK_IMPORTED_MODULE_2__.getPositionClassName)(contentVHalign));
    }

    // background size: cover
    // needed becaue some people
    // use Slide Image
    // under Image Settings
    const style = slideImg ? {
      backgroundImage: `url(${slideImg})`,
      backgroundSize: 'cover'
    } : {};
    const contaienr_width_style = containerWidth ? {
      maxWidth: `${containerWidth}%`
    } : null;
    const style_overlay_color = overlayColor ? {
      backgroundColor: `rgba(${overlayColor.rgb.r}, ${overlayColor.rgb.g}, ${overlayColor.rgb.b}, ${overlayColor.rgb.a})`
    } : {};
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: className,
      "data-tab": slug,
      style: style,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "wp-swiper__overlay-color",
        style: style_overlay_color
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "wp-swiper__slide-content",
        style: contaienr_width_style,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(InnerBlocks.Content, {})
      })]
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockSave);

/***/ },

/***/ "./src/blocks/slides/block.json"
/*!**************************************!*\
  !*** ./src/blocks/slides/block.json ***!
  \**************************************/
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":3,"name":"da/wp-swiper-slides","category":"media","supports":{"html":false,"className":false,"anchor":true,"align":["wide","full"]},"attributes":{"align":{"type":"string","default":""},"txtColor":{"type":"string"},"overlayColor":{"type":"object","default":{"rgb":{"r":0,"g":0,"b":0,"a":0}}},"containerWidth":{"type":"number"},"overlayImg":{"type":"string"},"previousIcon":{"type":"string"},"nextIcon":{"type":"string"},"overlayImgOpacity":{"type":"number","default":0.5},"currentSlide":{"type":"number","default":0},"tabActive":{"type":"string","default":"slide-1"},"buttonsAlign":{"type":"string","default":"start"},"autoplay":{"type":"boolean","default":false},"disableOnInteraction":{"type":"boolean","default":true},"pauseOnMouseEnter":{"type":"boolean","default":false},"reverseDirection":{"type":"boolean","default":false},"stopOnLastSlide":{"type":"boolean","default":false},"waitForTransition":{"type":"boolean","default":true},"navigation":{"type":"boolean","default":true},"pagination":{"type":"boolean","default":true},"clickable_pagination":{"type":"boolean","default":false},"loop":{"type":"boolean","default":false},"loopAddBlankSlides":{"type":"boolean","default":true},"loopAdditionalSlides":{"type":"number","default":0},"effect":{"type":"string","default":"slide"},"speed":{"type":"number","default":500},"delay":{"type":"number","default":3000},"slidesPerView":{"type":"string","default":"1"},"slidesPerGroup":{"type":"number","default":1},"slidesPerGroupAuto":{"type":"boolean","default":false},"slidesPerGroupSkip":{"type":"number","default":0},"spaceBetween":{"type":"number","default":0},"autoSlideWidth":{"type":"boolean","default":false},"slidesOffsetBefore":{"type":"number","default":0},"slidesOffsetAfter":{"type":"number","default":0},"tabsData":{"type":"array","default":[{"clientId":"","slug":"slide-1","slideImg":"","thumbImg":""}]},"breakpoints":{"type":"string"},"thumbs":{"type":"boolean","default":false},"thumbsSlidesPerView":{"type":"number","default":4},"thumbsSpaceBetween":{"type":"number","default":10},"autoHeight":{"type":"boolean","default":false},"sliderHeight":{"type":"string","default":"500px"},"freeMode":{"type":"boolean","default":false},"freeModeMinimumVelocity":{"type":"number","default":0.02},"freeModeMomentum":{"type":"boolean","default":true},"freeModeMomentumBounce":{"type":"boolean","default":true},"freeModeMomentumBounceRatio":{"type":"number","default":1},"freeModeMomentumRatio":{"type":"number","default":1},"freeModeMomentumVelocityRatio":{"type":"number","default":1},"freeModeSticky":{"type":"boolean","default":false},"debug":{"type":"boolean","default":false},"direction":{"type":"string","default":"horizontal"},"overflowVisible":{"type":"boolean","default":false}}}');

/***/ },

/***/ "./src/blocks/slides/deprecated.js"
/*!*****************************************!*\
  !*** ./src/blocks/slides/deprecated.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/slides/block.json");
/* harmony import */ var _oldsave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oldsave */ "./src/blocks/slides/oldsave.js");
/* harmony import */ var _save_v1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save-v1 */ "./src/blocks/slides/save-v1.js");
/**
 * Internal dependencies
 */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
// Version 2: Migrate from sticky to freeModeSticky
{
  attributes: {
    ..._block_json__WEBPACK_IMPORTED_MODULE_0__.attributes,
    sticky: {
      type: 'boolean',
      default: false
    }
  },
  save: _save_v1__WEBPACK_IMPORTED_MODULE_2__["default"],
  migrate(attributes) {
    // Migrate old sticky attribute to freeModeSticky
    const {
      sticky,
      ...restAttributes
    } = attributes;
    return {
      ...restAttributes,
      freeModeSticky: sticky || false
    };
  }
},
// Version 1: Original old save format
{
  save: _oldsave__WEBPACK_IMPORTED_MODULE_1__["default"]
}]);

/***/ },

/***/ "./src/blocks/slides/edit.js"
/*!***********************************!*\
  !*** ./src/blocks/slides/edit.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_remove_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/remove-button */ "./src/components/remove-button/index.js");
/* harmony import */ var _utils_get_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/get-image */ "./src/utils/get-image/index.js");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/shared */ "./src/utils/shared.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */




// Template for default inner blocks (one slide by default)

const INNER_BLOCKS_TEMPLATE = [['da/wp-swiper-slide', {
  slug: 'slide-1'
}]];

/**
 * Helper function to upload a file to the media library
 * @param {File} file - The file to upload
 * @returns {Promise} - Resolves with the media object
 */
async function uploadMediaFile(file) {
  const formData = new FormData();
  formData.append('file', file);
  const response = await wp.apiFetch({
    path: '/wp/v2/media',
    method: 'POST',
    body: formData
  });
  return response;
}

/**
 * Helper function to build the Swiper config object from attributes
 * This mirrors the logic in save.js to generate the same data-swiper JSON
 */
function buildSwiperConfig(attributes) {
  const {
    slidesPerView,
    slidesPerGroup,
    slidesPerGroupAuto,
    slidesPerGroupSkip,
    spaceBetween,
    autoSlideWidth,
    autoplay,
    disableOnInteraction,
    pauseOnMouseEnter,
    reverseDirection,
    stopOnLastSlide,
    waitForTransition,
    delay,
    speed,
    loop,
    loopAddBlankSlides,
    loopAdditionalSlides,
    effect,
    navigation,
    mousewheel,
    releaseOnEdges,
    pagination_type,
    clickable_pagination,
    breakpoints,
    freeMode,
    freeModeMinimumVelocity,
    freeModeMomentum,
    freeModeMomentumBounce,
    freeModeMomentumBounceRatio,
    freeModeMomentumRatio,
    freeModeMomentumVelocityRatio,
    freeModeSticky,
    autoHeight,
    direction,
    slidesOffsetBefore,
    slidesOffsetAfter
  } = attributes;
  const dataAtts = {
    slidesPerView: slidesPerView === 'auto' ? 'auto' : parseInt(slidesPerView, 10),
    slidesPerGroup,
    slidesPerGroupAuto,
    slidesPerGroupSkip,
    navigation,
    pagination: {},
    delay,
    speed,
    loop,
    direction,
    slidesOffsetBefore,
    slidesOffsetAfter,
    autoHeight,
    spaceBetween,
    releaseOnEdges
  };

  // Auto Slide Width logic
  if (autoSlideWidth) {
    dataAtts.autoSlideWidth = true;
  }

  // Mousewheel and release on edges logic
  if (mousewheel && releaseOnEdges) {
    dataAtts.mousewheel = {
      releaseOnEdges: releaseOnEdges === 'true'
    };
  }

  // Loop logic
  if (loop) {
    dataAtts.loopAddBlankSlides = loopAddBlankSlides;
    dataAtts.loopAdditionalSlides = loopAdditionalSlides;
  }

  // Effect logic
  if (effect) {
    dataAtts.effect = effect;
    if (effect === 'fade') {
      dataAtts.fadeEffect = {
        crossFade: true
      };
    }
  }

  // Autoplay logic
  if (autoplay) {
    dataAtts.autoplay = true;
    if (delay !== null && delay !== undefined) {
      dataAtts.autoplay = {
        delay: Number(delay)
      };
    }
    if (disableOnInteraction) {
      if (!dataAtts.autoplay || dataAtts.autoplay === true) {
        dataAtts.autoplay = {};
      }
      dataAtts.autoplay.disableOnInteraction = true;
    }
    if (pauseOnMouseEnter) {
      if (!dataAtts.autoplay || dataAtts.autoplay === true) {
        dataAtts.autoplay = {};
      }
      dataAtts.autoplay.pauseOnMouseEnter = true;
    }
    if (reverseDirection) {
      if (!dataAtts.autoplay || dataAtts.autoplay === true) {
        dataAtts.autoplay = {};
      }
      dataAtts.autoplay.reverseDirection = true;
    }
    if (stopOnLastSlide) {
      if (!dataAtts.autoplay || dataAtts.autoplay === true) {
        dataAtts.autoplay = {};
      }
      dataAtts.autoplay.stopOnLastSlide = true;
    }
    if (waitForTransition !== undefined && waitForTransition !== null) {
      if (!dataAtts.autoplay || dataAtts.autoplay === true) {
        dataAtts.autoplay = {};
      }
      dataAtts.autoplay.waitForTransition = waitForTransition;
    }
  }

  // Freemode
  if (freeMode) {
    dataAtts.freeMode = {
      enabled: true,
      minimumVelocity: freeModeMinimumVelocity,
      momentum: freeModeMomentum,
      momentumBounce: freeModeMomentumBounce,
      momentumBounceRatio: freeModeMomentumBounceRatio,
      momentumRatio: freeModeMomentumRatio,
      momentumVelocityRatio: freeModeMomentumVelocityRatio,
      sticky: freeModeSticky
    };
  }

  // Pagination
  dataAtts.pagination.type = pagination_type !== 'bullets' ? pagination_type : 'bullets';
  if (clickable_pagination) {
    dataAtts.pagination.clickable = clickable_pagination ? true : '';
  }
  if (typeof breakpoints !== 'undefined' && breakpoints !== '') {
    dataAtts.breakpoints = breakpoints;
  }
  return dataAtts;
}

/**
 * Swiper Config Editor Component
 * Displays editable JSON config for the slider
 */
function SwiperConfigEditor({
  attributes,
  setAttributes
}) {
  const [jsonValue, setJsonValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [isValid, setIsValid] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [hasChanges, setHasChanges] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  // Build the current config from attributes
  const currentConfig = buildSwiperConfig(attributes);
  const currentConfigJson = JSON.stringify(currentConfig, null, 2);

  // Update local state when attributes change (but only if user hasn't made changes)
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!hasChanges) {
      setJsonValue(currentConfigJson);
    }
  }, [currentConfigJson, hasChanges]);

  // Initialize on mount
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setJsonValue(currentConfigJson);
  }, []);
  const handleJsonChange = value => {
    setJsonValue(value);
    setHasChanges(true);

    // Validate JSON
    try {
      JSON.parse(value);
      setIsValid(true);
    } catch (e) {
      setIsValid(false);
    }
  };
  const handleSave = () => {
    if (!isValid) return;
    try {
      const parsed = JSON.parse(jsonValue);

      // Map JSON config back to block attributes
      const newAttributes = {};
      if (parsed.slidesPerView !== undefined) newAttributes.slidesPerView = parsed.slidesPerView;
      if (parsed.slidesPerGroup !== undefined) newAttributes.slidesPerGroup = parsed.slidesPerGroup;
      if (parsed.slidesPerGroupAuto !== undefined) newAttributes.slidesPerGroupAuto = parsed.slidesPerGroupAuto;
      if (parsed.slidesPerGroupSkip !== undefined) newAttributes.slidesPerGroupSkip = parsed.slidesPerGroupSkip;
      if (parsed.spaceBetween !== undefined) newAttributes.spaceBetween = parsed.spaceBetween;
      if (parsed.autoSlideWidth !== undefined) newAttributes.autoSlideWidth = parsed.autoSlideWidth;
      if (parsed.navigation !== undefined) newAttributes.navigation = parsed.navigation;
      if (parsed.delay !== undefined) newAttributes.delay = parsed.delay;
      if (parsed.speed !== undefined) newAttributes.speed = parsed.speed;
      if (parsed.loop !== undefined) newAttributes.loop = parsed.loop;
      if (parsed.direction !== undefined) newAttributes.direction = parsed.direction;
      if (parsed.slidesOffsetBefore !== undefined) newAttributes.slidesOffsetBefore = parsed.slidesOffsetBefore;
      if (parsed.slidesOffsetAfter !== undefined) newAttributes.slidesOffsetAfter = parsed.slidesOffsetAfter;
      if (parsed.autoHeight !== undefined) newAttributes.autoHeight = parsed.autoHeight;
      if (parsed.releaseOnEdges !== undefined) newAttributes.releaseOnEdges = parsed.releaseOnEdges;
      if (parsed.effect !== undefined) newAttributes.effect = parsed.effect;
      if (parsed.loopAddBlankSlides !== undefined) newAttributes.loopAddBlankSlides = parsed.loopAddBlankSlides;
      if (parsed.loopAdditionalSlides !== undefined) newAttributes.loopAdditionalSlides = parsed.loopAdditionalSlides;

      // Handle autoplay object
      if (parsed.autoplay !== undefined) {
        if (parsed.autoplay === true || typeof parsed.autoplay === 'object') {
          newAttributes.autoplay = true;
          if (typeof parsed.autoplay === 'object') {
            if (parsed.autoplay.delay !== undefined) newAttributes.delay = parsed.autoplay.delay;
            if (parsed.autoplay.disableOnInteraction !== undefined) newAttributes.disableOnInteraction = parsed.autoplay.disableOnInteraction;
            if (parsed.autoplay.pauseOnMouseEnter !== undefined) newAttributes.pauseOnMouseEnter = parsed.autoplay.pauseOnMouseEnter;
            if (parsed.autoplay.reverseDirection !== undefined) newAttributes.reverseDirection = parsed.autoplay.reverseDirection;
            if (parsed.autoplay.stopOnLastSlide !== undefined) newAttributes.stopOnLastSlide = parsed.autoplay.stopOnLastSlide;
            if (parsed.autoplay.waitForTransition !== undefined) newAttributes.waitForTransition = parsed.autoplay.waitForTransition;
          }
        } else {
          newAttributes.autoplay = false;
        }
      }

      // Handle freeMode object
      if (parsed.freeMode !== undefined) {
        if (typeof parsed.freeMode === 'object' && parsed.freeMode.enabled) {
          newAttributes.freeMode = true;
          if (parsed.freeMode.minimumVelocity !== undefined) newAttributes.freeModeMinimumVelocity = parsed.freeMode.minimumVelocity;
          if (parsed.freeMode.momentum !== undefined) newAttributes.freeModeMomentum = parsed.freeMode.momentum;
          if (parsed.freeMode.momentumBounce !== undefined) newAttributes.freeModeMomentumBounce = parsed.freeMode.momentumBounce;
          if (parsed.freeMode.momentumBounceRatio !== undefined) newAttributes.freeModeMomentumBounceRatio = parsed.freeMode.momentumBounceRatio;
          if (parsed.freeMode.momentumRatio !== undefined) newAttributes.freeModeMomentumRatio = parsed.freeMode.momentumRatio;
          if (parsed.freeMode.momentumVelocityRatio !== undefined) newAttributes.freeModeMomentumVelocityRatio = parsed.freeMode.momentumVelocityRatio;
          if (parsed.freeMode.sticky !== undefined) newAttributes.freeModeSticky = parsed.freeMode.sticky;
        } else {
          newAttributes.freeMode = false;
        }
      }

      // Handle pagination object
      if (parsed.pagination !== undefined) {
        if (parsed.pagination.type !== undefined) newAttributes.pagination_type = parsed.pagination.type;
        if (parsed.pagination.clickable !== undefined) newAttributes.clickable_pagination = parsed.pagination.clickable;
      }

      // Handle breakpoints
      if (parsed.breakpoints !== undefined) newAttributes.breakpoints = parsed.breakpoints;

      // Handle mousewheel
      if (parsed.mousewheel !== undefined) {
        newAttributes.mousewheel = true;
        if (typeof parsed.mousewheel === 'object' && parsed.mousewheel.releaseOnEdges !== undefined) {
          newAttributes.releaseOnEdges = parsed.mousewheel.releaseOnEdges ? 'true' : 'false';
        }
      }
      setAttributes(newAttributes);
      setHasChanges(false);
    } catch (e) {
      console.error('Failed to parse JSON config:', e);
    }
  };
  const handleReset = () => {
    setJsonValue(currentConfigJson);
    setHasChanges(false);
    setIsValid(true);
  };
  const helperTextStyle = {
    marginTop: '8px',
    fontSize: '12px',
    fontStyle: 'normal',
    color: 'rgb(117, 117, 117)',
    marginBottom: '12px'
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Swiper Configuration (JSON)', 'wp-swiper'),
      help: !isValid ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Invalid JSON format. Please fix the syntax errors.', 'wp-swiper') : '',
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("textarea", {
        value: jsonValue,
        onChange: e => handleJsonChange(e.target.value),
        rows: 15,
        style: {
          width: '100%',
          fontFamily: 'monospace',
          fontSize: '11px',
          padding: '8px',
          border: `1px solid ${isValid ? '#8c8f94' : '#cc1818'}`,
          borderRadius: '4px',
          backgroundColor: isValid ? '#fff' : '#fff5f5',
          resize: 'vertical'
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        variant: "primary",
        onClick: handleSave,
        disabled: !isValid || !hasChanges,
        style: {
          marginRight: '8px'
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Apply Changes', 'wp-swiper')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        variant: "secondary",
        onClick: handleReset,
        disabled: !hasChanges,
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reset', 'wp-swiper')
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
      style: helperTextStyle,
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('This JSON object represents the Swiper initialization configuration. You can edit properties directly here and click "Apply Changes" to update the slider settings. This is useful for advanced customizations or copying configurations between sliders.', 'wp-swiper')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("p", {
      style: helperTextStyle,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("strong", {
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tip:', 'wp-swiper')
      }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Changes made here will update the corresponding settings in the sidebar panels. Some nested properties (like autoplay options) will be extracted to their respective settings.', 'wp-swiper')]
    })]
  });
}

/**
 * Block Edit Component.
 *
 * @param {Object} props Block props.
 * @return {JSX.Element} Block edit component.
 */
function Edit({
  clientId,
  attributes,
  setAttributes,
  className
}) {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.useBlockProps)();

  // Use modern hooks instead of withSelect/withDispatch HOCs
  const {
    block,
    isSelectedBlockInRoot
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getBlock,
      isBlockSelected,
      hasSelectedInnerBlock
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.store);
    return {
      block: getBlock(clientId),
      isSelectedBlockInRoot: isBlockSelected(clientId) || hasSelectedInnerBlock(clientId, true)
    };
  }, [clientId]);
  const {
    updateBlockAttributes,
    removeBlock,
    replaceInnerBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.store);
  const {
    getBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => ({
    getBlocks: select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.store).getBlocks
  }), []);

  // Helper function to update slug attribute for inner blocks
  const updateSlugsForInnerBlocks = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(innerBlocks => {
    let counter = 1;
    innerBlocks.forEach(innerBlock => {
      updateBlockAttributes(innerBlock.clientId, {
        slug: `slide-${counter}`
      });
      counter++;
    });
  }, [updateBlockAttributes]);
  const {
    tabActive,
    buttonsAlign,
    tabsData,
    txtColor,
    overlayColor,
    overlayImg,
    overlayImgOpacity,
    autoplay,
    disableOnInteraction,
    pauseOnMouseEnter,
    reverseDirection,
    stopOnLastSlide,
    waitForTransition,
    delay,
    speed,
    loop,
    loopAddBlankSlides,
    loopAdditionalSlides,
    effect,
    slidesPerView,
    slidesPerGroup,
    slidesPerGroupAuto,
    slidesPerGroupSkip,
    spaceBetween,
    autoSlideWidth,
    navigation,
    pagination,
    containerWidth,
    mousewheel,
    releaseOnEdges,
    pagination_type,
    clickable_pagination,
    breakpoints,
    freeMode,
    freeModeMinimumVelocity,
    freeModeMomentum,
    freeModeMomentumBounce,
    freeModeMomentumBounceRatio,
    freeModeMomentumRatio,
    freeModeMomentumVelocityRatio,
    freeModeSticky,
    thumbs,
    thumbsSlidesPerView,
    thumbsSpaceBetween,
    autoHeight,
    sliderHeight,
    debug,
    direction,
    previousIcon,
    nextIcon,
    slidesOffsetBefore,
    slidesOffsetAfter,
    overflowVisible
  } = attributes;
  const childBlocks = getBlocks(clientId);

  // Function to check if two arrays are equal without considering the order of elements
  const areArraysEqualWithoutOrder = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)((arr1, arr2) => {
    if (!arr1 || !arr2 || arr1.length !== arr2.length) {
      return false;
    }
    return arr1.every((value, index) => value === arr2[index]);
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!block?.innerBlocks) return;

    // Extract the client IDs of the inner blocks
    const prevClientIdOrder = block.innerBlocks.map(ib => ib.attributes.slug);
    const propClientIdOrder = tabsData.map(tabData => tabData.slug);
    const prevThumbImg = block.innerBlocks.map(ib => ib.attributes.thumbImg);
    const propThumbImg = tabsData.map(tabData => tabData.thumbImg);
    let counter = 0;

    // If we disable this line of code, then adding new slide doesn't work
    // Introducing if else fixed the problem
    if (!areArraysEqualWithoutOrder(prevClientIdOrder, propClientIdOrder) || !areArraysEqualWithoutOrder(prevThumbImg, propThumbImg)) {
      const newTabsData = block.innerBlocks.map(tabData => {
        counter++;
        return {
          clientId: tabData.clientId,
          slideImg: tabData.attributes.slideImg,
          thumbImg: tabData.attributes.thumbImg,
          slug: `slide-${counter}`
        };
      });
      updateSlugsForInnerBlocks(block.innerBlocks);
      setAttributes({
        tabsData: newTabsData
      });
    }
  }, [childBlocks, block, tabsData, areArraysEqualWithoutOrder, updateSlugsForInnerBlocks, setAttributes]);
  const [alignment, setAlignment] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('bottom center');
  const [isDraggingOver, setIsDraggingOver] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isUploading, setIsUploading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  /**
   * Handle files dropped onto the swiper block
   * Creates new slides for each image dropped
   */
  const handleFilesDropped = async files => {
    if (!files || files.length === 0) return;

    // Filter only image files
    const imageFiles = Array.from(files).filter(file => file.type.startsWith('image/'));
    if (imageFiles.length === 0) return;
    setIsUploading(true);
    setIsDraggingOver(false);
    try {
      // Upload all files and create slides
      for (let i = 0; i < imageFiles.length; i++) {
        const file = imageFiles[i];

        // Upload the file to media library
        const media = await uploadMediaFile(file);

        // Get the image URL
        const imgUrl = media.source_url || media.media_details?.sizes?.full?.source_url || '';
        const thumbUrl = media.media_details?.sizes?.thumbnail?.source_url || media.media_details?.sizes?.medium?.source_url || imgUrl;

        // Create new slide with the image
        const newDataLength = tabsData.length + 1;
        const newBlock = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlock)('da/wp-swiper-slide', {
          slug: `slide-${newDataLength}`,
          slideImg: imgUrl,
          slideImgId: media.id,
          thumbImg: thumbUrl
        });

        // Update tabsData
        const newTabsData = [...tabsData, {
          clientId: newBlock.clientId,
          slug: `slide-${newDataLength}`,
          slideImg: imgUrl,
          thumbImg: thumbUrl
        }];

        // Add the block to inner blocks
        let innerBlocks = getBlocks(clientId);
        innerBlocks = [...innerBlocks, newBlock];
        replaceInnerBlocks(clientId, innerBlocks, false);
        setAttributes({
          tabsData: newTabsData,
          tabActive: `slide-${newDataLength}`
        });
      }
    } catch (error) {
      console.error('Error uploading images:', error);
    } finally {
      setIsUploading(false);
    }
  };

  /**
   * Remove a tab/slide
   */
  const removeTab = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(i => {
    if (!block?.innerBlocks) return;
    if (block.innerBlocks.length <= 1) {
      removeBlock(block.clientId);
    } else if (block.innerBlocks[i]) {
      if (tabsData[i]) {
        const newTabsData = (0,_utils_shared__WEBPACK_IMPORTED_MODULE_9__.deepClone)(tabsData);
        newTabsData.splice(i, 1);
        removeBlock(block.innerBlocks[i].clientId);
        for (let j = i; j < newTabsData.length; j++) {
          const newSlug = `slide-${j + 1}`;
          newTabsData[j].slug = newSlug;
          updateBlockAttributes(newTabsData[j].clientId, {
            slug: newSlug
          });
        }
        setAttributes({
          tabsData: newTabsData
        });
      }
    }
  }, [block, tabsData, removeBlock, updateBlockAttributes, setAttributes]);
  className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default()(className, 'wp-swiper__slides');
  let buttonsAlignValForControl = buttonsAlign;
  if (buttonsAlignValForControl === 'start') {
    buttonsAlignValForControl = 'left';
  } else if (buttonsAlignValForControl === 'end') {
    buttonsAlignValForControl = 'right';
  }

  // used for the map function to create numbered tabs
  let counter = 1;
  const style = txtColor ? {
    color: txtColor
  } : {};
  const Seperator = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        style: {
          borderTop: '1px solid #dddddd',
          marginTop: '16px',
          marginBottom: '16px',
          width: '100%'
        }
      })
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Overlay Settings', 'wp-swiper'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaUploadCheck, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaUpload, {
              value: overlayImg,
              onSelect: media => {
                const imgUrl = media.sizes?.full?.url || media.url;
                setAttributes({
                  overlayImg: imgUrl
                });
              },
              allowedTypes: ['image'],
              render: ({
                open
              }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
                onClick: open,
                className: "button",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select overlay image', 'wp-swiper')
              })
            })
          })
        }), overlayImg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: (0,_utils_get_image__WEBPACK_IMPORTED_MODULE_8__["default"])(overlayImg)
        }), overlayImg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
            variant: "secondary",
            size: "small",
            className: "block-library-cover__reset-button",
            onClick: () => setAttributes({
              overlayImg: undefined
            }),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear Media', 'wp-swiper')
          })
        }), overlayImg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Overlay Opacity', 'wp-swiper'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Opacity', 'wp-swiper'),
            value: overlayImgOpacity,
            onChange: value => setAttributes({
              overlayImgOpacity: value
            }),
            min: 0,
            max: 1,
            step: 0.01,
            required: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(Seperator, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Overlay Color', 'wp-swiper'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ColorPicker, {
            color: overlayColor.hex || overlayColor,
            onChangeComplete: color => {
              setAttributes({
                overlayColor: color
              });
              let iBlocks = block.innerBlocks;
              iBlocks.map(iBlock => {
                updateBlockAttributes(iBlock.clientId, {
                  overlayColor: color
                });
              });
            }
          })
        }), overlayColor?.rgb?.a > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
            variant: "secondary",
            size: "small",
            className: "block-library-cover__reset-button",
            onClick: () => {
              const defaultColor = {
                rgb: {
                  r: 0,
                  g: 0,
                  b: 0,
                  a: 0
                }
              };
              setAttributes({
                overlayColor: defaultColor
              });

              // Update all inner blocks
              const iBlocks = block?.innerBlocks || [];
              iBlocks.forEach(iBlock => {
                updateBlockAttributes(iBlock.clientId, {
                  overlayColor: defaultColor
                });
              });
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear Color', 'wp-swiper')
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color Settings', 'wp-swiper'),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Color', 'wp-swiper'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ColorPicker, {
            color: txtColor,
            onChangeComplete: color => setAttributes({
              txtColor: color.hex
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Basic Slider Settings', 'wp-swiper'),
        icon: "controls-play",
        initialOpen: true,
        children: [!autoHeight && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalUnitControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slider Height', 'wp-swiper'),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Set a fixed height for the slider', 'wp-swiper'),
            value: sliderHeight,
            onChange: value => {
              setAttributes({
                sliderHeight: value
              });
            },
            units: [{
              value: 'px',
              label: 'px',
              default: 500
            }, {
              value: 'vh',
              label: 'vh',
              default: 50
            }, {
              value: '%',
              label: '%',
              default: 100
            }, {
              value: 'em',
              label: 'em',
              default: 20
            }]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Auto Height', 'wp-swiper'),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slider wrapper will adapt its height to the height of the currently active slide', 'wp-swiper'),
            checked: autoHeight,
            onChange: () => {
              setAttributes({
                autoHeight: !autoHeight
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Auto Play', 'wp-swiper'),
            checked: autoplay,
            onChange: () => {
              setAttributes({
                autoplay: !autoplay
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Loop', 'wp-swiper'),
            checked: loop,
            onChange: () => {
              setAttributes({
                loop: !loop
              });
            }
          })
        }), loop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Loop Add Blank Slides', 'wp-swiper'),
              help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Automatically adds blank slides if you use Grid or slidesPerGroup and the total amount of slides is not even to slidesPerGroup or to grid.rows', 'wp-swiper'),
              checked: loopAddBlankSlides,
              onChange: () => {
                setAttributes({
                  loopAddBlankSlides: !loopAddBlankSlides
                });
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Loop Additional Slides', 'wp-swiper'),
              help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Allows to increase amount of looped slides', 'wp-swiper'),
              value: loopAdditionalSlides,
              type: "number",
              onChange: option => {
                setAttributes({
                  loopAdditionalSlides: parseInt(option)
                });
              }
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Speed', 'wp-swiper'),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Duration of transition between slides (in ms)', 'wp-swiper'),
            value: speed,
            type: "number",
            onChange: option => {
              setAttributes({
                speed: parseInt(option)
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Delay', 'wp-swiper'),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Delay between transitions (in ms)', 'wp-swiper'),
            value: delay,
            type: "number",
            onChange: option => {
              setAttributes({
                delay: parseInt(option)
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Container Max Width %', 'wp-swiper'),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Frontend: Set the max width for the content with text.', 'wp-swiper'),
            value: containerWidth,
            onChange: value => {
              setAttributes({
                containerWidth: value
              });
              const iBlocks = block?.innerBlocks || [];
              iBlocks.forEach(iBlock => {
                updateBlockAttributes(iBlock.clientId, {
                  containerWidth: value
                });
              });
            },
            min: 1,
            max: 100,
            step: 1,
            required: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Overflow Visible', 'wp-swiper'),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Apply overflow visible to the swiper container', 'wp-swiper'),
            checked: overflowVisible,
            onChange: () => {
              setAttributes({
                overflowVisible: !overflowVisible
              });
            }
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slides Configuration', 'wp-swiper'),
        icon: "grid-view",
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slides per view', 'wp-swiper'),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Number of slides per view (slides visible at the same time on slider\'s container). Can be a number or auto', 'wp-swiper'),
            value: slidesPerView,
            onChange: option => {
              setAttributes({
                slidesPerView: option
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slides Per Group', 'wp-swiper'),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Set numbers of slides to define and enable group sliding. Useful to use with slidesPerView > 1', 'wp-swiper'),
            value: slidesPerGroup,
            type: "number",
            onChange: option => {
              setAttributes({
                slidesPerGroup: parseInt(option)
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slides Per Group Auto', 'wp-swiper'),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('This param intended to be used only with slidesPerView: \'auto\' and slidesPerGroup: 1. When enabled, it will skip all slides in view on .slideNext() & .slidePrev() methods calls, on Navigation buttons clicks and in autoplay.', 'wp-swiper'),
            checked: slidesPerGroupAuto,
            onChange: () => {
              setAttributes({
                slidesPerGroupAuto: !slidesPerGroupAuto
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slides Per Group Skip', 'wp-swiper'),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('If slidesPerGroupSkip equals 0 (default), no slides are excluded from grouping. If slidesPerGroupSkip is equal or greater than 1, the first X slides are treated as single groups, whereas all following slides are grouped by the slidesPerGroup value.', 'wp-swiper'),
            value: slidesPerGroupSkip,
            type: "number",
            onChange: option => {
              setAttributes({
                slidesPerGroupSkip: parseInt(option)
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Space Between', 'wp-swiper'),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Distance between slides in px.', 'wp-swiper'),
            value: spaceBetween,
            onChange: option => {
              setAttributes({
                spaceBetween: parseInt(option)
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Auto Slide Width', 'wp-swiper'),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Makes each slide size itself based on its content instead of being evenly distributed. Useful for logos, badges, small cards, or any element that should not be stretched.', 'wp-swiper'),
            checked: autoSlideWidth,
            onChange: () => {
              setAttributes({
                autoSlideWidth: !autoSlideWidth
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slides Offset Before', 'wp-swiper'),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add (in px) additional slide offset in the beginning of the container (before all slides)', 'wp-swiper'),
            value: slidesOffsetBefore,
            onChange: option => {
              setAttributes({
                slidesOffsetBefore: parseInt(option)
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slides Offset After', 'wp-swiper'),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add (in px) additional slide offset in the end of the container (after all slides)', 'wp-swiper'),
            value: slidesOffsetAfter,
            onChange: option => {
              setAttributes({
                slidesOffsetAfter: parseInt(option)
              });
            }
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Navigation & Controls', 'wp-swiper'),
        icon: "leftright",
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Navigation', 'wp-swiper'),
            checked: navigation,
            onChange: () => {
              setAttributes({
                navigation: !navigation
              });
            }
          })
        }), navigation && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('You can customize icons by uploading your own. Default icons used otherwise.', 'wp-swiper')
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaUploadCheck, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaUpload, {
                value: previousIcon,
                onSelect: media => {
                  const imgUrl = media.sizes?.full?.url || media.url;
                  setAttributes({
                    previousIcon: imgUrl
                  });
                },
                allowedTypes: ['image'],
                render: ({
                  open
                }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
                  onClick: open,
                  className: "button",
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select previous slide icon', 'wp-swiper')
                })
              })
            })
          }), previousIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: (0,_utils_get_image__WEBPACK_IMPORTED_MODULE_8__["default"])(previousIcon)
          }), previousIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
              variant: "secondary",
              size: "small",
              className: "block-library-cover__reset-button",
              onClick: () => setAttributes({
                previousIcon: undefined
              }),
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear Media', 'wp-swiper')
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaUploadCheck, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaUpload, {
                value: nextIcon,
                onSelect: media => {
                  const imgUrl = media.sizes?.full?.url || media.url;
                  setAttributes({
                    nextIcon: imgUrl
                  });
                },
                allowedTypes: ['image'],
                render: ({
                  open
                }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
                  onClick: open,
                  className: "button",
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select next slide icon', 'wp-swiper')
                })
              })
            })
          }), nextIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: (0,_utils_get_image__WEBPACK_IMPORTED_MODULE_8__["default"])(nextIcon)
          }), nextIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
              variant: "secondary",
              size: "small",
              className: "block-library-cover__reset-button",
              onClick: () => setAttributes({
                nextIcon: undefined
              }),
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear Media', 'wp-swiper')
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(Seperator, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Pagination', 'wp-swiper'),
            checked: pagination,
            onChange: () => {
              setAttributes({
                pagination: !pagination
              });
            }
          })
        }), pagination && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Type of pagination', 'wp-swiper'),
              value: pagination_type,
              options: [{
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bullets', 'wp-swiper'),
                value: 'bullets'
              }, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Fraction', 'wp-swiper'),
                value: 'fraction'
              }, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Progress Bar', 'wp-swiper'),
                value: 'progressbar'
              }],
              onChange: option => {
                setAttributes({
                  pagination_type: option
                });
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clickable Pagination', 'wp-swiper'),
              checked: clickable_pagination,
              onChange: () => {
                setAttributes({
                  clickable_pagination: !clickable_pagination
                });
              }
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Direction Settings', 'wp-swiper'),
        icon: "sort",
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Direction', 'wp-swiper'),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('For vertical slider, Slides Per View should be set to 1', 'wp-swiper'),
          value: direction,
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Horizontal', 'wp-swiper'),
            value: 'horizontal'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Vertical', 'wp-swiper'),
            value: 'vertical'
          }],
          onChange: option => {
            setAttributes({
              direction: option
            });
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Autoplay Behavior', 'wp-swiper'),
        icon: "controls-repeat",
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Disable On Interaction', 'wp-swiper'),
            checked: disableOnInteraction,
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Set to false and autoplay will not be disabled after user interactions (swipes), it will be restarted every time after interaction', 'wp-swiper'),
            onChange: () => {
              setAttributes({
                disableOnInteraction: !disableOnInteraction
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pause On Mouse Enter', 'wp-swiper'),
            checked: pauseOnMouseEnter,
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('When enabled autoplay will be paused on pointer (mouse) enter over Swiper container.', 'wp-swiper'),
            onChange: () => {
              setAttributes({
                pauseOnMouseEnter: !pauseOnMouseEnter
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reverse Direction', 'wp-swiper'),
            checked: reverseDirection,
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enables autoplay in reverse direction', 'wp-swiper'),
            onChange: () => {
              setAttributes({
                reverseDirection: !reverseDirection
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Stop On Last Slide', 'wp-swiper'),
            checked: stopOnLastSlide,
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable this parameter and autoplay will be stopped when it reaches last slide (has no effect in loop mode)', 'wp-swiper'),
            onChange: () => {
              setAttributes({
                stopOnLastSlide: !stopOnLastSlide
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Wait For Transition', 'wp-swiper'),
            checked: waitForTransition,
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('When enabled autoplay will wait for wrapper transition to continue. Can be disabled in case of using Virtual Translate when your slider may not have transition', 'wp-swiper'),
            onChange: () => {
              setAttributes({
                waitForTransition: !waitForTransition
              });
            }
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Advanced Features', 'wp-swiper'),
        icon: "admin-generic",
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Effect (Under Construction)', 'wp-swiper'),
            value: effect,
            options: [{
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slide', 'wp-swiper'),
              value: 'slide'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Fade', 'wp-swiper'),
              value: 'fade'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Cube', 'wp-swiper'),
              value: 'cube'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Coverflow', 'wp-swiper'),
              value: 'coverflow'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Flip', 'wp-swiper'),
              value: 'flip'
            }],
            onChange: option => {
              setAttributes({
                effect: option
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Mouse Wheel', 'wp-swiper'),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enables navigation through slides using mouse wheel.', 'wp-swiper'),
            checked: mousewheel,
            onChange: () => {
              setAttributes({
                mousewheel: !mousewheel
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Release On Edges', 'wp-swiper'),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Set to true and swiper will release mousewheel event and allow page scrolling when swiper is on edge positions (in the beginning or in the end) NOTE: Mouse Wheel must be set to true for this to work.', 'wp-swiper'),
            checked: releaseOnEdges,
            onChange: () => {
              setAttributes({
                releaseOnEdges: !releaseOnEdges
              });
            }
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Free Mode', 'wp-swiper'),
        icon: "controls-play",
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enable Free Mode', 'wp-swiper'),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Whether the free mode is enabled. Slide will continue moving for a while after you release it.', 'wp-swiper'),
            checked: freeMode,
            onChange: () => {
              if (freeMode) {
                setAttributes({
                  freeModeSticky: false
                });
              }
              setAttributes({
                freeMode: !freeMode
              });
            }
          })
        }), freeMode && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Minimum Velocity', 'wp-swiper'),
              help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Minimum touchmove-velocity required to trigger free mode momentum', 'wp-swiper'),
              value: freeModeMinimumVelocity,
              onChange: value => {
                setAttributes({
                  freeModeMinimumVelocity: value
                });
              },
              min: 0,
              max: 1,
              step: 0.01
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Momentum', 'wp-swiper'),
              help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('If enabled, then slide will keep moving for a while after you release it', 'wp-swiper'),
              checked: freeModeMomentum,
              onChange: () => {
                setAttributes({
                  freeModeMomentum: !freeModeMomentum
                });
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Momentum Bounce', 'wp-swiper'),
              help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Set to false if you want to disable momentum bounce in free mode', 'wp-swiper'),
              checked: freeModeMomentumBounce,
              onChange: () => {
                setAttributes({
                  freeModeMomentumBounce: !freeModeMomentumBounce
                });
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Momentum Bounce Ratio', 'wp-swiper'),
              help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Higher value produces larger momentum bounce effect', 'wp-swiper'),
              value: freeModeMomentumBounceRatio,
              onChange: value => {
                setAttributes({
                  freeModeMomentumBounceRatio: value
                });
              },
              min: 0,
              max: 10,
              step: 0.1
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Momentum Ratio', 'wp-swiper'),
              help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Higher value produces larger momentum distance after you release slider', 'wp-swiper'),
              value: freeModeMomentumRatio,
              onChange: value => {
                setAttributes({
                  freeModeMomentumRatio: value
                });
              },
              min: 0,
              max: 10,
              step: 0.1
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Momentum Velocity Ratio', 'wp-swiper'),
              help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Higher value produces larger momentum velocity after you release slider', 'wp-swiper'),
              value: freeModeMomentumVelocityRatio,
              onChange: value => {
                setAttributes({
                  freeModeMomentumVelocityRatio: value
                });
              },
              min: 0,
              max: 10,
              step: 0.1
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Sticky', 'wp-swiper'),
              help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Set to enabled to enable snap to slides positions in free mode', 'wp-swiper'),
              checked: freeModeSticky,
              onChange: () => {
                setAttributes({
                  freeModeSticky: !freeModeSticky
                });
              }
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Responsive Breakpoints', 'wp-swiper'),
        icon: "smartphone",
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextareaControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Responsive breakpoints (JSON Object)', 'wp-swiper'),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Allows to set different parameter for different responsive breakpoints (screen sizes). Not all parameters can be changed in breakpoints, only those which are not required different layout and logic, like slidesPerView, slidesPerGroup, spaceBetween, grid.rows. Such parameters like loop and effect won\'t work', 'wp-swiper'),
            value: breakpoints,
            onChange: option => {
              setAttributes({
                breakpoints: option
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("p", {
            children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Example:', 'wp-swiper'), " ", '{\"720\":{\"slidesPerView\":2}}', " - ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Notice the double quotes', 'wp-swiper')]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Thumbnails', 'wp-swiper'),
        icon: "images-alt2",
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Thumbs', 'wp-swiper'),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enables thumbs to be used as pagination.', 'wp-swiper'),
            checked: thumbs,
            onChange: () => {
              setAttributes({
                thumbs: !thumbs
              });
            }
          })
        }), thumbs && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Space Between', 'wp-swiper'),
              help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Distance between slides in px.', 'wp-swiper'),
              value: thumbsSpaceBetween,
              onChange: option => {
                setAttributes({
                  thumbsSpaceBetween: parseInt(option)
                });
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Thumbs per view', 'wp-swiper'),
              help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Number of slides per view (slides visible at the same time on slider\'s container). Can be a number or auto', 'wp-swiper'),
              value: thumbsSlidesPerView,
              onChange: option => {
                setAttributes({
                  thumbsSlidesPerView: parseInt(option)
                });
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalAlignmentMatrixControl, {
              disableAlignment: ['center'],
              value: alignment,
              onChange: newAlignment => setAlignment(newAlignment)
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Developer Tools', 'wp-swiper'),
        icon: "admin-tools",
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Debug', 'wp-swiper'),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show (console.log) config JSON object for each slider', 'wp-swiper'),
          checked: debug,
          onChange: () => {
            setAttributes({
              debug: !debug
            });
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
            onClick: () => {
              let counter = 1;
              tabsData.forEach(tab => {
                tab.slug = `slide-${counter}`;
                counter++;
              });
              setAttributes({
                tabsData
              });
              updateSlugsForInnerBlocks(block?.innerBlocks || []);
            },
            className: "button",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Fix Slide Slugs', 'wp-swiper')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            style: {
              marginTop: 'calc(8px)',
              fontSize: '12px',
              fontStyle: 'normal',
              color: 'rgb(117, 117, 117)',
              marginBottom: 'revert'
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('On rare occasions, if the slide slugs become out of sync with the slide data stored in the parent block, you might notice all slide contents appearing under a single tab. Clicking this button could help resolve the issue. This action iterates over each slide and resets the slugs in ascending order (e.g., slide-1, slide-2, etc.), ensuring that each tab properly corresponds to its respective slide.', 'wp-swiper')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(SwiperConfigEditor, {
          attributes: attributes,
          setAttributes: setAttributes
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      ...blockProps,
      className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default()(blockProps.className, className),
      "data-tab-active": tabActive,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "wb-tabs-buttons-wrapper",
        style: style,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default()('wb-tabs-buttons', `wb-tabs-buttons-align-${buttonsAlign}`),
          children: [tabsData.map((tabData, i) => {
            const {
              slug
            } = tabData;
            const selected = tabActive === slug;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default()('wb-tabs-buttons-item', selected ? 'wb-tabs-buttons-item-active' : ''),
              onClick: () => setAttributes({
                tabActive: slug
              }),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("h4", {
                children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slide', 'wp-swiper'), " ", counter++]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_remove_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
                show: isSelectedBlockInRoot,
                tooltipText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove slide?', 'wp-swiper'),
                onRemove: () => {
                  removeTab(i);
                }
              })]
            }, `tab_button_${tabData.slug}`);
          }), isSelectedBlockInRoot ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
            text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add Slide', 'wp-swiper'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
              icon: "insert",
              onClick: () => {
                const newDataLength = tabsData.length + 1;
                const newBlock = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlock)('da/wp-swiper-slide', {
                  slug: `slide-${newDataLength}`
                });
                const newTabsData = [...tabsData, {
                  clientId: newBlock.clientId,
                  slug: `slide-${newDataLength}`,
                  slideImg: '',
                  thumbImg: ''
                }];
                const innerBlocks = [...getBlocks(clientId), newBlock];
                replaceInnerBlocks(clientId, innerBlocks, false);
                setAttributes({
                  tabsData: newTabsData
                });
              }
            })
          }) : '']
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "wp-swiper__slide-content",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.InnerBlocks, {
            template: INNER_BLOCKS_TEMPLATE,
            templateLock: false,
            allowedBlocks: ['da/wp-swiper-slide']
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default()('wp-swiper__drop-zone-wrapper', {
            'is-dragging-over': isDraggingOver,
            'is-uploading': isUploading
          }),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.DropZone, {
            onFilesDrop: handleFilesDropped,
            onDragEnter: () => setIsDraggingOver(true),
            onDragLeave: () => setIsDraggingOver(false)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            className: "wp-swiper__drop-zone-content",
            children: isUploading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                className: "dashicons dashicons-update wp-swiper__drop-zone-spinner"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Uploading images...', 'wp-swiper')
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                className: "dashicons dashicons-images-alt2"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Drop images here to create slides', 'wp-swiper')
              })]
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("style", {
      children: `
						[data-block="${clientId}"] [data-tab] {
							display: none;
						}
						[data-block="${clientId}"] [data-tab="${tabActive !== null && tabActive !== void 0 ? tabActive : 'slide-1'}"] {
							display: block !important;
						}
						`
    })]
  });
}

/***/ },

/***/ "./src/blocks/slides/index.js"
/*!************************************!*\
  !*** ./src/blocks/slides/index.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   metadata: () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   settings: () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deprecated */ "./src/blocks/slides/deprecated.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/slides/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/slides/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/slides/save.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * WordPress dependencies
 */
const {
  __
} = wp.i18n;

// Import Swiper React components

/**
 * Internal dependencies
 */





const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_1__;

const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_1__,
  title: __('WP Swiper', '@@text_domain'),
  description: __('Create an awesome slider.', '@@text_domain'),
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
      d: "M20 17.4444C20 17.857 19.8314 18.2527 19.5314 18.5444C19.2313 18.8361 18.8243 19 18.4 19H5.6C5.17565 19 4.76869 18.8361 4.46863 18.5444C4.16857 18.2527 4 17.857 4 17.4444V6.55556C4 6.143 4.16857 5.74733 4.46863 5.45561C4.76869 5.16389 5.17565 5 5.6 5H9.6L11.2 7.33333H18.4C18.8243 7.33333 19.2313 7.49722 19.5314 7.78894C19.8314 8.08067 20 8.47633 20 8.88889V17.4444Z",
      stroke: "currentColor",
      fill: "transparent",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })
  }),
  keywords: [__('swiper', '@@text_domain'), __('slider', '@@text_domain'), __('wp slider', '@@text_domain'), __('wp swiper', '@@text_domain')],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_0__["default"]
};
settings.attributes = {
  ...settings.attributes,
  freeMode: {
    type: 'boolean',
    default: false
  },
  freeModeMinimumVelocity: {
    type: 'number',
    default: 0.02
  },
  freeModeMomentum: {
    type: 'boolean',
    default: true
  },
  freeModeMomentumBounce: {
    type: 'boolean',
    default: true
  },
  freeModeMomentumBounceRatio: {
    type: 'number',
    default: 1
  },
  freeModeMomentumRatio: {
    type: 'number',
    default: 1
  },
  freeModeMomentumVelocityRatio: {
    type: 'number',
    default: 1
  },
  freeModeSticky: {
    type: 'boolean',
    default: false
  },
  mousewheel: {
    type: 'boolean',
    default: false
  },
  releaseOnEdges: {
    type: 'boolean',
    default: false
  },
  pagination_type: {
    type: 'string',
    default: 'bullets'
  }
};


/***/ },

/***/ "./src/blocks/slides/oldsave.js"
/*!**************************************!*\
  !*** ./src/blocks/slides/oldsave.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Block Save Class.
 */

function save(props) {
  let {
    className
  } = props.attributes;
  const {
    align,
    overlayImg,
    overlayImgOpacity,
    slidesPerView,
    spaceBetween,
    txtColor,
    autoplay,
    disableOnInteraction,
    pauseOnMouseEnter,
    reverseDirection,
    stopOnLastSlide,
    waitForTransition,
    delay,
    speed,
    loop,
    effect,
    navigation,
    pagination,
    mousewheel,
    releaseOnEdges,
    pagination_type,
    clickable_pagination,
    breakpoints,
    thumbs,
    thumbsSpaceBetween,
    thumbsSlidesPerView,
    autoHeight,
    freeMode,
    sticky,
    debug,
    direction,
    tabsData,
    previousIcon,
    nextIcon,
    slidesOffsetBefore,
    slidesOffsetAfter
  } = props.attributes;
  className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default()(className, 'wp-swiper');
  if (align) {
    className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default()(className, `align${align}`);
  }
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: className
  });
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps;
  const thumbsElements = (typeof tabsData !== 'undefined' ? tabsData : []).map((tab, index) => {
    return (tab.thumbImg || tab.slideImg) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "swiper-slide wp-swiper__thumb",
      "data-thumb": index + 1,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        src: tab.thumbImg || tab.slideImg,
        alt: `Thumbnail ${index + 1}`
      })
    }, index);
  });
  const style_overlay_image = overlayImg ? {
    backgroundImage: `url(${overlayImg})`
  } : {};
  if (overlayImgOpacity) {
    style_overlay_image.opacity = overlayImgOpacity;
  }
  const style_overlay_wrapper = txtColor ? {
    color: txtColor
  } : {};
  let thumbsConfig = {
    'data-thumbs': {}
  };
  let data_atts = {
    'slidesPerView-': slidesPerView,
    'navigation': navigation,
    'pagination': pagination,
    'autoplay': autoplay,
    'disableOnInteraction': disableOnInteraction,
    'pauseOnMouseEnter': pauseOnMouseEnter,
    'delay': delay,
    'speed': speed,
    'loop': loop,
    'effect': effect
  };
  if (debug) {
    data_atts['debug'] = debug;
  }
  if (freeMode && sticky) {
    data_atts['sticky'] = sticky;
  }
  data_atts['slidesOffsetBefore'] = slidesOffsetBefore;
  data_atts['slidesOffsetAfter'] = slidesOffsetAfter;
  data_atts['direction'] = direction;
  data_atts['freeMode'] = freeMode;
  data_atts['autoHeight'] = autoHeight;
  data_atts['spaceBetween'] = spaceBetween;
  data_atts['mousewheel'] = mousewheel;
  data_atts['releaseOnEdges'] = releaseOnEdges;
  data_atts['type'] = pagination_type != 'bullets' ? pagination_type : 'bullets';
  if (clickable_pagination) {
    data_atts['clickable'] = clickable_pagination ? true : '';
  }
  if (typeof breakpoints !== 'undefined' && breakpoints != '') {
    data_atts['data-breakpoints'] = JSON.stringify(breakpoints.replace(/^\s+|\s+|\n$/gm, ''));
    data_atts['data-breakpoints'] = data_atts['breakpoints'].substring(1, data_atts['breakpoints'].length - 1);
  }
  if (thumbs) {
    thumbsConfig['data-thumbs'] = JSON.stringify({
      spaceBetween: thumbsSpaceBetween,
      slidesPerView: thumbsSlidesPerView,
      freeMode: true,
      watchSlidesProgress: true,
      navigation: false
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    ...blockProps,
    children: [getOverlayImg(overlayImg, style_overlay_image), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "wp-swiper__wrapper",
      style: style_overlay_wrapper,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "swiper-container swiper",
        "data-swiper": JSON.stringify(data_atts),
        ...thumbsConfig,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "swiper-wrapper",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, {})
        })
      }), getNavigation(props), getPagination(props)]
    }), getQuoteSVG(props), thumbs && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "wp-swiper__thumbs",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "wp-swiper__wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "swiper-container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "swiper-wrapper",
            children: thumbsElements
          })
        })
      })
    })]
  });
  function getOverlayImg(overlayImg, style_overlay_image) {
    if (overlayImg === undefined) {
      return;
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "wp-swiper__overlay-img",
      style: style_overlay_image
    });
  }
  function getPagination({
    attributes
  }) {
    const {
      pagination
    } = attributes;
    if (pagination) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "swiper-pagination"
      });
    }
  }
  function getNavigation({
    attributes
  }) {
    const {
      navigation
    } = attributes;
    if (navigation) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "wp_swiper__navigation",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "wp_swiper__navigation-container",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: `swiper-button-prev ${previousIcon ? 'wp_swiper__button-prev' : ''}`,
              children: previousIcon ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                src: previousIcon,
                alt: "Previous"
              }) : null
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: `swiper-button-next ${nextIcon ? 'wp_swiper__button-next' : ''}`,
              children: nextIcon ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                src: nextIcon,
                alt: "Previous"
              }) : null
            })]
          })
        })
      });
    }
  }
  function getQuoteSVG({
    attributes
  }) {
    let {
      className
    } = attributes;
    className = className ? className.toString() : '';
    if (className.indexOf('is-style-testimonials') !== -1) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "wp-swiper__quotes",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
            "aria-hidden": "true",
            focusable: "false",
            "data-prefix": "fas",
            "data-icon": "quote-right",
            role: "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            class: "svg-inline--fa fa-quote-right fa-w-16 fa-5x",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
              fill: "currentColor",
              d: "M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z",
              class: ""
            })
          })
        })
      });
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (save);

/***/ },

/***/ "./src/blocks/slides/save-v1.js"
/*!**************************************!*\
  !*** ./src/blocks/slides/save-v1.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Block Save Class - Version 1 (with old sticky attribute)
 * This is for backward compatibility with blocks created before Free Mode parameters were added
 */

function save(props) {
  let {
    className
  } = props.attributes;
  const {
    align,
    overlayImg,
    overlayImgOpacity,
    slidesPerView,
    slidesPerGroup,
    slidesPerGroupAuto,
    slidesPerGroupSkip,
    spaceBetween,
    txtColor,
    autoplay,
    disableOnInteraction,
    pauseOnMouseEnter,
    reverseDirection,
    stopOnLastSlide,
    waitForTransition,
    delay,
    speed,
    loop,
    effect,
    navigation,
    pagination,
    mousewheel,
    releaseOnEdges,
    pagination_type,
    clickable_pagination,
    breakpoints,
    thumbs,
    thumbsSpaceBetween,
    thumbsSlidesPerView,
    autoHeight,
    freeMode,
    sticky,
    debug,
    direction,
    tabsData,
    previousIcon,
    nextIcon,
    slidesOffsetBefore,
    slidesOffsetAfter,
    overflowVisible
  } = props.attributes;
  className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default()(className, 'wp-swiper');
  if (align) {
    className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default()(className, `align${align}`);
  }
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: className
  });
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps;
  const style_overlay_image = overlayImg ? {
    backgroundImage: `url(${overlayImg})`
  } : {};
  if (overlayImgOpacity) {
    style_overlay_image.opacity = overlayImgOpacity;
  }
  const style_overlay_wrapper = txtColor ? {
    color: txtColor
  } : {};
  let thumbsConfig = {
    'data-thumbs': {}
  };
  let data_atts = {
    slidesPerView: slidesPerView === 'auto' ? 'auto' : parseInt(slidesPerView, 10),
    slidesPerGroup,
    slidesPerGroupAuto,
    slidesPerGroupSkip,
    navigation,
    pagination: {},
    delay: delay,
    speed: speed,
    loop: loop,
    direction,
    slidesOffsetBefore,
    slidesOffsetAfter,
    autoHeight,
    spaceBetween,
    releaseOnEdges
  };

  // Mousewheel and release on edges logic
  if (mousewheel && releaseOnEdges) {
    data_atts.mousewheel = {
      releaseOnEdges: releaseOnEdges === 'true'
    };
  }

  // Effect logic
  if (effect) {
    data_atts.effect = effect;

    // If the effect is 'fade', enable crossFade
    if (effect === 'fade') {
      data_atts.fadeEffect = {
        crossFade: true
      };
    }
  }

  // Autoplay
  // -- START -- Autoplay logic
  if (autoplay) {
    data_atts.autoplay = true;

    // Delay logic
    if (delay !== null && delay !== undefined) {
      data_atts.autoplay = {
        delay: Number(delay)
      };
    }

    // Disable on interaction
    if (disableOnInteraction) {
      if (!data_atts.autoplay) {
        data_atts.autoplay = {};
      }
      data_atts.autoplay.disableOnInteraction = true;
    }

    // Pause on mouse enter
    if (pauseOnMouseEnter) {
      if (!data_atts.autoplay) {
        data_atts.autoplay = {};
      }
      data_atts.autoplay.pauseOnMouseEnter = true;
    }

    // Reverse direction
    if (reverseDirection) {
      if (!data_atts.autoplay) {
        data_atts.autoplay = {};
      }
      data_atts.autoplay.reverseDirection = true;
    }

    // Stop on last slide
    if (stopOnLastSlide) {
      if (!data_atts.autoplay) {
        data_atts.autoplay = {};
      }
      data_atts.autoplay.stopOnLastSlide = true;
    }

    // Wait for transition
    if (waitForTransition !== undefined && waitForTransition !== null) {
      if (!data_atts.autoplay) {
        data_atts.autoplay = {};
      }
      data_atts.autoplay.waitForTransition = waitForTransition;
    }
  }
  // -- END -- Autoplay logic

  // Freemode (old version with sticky attribute)
  if (freeMode) {
    data_atts.freeMode = {
      enabled: true
    };

    // If both freeMode and sticky are true, enable sticky mode
    if (sticky) {
      data_atts.freeMode.sticky = true;
    }
  }

  // Pagination
  data_atts.pagination.type = pagination_type != 'bullets' ? pagination_type : 'bullets';
  if (clickable_pagination) {
    data_atts.pagination.clickable = clickable_pagination ? true : '';
  }
  if (typeof breakpoints !== 'undefined' && breakpoints != '') {
    data_atts.breakpoints = breakpoints;
  }
  if (thumbs) {
    thumbsConfig['data-thumbs'] = JSON.stringify({
      spaceBetween: thumbsSpaceBetween,
      slidesPerView: thumbsSlidesPerView,
      freeMode: true,
      watchSlidesProgress: true,
      navigation: false
    });
  }
  const thumbsElements = (typeof tabsData !== 'undefined' ? tabsData : []).map((tab, index) => {
    return (tab.thumbImg || tab.slideImg) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "swiper-slide wp-swiper__thumb",
      "data-thumb": index + 1,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        src: tab.thumbImg || tab.slideImg,
        alt: `Thumbnail ${index + 1}`
      })
    }, index);
  });
  const swiperContainerClassName = classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default()('swiper-container', 'swiper', {
    'swiper-overflow-visible': overflowVisible
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    ...blockProps,
    children: [getOverlayImg(overlayImg, style_overlay_image), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "wp-swiper__wrapper",
      style: style_overlay_wrapper,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: swiperContainerClassName,
        ...(debug ? {
          'data-debug': true
        } : {}),
        // Only include data-debug if debug is true
        "data-swiper": JSON.stringify(data_atts),
        ...thumbsConfig,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "swiper-wrapper",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, {})
        })
      }), getNavigation(props), getPagination(props)]
    }), getQuoteSVG(props), thumbs && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "wp-swiper__thumbs",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "wp-swiper__wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "swiper-container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "swiper-wrapper",
            children: thumbsElements
          })
        })
      })
    })]
  });
  function getOverlayImg(overlayImg, style_overlay_image) {
    if (overlayImg === undefined) {
      return;
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "wp-swiper__overlay-img",
      style: style_overlay_image
    });
  }
  function getPagination({
    attributes
  }) {
    const {
      pagination
    } = attributes;
    if (pagination) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "swiper-pagination"
      });
    }
  }
  function getNavigation({
    attributes
  }) {
    const {
      navigation
    } = attributes;
    if (navigation) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "wp_swiper__navigation",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "wp_swiper__navigation-container",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: `swiper-button-prev ${previousIcon ? 'wp_swiper__button-prev' : ''}`,
              children: previousIcon ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                src: previousIcon,
                alt: "Previous"
              }) : null
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: `swiper-button-next ${nextIcon ? 'wp_swiper__button-next' : ''}`,
              children: nextIcon ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                src: nextIcon,
                alt: "Previous"
              }) : null
            })]
          })
        })
      });
    }
  }
  function getQuoteSVG({
    attributes
  }) {
    let {
      className
    } = attributes;
    className = className ? className.toString() : '';
    if (className.indexOf('is-style-testimonials') !== -1) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "wp-swiper__quotes",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
            "aria-hidden": "true",
            focusable: "false",
            "data-prefix": "fas",
            "data-icon": "quote-right",
            role: "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            class: "svg-inline--fa fa-quote-right fa-w-16 fa-5x",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
              fill: "currentColor",
              d: "M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z",
              class: ""
            })
          })
        })
      });
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (save);

/***/ },

/***/ "./src/blocks/slides/save.js"
/*!***********************************!*\
  !*** ./src/blocks/slides/save.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Block Save Class.
 */

function save(props) {
  let {
    className
  } = props.attributes;
  const {
    align,
    overlayImg,
    overlayImgOpacity,
    slidesPerView,
    slidesPerGroup,
    slidesPerGroupAuto,
    slidesPerGroupSkip,
    spaceBetween,
    autoSlideWidth,
    txtColor,
    autoplay,
    disableOnInteraction,
    pauseOnMouseEnter,
    reverseDirection,
    stopOnLastSlide,
    waitForTransition,
    delay,
    speed,
    loop,
    loopAddBlankSlides,
    loopAdditionalSlides,
    effect,
    navigation,
    pagination,
    mousewheel,
    releaseOnEdges,
    pagination_type,
    clickable_pagination,
    breakpoints,
    thumbs,
    thumbsSpaceBetween,
    thumbsSlidesPerView,
    autoHeight,
    sliderHeight,
    freeMode,
    freeModeMinimumVelocity,
    freeModeMomentum,
    freeModeMomentumBounce,
    freeModeMomentumBounceRatio,
    freeModeMomentumRatio,
    freeModeMomentumVelocityRatio,
    freeModeSticky,
    debug,
    direction,
    tabsData,
    previousIcon,
    nextIcon,
    slidesOffsetBefore,
    slidesOffsetAfter,
    overflowVisible
  } = props.attributes;
  className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default()(className, 'wp-swiper');
  if (align) {
    className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default()(className, `align${align}`);
  }
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: className
  });
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps;
  const style_overlay_image = overlayImg ? {
    backgroundImage: `url(${overlayImg})`
  } : {};
  if (overlayImgOpacity) {
    style_overlay_image.opacity = overlayImgOpacity;
  }
  const style_overlay_wrapper = txtColor ? {
    color: txtColor
  } : {};
  let thumbsConfig = {
    'data-thumbs': {}
  };
  let data_atts = {
    slidesPerView: slidesPerView === 'auto' ? 'auto' : parseInt(slidesPerView, 10),
    slidesPerGroup,
    slidesPerGroupAuto,
    slidesPerGroupSkip,
    navigation,
    pagination: {},
    delay: delay,
    speed: speed,
    loop: loop,
    direction,
    slidesOffsetBefore,
    slidesOffsetAfter,
    autoHeight,
    spaceBetween,
    releaseOnEdges
  };

  // Auto Slide Width logic - only include if true
  if (autoSlideWidth) {
    data_atts.autoSlideWidth = true;
  }

  // Mousewheel and release on edges logic
  if (mousewheel && releaseOnEdges) {
    data_atts.mousewheel = {
      releaseOnEdges: releaseOnEdges === 'true'
    };
  }

  // Loop logic
  if (loop) {
    data_atts.loopAddBlankSlides = loopAddBlankSlides;
    data_atts.loopAdditionalSlides = loopAdditionalSlides;
  }

  // Effect logic
  if (effect) {
    data_atts.effect = effect;

    // If the effect is 'fade', enable crossFade
    if (effect === 'fade') {
      data_atts.fadeEffect = {
        crossFade: true
      };
    }
  }

  // Autoplay
  // -- START -- Autoplay logic
  if (autoplay) {
    data_atts.autoplay = true;

    // Delay logic
    if (delay !== null && delay !== undefined) {
      data_atts.autoplay = {
        delay: Number(delay)
      };
    }

    // Disable on interaction
    if (disableOnInteraction) {
      if (!data_atts.autoplay) {
        data_atts.autoplay = {};
      }
      data_atts.autoplay.disableOnInteraction = true;
    }

    // Pause on mouse enter
    if (pauseOnMouseEnter) {
      if (!data_atts.autoplay) {
        data_atts.autoplay = {};
      }
      data_atts.autoplay.pauseOnMouseEnter = true;
    }

    // Reverse direction
    if (reverseDirection) {
      if (!data_atts.autoplay) {
        data_atts.autoplay = {};
      }
      data_atts.autoplay.reverseDirection = true;
    }

    // Stop on last slide
    if (stopOnLastSlide) {
      if (!data_atts.autoplay) {
        data_atts.autoplay = {};
      }
      data_atts.autoplay.stopOnLastSlide = true;
    }

    // Wait for transition
    if (waitForTransition !== undefined && waitForTransition !== null) {
      if (!data_atts.autoplay) {
        data_atts.autoplay = {};
      }
      data_atts.autoplay.waitForTransition = waitForTransition;
    }
  }
  // -- END -- Autoplay logic

  // Freemode
  if (freeMode) {
    data_atts.freeMode = {
      enabled: true,
      minimumVelocity: freeModeMinimumVelocity,
      momentum: freeModeMomentum,
      momentumBounce: freeModeMomentumBounce,
      momentumBounceRatio: freeModeMomentumBounceRatio,
      momentumRatio: freeModeMomentumRatio,
      momentumVelocityRatio: freeModeMomentumVelocityRatio,
      sticky: freeModeSticky
    };
  }

  // Pagination
  data_atts.pagination.type = pagination_type != 'bullets' ? pagination_type : 'bullets';
  if (clickable_pagination) {
    data_atts.pagination.clickable = clickable_pagination ? true : '';
  }
  if (typeof breakpoints !== 'undefined' && breakpoints != '') {
    data_atts.breakpoints = breakpoints;
  }
  if (thumbs) {
    thumbsConfig['data-thumbs'] = JSON.stringify({
      spaceBetween: thumbsSpaceBetween,
      slidesPerView: thumbsSlidesPerView,
      freeMode: true,
      watchSlidesProgress: true,
      navigation: false
    });
  }
  const thumbsElements = (typeof tabsData !== 'undefined' ? tabsData : []).map((tab, index) => {
    return (tab.thumbImg || tab.slideImg) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "swiper-slide wp-swiper__thumb",
      "data-thumb": index + 1,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        src: tab.thumbImg || tab.slideImg,
        alt: `Thumbnail ${index + 1}`
      })
    }, index);
  });
  const swiperContainerClassName = classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default()('swiper-container', 'swiper', {
    'swiper-overflow-visible': overflowVisible
  });

  // Build container style with height if provided
  const swiperContainerStyle = {};
  if (sliderHeight && !autoHeight) {
    swiperContainerStyle.height = sliderHeight;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    ...blockProps,
    children: [getOverlayImg(overlayImg, style_overlay_image), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "wp-swiper__wrapper",
      style: style_overlay_wrapper,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: swiperContainerClassName,
        style: Object.keys(swiperContainerStyle).length > 0 ? swiperContainerStyle : undefined,
        ...(debug ? {
          'data-debug': true
        } : {}),
        // Only include data-debug if debug is true
        "data-swiper": JSON.stringify(data_atts),
        ...thumbsConfig,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "swiper-wrapper",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, {})
        })
      }), getNavigation(props), getPagination(props)]
    }), getQuoteSVG(props), thumbs && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "wp-swiper__thumbs",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "wp-swiper__wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "swiper-container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "swiper-wrapper",
            children: thumbsElements
          })
        })
      })
    })]
  });
  function getOverlayImg(overlayImg, style_overlay_image) {
    if (overlayImg === undefined) {
      return;
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "wp-swiper__overlay-img",
      style: style_overlay_image
    });
  }
  function getPagination({
    attributes
  }) {
    const {
      pagination
    } = attributes;
    if (pagination) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "swiper-pagination"
      });
    }
  }
  function getNavigation({
    attributes
  }) {
    const {
      navigation
    } = attributes;
    if (navigation) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "wp_swiper__navigation",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "wp_swiper__navigation-container",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: `swiper-button-prev ${previousIcon ? 'wp_swiper__button-prev' : ''}`,
              children: previousIcon ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                src: previousIcon,
                alt: "Previous"
              }) : null
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: `swiper-button-next ${nextIcon ? 'wp_swiper__button-next' : ''}`,
              children: nextIcon ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                src: nextIcon,
                alt: "Previous"
              }) : null
            })]
          })
        })
      });
    }
  }
  function getQuoteSVG({
    attributes
  }) {
    let {
      className
    } = attributes;
    className = className ? className.toString() : '';
    if (className.indexOf('is-style-testimonials') !== -1) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "wp-swiper__quotes",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
            "aria-hidden": "true",
            focusable: "false",
            "data-prefix": "fas",
            "data-icon": "quote-right",
            role: "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            class: "svg-inline--fa fa-quote-right fa-w-16 fa-5x",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
              fill: "currentColor",
              d: "M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z",
              class: ""
            })
          })
        })
      });
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (save);

/***/ },

/***/ "./src/components/block-alignment-matrix-control/index.js"
/*!****************************************************************!*\
  !*** ./src/components/block-alignment-matrix-control/index.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */




function BlockAlignmentMatrixControl(props) {
  const {
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Change matrix alignment'),
    onChange = 'undefined',
    value = 'center',
    isDisabled
  } = props;
  const icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalAlignmentMatrixControl.Icon, {
    value: value
  });
  const className = 'block-editor-block-alignment-matrix-control';
  const popoverClassName = `${className}__popover`;
  const isAlternate = true;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    placement: "bottom right",
    className: className,
    popoverProps: {
      className: popoverClassName,
      isAlternate
    },
    renderToggle: ({
      onToggle,
      isOpen
    }) => {
      const openOnArrowDown = event => {
        if (!isOpen && event.keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__.DOWN) {
          event.preventDefault();
          event.stopPropagation();
          onToggle();
        }
      };
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
        onClick: onToggle,
        "aria-haspopup": "true",
        "aria-expanded": isOpen,
        onKeyDown: openOnArrowDown,
        label: label,
        icon: icon,
        showTooltip: true,
        disabled: isDisabled
      });
    },
    renderContent: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalAlignmentMatrixControl, {
      hasFocusBorder: false,
      onChange: onChange,
      value: value
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockAlignmentMatrixControl);

/***/ },

/***/ "./src/components/remove-button/index.js"
/*!***********************************************!*\
  !*** ./src/components/remove-button/index.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RemoveButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/**
 * WordPress dependencies
 */
const {
  Component
} = wp.element;
const {
  __
} = wp.i18n;
const {
  Button,
  Popover
} = wp.components;

/**
 * Component Class
 */
class RemoveButton extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      confirmed: -1
    };
  }
  render() {
    const {
      onRemove,
      show,
      style,
      tooltipText = __('Remove Slide?', '@@text_domain'),
      tooltipRemoveText = __('Remove', '@@text_domain'),
      tooltipCancelText = __('Cancel', '@@text_domain')
    } = this.props;
    const {
      confirmed
    } = this.state;
    if (!show) {
      return '';
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Button, {
      className: "wb-component-remove-button",
      onClick: () => {
        if (confirmed === -1) {
          this.setState({
            confirmed: 0
          });
        }
      },
      style: style,
      children: [confirmed === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Popover, {
        className: "wb-component-remove-button-confirm",
        onClose: () => {
          this.setState({
            confirmed: -1
          });
        },
        onClickOutside: () => {
          this.setState({
            confirmed: -1
          });
        },
        children: [tooltipText, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Button, {
          className: "wb-component-remove-button-confirm-yep",
          onClick: onRemove,
          children: tooltipRemoveText
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Button, {
          className: "wb-component-remove-button-confirm-nope",
          onClick: () => {
            this.setState({
              confirmed: -1
            });
          },
          children: tooltipCancelText
        })]
      }) : '', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fas",
        "data-icon": "trash",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 448 512",
        class: "svg-inline--fa fa-trash fa-w-14 fa-3x",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
          fill: "currentColor",
          d: "M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z",
          class: ""
        })
      })]
    });
  }
}

/***/ },

/***/ "./src/styles/editor.scss"
/*!********************************!*\
  !*** ./src/styles/editor.scss ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/utils/get-image/index.js"
/*!**************************************!*\
  !*** ./src/utils/get-image/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ get_image)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function get_image(tab_image) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "wb-tabs-icon",
    children: '' != tab_image && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      className: "wb-tabs-icon_image",
      src: tab_image
    })
  });
}

/***/ },

/***/ "./src/utils/shared.js"
/*!*****************************!*\
  !*** ./src/utils/shared.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deepClone: () => (/* binding */ deepClone),
/* harmony export */   getPositionClassName: () => (/* binding */ getPositionClassName),
/* harmony export */   isContentPositionCenter: () => (/* binding */ isContentPositionCenter)
/* harmony export */ });
const POSITION_CLASSNAMES = {
  'top left': 'is-position-top-left',
  'top center': 'is-position-top-center',
  'top right': 'is-position-top-right',
  'center left': 'is-position-center-left',
  'center center': 'is-position-center-center',
  center: 'is-position-center-center',
  'center right': 'is-position-center-right',
  'bottom left': 'is-position-bottom-left',
  'bottom center': 'is-position-bottom-center',
  'bottom right': 'is-position-bottom-right'
};
function isContentPositionCenter(contentPosition) {
  return !contentPosition || contentPosition === 'center center' || contentPosition === 'center';
}
function getPositionClassName(contentPosition) {
  /*
   * Only render a className if the contentPosition is not center (the default).
   */
  if (isContentPositionCenter(contentPosition)) return '';
  return POSITION_CLASSNAMES[contentPosition];
}
function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  } else if (typeof obj === 'object' && obj !== null) {
    const clone = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clone[key] = deepClone(obj[key]);
      }
    }
    return clone;
  } else {
    return obj;
  }
}

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/data"
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ },

/***/ "@wordpress/keycodes"
/*!**********************************!*\
  !*** external ["wp","keycodes"] ***!
  \**********************************/
(module) {

"use strict";
module.exports = window["wp"]["keycodes"];

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

"use strict";
module.exports = window["React"];

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

"use strict";
module.exports = window["ReactJSXRuntime"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/editor.scss */ "./src/styles/editor.scss");
/* harmony import */ var _blocks_slides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/slides */ "./src/blocks/slides/index.js");
/* harmony import */ var _blocks_slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/slide */ "./src/blocks/slide/index.js");



const {
  registerBlockType,
  registerBlockStyle
} = wp.blocks;

/**
 * Register blocks
 */
registerBlockType(_blocks_slides__WEBPACK_IMPORTED_MODULE_1__.name, _blocks_slides__WEBPACK_IMPORTED_MODULE_1__.settings);
registerBlockType(_blocks_slide__WEBPACK_IMPORTED_MODULE_2__.name, _blocks_slide__WEBPACK_IMPORTED_MODULE_2__.settings);
registerBlockStyle(_blocks_slides__WEBPACK_IMPORTED_MODULE_1__.name, [{
  name: 'testimonials',
  label: 'Testimonials'
}, {
  name: 'thumbnails-bottom-right',
  label: 'Thumbnails Bottom Right'
}, {
  name: 'overlayed-text-right',
  label: 'Overlayed Text Right'
}]);
})();

/******/ })()
;
//# sourceMappingURL=index.build.js.map