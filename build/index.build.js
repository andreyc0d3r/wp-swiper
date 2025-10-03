/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/classnames/dedupe.js":
/*!*******************************************!*\
  !*** ./node_modules/classnames/dedupe.js ***!
  \*******************************************/
/***/ ((module, exports) => {

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


/***/ }),

/***/ "./node_modules/slugify/slugify.js":
/*!*****************************************!*\
  !*** ./node_modules/slugify/slugify.js ***!
  \*****************************************/
/***/ (function(module) {


;(function (name, root, factory) {
  if (true) {
    module.exports = factory()
    module.exports["default"] = factory()
  }
  /* istanbul ignore next */
  else // removed by dead control flow
{}
}('slugify', this, function () {
  var charMap = JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E\'","Ը":"Y\'","Թ":"T\'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C\'","Կ":"K","Հ":"H","Ձ":"D\'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R\'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P\'","Ք":"Q\'","Օ":"O\'\'","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\\"","”":"\\\"","„":"\\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}')
  var locales = JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}')

  function replace (string, options) {
    if (typeof string !== 'string') {
      throw new Error('slugify: string argument expected')
    }

    options = (typeof options === 'string')
      ? {replacement: options}
      : options || {}

    var locale = locales[options.locale] || {}

    var replacement = options.replacement === undefined ? '-' : options.replacement

    var trim = options.trim === undefined ? true : options.trim

    var slug = string.normalize().split('')
      // replace characters based on charMap
      .reduce(function (result, ch) {
        var appendChar = locale[ch];
        if (appendChar === undefined) appendChar = charMap[ch];
        if (appendChar === undefined) appendChar = ch;
        if (appendChar === replacement) appendChar = ' ';
        return result + appendChar
          // remove not allowed characters
          .replace(options.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, '')
      }, '');

    if (options.strict) {
      slug = slug.replace(/[^A-Za-z0-9\s]/g, '');
    }

    if (trim) {
      slug = slug.trim()
    }

    // Replace spaces with replacement character, treating multiple consecutive
    // spaces as a single space.
    slug = slug.replace(/\s+/g, replacement);

    if (options.lower) {
      slug = slug.toLowerCase()
    }

    return slug
  }

  replace.extend = function (customMap) {
    Object.assign(charMap, customMap)
  }

  return replace
}))


/***/ }),

/***/ "./node_modules/striptags/src/striptags.js":
/*!*************************************************!*\
  !*** ./node_modules/striptags/src/striptags.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

(function (global) {

    // minimal symbol polyfill for IE11 and others
    if (typeof Symbol !== 'function') {
        var Symbol = function(name) {
            return name;
        }

        Symbol.nonNative = true;
    }

    const STATE_PLAINTEXT = Symbol('plaintext');
    const STATE_HTML      = Symbol('html');
    const STATE_COMMENT   = Symbol('comment');

    const ALLOWED_TAGS_REGEX  = /<(\w*)>/g;
    const NORMALIZE_TAG_REGEX = /<\/?([^\s\/>]+)/;

    function striptags(html, allowable_tags, tag_replacement) {
        html            = html || '';
        allowable_tags  = allowable_tags || [];
        tag_replacement = tag_replacement || '';

        let context = init_context(allowable_tags, tag_replacement);

        return striptags_internal(html, context);
    }

    function init_striptags_stream(allowable_tags, tag_replacement) {
        allowable_tags  = allowable_tags || [];
        tag_replacement = tag_replacement || '';

        let context = init_context(allowable_tags, tag_replacement);

        return function striptags_stream(html) {
            return striptags_internal(html || '', context);
        };
    }

    striptags.init_streaming_mode = init_striptags_stream;

    function init_context(allowable_tags, tag_replacement) {
        allowable_tags = parse_allowable_tags(allowable_tags);

        return {
            allowable_tags : allowable_tags,
            tag_replacement: tag_replacement,

            state         : STATE_PLAINTEXT,
            tag_buffer    : '',
            depth         : 0,
            in_quote_char : ''
        };
    }

    function striptags_internal(html, context) {
        if (typeof html != "string") {
            throw new TypeError("'html' parameter must be a string");
        }

        let allowable_tags  = context.allowable_tags;
        let tag_replacement = context.tag_replacement;

        let state         = context.state;
        let tag_buffer    = context.tag_buffer;
        let depth         = context.depth;
        let in_quote_char = context.in_quote_char;
        let output        = '';

        for (let idx = 0, length = html.length; idx < length; idx++) {
            let char = html[idx];

            if (state === STATE_PLAINTEXT) {
                switch (char) {
                    case '<':
                        state       = STATE_HTML;
                        tag_buffer += char;
                        break;

                    default:
                        output += char;
                        break;
                }
            }

            else if (state === STATE_HTML) {
                switch (char) {
                    case '<':
                        // ignore '<' if inside a quote
                        if (in_quote_char) {
                            break;
                        }

                        // we're seeing a nested '<'
                        depth++;
                        break;

                    case '>':
                        // ignore '>' if inside a quote
                        if (in_quote_char) {
                            break;
                        }

                        // something like this is happening: '<<>>'
                        if (depth) {
                            depth--;

                            break;
                        }

                        // this is closing the tag in tag_buffer
                        in_quote_char = '';
                        state         = STATE_PLAINTEXT;
                        tag_buffer   += '>';

                        if (allowable_tags.has(normalize_tag(tag_buffer))) {
                            output += tag_buffer;
                        } else {
                            output += tag_replacement;
                        }

                        tag_buffer = '';
                        break;

                    case '"':
                    case '\'':
                        // catch both single and double quotes

                        if (char === in_quote_char) {
                            in_quote_char = '';
                        } else {
                            in_quote_char = in_quote_char || char;
                        }

                        tag_buffer += char;
                        break;

                    case '-':
                        if (tag_buffer === '<!-') {
                            state = STATE_COMMENT;
                        }

                        tag_buffer += char;
                        break;

                    case ' ':
                    case '\n':
                        if (tag_buffer === '<') {
                            state      = STATE_PLAINTEXT;
                            output    += '< ';
                            tag_buffer = '';

                            break;
                        }

                        tag_buffer += char;
                        break;

                    default:
                        tag_buffer += char;
                        break;
                }
            }

            else if (state === STATE_COMMENT) {
                switch (char) {
                    case '>':
                        if (tag_buffer.slice(-2) == '--') {
                            // close the comment
                            state = STATE_PLAINTEXT;
                        }

                        tag_buffer = '';
                        break;

                    default:
                        tag_buffer += char;
                        break;
                }
            }
        }

        // save the context for future iterations
        context.state         = state;
        context.tag_buffer    = tag_buffer;
        context.depth         = depth;
        context.in_quote_char = in_quote_char;

        return output;
    }

    function parse_allowable_tags(allowable_tags) {
        let tag_set = new Set();

        if (typeof allowable_tags === 'string') {
            let match;

            while ((match = ALLOWED_TAGS_REGEX.exec(allowable_tags))) {
                tag_set.add(match[1]);
            }
        }

        else if (!Symbol.nonNative &&
                 typeof allowable_tags[Symbol.iterator] === 'function') {

            tag_set = new Set(allowable_tags);
        }

        else if (typeof allowable_tags.forEach === 'function') {
            // IE11 compatible
            allowable_tags.forEach(tag_set.add, tag_set);
        }

        return tag_set;
    }

    function normalize_tag(tag_buffer) {
        let match = NORMALIZE_TAG_REGEX.exec(tag_buffer);

        return match ? match[1].toLowerCase() : null;
    }

    if (true) {
        // AMD
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function module_factory() { return striptags; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }

    else // removed by dead control flow
{}
}(this));


/***/ }),

/***/ "./src/components/block-alignment-matrix-control/index.js":
/*!****************************************************************!*\
  !*** ./src/components/block-alignment-matrix-control/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

/**
 * WordPress dependencies
 */



function BlockAlignmentMatrixControl(props) {
  const {
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Change matrix alignment'),
    onChange = 'undefined',
    value = 'center',
    isDisabled
  } = props;
  const icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalAlignmentMatrixControl.Icon, {
    value: value
  });
  const className = 'block-editor-block-alignment-matrix-control';
  const popoverClassName = `${className}__popover`;
  const isAlternate = true;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
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
        if (!isOpen && event.keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__.DOWN) {
          event.preventDefault();
          event.stopPropagation();
          onToggle();
        }
      };
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
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
    renderContent: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalAlignmentMatrixControl, {
      hasFocusBorder: false,
      onChange: onChange,
      value: value
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockAlignmentMatrixControl);

/***/ }),

/***/ "./src/components/remove-button/index.js":
/*!***********************************************!*\
  !*** ./src/components/remove-button/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RemoveButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      className: "wb-component-remove-button",
      onClick: () => {
        if (confirmed === -1) {
          this.setState({
            confirmed: 0
          });
        }
      },
      style: style
    }, confirmed === 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Popover, {
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
      }
    }, tooltipText, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      className: "wb-component-remove-button-confirm-yep",
      onClick: onRemove
    }, tooltipRemoveText), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      className: "wb-component-remove-button-confirm-nope",
      onClick: () => {
        this.setState({
          confirmed: -1
        });
      }
    }, tooltipCancelText)) : '', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fas",
      "data-icon": "trash",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512",
      class: "svg-inline--fa fa-trash fa-w-14 fa-3x"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "currentColor",
      d: "M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z",
      class: ""
    })));
  }
}

/***/ }),

/***/ "./src/scss/editor.scss":
/*!******************************!*\
  !*** ./src/scss/editor.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/slide/block.json":
/*!******************************!*\
  !*** ./src/slide/block.json ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"da/wp-swiper-slide","parent":["da/wp-swiper-slides"],"category":"media","supports":{"html":false,"className":false,"anchor":true,"inserter":false,"reusable":false},"attributes":{"align":{"type":"string","default":"undefined"},"slideImgId":{"type":"number"},"slideImg":{"type":"string"},"thumbImg":{"type":"string"},"slug":{"type":"string"},"contentValign":{"type":"string","default":""},"contentHalign":{"type":"string","default":""},"contentVHalign":{"type":"string"},"focalPoint":{"type":"object","default":{"x":0.5,"y":0.5}},"overlayColor":{"type":"object","default":{"rgb":{"r":0,"g":0,"b":0,"a":0}}},"containerWidth":{"type":"number"}}}');

/***/ }),

/***/ "./src/slide/deprecated.js":
/*!*********************************!*\
  !*** ./src/slide/deprecated.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/slide/block.json");
/* harmony import */ var _save1033__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save1033 */ "./src/slide/save1033.js");
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

/***/ }),

/***/ "./src/slide/edit.js":
/*!***************************!*\
  !*** ./src/slide/edit.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_block_alignment_matrix_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/block-alignment-matrix-control */ "./src/components/block-alignment-matrix-control/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/shared */ "./src/utils/shared.js");

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */








/**
 * Block Edit Class.
 */
function edit(props) {
  const onSelectImage = media => {
    let img_url = media.sizes.full.url;
    props.setAttributes({
      slideImg: img_url
    });
  };
  const onSelectThumb = media => {
    let img_url = media.sizes.full.url;
    props.setAttributes({
      thumbImg: img_url
    });
  };
  const isEmpty = val => {
    return true;
  };
  const getOverlayImage = style => {
    if (props.attributes.slideImg) {
      style.backgroundImage = `url(${props.attributes.slideImg})`;
    }
    return style;
  };
  const getOverlayColor = style => {
    if (props.attributes.overlayColor) {
      let {
        overlayColor
      } = props.attributes;
      style.backgroundColor = `rgba(${overlayColor.rgb.r}, ${overlayColor.rgb.g}, ${overlayColor.rgb.b}, ${overlayColor.rgb.a})`;
    }
    return style;
  };
  const setFocalPoint = value => {
    props.setAttributes({
      focalPoint: value
    });
  };
  const {
    setAttributes,
    hasChildBlocks,
    attributes
  } = props;
  let {
    className = ''
  } = props;
  const {
    slideImg,
    thumbImg,
    overlayColor,
    contentVHalign
  } = attributes;
  className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(className, 'wp-swiper__slide');
  className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(className, {
    'has-image': isEmpty(slideImg)
  });
  className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(className, (0,_utils_shared__WEBPACK_IMPORTED_MODULE_8__.getPositionClassName)(contentVHalign));

  /* Example function to render the CSS styles based on Focal Point Picker value */
  const style = {
    backgroundImage: `url(${slideImg})`,
    backgroundPosition: `${props.attributes.focalPoint.x * 100}% ${props.attributes.focalPoint.y * 100}%`
  };
  let style_overlay_image = {};
  let style_overlay_color = {};
  style_overlay_image = getOverlayImage(style_overlay_image);
  style_overlay_color = getOverlayColor(style_overlay_color);
  style_overlay_image = {
    ...style_overlay_image,
    ...style
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Settings')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slide Image', '@@text_domain')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
    value: slideImg,
    onSelect: onSelectImage,
    type: "image",
    render: open => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        onClick: open.open,
        className: "button"
      }, "Select slide image");
    }
  }))), slideImg && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.FocalPointPicker, {
    url: slideImg,
    value: props.attributes.focalPoint,
    onDragStart: setFocalPoint,
    onDrag: setFocalPoint,
    onChange: setFocalPoint
  })), slideImg && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
    isSecondary: true,
    size: "small",
    className: "block-library-cover__reset-button",
    onClick: () => setAttributes({
      slideImg: undefined
    })
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear Media'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
    value: thumbImg,
    onSelect: onSelectThumb,
    type: "image",
    render: open => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        onClick: open.open,
        className: "button"
      }, "Select thumb image");
    }
  }))), thumbImg && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.FocalPointPicker, {
    url: thumbImg,
    value: props.attributes.focalPoint,
    onDragStart: setFocalPoint,
    onDrag: setFocalPoint,
    onChange: setFocalPoint
  })), thumbImg && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
    isSecondary: true,
    size: "small",
    className: "block-library-cover__reset-button",
    onClick: () => setAttributes({
      thumbImg: undefined
    })
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear Media')))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.BlockControls, {
    group: "block"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_block_alignment_matrix_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Change content position'),
    value: contentVHalign,
    onChange: value => {
      setAttributes({
        contentVHalign: value
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, slideImg && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-swiper__slide-overlay wp-swiper__slide-overlay--image",
    style: style_overlay_image
  }), overlayColor.rgb.a > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-swiper__slide-overlay wp-swiper__slide-overlay--color",
    style: style_overlay_color
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.InnerBlocks, {
    renderAppender: hasChildBlocks ? undefined : () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.InnerBlocks.ButtonBlockAppender, null)
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withSelect)((select, props) => {
  const {
    clientId
  } = props;
  const {
    getBlockOrder
  } = select('core/block-editor');
  return {
    hasChildBlocks: getBlockOrder(clientId).length > 0
  };
})(edit));

/***/ }),

/***/ "./src/slide/index.js":
/*!****************************!*\
  !*** ./src/slide/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   metadata: () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   settings: () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/slide/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/slide/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/slide/save.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deprecated */ "./src/slide/deprecated.js");
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

/***/ }),

/***/ "./src/slide/save.js":
/*!***************************!*\
  !*** ./src/slide/save.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/shared */ "./src/utils/shared.js");

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
    className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(className, (0,_utils_shared__WEBPACK_IMPORTED_MODULE_3__.getPositionClassName)(contentVHalign));
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
  } : {};
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    key: slug,
    "data-tab": slug,
    className: className,
    style: style
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-swiper__overlay-color",
    style: style_overlay_color
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-swiper__slide-content",
    style: contaienr_width_style
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)));
}

/***/ }),

/***/ "./src/slide/save1033.js":
/*!*******************************!*\
  !*** ./src/slide/save1033.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/slide/block.json");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/shared */ "./src/utils/shared.js");

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
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;

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
      className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(className, (0,_utils_shared__WEBPACK_IMPORTED_MODULE_3__.getPositionClassName)(contentVHalign));
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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className,
      "data-tab": slug,
      style: style
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-swiper__overlay-color",
      style: style_overlay_color
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-swiper__slide-content",
      style: contaienr_width_style
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null)));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockSave);

/***/ }),

/***/ "./src/slides/block.json":
/*!*******************************!*\
  !*** ./src/slides/block.json ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"da/wp-swiper-slides","category":"media","supports":{"html":false,"className":false,"anchor":true,"align":["wide","full"]},"attributes":{"align":{"type":"string","default":""},"txtColor":{"type":"string"},"overlayColor":{"type":"object","default":{"rgb":{"r":0,"g":0,"b":0,"a":0}}},"containerWidth":{"type":"number"},"overlayImg":{"type":"string"},"previousIcon":{"type":"string"},"nextIcon":{"type":"string"},"overlayImgOpacity":{"type":"number","default":0.5},"currentSlide":{"type":"number","default":0},"tabActive":{"type":"string","default":"slide-1"},"buttonsAlign":{"type":"string","default":"start"},"autoplay":{"type":"boolean","default":false},"disableOnInteraction":{"type":"boolean","default":true},"pauseOnMouseEnter":{"type":"boolean","default":false},"navigation":{"type":"boolean","default":true},"pagination":{"type":"boolean","default":true},"clickable_pagination":{"type":"boolean","default":false},"loop":{"type":"boolean","default":false},"effect":{"type":"string","default":"slide"},"speed":{"type":"number","default":500},"delay":{"type":"number","default":3000},"slidesPerView":{"type":"string","default":"1"},"spaceBetween":{"type":"number","default":0},"slidesOffsetBefore":{"type":"number","default":0},"slidesOffsetAfter":{"type":"number","default":0},"tabsData":{"type":"array","default":[{"clientId":"","slug":"slide-1","slideImg":"","thumbImg":""},{"clientId":"","slug":"slide-2","slideImg":"","thumbImg":""}]},"breakpoints":{"type":"string"},"thumbs":{"type":"boolean","default":false},"thumbsSlidesPerView":{"type":"number","default":4},"thumbsSpaceBetween":{"type":"number","default":10},"autoHeight":{"type":"boolean","default":true},"freeMode":{"type":"boolean","default":false},"sticky":{"type":"boolean","default":false},"debug":{"type":"boolean","default":false},"direction":{"type":"string","default":"horizontal"}}}');

/***/ }),

/***/ "./src/slides/deprecated.js":
/*!**********************************!*\
  !*** ./src/slides/deprecated.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/slides/block.json");
/* harmony import */ var _oldsave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oldsave */ "./src/slides/oldsave.js");
/**
 * Internal dependencies
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  save: _oldsave__WEBPACK_IMPORTED_MODULE_1__["default"]
}]);

/***/ }),

/***/ "./src/slides/edit.js":
/*!****************************!*\
  !*** ./src/slides/edit.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_remove_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/remove-button */ "./src/components/remove-button/index.js");
/* harmony import */ var _utils_get_unique_slug__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/get-unique-slug */ "./src/utils/get-unique-slug/index.js");
/* harmony import */ var _utils_get_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/get-image */ "./src/utils/get-image/index.js");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/shared */ "./src/utils/shared.js");

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
 * Block Edit Class.
 */
function BlockEdit(props) {
  const {
    clientId,
    attributes,
    setAttributes,
    isSelectedBlockInRoot,
    getBlocks,
    replaceInnerBlocks,
    updateBlockAttributes,
    block,
    updateSlugsForInnerBlocks
  } = props;
  let {
    className
  } = props;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.useBlockProps)();
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
    delay,
    speed,
    loop,
    effect,
    slidesPerView,
    spaceBetween,
    navigation,
    pagination,
    containerWidth,
    mousewheel,
    releaseOnEdges,
    pagination_type,
    clickable_pagination,
    breakpoints,
    freeMode,
    sticky,
    thumbs,
    thumbsSlidesPerView,
    thumbsSpaceBetween,
    autoHeight,
    debug,
    direction,
    previousIcon,
    nextIcon,
    slidesOffsetBefore,
    slidesOffsetAfter
  } = attributes;
  const child_blocks = getBlocks(clientId);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Extract the client IDs of the inner blocks
    const prevClientIdOrder = block.innerBlocks.map(ib => ib.attributes.slug);
    const propClientIdOrder = props.attributes.tabsData.map(tabData => tabData.slug);
    const prevThumbImg = block.innerBlocks.map(ib => ib.attributes.thumbImg);
    const propThumbImg = props.attributes.tabsData.map(tabData => tabData.thumbImg);

    // console.log({
    // 	child_blocks,
    // 	innerBlocks: block.innerBlocks,
    // 	prevClientIdOrder,
    // 	propClientIdOrder,
    // 	areArraysEqualWithoutOrder: areArraysEqualWithoutOrder(prevClientIdOrder, propClientIdOrder),
    // });

    // Disabled: for now, this was preventing the thumbs to update
    // Check if the order of client IDs has changed

    let counter = 0;

    // if we disable this line of code, then adding new slide doesnt work
    // intorducing if else , fixed the problem, above line can be removed
    // && is important to make sure both conditions are evaluated before proceeding
    if (!areArraysEqualWithoutOrder(prevClientIdOrder, propClientIdOrder && !areArraysEqualWithoutOrder(prevThumbImg, propThumbImg))) {
      const newTabsData = block.innerBlocks.map((tabData, index) => {
        counter++;

        // removed: logically we do this step later in setAttributes
        // updateBlockAttributes(tabData.clientId, {
        // 	slug: `slide-${counter}`,
        // });

        // console.log({
        // 	"trigger": "child_blocks",
        // 	clientId: tabData.clientId,
        // 	slideImg: tabData.attributes.slideImg,
        // 	thumbImg: tabData.attributes.thumbImg,
        // 	slug: `slide-${counter}`,
        // });

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
  }, [child_blocks]);
  const [alignment, setAlignment] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('bottom center');

  // Function to check if two arrays are equal without considering the order of elements
  const areArraysEqualWithoutOrder = (arr1, arr2) => {
    // Check if the lengths of the arrays are different, if so, they can't be equal
    if (arr1.length !== arr2.length) {
      // Arrays have different lengths, so they are not equal
      return false;
    }

    // Use the every() method to check if every element at the same index is equal
    return arr1.every((value, index) => {
      // console.log(`Comparing: "${value}" === "${arr2[index]}"`);
      return value === arr2[index];
    });
  };

  /**
   * Returns the layouts configuration for a given number of tabs.
   *
   * @param {number} attributes tabs attributes.
   *
   * @return {Object[]} Tabs layout configuration.
   */
  const getTabsTemplate = () => {
    const {
      tabsData
    } = attributes;
    return tabsData.map(tabData => ['da/wp-swiper-slide', tabData]);
  };
  const getTabs = () => {
    return block.innerBlocks;
  };
  const changeLabel = (dataType, value, i) => {
    const {
      setAttributes,
      attributes,
      updateBlockAttributes
    } = props;
    const {
      tabsData
    } = attributes;
    const tabs = getTabs();
    if (tabs[i]) {
      const newSlug = dataType == 'title' ? (0,_utils_get_unique_slug__WEBPACK_IMPORTED_MODULE_10__["default"])(`tab ${value}`, tabs[i].clientId) : tabsData[i].slug;
      const newTabsData = tabsData.map((oldTabData, newIndex) => {
        if (i === newIndex) {
          return {
            ...oldTabData,
            ...{
              title: dataType == 'title' ? value : tabsData[i].title,
              subtitle: dataType == 'subtitle' ? value : tabsData[i].subtitle,
              image: dataType == 'image' ? value : tabsData[i].image,
              overlayImg: dataType == 'overlayImg' ? value : tabsData[i].overlayImg,
              overlayColor: dataType == 'overlayColor' ? value : tabsData[i].overlayColor,
              slug: newSlug
            }
          };
        }
        return oldTabData;
      });
      setAttributes({
        currentSlide: i,
        tabActive: newSlug,
        tabsData: newTabsData
      });
      updateBlockAttributes(tabs[i].clientId, {
        slug: newSlug
      });
    }
  };
  const removeTab = i => {
    const {
      setAttributes,
      attributes,
      block,
      getBlocks,
      replaceInnerBlocks,
      removeBlock
    } = props;
    const {
      tabsData = []
    } = attributes;
    if (1 >= block.innerBlocks.length) {
      removeBlock(block.clientId);
    } else if (block.innerBlocks[i]) {
      if (tabsData[i]) {
        const newTabsData = (0,_utils_shared__WEBPACK_IMPORTED_MODULE_12__.deepClone)(tabsData);
        newTabsData.splice(i, 1);

        // const slug = i;
        // tabsData[i] = {
        // 	...tabsData[i],
        // 	slug: `slide-${slug}`,
        // };
        // console.log('2', tabsData);

        // update slug attribute
        // for inner blocks (slide)

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
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return;
    // removed by dead control flow
{}

    // Extract the client IDs of the inner blocks
    // removed by dead control flow
{}
    // removed by dead control flow
{}

    // Check if the order of client IDs has changed
    // removed by dead control flow
{}
  }, [tabsData]);
  className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(className, 'wp-swiper__slides');
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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        borderTop: '1px solid #dddddd',
        marginTop: '16px',
        marginBottom: '16px',
        width: '100%'
      }
    }));
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Overlay Settings'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaUpload, {
    value: overlayImg,
    onSelect: media => {
      let img_url = media.sizes.full.url;
      setAttributes({
        overlayImg: img_url
      });
    },
    type: "image",
    render: open => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        onClick: open.open,
        className: "button"
      }, "Select overlay image");
    }
  }))), overlayImg && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_utils_get_image__WEBPACK_IMPORTED_MODULE_11__["default"])(overlayImg)), overlayImg && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    isSecondary: true,
    size: "small",
    className: "block-library-cover__reset-button",
    onClick: () => setAttributes({
      overlayImg: undefined
    })
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear Media'))), overlayImg && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Overlay Opacity', '@@text_domain')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Opacity'),
    value: overlayImgOpacity,
    onChange: value => setAttributes({
      overlayImgOpacity: value
    }),
    min: 0,
    max: 1,
    step: 0.01,
    required: true
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Seperator, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Overlay Color', '@@text_domain')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ColorPicker, {
    color: overlayColor.rgb,
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
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color Settings'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Color', '@@text_domain')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ColorPicker, {
    color: txtColor,
    onChangeComplete: color => setAttributes({
      txtColor: color.hex
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Swiper Settings'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Slider Settings")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: "Auto Play",
    checked: autoplay,
    onChange: () => {
      setAttributes({
        autoplay: !autoplay
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: "Disable On Interaction",
    checked: disableOnInteraction,
    help: "Set to false and autoplay will not be disabled after user interactions (swipes), it will be restarted every time after interaction",
    onChange: () => {
      setAttributes({
        disableOnInteraction: !disableOnInteraction
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: "Pause On Mouse Enter",
    checked: pauseOnMouseEnter,
    help: "When enabled autoplay will be paused on pointer (mouse) enter over Swiper container.",
    onChange: () => {
      setAttributes({
        pauseOnMouseEnter: !pauseOnMouseEnter
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: "Loop",
    checked: loop,
    onChange: () => {
      setAttributes({
        loop: !loop
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "Delay",
    value: delay,
    type: "number",
    onChange: option => {
      setAttributes({
        delay: parseInt(option)
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "Speed",
    value: speed,
    type: "number",
    onChange: option => {
      setAttributes({
        speed: parseInt(option)
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: "Effect (Under Consttruction)",
    value: effect,
    options: [{
      label: 'Slide',
      value: 'slide'
    }, {
      label: 'Fade',
      value: 'fade'
    }, {
      label: 'Cube',
      value: 'cube'
    }, {
      label: 'Coverflow',
      value: 'coverflow'
    }, {
      label: 'Flip',
      value: 'flip'
    }],
    onChange: option => {
      setAttributes({
        effect: option
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: "Free Mode",
    help: "Enables free mode functionality",
    checked: freeMode,
    onChange: () => {
      if (freeMode) {
        setAttributes({
          sticky: false
        });
      }
      setAttributes({
        freeMode: !freeMode
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: "Sticky",
    help: "Set to enabled to enable snap to slides positions in free mode",
    disabled: !freeMode,
    checked: sticky,
    onChange: () => {
      setAttributes({
        sticky: !sticky
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Container Max Width %'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Frontend: Set the max width for the content with text.'),
    value: containerWidth,
    onChange: value => {
      setAttributes({
        containerWidth: value
      });
      let iBlocks = block.innerBlocks;
      iBlocks.map(iBlock => {
        updateBlockAttributes(iBlock.clientId, {
          containerWidth: value
        });
      });
    },
    min: 1,
    max: 100,
    step: 1,
    required: true
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Seperator, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Navigation Settings")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: "Show Navigation",
    checked: navigation,
    onChange: () => {
      setAttributes({
        navigation: !navigation
      });
    }
  })), navigation && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "You can customize icons by uploading your own. Default icons used otherwise.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaUpload, {
    value: previousIcon,
    onSelect: media => {
      let img_url = media.sizes.full.url;
      setAttributes({
        previousIcon: img_url
      });
    },
    type: "image",
    render: open => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        onClick: open.open,
        className: "button"
      }, "Select previous slide icon");
    }
  }))), previousIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_utils_get_image__WEBPACK_IMPORTED_MODULE_11__["default"])(previousIcon)), previousIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    isSecondary: true,
    size: "small",
    className: "block-library-cover__reset-button",
    onClick: () => setAttributes({
      previousIcon: undefined
    })
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear Media'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaUpload, {
    value: nextIcon,
    onSelect: media => {
      let img_url = media.sizes.full.url;
      setAttributes({
        nextIcon: img_url
      });
    },
    type: "image",
    render: open => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        onClick: open.open,
        className: "button"
      }, "Select next slide icon");
    }
  }))), nextIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_utils_get_image__WEBPACK_IMPORTED_MODULE_11__["default"])(nextIcon)), nextIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    isSecondary: true,
    size: "small",
    className: "block-library-cover__reset-button",
    onClick: () => setAttributes({
      nextIcon: undefined
    })
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear Media')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: "Auto Height",
    help: "Set to true and slider wrapper will adapt its height to the height of the currently active slide",
    checked: autoHeight,
    onChange: () => {
      setAttributes({
        autoHeight: !autoHeight
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Seperator, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Direction Settings")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: "Direction",
    help: "For vertical slider, Slides Per View should be set to 1",
    value: direction,
    options: [{
      label: 'Horizontal',
      value: 'horizontal'
    }, {
      label: 'Vertical',
      value: 'vertical'
    }],
    onChange: option => {
      setAttributes({
        direction: option
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Seperator, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Pagination Settings")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: "Show pagination",
    checked: pagination,
    onChange: () => {
      setAttributes({
        pagination: !pagination
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: "Type of pagination",
    value: pagination_type,
    options: [{
      label: 'Bullets',
      value: 'bullets'
    }, {
      label: 'Fraction',
      value: 'fraction'
    }, {
      label: 'Progress Bar',
      value: 'progressbar'
    }],
    onChange: option => {
      setAttributes({
        pagination_type: option
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: "Clickable Pagination",
    checked: clickable_pagination,
    onChange: () => {
      setAttributes({
        clickable_pagination: !clickable_pagination
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Seperator, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Slide Settings")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "Space Between",
    help: "Distance between slides in px.",
    value: spaceBetween,
    onChange: option => {
      setAttributes({
        spaceBetween: parseInt(option)
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "Slides per view",
    help: "Number of slides per view (slides visible at the same time on slider's container). Can be a number or auto",
    value: slidesPerView,
    onChange: option => {
      setAttributes({
        slidesPerView: option
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "Slides Offset Before",
    help: "Add (in px) additional slide offset in the beginning of the container (before all slides)",
    value: slidesOffsetBefore,
    onChange: option => {
      setAttributes({
        slidesOffsetBefore: parseInt(option)
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "Slides Offset After",
    help: "Add (in px) additional slide offset in the end of the container (after all slides)",
    value: slidesOffsetAfter,
    onChange: option => {
      setAttributes({
        slidesOffsetAfter: parseInt(option)
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Seperator, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Breakpoints")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextareaControl, {
    label: "Responsive breakpoints (JSON Object)",
    help: "Allows to set different parameter for different responsive breakpoints (screen sizes). Not all parameters can be changed in breakpoints, only those which are not required different layout and logic, like slidesPerView, slidesPerGroup, spaceBetween, grid.rows. Such parameters like loop and effect won't work",
    value: breakpoints,
    onChange: option => {
      setAttributes({
        breakpoints: option
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Example: ", '{"720":{"slidesPerView":2}}', " - Notice the double quotes")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Seperator, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Mouse Settings")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: "Mouse Wheel",
    help: "Enables navigation through slides using mouse wheel.",
    checked: mousewheel,
    onChange: () => {
      setAttributes({
        mousewheel: !mousewheel
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: "Release On Edges",
    help: "Set to true and swiper will release mousewheel event and allow page scrolling when swiper is on edge positions (in the beginning or in the end) NOTE: Mouse Wheel must be set to true for this to work.",
    checked: releaseOnEdges,
    onChange: () => {
      setAttributes({
        releaseOnEdges: !releaseOnEdges
      });

      // if(!releaseOnEdges) {
      //     setAttributes({ mousewheel: !releaseOnEdges });
      // }
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Seperator, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Thumbs Settings")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: "Thumbs",
    help: "Enables thumbs to be used as pagination.",
    checked: thumbs,
    onChange: () => {
      setAttributes({
        thumbs: !thumbs
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    disabled: !thumbs,
    label: "Space Between",
    help: "Distance between slides in px.",
    value: thumbsSpaceBetween,
    onChange: option => {
      setAttributes({
        thumbsSpaceBetween: parseInt(option)
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    disabled: !thumbs,
    label: "Thumbs per view",
    help: "Number of slides per view (slides visible at the same time on slider's container). Can be a number or auto",
    value: thumbsSlidesPerView,
    onChange: option => {
      setAttributes({
        thumbsSlidesPerView: parseInt(option)
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalAlignmentMatrixControl, {
    disableAlignment: ['center'],
    value: alignment,
    onChange: newAlignment => setAlignment(newAlignment)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Seperator, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Dev Tools")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: "Debug",
    help: "Show (console.log) config JSON object for each slider",
    checked: debug,
    onChange: () => {
      setAttributes({
        debug: !debug
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    onClick: () => {
      let counter = 1;
      tabsData.forEach((tab, index) => {
        tab.slug = `slide-${counter}`;
        counter++;
      });
      setAttributes({
        tabsData
      });
      updateSlugsForInnerBlocks(block.innerBlocks);
    },
    className: "button"
  }, "Fix Slide Slugs")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      marginTop: 'calc(8px)',
      fontSize: '12px',
      fontStyle: 'normal',
      color: 'rgb(117, 117, 117)',
      marginBottom: 'revert'
    }
  }, "On rare occasions, if the slide slugs become out of sync with the slide data stored in the parent block, you might notice all slide contents appearing under a single tab. Clicking this button could help resolve the issue. This action iterates over each slide and resets the slugs in ascending order (e.g., slide-1, slide-2, etc.), ensuring that each tab properly corresponds to its respective slide.")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    className: className,
    "data-tab-active": tabActive
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wb-tabs-buttons-wrapper",
    style: style
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()('wb-tabs-buttons', `wb-tabs-buttons-align-${buttonsAlign}`)
  }, tabsData.map((tabData, i) => {
    const {
      slug
    } = tabData;
    const selected = tabActive === slug;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()('wb-tabs-buttons-item', selected ? 'wb-tabs-buttons-item-active' : ''),
      key: `tab_button_${tabData.slug}`,
      onClick: () => setAttributes({
        tabActive: slug
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Slide ", counter++), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_remove_button__WEBPACK_IMPORTED_MODULE_9__["default"], {
      show: isSelectedBlockInRoot,
      tooltipText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove slide?', '@@text_domain'),
      onRemove: () => {
        removeTab(i);
      }
    }));
  }), isSelectedBlockInRoot ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add Slide', '@@text_domain')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    icon: 'insert',
    onClick: () => {
      let newTabsData = [];
      const newDataLength = tabsData.length + 1;
      const block = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.createBlock)('da/wp-swiper-slide', {
        slug: `slide-${newDataLength}`
      });
      newTabsData = [...tabsData];
      newTabsData.push({
        clientId: block.clientId,
        slug: `slide-${newDataLength}`,
        slideImg: '',
        thumbImg: ''
      });
      let innerBlocks = getBlocks(clientId);
      innerBlocks = [...innerBlocks, block];
      replaceInnerBlocks(clientId, innerBlocks, false);
      setAttributes({
        tabsData: newTabsData
      });
    }
  })) : ''), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-swiper__slide-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.InnerBlocks, {
    template: getTabsTemplate(),
    allowedBlocks: ['da/wp-swiper-slide']
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `
						[data-block="${props.clientId}"] .wp-swiper__slides .wp-swiper__slide-content .block-editor-inner-blocks .block-editor-block-list__layout [data-tab="${tabActive !== null && tabActive !== void 0 ? tabActive : 'slide-1'}"] {
							display: block;
						}
						`));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_8__.withSelect)((select, ownProps) => {
  const {
    getBlock,
    isBlockSelected,
    hasSelectedInnerBlock
  } = select('core/block-editor');
  const {
    clientId
  } = ownProps;
  const block = getBlock(clientId);
  return {
    innerBlocks: block ? block.innerBlocks : [],
    // Get inner blocks if the block exists
    blocks: select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.store).getBlocks(),
    block,
    isSelectedBlockInRoot: isBlockSelected(clientId) || hasSelectedInnerBlock(clientId, true)
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_8__.withDispatch)((dispatch, ownProps, registry) => {
  const {
    updateBlockAttributes,
    removeBlock,
    replaceInnerBlocks,
    moveBlockToPosition,
    moveBlocksDown
  } = dispatch('core/block-editor');
  const {
    getBlocks
  } = registry.select('core/block-editor');

  // Function to update slug attribute for inner blocks
  const updateSlugsForInnerBlocks = innerBlocks => {
    let counter = 1;
    innerBlocks.forEach((innerBlock, index) => {
      updateBlockAttributes(innerBlock.clientId, {
        slug: `slide-${counter}`
      });
      counter++;
    });
  };
  return {
    moveBlocksDown,
    moveBlockToPosition,
    replaceInnerBlocks,
    getBlocks,
    updateBlockAttributes,
    removeBlock,
    updateSlugsForInnerBlocks
  };
})])(BlockEdit));

/***/ }),

/***/ "./src/slides/index.js":
/*!*****************************!*\
  !*** ./src/slides/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   metadata: () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   settings: () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deprecated */ "./src/slides/deprecated.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/slides/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/slides/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/slides/save.js");

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
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;

const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_2__,
  title: __('WP Swiper', '@@text_domain'),
  description: __('Create an awesome slider.', '@@text_domain'),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M20 17.4444C20 17.857 19.8314 18.2527 19.5314 18.5444C19.2313 18.8361 18.8243 19 18.4 19H5.6C5.17565 19 4.76869 18.8361 4.46863 18.5444C4.16857 18.2527 4 17.857 4 17.4444V6.55556C4 6.143 4.16857 5.74733 4.46863 5.45561C4.76869 5.16389 5.17565 5 5.6 5H9.6L11.2 7.33333H18.4C18.8243 7.33333 19.2313 7.49722 19.5314 7.78894C19.8314 8.08067 20 8.47633 20 8.88889V17.4444Z",
    stroke: "currentColor",
    fill: "transparent",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })),
  keywords: [__('swiper', '@@text_domain'), __('slider', '@@text_domain'), __('wp slider', '@@text_domain'), __('wp swiper', '@@text_domain')],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_1__["default"]
};
settings.attributes = {
  ...settings.attributes,
  freeMode: {
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


/***/ }),

/***/ "./src/slides/oldsave.js":
/*!*******************************!*\
  !*** ./src/slides/oldsave.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

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
  className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(className, 'wp-swiper');
  if (align) {
    className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(className, `align${align}`);
  }
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: className
  });
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps;
  const thumbsElements = (typeof tabsData !== 'undefined' ? tabsData : []).map((tab, index) => {
    return (tab.thumbImg || tab.slideImg) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      className: "swiper-slide wp-swiper__thumb",
      "data-thumb": index + 1
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: tab.thumbImg || tab.slideImg,
      alt: `Thumbnail ${index + 1}`
    }));
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, getOverlayImg(overlayImg, style_overlay_image), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-swiper__wrapper",
    style: style_overlay_wrapper
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "swiper-container swiper",
    "data-swiper": JSON.stringify(data_atts),
    ...thumbsConfig
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "swiper-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null))), getNavigation(props), getPagination(props)), getQuoteSVG(props), thumbs && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-swiper__thumbs"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-swiper__wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "swiper-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "swiper-wrapper"
  }, thumbsElements)))));
  function getOverlayImg(overlayImg, style_overlay_image) {
    if (overlayImg === undefined) {
      return;
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "wp_swiper__navigation"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "wp_swiper__navigation-container"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: `swiper-button-prev ${previousIcon ? 'wp_swiper__button-prev' : ''}`
      }, previousIcon ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: previousIcon,
        alt: "Previous"
      }) : null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: `swiper-button-next ${nextIcon ? 'wp_swiper__button-next' : ''}`
      }, nextIcon ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: nextIcon,
        alt: "Previous"
      }) : null))));
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
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "wp-swiper__quotes"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fas",
        "data-icon": "quote-right",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        class: "svg-inline--fa fa-quote-right fa-w-16 fa-5x"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        fill: "currentColor",
        d: "M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z",
        class: ""
      }))));
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (save);

/***/ }),

/***/ "./src/slides/save.js":
/*!****************************!*\
  !*** ./src/slides/save.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

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
  className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(className, 'wp-swiper');
  if (align) {
    className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(className, `align${align}`);
  }
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: className
  });
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps;
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
    slidesPerView,
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
    if (delay) {
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
  }
  // -- END -- Autoplay logic

  // Freemode
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
    return (tab.thumbImg || tab.slideImg) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      className: "swiper-slide wp-swiper__thumb",
      "data-thumb": index + 1
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: tab.thumbImg || tab.slideImg,
      alt: `Thumbnail ${index + 1}`
    }));
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, getOverlayImg(overlayImg, style_overlay_image), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-swiper__wrapper",
    style: style_overlay_wrapper
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "swiper-container swiper",
    ...(debug ? {
      'data-debug': true
    } : {}),
    // Only include data-debug if debug is true
    "data-swiper": JSON.stringify(data_atts),
    ...thumbsConfig
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "swiper-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null))), getNavigation(props), getPagination(props)), getQuoteSVG(props), thumbs && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-swiper__thumbs"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-swiper__wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "swiper-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "swiper-wrapper"
  }, thumbsElements)))));
  function getOverlayImg(overlayImg, style_overlay_image) {
    if (overlayImg === undefined) {
      return;
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "wp_swiper__navigation"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "wp_swiper__navigation-container"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: `swiper-button-prev ${previousIcon ? 'wp_swiper__button-prev' : ''}`
      }, previousIcon ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: previousIcon,
        alt: "Previous"
      }) : null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: `swiper-button-next ${nextIcon ? 'wp_swiper__button-next' : ''}`
      }, nextIcon ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: nextIcon,
        alt: "Previous"
      }) : null))));
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
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "wp-swiper__quotes"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fas",
        "data-icon": "quote-right",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        class: "svg-inline--fa fa-quote-right fa-w-16 fa-5x"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        fill: "currentColor",
        d: "M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z",
        class: ""
      }))));
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (save);

/***/ }),

/***/ "./src/utils/get-image/index.js":
/*!**************************************!*\
  !*** ./src/utils/get-image/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ get_image)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function get_image(tab_image) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wb-tabs-icon"
  }, '' != tab_image && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "wb-tabs-icon_image",
    src: tab_image
  }));
}

/***/ }),

/***/ "./src/utils/get-unique-slug/index.js":
/*!********************************************!*\
  !*** ./src/utils/get-unique-slug/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUniqueSlug),
/* harmony export */   getSlug: () => (/* binding */ getSlug)
/* harmony export */ });
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slugify */ "./node_modules/slugify/slugify.js");
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var striptags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! striptags */ "./node_modules/striptags/src/striptags.js");
/* harmony import */ var striptags__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(striptags__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */
const {
  getBlocks
} = wp.data.select('core/block-editor');

/**
 * Get all block IDs.
 *
 * @param {Array} excludeId exclude block client id.
 * @param {Array} blocks blocks list to check.
 *
 * @return {Array} block anchors and slugs array.
 */
function getAllSlugs(excludeId, blocks = 'none') {
  let slugs = [];
  if ('none' === blocks) {
    blocks = getBlocks();
  }
  blocks.forEach(block => {
    if (block.clientId !== excludeId && block.attributes) {
      if (block.attributes.anchor) {
        slugs.push(block.attributes.anchor);
      }
      if (block.name === 'wb/tabs-tab' && block.attributes.slug) {
        slugs.push(block.attributes.slug);
      }
    }
    if (block.innerBlocks && block.innerBlocks.length) {
      slugs = [...slugs, ...getAllSlugs(excludeId, block.innerBlocks)];
    }
  });
  return slugs;
}

/**
 * Check if slug is unique.
 *
 * @param {String} slug new slug.
 * @param {Array} slugs slugs list to check.
 *
 * @return {Boolean} is unique.
 */
function isUniqueSlug(slug, slugs) {
  let isUnique = true;
  slugs.forEach(thisSlug => {
    if (thisSlug === slug) {
      isUnique = false;
    }
  });
  return isUnique;
}

/**
 * Get slug from title.
 *
 * @param {String} title title string.
 *
 * @return {String} slug.
 */
function getSlug(title) {
  return slugify__WEBPACK_IMPORTED_MODULE_0___default()(striptags__WEBPACK_IMPORTED_MODULE_1___default()(title), {
    replacement: '-',
    remove: /[*_+~()'"!?\/\-â€”â€“âˆ’:@^|&#.,;%<>{}]/g,
    lower: true
  });
}

/**
 * Get unique slug from title.
 *
 * @param {String} title title string.
 * @param {String} excludeBlockId exclude block id to not check.
 *
 * @return {String} slug.
 */
function getUniqueSlug(title, excludeBlockId) {
  let newSlug = '';
  let i = 0;
  const allSlugs = getAllSlugs(excludeBlockId);
  while (!newSlug || !isUniqueSlug(newSlug, allSlugs)) {
    if (newSlug) {
      i += 1;
    }
    newSlug = `${getSlug(title)}${i ? `-${i}` : ''}`;
  }
  return newSlug;
}

/***/ }),

/***/ "./src/utils/shared.js":
/*!*****************************!*\
  !*** ./src/utils/shared.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/keycodes":
/*!**********************************!*\
  !*** external ["wp","keycodes"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["keycodes"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/* harmony import */ var _scss_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/editor.scss */ "./src/scss/editor.scss");
/* harmony import */ var _slides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slides */ "./src/slides/index.js");
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slide */ "./src/slide/index.js");



const {
  registerBlockType,
  registerBlockStyle
} = wp.blocks;

/**
 * Register blocks
 */
registerBlockType(_slides__WEBPACK_IMPORTED_MODULE_1__.name, _slides__WEBPACK_IMPORTED_MODULE_1__.settings);
registerBlockType(_slide__WEBPACK_IMPORTED_MODULE_2__.name, _slide__WEBPACK_IMPORTED_MODULE_2__.settings);
registerBlockStyle(_slides__WEBPACK_IMPORTED_MODULE_1__.name, [{
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