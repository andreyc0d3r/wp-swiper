<<<<<<< HEAD
(()=>{var e={98(e,t,o){"use strict";var i;!function(){if("function"!=typeof a){var a=function(e){return e};a.nonNative=!0}const n=a("plaintext"),s=a("html"),l=a("comment"),r=/<(\w*)>/g,d=/<\/?([^\s\/>]+)/;function c(e,t,o){return p(e=e||"",u(t=t||[],o=o||""))}function u(e,t){return{allowable_tags:e=function(e){let t=new Set;if("string"==typeof e){let o;for(;o=r.exec(e);)t.add(o[1])}else a.nonNative||"function"!=typeof e[a.iterator]?"function"==typeof e.forEach&&e.forEach(t.add,t):t=new Set(e);return t}(e),tag_replacement:t,state:n,tag_buffer:"",depth:0,in_quote_char:""}}function p(e,t){if("string"!=typeof e)throw new TypeError("'html' parameter must be a string");let o=t.allowable_tags,i=t.tag_replacement,a=t.state,r=t.tag_buffer,d=t.depth,c=t.in_quote_char,u="";for(let t=0,p=e.length;t<p;t++){let p=e[t];if(a===n)"<"===p?(a=s,r+=p):u+=p;else if(a===s)switch(p){case"<":if(c)break;d++;break;case">":if(c)break;if(d){d--;break}c="",a=n,r+=">",o.has(m(r))?u+=r:u+=i,r="";break;case'"':case"'":c=p===c?"":c||p,r+=p;break;case"-":"<!-"===r&&(a=l),r+=p;break;case" ":case"\n":if("<"===r){a=n,u+="< ",r="";break}r+=p;break;default:r+=p}else a===l&&(">"===p?("--"==r.slice(-2)&&(a=n),r=""):r+=p)}return t.state=a,t.tag_buffer=r,t.depth=d,t.in_quote_char=c,u}function m(e){let t=d.exec(e);return t?t[1].toLowerCase():null}c.init_streaming_mode=function(e,t){let o=u(e=e||[],t=t||"");return function(e){return p(e||"",o)}},void 0===(i=function(){return c}.call(t,o,t,e))||(e.exports=i)}()},495(e){var t;t=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E\'","Ը":"Y\'","Թ":"T\'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C\'","Կ":"K","Հ":"H","Ձ":"D\'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R\'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P\'","Ք":"Q\'","Օ":"O\'\'","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}'),t=JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}');function o(o,i){if("string"!=typeof o)throw new Error("slugify: string argument expected");var a=t[(i="string"==typeof i?{replacement:i}:i||{}).locale]||{},n=void 0===i.replacement?"-":i.replacement,s=void 0===i.trim||i.trim,l=o.normalize().split("").reduce(function(t,o){var s=a[o];return void 0===s&&(s=e[o]),void 0===s&&(s=o),s===n&&(s=" "),t+s.replace(i.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")},"");return i.strict&&(l=l.replace(/[^A-Za-z0-9\s]/g,"")),s&&(l=l.trim()),l=l.replace(/\s+/g,n),i.lower&&(l=l.toLowerCase()),l}return o.extend=function(t){Object.assign(e,t)},o},e.exports=t(),e.exports.default=t()},655(e,t){var o;!function(){"use strict";var i=function(){function e(){}function t(e,t){for(var o=t.length,i=0;i<o;++i)a(e,t[i])}e.prototype=Object.create(null);var o={}.hasOwnProperty,i=/\s+/;function a(e,a){if(a){var n=typeof a;"string"===n?function(e,t){for(var o=t.split(i),a=o.length,n=0;n<a;++n)e[o[n]]=!0}(e,a):Array.isArray(a)?t(e,a):"object"===n?function(e,t){if(t.toString===Object.prototype.toString||t.toString.toString().includes("[native code]"))for(var i in t)o.call(t,i)&&(e[i]=!!t[i]);else e[t.toString()]=!0}(e,a):"number"===n&&function(e,t){e[t]=!0}(e,a)}}return function(){for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];var n=new e;t(n,i);var s=[];for(var l in n)n[l]&&s.push(l);return s.join(" ")}}();e.exports?(i.default=i,e.exports=i):void 0===(o=function(){return i}.apply(t,[]))||(e.exports=o)}()}},t={};function o(i){var a=t[i];if(void 0!==a)return a.exports;var n=t[i]={exports:{}};return e[i].call(n.exports,n,n.exports,o),n.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=JSON.parse('{"name":"da/wp-swiper-slides","category":"media","supports":{"html":false,"className":false,"anchor":true,"align":["wide","full"]},"attributes":{"align":{"type":"string","default":""},"txtColor":{"type":"string"},"overlayColor":{"type":"object","default":{"rgb":{"r":0,"g":0,"b":0,"a":0}}},"containerWidth":{"type":"number"},"overlayImg":{"type":"string"},"previousIcon":{"type":"string"},"nextIcon":{"type":"string"},"overlayImgOpacity":{"type":"number","default":0.5},"currentSlide":{"type":"number","default":0},"tabActive":{"type":"string","default":"slide-1"},"buttonsAlign":{"type":"string","default":"start"},"autoplay":{"type":"boolean","default":false},"disableOnInteraction":{"type":"boolean","default":true},"pauseOnMouseEnter":{"type":"boolean","default":false},"reverseDirection":{"type":"boolean","default":false},"stopOnLastSlide":{"type":"boolean","default":false},"waitForTransition":{"type":"boolean","default":true},"navigation":{"type":"boolean","default":true},"pagination":{"type":"boolean","default":true},"clickable_pagination":{"type":"boolean","default":false},"loop":{"type":"boolean","default":false},"loopAddBlankSlides":{"type":"boolean","default":true},"loopAdditionalSlides":{"type":"number","default":0},"effect":{"type":"string","default":"slide"},"speed":{"type":"number","default":500},"delay":{"type":"number","default":3000},"slidesPerView":{"type":"string","default":"1"},"slidesPerGroup":{"type":"number","default":1},"slidesPerGroupAuto":{"type":"boolean","default":false},"slidesPerGroupSkip":{"type":"number","default":0},"spaceBetween":{"type":"number","default":0},"autoSlideWidth":{"type":"boolean","default":false},"slidesOffsetBefore":{"type":"number","default":0},"slidesOffsetAfter":{"type":"number","default":0},"tabsData":{"type":"array","default":[{"clientId":"","slug":"slide-1","slideImg":"","thumbImg":""}]},"breakpoints":{"type":"string"},"thumbs":{"type":"boolean","default":false},"thumbsSlidesPerView":{"type":"number","default":4},"thumbsSpaceBetween":{"type":"number","default":10},"autoHeight":{"type":"boolean","default":true},"freeMode":{"type":"boolean","default":false},"freeModeMinimumVelocity":{"type":"number","default":0.02},"freeModeMomentum":{"type":"boolean","default":true},"freeModeMomentumBounce":{"type":"boolean","default":true},"freeModeMomentumBounceRatio":{"type":"number","default":1},"freeModeMomentumRatio":{"type":"number","default":1},"freeModeMomentumVelocityRatio":{"type":"number","default":1},"freeModeSticky":{"type":"boolean","default":false},"debug":{"type":"boolean","default":false},"direction":{"type":"string","default":"horizontal"},"overflowVisible":{"type":"boolean","default":false}}}');var t=o(655),i=o.n(t);const a=window.wp.blockEditor,n=window.ReactJSXRuntime,s=[{attributes:{...e.attributes,sticky:{type:"boolean",default:!1}},save:function(e){let{className:t}=e.attributes;const{align:o,overlayImg:s,overlayImgOpacity:l,slidesPerView:r,slidesPerGroup:d,slidesPerGroupAuto:c,slidesPerGroupSkip:u,spaceBetween:p,txtColor:m,autoplay:h,disableOnInteraction:g,pauseOnMouseEnter:f,reverseDirection:b,stopOnLastSlide:w,waitForTransition:y,delay:v,speed:x,loop:j,effect:k,navigation:_,pagination:C,mousewheel:S,releaseOnEdges:P,pagination_type:B,clickable_pagination:O,breakpoints:M,thumbs:I,thumbsSpaceBetween:N,thumbsSlidesPerView:A,autoHeight:R,freeMode:E,sticky:T,debug:V,direction:D,tabsData:z,previousIcon:F,nextIcon:G,slidesOffsetBefore:H,slidesOffsetAfter:$,overflowVisible:W}=e.attributes;t=i()(t,"wp-swiper"),o&&(t=i()(t,`align${o}`));const U=a.useBlockProps.save({className:t}),L=(a.useInnerBlocksProps,s?{backgroundImage:`url(${s})`}:{});l&&(L.opacity=l);const J=m?{color:m}:{};let q={"data-thumbs":{}},Y={slidesPerView:"auto"===r?"auto":parseInt(r,10),slidesPerGroup:d,slidesPerGroupAuto:c,slidesPerGroupSkip:u,navigation:_,pagination:{},delay:v,speed:x,loop:j,direction:D,slidesOffsetBefore:H,slidesOffsetAfter:$,autoHeight:R,spaceBetween:p,releaseOnEdges:P};S&&P&&(Y.mousewheel={releaseOnEdges:"true"===P}),k&&(Y.effect=k,"fade"===k&&(Y.fadeEffect={crossFade:!0})),h&&(Y.autoplay=!0,null!=v&&(Y.autoplay={delay:Number(v)}),g&&(Y.autoplay||(Y.autoplay={}),Y.autoplay.disableOnInteraction=!0),f&&(Y.autoplay||(Y.autoplay={}),Y.autoplay.pauseOnMouseEnter=!0),b&&(Y.autoplay||(Y.autoplay={}),Y.autoplay.reverseDirection=!0),w&&(Y.autoplay||(Y.autoplay={}),Y.autoplay.stopOnLastSlide=!0),null!=y&&(Y.autoplay||(Y.autoplay={}),Y.autoplay.waitForTransition=y)),E&&(Y.freeMode={enabled:!0},T&&(Y.freeMode.sticky=!0)),Y.pagination.type="bullets"!=B?B:"bullets",O&&(Y.pagination.clickable=!!O||""),void 0!==M&&""!=M&&(Y.breakpoints=M),I&&(q["data-thumbs"]=JSON.stringify({spaceBetween:N,slidesPerView:A,freeMode:!0,watchSlidesProgress:!0,navigation:!1}));const Z=(void 0!==z?z:[]).map((e,t)=>(e.thumbImg||e.slideImg)&&(0,n.jsx)("div",{className:"swiper-slide wp-swiper__thumb","data-thumb":t+1,children:(0,n.jsx)("img",{src:e.thumbImg||e.slideImg,alt:`Thumbnail ${t+1}`})},t)),K=i()("swiper-container","swiper",{"swiper-overflow-visible":W});return(0,n.jsxs)("div",{...U,children:[function(e,t){if(void 0!==e)return(0,n.jsx)("div",{className:"wp-swiper__overlay-img",style:t})}(s,L),(0,n.jsxs)("div",{className:"wp-swiper__wrapper",style:J,children:[(0,n.jsx)("div",{className:K,...V?{"data-debug":!0}:{},"data-swiper":JSON.stringify(Y),...q,children:(0,n.jsx)("div",{className:"swiper-wrapper",children:(0,n.jsx)(a.InnerBlocks.Content,{})})}),function({attributes:e}){const{navigation:t}=e;if(t)return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"wp_swiper__navigation",children:(0,n.jsxs)("div",{className:"wp_swiper__navigation-container",children:[(0,n.jsx)("div",{className:"swiper-button-prev "+(F?"wp_swiper__button-prev":""),children:F?(0,n.jsx)("img",{src:F,alt:"Previous"}):null}),(0,n.jsx)("div",{className:"swiper-button-next "+(G?"wp_swiper__button-next":""),children:G?(0,n.jsx)("img",{src:G,alt:"Previous"}):null})]})})})}(e),function({attributes:e}){const{pagination:t}=e;if(t)return(0,n.jsx)("div",{className:"swiper-pagination"})}(e)]}),function({attributes:e}){let{className:t}=e;if(t=t?t.toString():"",-1!==t.indexOf("is-style-testimonials"))return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"wp-swiper__quotes",children:(0,n.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"quote-right",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",class:"svg-inline--fa fa-quote-right fa-w-16 fa-5x",children:(0,n.jsx)("path",{fill:"currentColor",d:"M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z",class:""})})})})}(e),I&&(0,n.jsx)("div",{className:"wp-swiper__thumbs",children:(0,n.jsx)("div",{className:"wp-swiper__wrapper",children:(0,n.jsx)("div",{className:"swiper-container",children:(0,n.jsx)("div",{className:"swiper-wrapper",children:Z})})})})]})},migrate(e){const{sticky:t,...o}=e;return{...o,freeModeSticky:t||!1}}},{save:function(e){let{className:t}=e.attributes;const{align:o,overlayImg:s,overlayImgOpacity:l,slidesPerView:r,spaceBetween:d,txtColor:c,autoplay:u,disableOnInteraction:p,pauseOnMouseEnter:m,reverseDirection:h,stopOnLastSlide:g,waitForTransition:f,delay:b,speed:w,loop:y,effect:v,navigation:x,pagination:j,mousewheel:k,releaseOnEdges:_,pagination_type:C,clickable_pagination:S,breakpoints:P,thumbs:B,thumbsSpaceBetween:O,thumbsSlidesPerView:M,autoHeight:I,freeMode:N,sticky:A,debug:R,direction:E,tabsData:T,previousIcon:V,nextIcon:D,slidesOffsetBefore:z,slidesOffsetAfter:F}=e.attributes;t=i()(t,"wp-swiper"),o&&(t=i()(t,`align${o}`));const G=a.useBlockProps.save({className:t}),H=(a.useInnerBlocksProps,(void 0!==T?T:[]).map((e,t)=>(e.thumbImg||e.slideImg)&&(0,n.jsx)("div",{className:"swiper-slide wp-swiper__thumb","data-thumb":t+1,children:(0,n.jsx)("img",{src:e.thumbImg||e.slideImg,alt:`Thumbnail ${t+1}`})},t))),$=s?{backgroundImage:`url(${s})`}:{};l&&($.opacity=l);const W=c?{color:c}:{};let U={"data-thumbs":{}},L={"slidesPerView-":r,navigation:x,pagination:j,autoplay:u,disableOnInteraction:p,pauseOnMouseEnter:m,delay:b,speed:w,loop:y,effect:v};return R&&(L.debug=R),N&&A&&(L.sticky=A),L.slidesOffsetBefore=z,L.slidesOffsetAfter=F,L.direction=E,L.freeMode=N,L.autoHeight=I,L.spaceBetween=d,L.mousewheel=k,L.releaseOnEdges=_,L.type="bullets"!=C?C:"bullets",S&&(L.clickable=!!S||""),void 0!==P&&""!=P&&(L["data-breakpoints"]=JSON.stringify(P.replace(/^\s+|\s+|\n$/gm,"")),L["data-breakpoints"]=L.breakpoints.substring(1,L.breakpoints.length-1)),B&&(U["data-thumbs"]=JSON.stringify({spaceBetween:O,slidesPerView:M,freeMode:!0,watchSlidesProgress:!0,navigation:!1})),(0,n.jsxs)("div",{...G,children:[function(e,t){if(void 0!==e)return(0,n.jsx)("div",{className:"wp-swiper__overlay-img",style:t})}(s,$),(0,n.jsxs)("div",{className:"wp-swiper__wrapper",style:W,children:[(0,n.jsx)("div",{className:"swiper-container swiper","data-swiper":JSON.stringify(L),...U,children:(0,n.jsx)("div",{className:"swiper-wrapper",children:(0,n.jsx)(a.InnerBlocks.Content,{})})}),function({attributes:e}){const{navigation:t}=e;if(t)return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"wp_swiper__navigation",children:(0,n.jsxs)("div",{className:"wp_swiper__navigation-container",children:[(0,n.jsx)("div",{className:"swiper-button-prev "+(V?"wp_swiper__button-prev":""),children:V?(0,n.jsx)("img",{src:V,alt:"Previous"}):null}),(0,n.jsx)("div",{className:"swiper-button-next "+(D?"wp_swiper__button-next":""),children:D?(0,n.jsx)("img",{src:D,alt:"Previous"}):null})]})})})}(e),function({attributes:e}){const{pagination:t}=e;if(t)return(0,n.jsx)("div",{className:"swiper-pagination"})}(e)]}),function({attributes:e}){let{className:t}=e;if(t=t?t.toString():"",-1!==t.indexOf("is-style-testimonials"))return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"wp-swiper__quotes",children:(0,n.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"quote-right",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",class:"svg-inline--fa fa-quote-right fa-w-16 fa-5x",children:(0,n.jsx)("path",{fill:"currentColor",d:"M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z",class:""})})})})}(e),B&&(0,n.jsx)("div",{className:"wp-swiper__thumbs",children:(0,n.jsx)("div",{className:"wp-swiper__wrapper",children:(0,n.jsx)("div",{className:"swiper-container",children:(0,n.jsx)("div",{className:"swiper-wrapper",children:H})})})})]})}}],l=window.React,r=window.wp.i18n,d=window.wp.element,c=window.wp.blocks,u=window.wp.components,p=window.wp.compose,m=window.wp.data,{Component:h}=wp.element,{__}=wp.i18n,{Button:g,Popover:f}=wp.components;class b extends h{constructor(){super(...arguments),this.state={confirmed:-1}}render(){const{onRemove:e,show:t,style:o,tooltipText:i=__("Remove Slide?","@@text_domain"),tooltipRemoveText:a=__("Remove","@@text_domain"),tooltipCancelText:s=__("Cancel","@@text_domain")}=this.props,{confirmed:l}=this.state;return t?(0,n.jsxs)(g,{className:"wb-component-remove-button",onClick:()=>{-1===l&&this.setState({confirmed:0})},style:o,children:[0===l?(0,n.jsxs)(f,{className:"wb-component-remove-button-confirm",onClose:()=>{this.setState({confirmed:-1})},onClickOutside:()=>{this.setState({confirmed:-1})},children:[i,(0,n.jsx)(g,{className:"wb-component-remove-button-confirm-yep",onClick:e,children:a}),(0,n.jsx)(g,{className:"wb-component-remove-button-confirm-nope",onClick:()=>{this.setState({confirmed:-1})},children:s})]}):"",(0,n.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"trash",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",class:"svg-inline--fa fa-trash fa-w-14 fa-3x",children:(0,n.jsx)("path",{fill:"currentColor",d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z",class:""})})]}):""}}o(495),o(98);const{getBlocks:w}=wp.data.select("core/block-editor");function y(e){return(0,n.jsx)("div",{className:"wb-tabs-icon",children:""!=e&&(0,n.jsx)("img",{className:"wb-tabs-icon_image",src:e})})}const v={"top left":"is-position-top-left","top center":"is-position-top-center","top right":"is-position-top-right","center left":"is-position-center-left","center center":"is-position-center-center",center:"is-position-center-center","center right":"is-position-center-right","bottom left":"is-position-bottom-left","bottom center":"is-position-bottom-center","bottom right":"is-position-bottom-right"};function x(e){return function(e){return!e||"center center"===e||"center"===e}(e)?"":v[e]}function j(e){if(Array.isArray(e))return e.map(e=>j(e));if("object"==typeof e&&null!==e){const t={};for(let o in e)e.hasOwnProperty(o)&&(t[o]=j(e[o]));return t}return e}const k=[["da/wp-swiper-slide",{slug:"slide-1"}]];async function _(e){const t=new FormData;return t.append("file",e),await wp.apiFetch({path:"/wp/v2/media",method:"POST",body:t})}function C({attributes:e,setAttributes:t}){const[o,i]=(0,l.useState)(""),[a,s]=(0,l.useState)(!0),[d,c]=(0,l.useState)(!1),p=function(e){const{slidesPerView:t,slidesPerGroup:o,slidesPerGroupAuto:i,slidesPerGroupSkip:a,spaceBetween:n,autoSlideWidth:s,autoplay:l,disableOnInteraction:r,pauseOnMouseEnter:d,reverseDirection:c,stopOnLastSlide:u,waitForTransition:p,delay:m,speed:h,loop:g,loopAddBlankSlides:f,loopAdditionalSlides:b,effect:w,navigation:y,mousewheel:v,releaseOnEdges:x,pagination_type:j,clickable_pagination:k,breakpoints:_,freeMode:C,freeModeMinimumVelocity:S,freeModeMomentum:P,freeModeMomentumBounce:B,freeModeMomentumBounceRatio:O,freeModeMomentumRatio:M,freeModeMomentumVelocityRatio:I,freeModeSticky:N,autoHeight:A,direction:R,slidesOffsetBefore:E,slidesOffsetAfter:T}=e;let V={slidesPerView:"auto"===t?"auto":parseInt(t,10),slidesPerGroup:o,slidesPerGroupAuto:i,slidesPerGroupSkip:a,navigation:y,pagination:{},delay:m,speed:h,loop:g,direction:R,slidesOffsetBefore:E,slidesOffsetAfter:T,autoHeight:A,spaceBetween:n,releaseOnEdges:x};return s&&(V.autoSlideWidth=!0),v&&x&&(V.mousewheel={releaseOnEdges:"true"===x}),g&&(V.loopAddBlankSlides=f,V.loopAdditionalSlides=b),w&&(V.effect=w,"fade"===w&&(V.fadeEffect={crossFade:!0})),l&&(V.autoplay=!0,null!=m&&(V.autoplay={delay:Number(m)}),r&&(V.autoplay&&!0!==V.autoplay||(V.autoplay={}),V.autoplay.disableOnInteraction=!0),d&&(V.autoplay&&!0!==V.autoplay||(V.autoplay={}),V.autoplay.pauseOnMouseEnter=!0),c&&(V.autoplay&&!0!==V.autoplay||(V.autoplay={}),V.autoplay.reverseDirection=!0),u&&(V.autoplay&&!0!==V.autoplay||(V.autoplay={}),V.autoplay.stopOnLastSlide=!0),null!=p&&(V.autoplay&&!0!==V.autoplay||(V.autoplay={}),V.autoplay.waitForTransition=p)),C&&(V.freeMode={enabled:!0,minimumVelocity:S,momentum:P,momentumBounce:B,momentumBounceRatio:O,momentumRatio:M,momentumVelocityRatio:I,sticky:N}),V.pagination.type="bullets"!==j?j:"bullets",k&&(V.pagination.clickable=!!k||""),void 0!==_&&""!==_&&(V.breakpoints=_),V}(e),m=JSON.stringify(p,null,2);(0,l.useEffect)(()=>{d||i(m)},[m,d]),(0,l.useEffect)(()=>{i(m)},[]);const h={marginTop:"8px",fontSize:"12px",fontStyle:"normal",color:"rgb(117, 117, 117)",marginBottom:"12px"};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.BaseControl,{label:(0,r.__)("Swiper Configuration (JSON)"),help:a?"":(0,r.__)("Invalid JSON format. Please fix the syntax errors."),children:(0,n.jsx)("textarea",{value:o,onChange:e=>(e=>{i(e),c(!0);try{JSON.parse(e),s(!0)}catch(e){s(!1)}})(e.target.value),rows:15,style:{width:"100%",fontFamily:"monospace",fontSize:"11px",padding:"8px",border:"1px solid "+(a?"#8c8f94":"#cc1818"),borderRadius:"4px",backgroundColor:a?"#fff":"#fff5f5",resize:"vertical"}})}),(0,n.jsxs)(u.PanelRow,{children:[(0,n.jsx)(u.Button,{variant:"primary",onClick:()=>{if(a)try{const e=JSON.parse(o),i={};void 0!==e.slidesPerView&&(i.slidesPerView=e.slidesPerView),void 0!==e.slidesPerGroup&&(i.slidesPerGroup=e.slidesPerGroup),void 0!==e.slidesPerGroupAuto&&(i.slidesPerGroupAuto=e.slidesPerGroupAuto),void 0!==e.slidesPerGroupSkip&&(i.slidesPerGroupSkip=e.slidesPerGroupSkip),void 0!==e.spaceBetween&&(i.spaceBetween=e.spaceBetween),void 0!==e.autoSlideWidth&&(i.autoSlideWidth=e.autoSlideWidth),void 0!==e.navigation&&(i.navigation=e.navigation),void 0!==e.delay&&(i.delay=e.delay),void 0!==e.speed&&(i.speed=e.speed),void 0!==e.loop&&(i.loop=e.loop),void 0!==e.direction&&(i.direction=e.direction),void 0!==e.slidesOffsetBefore&&(i.slidesOffsetBefore=e.slidesOffsetBefore),void 0!==e.slidesOffsetAfter&&(i.slidesOffsetAfter=e.slidesOffsetAfter),void 0!==e.autoHeight&&(i.autoHeight=e.autoHeight),void 0!==e.releaseOnEdges&&(i.releaseOnEdges=e.releaseOnEdges),void 0!==e.effect&&(i.effect=e.effect),void 0!==e.loopAddBlankSlides&&(i.loopAddBlankSlides=e.loopAddBlankSlides),void 0!==e.loopAdditionalSlides&&(i.loopAdditionalSlides=e.loopAdditionalSlides),void 0!==e.autoplay&&(!0===e.autoplay||"object"==typeof e.autoplay?(i.autoplay=!0,"object"==typeof e.autoplay&&(void 0!==e.autoplay.delay&&(i.delay=e.autoplay.delay),void 0!==e.autoplay.disableOnInteraction&&(i.disableOnInteraction=e.autoplay.disableOnInteraction),void 0!==e.autoplay.pauseOnMouseEnter&&(i.pauseOnMouseEnter=e.autoplay.pauseOnMouseEnter),void 0!==e.autoplay.reverseDirection&&(i.reverseDirection=e.autoplay.reverseDirection),void 0!==e.autoplay.stopOnLastSlide&&(i.stopOnLastSlide=e.autoplay.stopOnLastSlide),void 0!==e.autoplay.waitForTransition&&(i.waitForTransition=e.autoplay.waitForTransition))):i.autoplay=!1),void 0!==e.freeMode&&("object"==typeof e.freeMode&&e.freeMode.enabled?(i.freeMode=!0,void 0!==e.freeMode.minimumVelocity&&(i.freeModeMinimumVelocity=e.freeMode.minimumVelocity),void 0!==e.freeMode.momentum&&(i.freeModeMomentum=e.freeMode.momentum),void 0!==e.freeMode.momentumBounce&&(i.freeModeMomentumBounce=e.freeMode.momentumBounce),void 0!==e.freeMode.momentumBounceRatio&&(i.freeModeMomentumBounceRatio=e.freeMode.momentumBounceRatio),void 0!==e.freeMode.momentumRatio&&(i.freeModeMomentumRatio=e.freeMode.momentumRatio),void 0!==e.freeMode.momentumVelocityRatio&&(i.freeModeMomentumVelocityRatio=e.freeMode.momentumVelocityRatio),void 0!==e.freeMode.sticky&&(i.freeModeSticky=e.freeMode.sticky)):i.freeMode=!1),void 0!==e.pagination&&(void 0!==e.pagination.type&&(i.pagination_type=e.pagination.type),void 0!==e.pagination.clickable&&(i.clickable_pagination=e.pagination.clickable)),void 0!==e.breakpoints&&(i.breakpoints=e.breakpoints),void 0!==e.mousewheel&&(i.mousewheel=!0,"object"==typeof e.mousewheel&&void 0!==e.mousewheel.releaseOnEdges&&(i.releaseOnEdges=e.mousewheel.releaseOnEdges?"true":"false")),t(i),c(!1)}catch(e){console.error("Failed to parse JSON config:",e)}},disabled:!a||!d,style:{marginRight:"8px"},children:(0,r.__)("Apply Changes")}),(0,n.jsx)(u.Button,{variant:"secondary",onClick:()=>{i(m),c(!1),s(!0)},disabled:!d,children:(0,r.__)("Reset")})]}),(0,n.jsx)("p",{style:h,children:(0,r.__)('This JSON object represents the Swiper initialization configuration. You can edit properties directly here and click "Apply Changes" to update the slider settings. This is useful for advanced customizations or copying configurations between sliders.')}),(0,n.jsxs)("p",{style:h,children:[(0,n.jsx)("strong",{children:(0,r.__)("Tip:")})," ",(0,r.__)("Changes made here will update the corresponding settings in the sidebar panels. Some nested properties (like autoplay options) will be extracted to their respective settings.")]})]})}const S=(0,p.compose)([(0,m.withSelect)((e,t)=>{const{getBlock:o,isBlockSelected:i,hasSelectedInnerBlock:n}=e("core/block-editor"),{clientId:s}=t,l=o(s);return{innerBlocks:l?l.innerBlocks:[],blocks:e(a.store).getBlocks(),block:l,isSelectedBlockInRoot:i(s)||n(s,!0)}}),(0,m.withDispatch)((e,t,o)=>{const{updateBlockAttributes:i,removeBlock:a,replaceInnerBlocks:n,moveBlockToPosition:s,moveBlocksDown:l}=e("core/block-editor"),{getBlocks:r}=o.select("core/block-editor");return{moveBlocksDown:l,moveBlockToPosition:s,replaceInnerBlocks:n,getBlocks:r,updateBlockAttributes:i,removeBlock:a,updateSlugsForInnerBlocks:e=>{let t=1;e.forEach((e,o)=>{i(e.clientId,{slug:`slide-${t}`}),t++})}}})])(function(e){const{clientId:t,attributes:o,setAttributes:s,isSelectedBlockInRoot:p,getBlocks:m,replaceInnerBlocks:h,updateBlockAttributes:g,block:f,updateSlugsForInnerBlocks:w}=e;let{className:v}=e;const x=(0,a.useBlockProps)(),{tabActive:S,buttonsAlign:P,tabsData:B,txtColor:O,overlayColor:M,overlayImg:I,overlayImgOpacity:N,autoplay:A,disableOnInteraction:R,pauseOnMouseEnter:E,reverseDirection:T,stopOnLastSlide:V,waitForTransition:D,delay:z,speed:F,loop:G,loopAddBlankSlides:H,loopAdditionalSlides:$,effect:W,slidesPerView:U,slidesPerGroup:L,slidesPerGroupAuto:J,slidesPerGroupSkip:q,spaceBetween:Y,autoSlideWidth:Z,navigation:K,pagination:X,containerWidth:Q,mousewheel:ee,releaseOnEdges:te,pagination_type:oe,clickable_pagination:ie,breakpoints:ae,freeMode:ne,freeModeMinimumVelocity:se,freeModeMomentum:le,freeModeMomentumBounce:re,freeModeMomentumBounceRatio:de,freeModeMomentumRatio:ce,freeModeMomentumVelocityRatio:ue,freeModeSticky:pe,thumbs:me,thumbsSlidesPerView:he,thumbsSpaceBetween:ge,autoHeight:fe,debug:be,direction:we,previousIcon:ye,nextIcon:ve,slidesOffsetBefore:xe,slidesOffsetAfter:je,overflowVisible:ke}=o,_e=m(t);(0,l.useEffect)(()=>{const t=f.innerBlocks.map(e=>e.attributes.slug),o=e.attributes.tabsData.map(e=>e.slug),i=f.innerBlocks.map(e=>e.attributes.thumbImg),a=e.attributes.tabsData.map(e=>e.thumbImg);let n=0;if(!Ie(t,o&&!Ie(i,a))){const e=f.innerBlocks.map((e,t)=>(n++,{clientId:e.clientId,slideImg:e.attributes.slideImg,thumbImg:e.attributes.thumbImg,slug:`slide-${n}`}));w(f.innerBlocks),s({tabsData:e})}},[_e]);const[Ce,Se]=(0,l.useState)("bottom center"),[Pe,Be]=(0,l.useState)(!1),[Oe,Me]=(0,l.useState)(!1),Ie=(e,t)=>e.length===t.length&&e.every((e,o)=>e===t[o]),Ne=t=>{const{setAttributes:o,attributes:i,block:a,getBlocks:n,replaceInnerBlocks:s,removeBlock:l}=e,{tabsData:r=[]}=i;if(1>=a.innerBlocks.length)l(a.clientId);else if(a.innerBlocks[t]&&r[t]){const e=j(r);e.splice(t,1),l(a.innerBlocks[t].clientId);for(let o=t;o<e.length;o++){const t=`slide-${o+1}`;e[o].slug=t,g(e[o].clientId,{slug:t})}o({tabsData:e})}};(0,l.useEffect)(()=>{},[B]),v=i()(v,"wp-swiper__slides");let Ae=P;"start"===Ae?Ae="left":"end"===Ae&&(Ae="right");let Re=1;const Ee=O?{color:O}:{},Te=()=>(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)("div",{style:{borderTop:"1px solid #dddddd",marginTop:"16px",marginBottom:"16px",width:"100%"}})});return(0,n.jsxs)(d.Fragment,{children:[(0,n.jsxs)(a.InspectorControls,{children:[(0,n.jsxs)(u.PanelBody,{title:(0,r.__)("Overlay Settings"),initialOpen:!1,children:[(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(a.MediaUploadCheck,{children:(0,n.jsx)(a.MediaUpload,{value:I,onSelect:e=>{let t=e.sizes.full.url;s({overlayImg:t})},type:"image",render:e=>(0,n.jsx)(u.Button,{onClick:e.open,className:"button",children:"Select overlay image"})})})}),I&&(0,n.jsx)(u.PanelRow,{children:y(I)}),I&&(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.Button,{isSecondary:!0,size:"small",className:"block-library-cover__reset-button",onClick:()=>s({overlayImg:void 0}),children:(0,r.__)("Clear Media")})}),I&&(0,n.jsx)(u.BaseControl,{label:(0,r.__)("Image Overlay Opacity","@@text_domain"),children:(0,n.jsx)(u.RangeControl,{label:(0,r.__)("Opacity"),value:N,onChange:e=>s({overlayImgOpacity:e}),min:0,max:1,step:.01,required:!0})}),(0,n.jsx)(Te,{}),(0,n.jsx)(u.BaseControl,{label:(0,r.__)("Overlay Color","@@text_domain"),children:(0,n.jsx)(u.ColorPicker,{color:M.hex||M,onChangeComplete:e=>{s({overlayColor:e}),f.innerBlocks.map(t=>{g(t.clientId,{overlayColor:e})})}})}),M.rgb.a>0&&(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.Button,{isSecondary:!0,size:"small",className:"block-library-cover__reset-button",onClick:()=>{const e={rgb:{r:0,g:0,b:0,a:0}};s({overlayColor:e}),f.innerBlocks.map(t=>{g(t.clientId,{overlayColor:e})})},children:(0,r.__)("Clear Color")})})]}),(0,n.jsx)(u.PanelBody,{title:(0,r.__)("Color Settings"),initialOpen:!1,children:(0,n.jsx)(u.BaseControl,{label:(0,r.__)("Text Color","@@text_domain"),children:(0,n.jsx)(u.ColorPicker,{color:O,onChangeComplete:e=>s({txtColor:e.hex})})})}),(0,n.jsxs)(u.PanelBody,{title:(0,r.__)("Basic Slider Settings"),icon:"controls-play",initialOpen:!0,children:[(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.ToggleControl,{label:"Auto Play",checked:A,onChange:()=>{s({autoplay:!A})}})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.ToggleControl,{label:"Loop",checked:G,onChange:()=>{s({loop:!G})}})}),G&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.ToggleControl,{label:"Loop Add Blank Slides",help:"Automatically adds blank slides if you use Grid or slidesPerGroup and the total amount of slides is not even to slidesPerGroup or to grid.rows",checked:H,onChange:()=>{s({loopAddBlankSlides:!H})}})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.TextControl,{label:"Loop Additional Slides",help:"Allows to increase amount of looped slides",value:$,type:"number",onChange:e=>{s({loopAdditionalSlides:parseInt(e)})}})})]}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.TextControl,{label:"Speed",help:"Duration of transition between slides (in ms)",value:F,type:"number",onChange:e=>{s({speed:parseInt(e)})}})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.TextControl,{label:"Delay",help:"Delay between transitions (in ms)",value:z,type:"number",onChange:e=>{s({delay:parseInt(e)})}})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.RangeControl,{label:(0,r.__)("Container Max Width %"),help:(0,r.__)("Frontend: Set the max width for the content with text."),value:Q,onChange:e=>{s({containerWidth:e}),f.innerBlocks.map(t=>{g(t.clientId,{containerWidth:e})})},min:1,max:100,step:1,required:!0})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.ToggleControl,{label:"Overflow Visible",help:"Apply overflow visible to the swiper container",checked:ke,onChange:()=>{s({overflowVisible:!ke})}})})]}),(0,n.jsxs)(u.PanelBody,{title:(0,r.__)("Slides Configuration"),icon:"grid-view",initialOpen:!1,children:[(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.TextControl,{label:"Slides per view",help:"Number of slides per view (slides visible at the same time on slider's container). Can be a number or auto",value:U,onChange:e=>{s({slidesPerView:e})}})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.TextControl,{label:"Slides Per Group",help:"Set numbers of slides to define and enable group sliding. Useful to use with slidesPerView > 1",value:L,type:"number",onChange:e=>{s({slidesPerGroup:parseInt(e)})}})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.ToggleControl,{label:"Slides Per Group Auto",help:"This param intended to be used only with slidesPerView: 'auto' and slidesPerGroup: 1. When enabled, it will skip all slides in view on .slideNext() & .slidePrev() methods calls, on Navigation buttons clicks and in autoplay.",checked:J,onChange:()=>{s({slidesPerGroupAuto:!J})}})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.TextControl,{label:"Slides Per Group Skip",help:"If slidesPerGroupSkip equals 0 (default), no slides are excluded from grouping. If slidesPerGroupSkip is equal or greater than 1, the first X slides are treated as single groups, whereas all following slides are grouped by the slidesPerGroup value.",value:q,type:"number",onChange:e=>{s({slidesPerGroupSkip:parseInt(e)})}})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.TextControl,{label:"Space Between",help:"Distance between slides in px.",value:Y,onChange:e=>{s({spaceBetween:parseInt(e)})}})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.ToggleControl,{label:"Auto Slide Width",help:"Makes each slide size itself based on its content instead of being evenly distributed. Useful for logos, badges, small cards, or any element that should not be stretched.",checked:Z,onChange:()=>{s({autoSlideWidth:!Z})}})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.TextControl,{label:"Slides Offset Before",help:"Add (in px) additional slide offset in the beginning of the container (before all slides)",value:xe,onChange:e=>{s({slidesOffsetBefore:parseInt(e)})}})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.TextControl,{label:"Slides Offset After",help:"Add (in px) additional slide offset in the end of the container (after all slides)",value:je,onChange:e=>{s({slidesOffsetAfter:parseInt(e)})}})})]}),(0,n.jsxs)(u.PanelBody,{title:(0,r.__)("Navigation & Controls"),icon:"leftright",initialOpen:!1,children:[(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.ToggleControl,{label:"Show Navigation",checked:K,onChange:()=>{s({navigation:!K})}})}),K&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)("p",{children:"You can customize icons by uploading your own. Default icons used otherwise."})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(a.MediaUploadCheck,{children:(0,n.jsx)(a.MediaUpload,{value:ye,onSelect:e=>{let t=e.sizes.full.url;s({previousIcon:t})},type:"image",render:e=>(0,n.jsx)(u.Button,{onClick:e.open,className:"button",children:"Select previous slide icon"})})})}),ye&&(0,n.jsx)(u.PanelRow,{children:y(ye)}),ye&&(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.Button,{isSecondary:!0,size:"small",className:"block-library-cover__reset-button",onClick:()=>s({previousIcon:void 0}),children:(0,r.__)("Clear Media")})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(a.MediaUploadCheck,{children:(0,n.jsx)(a.MediaUpload,{value:ve,onSelect:e=>{let t=e.sizes.full.url;s({nextIcon:t})},type:"image",render:e=>(0,n.jsx)(u.Button,{onClick:e.open,className:"button",children:"Select next slide icon"})})})}),ve&&(0,n.jsx)(u.PanelRow,{children:y(ve)}),ve&&(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.Button,{isSecondary:!0,size:"small",className:"block-library-cover__reset-button",onClick:()=>s({nextIcon:void 0}),children:(0,r.__)("Clear Media")})})]}),(0,n.jsx)(Te,{}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.ToggleControl,{label:"Show Pagination",checked:X,onChange:()=>{s({pagination:!X})}})}),X&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.SelectControl,{label:"Type of pagination",value:oe,options:[{label:"Bullets",value:"bullets"},{label:"Fraction",value:"fraction"},{label:"Progress Bar",value:"progressbar"}],onChange:e=>{s({pagination_type:e})}})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.ToggleControl,{label:"Clickable Pagination",checked:ie,onChange:()=>{s({clickable_pagination:!ie})}})})]}),(0,n.jsx)(Te,{}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.ToggleControl,{label:"Auto Height",help:"Set to true and slider wrapper will adapt its height to the height of the currently active slide",checked:fe,onChange:()=>{s({autoHeight:!fe})}})})]}),(0,n.jsx)(u.PanelBody,{title:(0,r.__)("Direction Settings"),icon:"sort",initialOpen:!1,children:(0,n.jsx)(u.SelectControl,{label:"Direction",help:"For vertical slider, Slides Per View should be set to 1",value:we,options:[{label:"Horizontal",value:"horizontal"},{label:"Vertical",value:"vertical"}],onChange:e=>{s({direction:e})}})}),(0,n.jsxs)(u.PanelBody,{title:(0,r.__)("Autoplay Behavior"),icon:"controls-repeat",initialOpen:!1,children:[(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.ToggleControl,{label:"Disable On Interaction",checked:R,help:"Set to false and autoplay will not be disabled after user interactions (swipes), it will be restarted every time after interaction",onChange:()=>{s({disableOnInteraction:!R})}})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.ToggleControl,{label:"Pause On Mouse Enter",checked:E,help:"When enabled autoplay will be paused on pointer (mouse) enter over Swiper container.",onChange:()=>{s({pauseOnMouseEnter:!E})}})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.ToggleControl,{label:"Reverse Direction",checked:T,help:"Enables autoplay in reverse direction",onChange:()=>{s({reverseDirection:!T})}})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.ToggleControl,{label:"Stop On Last Slide",checked:V,help:"Enable this parameter and autoplay will be stopped when it reaches last slide (has no effect in loop mode)",onChange:()=>{s({stopOnLastSlide:!V})}})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.ToggleControl,{label:"Wait For Transition",checked:D,help:"When enabled autoplay will wait for wrapper transition to continue. Can be disabled in case of using Virtual Translate when your slider may not have transition",onChange:()=>{s({waitForTransition:!D})}})})]}),(0,n.jsxs)(u.PanelBody,{title:(0,r.__)("Advanced Features"),icon:"admin-generic",initialOpen:!1,children:[(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.SelectControl,{label:"Effect (Under Construction)",value:W,options:[{label:"Slide",value:"slide"},{label:"Fade",value:"fade"},{label:"Cube",value:"cube"},{label:"Coverflow",value:"coverflow"},{label:"Flip",value:"flip"}],onChange:e=>{s({effect:e})}})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.ToggleControl,{label:"Mouse Wheel",help:"Enables navigation through slides using mouse wheel.",checked:ee,onChange:()=>{s({mousewheel:!ee})}})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.ToggleControl,{label:"Release On Edges",help:"Set to true and swiper will release mousewheel event and allow page scrolling when swiper is on edge positions (in the beginning or in the end) NOTE: Mouse Wheel must be set to true for this to work.",checked:te,onChange:()=>{s({releaseOnEdges:!te})}})})]}),(0,n.jsxs)(u.PanelBody,{title:(0,r.__)("Free Mode"),icon:"controls-play",initialOpen:!1,children:[(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.ToggleControl,{label:"Enable Free Mode",help:"Whether the free mode is enabled. Slide will continue moving for a while after you release it.",checked:ne,onChange:()=>{ne&&s({freeModeSticky:!1}),s({freeMode:!ne})}})}),ne&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.RangeControl,{label:"Minimum Velocity",help:"Minimum touchmove-velocity required to trigger free mode momentum",value:se,onChange:e=>{s({freeModeMinimumVelocity:e})},min:0,max:1,step:.01})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.ToggleControl,{label:"Momentum",help:"If enabled, then slide will keep moving for a while after you release it",checked:le,onChange:()=>{s({freeModeMomentum:!le})}})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.ToggleControl,{label:"Momentum Bounce",help:"Set to false if you want to disable momentum bounce in free mode",checked:re,onChange:()=>{s({freeModeMomentumBounce:!re})}})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.RangeControl,{label:"Momentum Bounce Ratio",help:"Higher value produces larger momentum bounce effect",value:de,onChange:e=>{s({freeModeMomentumBounceRatio:e})},min:0,max:10,step:.1})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.RangeControl,{label:"Momentum Ratio",help:"Higher value produces larger momentum distance after you release slider",value:ce,onChange:e=>{s({freeModeMomentumRatio:e})},min:0,max:10,step:.1})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.RangeControl,{label:"Momentum Velocity Ratio",help:"Higher value produces larger momentum velocity after you release slider",value:ue,onChange:e=>{s({freeModeMomentumVelocityRatio:e})},min:0,max:10,step:.1})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.ToggleControl,{label:"Sticky",help:"Set to enabled to enable snap to slides positions in free mode",checked:pe,onChange:()=>{s({freeModeSticky:!pe})}})})]})]}),(0,n.jsxs)(u.PanelBody,{title:(0,r.__)("Responsive Breakpoints"),icon:"smartphone",initialOpen:!1,children:[(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.TextareaControl,{label:"Responsive breakpoints (JSON Object)",help:"Allows to set different parameter for different responsive breakpoints (screen sizes). Not all parameters can be changed in breakpoints, only those which are not required different layout and logic, like slidesPerView, slidesPerGroup, spaceBetween, grid.rows. Such parameters like loop and effect won't work",value:ae,onChange:e=>{s({breakpoints:e})}})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsxs)("p",{children:["Example: ",'{"720":{"slidesPerView":2}}'," - Notice the double quotes"]})})]}),(0,n.jsxs)(u.PanelBody,{title:(0,r.__)("Thumbnails"),icon:"images-alt2",initialOpen:!1,children:[(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.ToggleControl,{label:"Thumbs",help:"Enables thumbs to be used as pagination.",checked:me,onChange:()=>{s({thumbs:!me})}})}),me&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.TextControl,{label:"Space Between",help:"Distance between slides in px.",value:ge,onChange:e=>{s({thumbsSpaceBetween:parseInt(e)})}})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.TextControl,{label:"Thumbs per view",help:"Number of slides per view (slides visible at the same time on slider's container). Can be a number or auto",value:he,onChange:e=>{s({thumbsSlidesPerView:parseInt(e)})}})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.__experimentalAlignmentMatrixControl,{disableAlignment:["center"],value:Ce,onChange:e=>Se(e)})})]})]}),(0,n.jsxs)(u.PanelBody,{title:(0,r.__)("Developer Tools"),icon:"admin-tools",initialOpen:!1,children:[(0,n.jsx)(u.ToggleControl,{label:"Debug",help:"Show (console.log) config JSON object for each slider",checked:be,onChange:()=>{s({debug:!be})}}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.Button,{onClick:()=>{let e=1;B.forEach((t,o)=>{t.slug=`slide-${e}`,e++}),s({tabsData:B}),w(f.innerBlocks)},className:"button",children:"Fix Slide Slugs"})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)("p",{style:{marginTop:"calc(8px)",fontSize:"12px",fontStyle:"normal",color:"rgb(117, 117, 117)",marginBottom:"revert"},children:"On rare occasions, if the slide slugs become out of sync with the slide data stored in the parent block, you might notice all slide contents appearing under a single tab. Clicking this button could help resolve the issue. This action iterates over each slide and resets the slugs in ascending order (e.g., slide-1, slide-2, etc.), ensuring that each tab properly corresponds to its respective slide."})}),(0,n.jsx)(C,{attributes:o,setAttributes:s})]})]}),(0,n.jsx)("div",{...x,className:v,"data-tab-active":S,children:(0,n.jsxs)("div",{className:"wb-tabs-buttons-wrapper",style:Ee,children:[(0,n.jsxs)("div",{className:i()("wb-tabs-buttons",`wb-tabs-buttons-align-${P}`),children:[B.map((e,t)=>{const{slug:o}=e,a=S===o;return(0,n.jsxs)("div",{className:i()("wb-tabs-buttons-item",a?"wb-tabs-buttons-item-active":""),onClick:()=>s({tabActive:o}),children:[(0,n.jsxs)("h4",{children:["Slide ",Re++]}),(0,n.jsx)(b,{show:p,tooltipText:(0,r.__)("Remove slide?","@@text_domain"),onRemove:()=>{Ne(t)}})]},`tab_button_${e.slug}`)}),p?(0,n.jsx)(u.Tooltip,{text:(0,r.__)("Add Slide","@@text_domain"),children:(0,n.jsx)(u.Button,{icon:"insert",onClick:()=>{let e=[];const o=B.length+1,i=(0,c.createBlock)("da/wp-swiper-slide",{slug:`slide-${o}`});e=[...B],e.push({clientId:i.clientId,slug:`slide-${o}`,slideImg:"",thumbImg:""});let a=m(t);a=[...a,i],h(t,a,!1),s({tabsData:e})}})}):""]}),(0,n.jsx)("div",{className:"wp-swiper__slide-content",children:(0,n.jsx)(a.InnerBlocks,{template:k,templateLock:!1,allowedBlocks:["da/wp-swiper-slide"]})}),(0,n.jsxs)("div",{className:i()("wp-swiper__drop-zone-wrapper",{"is-dragging-over":Pe,"is-uploading":Oe}),children:[(0,n.jsx)(u.DropZone,{onFilesDrop:async e=>{if(!e||0===e.length)return;const o=Array.from(e).filter(e=>e.type.startsWith("image/"));if(0!==o.length){Me(!0),Be(!1);try{for(let e=0;e<o.length;e++){const i=o[e],a=await _(i),n=a.source_url||a.media_details?.sizes?.full?.source_url||"",l=a.media_details?.sizes?.thumbnail?.source_url||a.media_details?.sizes?.medium?.source_url||n,r=B.length+1,d=(0,c.createBlock)("da/wp-swiper-slide",{slug:`slide-${r}`,slideImg:n,slideImgId:a.id,thumbImg:l}),u=[...B,{clientId:d.clientId,slug:`slide-${r}`,slideImg:n,thumbImg:l}];let p=m(t);p=[...p,d],h(t,p,!1),s({tabsData:u,tabActive:`slide-${r}`})}}catch(e){console.error("Error uploading images:",e)}finally{Me(!1)}}},onDragEnter:()=>Be(!0),onDragLeave:()=>Be(!1)}),(0,n.jsx)("div",{className:"wp-swiper__drop-zone-content",children:Oe?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"dashicons dashicons-update wp-swiper__drop-zone-spinner"}),(0,n.jsx)("p",{children:(0,r.__)("Uploading images...","@@text_domain")})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"dashicons dashicons-images-alt2"}),(0,n.jsx)("p",{children:(0,r.__)("Drop images here to create slides","@@text_domain")})]})})]})]})}),(0,n.jsx)("style",{children:`\n\t\t\t\t\t\t[data-block="${e.clientId}"] .wp-swiper__slides .wp-swiper__slide-content .block-editor-inner-blocks .block-editor-block-list__layout [data-tab="${null!=S?S:"slide-1"}"] {\n\t\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t`})]})}),{__:P}=wp.i18n,{name:B}=e,O={...e,title:P("WP Swiper","@@text_domain"),description:P("Create an awesome slider.","@@text_domain"),icon:(0,n.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M20 17.4444C20 17.857 19.8314 18.2527 19.5314 18.5444C19.2313 18.8361 18.8243 19 18.4 19H5.6C5.17565 19 4.76869 18.8361 4.46863 18.5444C4.16857 18.2527 4 17.857 4 17.4444V6.55556C4 6.143 4.16857 5.74733 4.46863 5.45561C4.76869 5.16389 5.17565 5 5.6 5H9.6L11.2 7.33333H18.4C18.8243 7.33333 19.2313 7.49722 19.5314 7.78894C19.8314 8.08067 20 8.47633 20 8.88889V17.4444Z",stroke:"currentColor",fill:"transparent","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})}),keywords:[P("swiper","@@text_domain"),P("slider","@@text_domain"),P("wp slider","@@text_domain"),P("wp swiper","@@text_domain")],edit:S,save:function(e){let{className:t}=e.attributes;const{align:o,overlayImg:s,overlayImgOpacity:l,slidesPerView:r,slidesPerGroup:d,slidesPerGroupAuto:c,slidesPerGroupSkip:u,spaceBetween:p,autoSlideWidth:m,txtColor:h,autoplay:g,disableOnInteraction:f,pauseOnMouseEnter:b,reverseDirection:w,stopOnLastSlide:y,waitForTransition:v,delay:x,speed:j,loop:k,loopAddBlankSlides:_,loopAdditionalSlides:C,effect:S,navigation:P,pagination:B,mousewheel:O,releaseOnEdges:M,pagination_type:I,clickable_pagination:N,breakpoints:A,thumbs:R,thumbsSpaceBetween:E,thumbsSlidesPerView:T,autoHeight:V,freeMode:D,freeModeMinimumVelocity:z,freeModeMomentum:F,freeModeMomentumBounce:G,freeModeMomentumBounceRatio:H,freeModeMomentumRatio:$,freeModeMomentumVelocityRatio:W,freeModeSticky:U,debug:L,direction:J,tabsData:q,previousIcon:Y,nextIcon:Z,slidesOffsetBefore:K,slidesOffsetAfter:X,overflowVisible:Q}=e.attributes;t=i()(t,"wp-swiper"),o&&(t=i()(t,`align${o}`));const ee=a.useBlockProps.save({className:t}),te=(a.useInnerBlocksProps,s?{backgroundImage:`url(${s})`}:{});l&&(te.opacity=l);const oe=h?{color:h}:{};let ie={"data-thumbs":{}},ae={slidesPerView:"auto"===r?"auto":parseInt(r,10),slidesPerGroup:d,slidesPerGroupAuto:c,slidesPerGroupSkip:u,navigation:P,pagination:{},delay:x,speed:j,loop:k,direction:J,slidesOffsetBefore:K,slidesOffsetAfter:X,autoHeight:V,spaceBetween:p,releaseOnEdges:M};m&&(ae.autoSlideWidth=!0),O&&M&&(ae.mousewheel={releaseOnEdges:"true"===M}),k&&(ae.loopAddBlankSlides=_,ae.loopAdditionalSlides=C),S&&(ae.effect=S,"fade"===S&&(ae.fadeEffect={crossFade:!0})),g&&(ae.autoplay=!0,null!=x&&(ae.autoplay={delay:Number(x)}),f&&(ae.autoplay||(ae.autoplay={}),ae.autoplay.disableOnInteraction=!0),b&&(ae.autoplay||(ae.autoplay={}),ae.autoplay.pauseOnMouseEnter=!0),w&&(ae.autoplay||(ae.autoplay={}),ae.autoplay.reverseDirection=!0),y&&(ae.autoplay||(ae.autoplay={}),ae.autoplay.stopOnLastSlide=!0),null!=v&&(ae.autoplay||(ae.autoplay={}),ae.autoplay.waitForTransition=v)),D&&(ae.freeMode={enabled:!0,minimumVelocity:z,momentum:F,momentumBounce:G,momentumBounceRatio:H,momentumRatio:$,momentumVelocityRatio:W,sticky:U}),ae.pagination.type="bullets"!=I?I:"bullets",N&&(ae.pagination.clickable=!!N||""),void 0!==A&&""!=A&&(ae.breakpoints=A),R&&(ie["data-thumbs"]=JSON.stringify({spaceBetween:E,slidesPerView:T,freeMode:!0,watchSlidesProgress:!0,navigation:!1}));const ne=(void 0!==q?q:[]).map((e,t)=>(e.thumbImg||e.slideImg)&&(0,n.jsx)("div",{className:"swiper-slide wp-swiper__thumb","data-thumb":t+1,children:(0,n.jsx)("img",{src:e.thumbImg||e.slideImg,alt:`Thumbnail ${t+1}`})},t)),se=i()("swiper-container","swiper",{"swiper-overflow-visible":Q});return(0,n.jsxs)("div",{...ee,children:[function(e,t){if(void 0!==e)return(0,n.jsx)("div",{className:"wp-swiper__overlay-img",style:t})}(s,te),(0,n.jsxs)("div",{className:"wp-swiper__wrapper",style:oe,children:[(0,n.jsx)("div",{className:se,...L?{"data-debug":!0}:{},"data-swiper":JSON.stringify(ae),...ie,children:(0,n.jsx)("div",{className:"swiper-wrapper",children:(0,n.jsx)(a.InnerBlocks.Content,{})})}),function({attributes:e}){const{navigation:t}=e;if(t)return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"wp_swiper__navigation",children:(0,n.jsxs)("div",{className:"wp_swiper__navigation-container",children:[(0,n.jsx)("div",{className:"swiper-button-prev "+(Y?"wp_swiper__button-prev":""),children:Y?(0,n.jsx)("img",{src:Y,alt:"Previous"}):null}),(0,n.jsx)("div",{className:"swiper-button-next "+(Z?"wp_swiper__button-next":""),children:Z?(0,n.jsx)("img",{src:Z,alt:"Previous"}):null})]})})})}(e),function({attributes:e}){const{pagination:t}=e;if(t)return(0,n.jsx)("div",{className:"swiper-pagination"})}(e)]}),function({attributes:e}){let{className:t}=e;if(t=t?t.toString():"",-1!==t.indexOf("is-style-testimonials"))return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"wp-swiper__quotes",children:(0,n.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"quote-right",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",class:"svg-inline--fa fa-quote-right fa-w-16 fa-5x",children:(0,n.jsx)("path",{fill:"currentColor",d:"M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z",class:""})})})})}(e),R&&(0,n.jsx)("div",{className:"wp-swiper__thumbs",children:(0,n.jsx)("div",{className:"wp-swiper__wrapper",children:(0,n.jsx)("div",{className:"swiper-container",children:(0,n.jsx)("div",{className:"swiper-wrapper",children:ne})})})})]})},deprecated:s};O.attributes={...O.attributes,freeMode:{type:"boolean",default:!1},freeModeMinimumVelocity:{type:"number",default:.02},freeModeMomentum:{type:"boolean",default:!0},freeModeMomentumBounce:{type:"boolean",default:!0},freeModeMomentumBounceRatio:{type:"number",default:1},freeModeMomentumRatio:{type:"number",default:1},freeModeMomentumVelocityRatio:{type:"number",default:1},freeModeSticky:{type:"boolean",default:!1},mousewheel:{type:"boolean",default:!1},releaseOnEdges:{type:"boolean",default:!1},pagination_type:{type:"string",default:"bullets"}};const M=JSON.parse('{"name":"da/wp-swiper-slide","parent":["da/wp-swiper-slides"],"category":"media","supports":{"html":false,"className":false,"anchor":true,"inserter":false,"reusable":false},"attributes":{"align":{"type":"string","default":"undefined"},"slideImgId":{"type":"number"},"slideImg":{"type":"string"},"thumbImg":{"type":"string"},"slug":{"type":"string"},"contentValign":{"type":"string","default":""},"contentHalign":{"type":"string","default":""},"contentVHalign":{"type":"string"},"focalPoint":{"type":"object","default":{"x":0.5,"y":0.5}},"overlayColor":{"type":"object","default":{"rgb":{"r":0,"g":0,"b":0,"a":0}}},"containerWidth":{"type":"number"}}}'),I=window.wp.keycodes,N=function(e){const{label:t=(0,r.__)("Change matrix alignment"),onChange:o="undefined",value:i="center",isDisabled:a}=e,s=(0,n.jsx)(u.__experimentalAlignmentMatrixControl.Icon,{value:i}),l="block-editor-block-alignment-matrix-control",d=`${l}__popover`;return(0,n.jsx)(u.Dropdown,{placement:"bottom right",className:l,popoverProps:{className:d,isAlternate:!0},renderToggle:({onToggle:e,isOpen:o})=>(0,n.jsx)(u.ToolbarButton,{onClick:e,"aria-haspopup":"true","aria-expanded":o,onKeyDown:t=>{o||t.keyCode!==I.DOWN||(t.preventDefault(),t.stopPropagation(),e())},label:t,icon:s,showTooltip:!0,disabled:a}),renderContent:()=>(0,n.jsx)(u.__experimentalAlignmentMatrixControl,{hasFocusBorder:!1,onChange:o,value:i})})},A=(0,m.withSelect)((e,t)=>{const{clientId:o}=t,{getBlockOrder:i}=e("core/block-editor");return{hasChildBlocks:i(o).length>0}})(function(e){const t=t=>{e.setAttributes({focalPoint:t})},{setAttributes:o,hasChildBlocks:s,attributes:l}=e;let{className:c=""}=e;const{slideImg:p,thumbImg:m,overlayColor:h,contentVHalign:g}=l;c=i()(c,"wp-swiper__slide"),c=i()(c,{"has-image":!0}),c=i()(c,x(g));const f={backgroundImage:`url(${p})`,backgroundPosition:`${100*e.attributes.focalPoint.x}% ${100*e.attributes.focalPoint.y}%`};let b={},w={};return b=(t=>(e.attributes.slideImg&&(t.backgroundImage=`url(${e.attributes.slideImg})`),t))(b),w=(t=>{if(e.attributes.overlayColor){let{overlayColor:o}=e.attributes;t.backgroundColor=`rgba(${o.rgb.r}, ${o.rgb.g}, ${o.rgb.b}, ${o.rgb.a})`}return t})(w),b={...b,...f},(0,n.jsxs)(d.Fragment,{children:[(0,n.jsx)(a.InspectorControls,{children:(0,n.jsx)(u.PanelBody,{title:(0,r.__)("Image Settings"),children:(0,n.jsxs)(u.BaseControl,{label:(0,r.__)("Slide Image","@@text_domain"),children:[(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(a.MediaUploadCheck,{children:(0,n.jsx)(a.MediaUpload,{value:p,onSelect:t=>{let o=t.sizes.full.url;e.setAttributes({slideImg:o})},type:"image",render:e=>(0,n.jsx)(u.Button,{onClick:e.open,className:"button",children:"Select slide image"})})})}),p&&(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.FocalPointPicker,{url:p,value:e.attributes.focalPoint,onDragStart:t,onDrag:t,onChange:t})}),p&&(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.Button,{isSecondary:!0,size:"small",className:"block-library-cover__reset-button",onClick:()=>o({slideImg:void 0}),children:(0,r.__)("Clear Media")})}),(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(a.MediaUploadCheck,{children:(0,n.jsx)(a.MediaUpload,{value:m,onSelect:t=>{let o=t.sizes.full.url;e.setAttributes({thumbImg:o})},type:"image",render:e=>(0,n.jsx)(u.Button,{onClick:e.open,className:"button",children:"Select thumb image"})})})}),m&&(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.FocalPointPicker,{url:m,value:e.attributes.focalPoint,onDragStart:t,onDrag:t,onChange:t})}),m&&(0,n.jsx)(u.PanelRow,{children:(0,n.jsx)(u.Button,{isSecondary:!0,size:"small",className:"block-library-cover__reset-button",onClick:()=>o({thumbImg:void 0}),children:(0,r.__)("Clear Media")})})]})})}),(0,n.jsx)(a.BlockControls,{group:"block",children:(0,n.jsx)(N,{label:(0,r.__)("Change content position"),value:g,onChange:e=>{o({contentVHalign:e})}})}),(0,n.jsxs)("div",{className:c,children:[p&&(0,n.jsx)("div",{className:"wp-swiper__slide-overlay wp-swiper__slide-overlay--image",style:b}),h.rgb.a>0&&(0,n.jsx)("div",{className:"wp-swiper__slide-overlay wp-swiper__slide-overlay--color",style:w}),(0,n.jsx)(a.InnerBlocks,{renderAppender:s?void 0:()=>(0,n.jsx)(a.InnerBlocks.ButtonBlockAppender,{})})]})]})}),{applyFilters:R}=wp.hooks,{Component:E}=wp.element,{InnerBlocks:T}=wp.blockEditor,{name:V}=M,D=[{supports:M.supports,attributes:{...M.attributes},save:class extends E{render(){const{overlayColor:e,slug:t,slideImg:o,contentVHalign:a,containerWidth:s}=this.props.attributes;let l="wp-swiper__slide swiper-slide";""!=a&&void 0!==a&&(l=i()(l,x(a)));const r=o?{backgroundImage:`url(${o})`,backgroundSize:"cover"}:{},d=s?{maxWidth:`${s}%`}:null,c=e?{backgroundColor:`rgba(${e.rgb.r}, ${e.rgb.g}, ${e.rgb.b}, ${e.rgb.a})`}:{};return(0,n.jsxs)("div",{className:l,"data-tab":t,style:r,children:[(0,n.jsx)("div",{className:"wp-swiper__overlay-color",style:c}),(0,n.jsx)("div",{className:"wp-swiper__slide-content",style:d,children:(0,n.jsx)(T.Content,{})})]})}}}],{__:z}=wp.i18n,{name:F}=M,G={...M,title:z("Slide","@@text_domain"),description:z("A single slide within a wp-swiper block.","@@text_domain"),icon:"admin",getEditWrapperProps:e=>({"data-tab":e.slug}),edit:A,save:function(e){const{attributes:t}=e,{overlayColor:o,slug:s,slideImg:r,contentVHalign:d,containerWidth:c,focalPoint:u}=t;let p="wp-swiper__slide swiper-slide";""!=d&&void 0!==d&&(p=i()(p,x(d)));const m=r?{backgroundImage:`url(${r})`,backgroundSize:"cover",backgroundPosition:`${100*u.x}% ${100*u.y}%`}:{},h=c?{maxWidth:`${c}%`}:null,g=o?{backgroundColor:`rgba(${o.rgb.r}, ${o.rgb.g}, ${o.rgb.b}, ${o.rgb.a})`}:null,f=a.useBlockProps.save();return(0,l.createElement)("div",{...f,key:s,"data-tab":s,className:p,style:m},(0,n.jsx)("div",{className:"wp-swiper__overlay-color",...g&&{style:g}}),(0,n.jsx)("div",{className:"wp-swiper__slide-content",style:h,children:(0,n.jsx)(a.InnerBlocks.Content,{})}))},deprecated:D},{registerBlockType:H,registerBlockStyle:$}=wp.blocks;H(B,O),H(F,G),$(B,[{name:"testimonials",label:"Testimonials"},{name:"thumbnails-bottom-right",label:"Thumbnails Bottom Right"},{name:"overlayed-text-right",label:"Overlayed Text Right"}])})()})();
=======
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

/***/ "./node_modules/slugify/slugify.js"
/*!*****************************************!*\
  !*** ./node_modules/slugify/slugify.js ***!
  \*****************************************/
(module) {


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


/***/ },

/***/ "./node_modules/striptags/src/striptags.js"
/*!*************************************************!*\
  !*** ./node_modules/striptags/src/striptags.js ***!
  \*************************************************/
(module, exports, __webpack_require__) {

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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_block_alignment_matrix_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/block-alignment-matrix-control */ "./src/components/block-alignment-matrix-control/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
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
    contentVHalign,
    slug
  } = attributes;
  className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default()(className, 'wp-swiper__slide');
  className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default()(className, {
    'has-image': isEmpty(slideImg)
  });
  className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default()(className, (0,_utils_shared__WEBPACK_IMPORTED_MODULE_7__.getPositionClassName)(contentVHalign));
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.useBlockProps)({
    className: className,
    'data-tab': slug
  });

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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image Settings'),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slide Image', '@@text_domain'),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaUploadCheck, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaUpload, {
                value: slideImg,
                onSelect: onSelectImage,
                type: "image",
                render: open => {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
                    onClick: open.open,
                    className: "button",
                    children: "Select slide image"
                  });
                }
              })
            })
          }), slideImg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.FocalPointPicker, {
              url: slideImg,
              value: props.attributes.focalPoint,
              onDragStart: setFocalPoint,
              onDrag: setFocalPoint,
              onChange: setFocalPoint
            })
          }), slideImg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
              isSecondary: true,
              size: "small",
              className: "block-library-cover__reset-button",
              onClick: () => setAttributes({
                slideImg: undefined
              }),
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clear Media')
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaUploadCheck, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaUpload, {
                value: thumbImg,
                onSelect: onSelectThumb,
                type: "image",
                render: open => {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
                    onClick: open.open,
                    className: "button",
                    children: "Select thumb image"
                  });
                }
              })
            })
          }), thumbImg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.FocalPointPicker, {
              url: thumbImg,
              value: props.attributes.focalPoint,
              onDragStart: setFocalPoint,
              onDrag: setFocalPoint,
              onChange: setFocalPoint
            })
          }), thumbImg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
              isSecondary: true,
              size: "small",
              className: "block-library-cover__reset-button",
              onClick: () => setAttributes({
                thumbImg: undefined
              }),
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clear Media')
            })
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.BlockControls, {
      group: "block",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_block_alignment_matrix_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Change content position'),
        value: contentVHalign,
        onChange: value => {
          setAttributes({
            contentVHalign: value
          });
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      ...blockProps,
      children: [slideImg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "wp-swiper__slide-overlay wp-swiper__slide-overlay--image",
        style: style_overlay_image
      }), overlayColor.rgb.a > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "wp-swiper__slide-overlay wp-swiper__slide-overlay--color",
        style: style_overlay_color
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.InnerBlocks, {
        renderAppender: hasChildBlocks ? undefined : () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.InnerBlocks.ButtonBlockAppender, {})
      })]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withSelect)((select, props) => {
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
module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":3,"name":"da/wp-swiper-slides","category":"media","supports":{"html":false,"className":false,"anchor":true,"align":["wide","full"]},"attributes":{"align":{"type":"string","default":""},"txtColor":{"type":"string"},"overlayColor":{"type":"object","default":{"rgb":{"r":0,"g":0,"b":0,"a":0}}},"containerWidth":{"type":"number"},"overlayImg":{"type":"string"},"previousIcon":{"type":"string"},"nextIcon":{"type":"string"},"overlayImgOpacity":{"type":"number","default":0.5},"currentSlide":{"type":"number","default":0},"tabActive":{"type":"string","default":"slide-1"},"buttonsAlign":{"type":"string","default":"start"},"autoplay":{"type":"boolean","default":false},"disableOnInteraction":{"type":"boolean","default":true},"pauseOnMouseEnter":{"type":"boolean","default":false},"reverseDirection":{"type":"boolean","default":false},"stopOnLastSlide":{"type":"boolean","default":false},"waitForTransition":{"type":"boolean","default":true},"navigation":{"type":"boolean","default":true},"pagination":{"type":"boolean","default":true},"clickable_pagination":{"type":"boolean","default":false},"loop":{"type":"boolean","default":false},"loopAddBlankSlides":{"type":"boolean","default":true},"loopAdditionalSlides":{"type":"number","default":0},"effect":{"type":"string","default":"slide"},"speed":{"type":"number","default":500},"delay":{"type":"number","default":3000},"slidesPerView":{"type":"string","default":"1"},"slidesPerGroup":{"type":"number","default":1},"slidesPerGroupAuto":{"type":"boolean","default":false},"slidesPerGroupSkip":{"type":"number","default":0},"spaceBetween":{"type":"number","default":0},"autoSlideWidth":{"type":"boolean","default":false},"slidesOffsetBefore":{"type":"number","default":0},"slidesOffsetAfter":{"type":"number","default":0},"tabsData":{"type":"array","default":[{"clientId":"","slug":"slide-1","slideImg":"","thumbImg":""}]},"breakpoints":{"type":"string"},"thumbs":{"type":"boolean","default":false},"thumbsSlidesPerView":{"type":"number","default":4},"thumbsSpaceBetween":{"type":"number","default":10},"autoHeight":{"type":"boolean","default":true},"freeMode":{"type":"boolean","default":false},"freeModeMinimumVelocity":{"type":"number","default":0.02},"freeModeMomentum":{"type":"boolean","default":true},"freeModeMomentumBounce":{"type":"boolean","default":true},"freeModeMomentumBounceRatio":{"type":"number","default":1},"freeModeMomentumRatio":{"type":"number","default":1},"freeModeMomentumVelocityRatio":{"type":"number","default":1},"freeModeSticky":{"type":"boolean","default":false},"debug":{"type":"boolean","default":false},"direction":{"type":"string","default":"horizontal"},"overflowVisible":{"type":"boolean","default":false}}}');

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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var _components_remove_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/remove-button */ "./src/components/remove-button/index.js");
/* harmony import */ var _utils_get_unique_slug__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/get-unique-slug */ "./src/utils/get-unique-slug/index.js");
/* harmony import */ var _utils_get_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/get-image */ "./src/utils/get-image/index.js");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/shared */ "./src/utils/shared.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
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

  // Auto Slide Width logic
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
    if (effect === 'fade') {
      data_atts.fadeEffect = {
        crossFade: true
      };
    }
  }

  // Autoplay logic
  if (autoplay) {
    data_atts.autoplay = true;
    if (delay !== null && delay !== undefined) {
      data_atts.autoplay = {
        delay: Number(delay)
      };
    }
    if (disableOnInteraction) {
      if (!data_atts.autoplay || data_atts.autoplay === true) {
        data_atts.autoplay = {};
      }
      data_atts.autoplay.disableOnInteraction = true;
    }
    if (pauseOnMouseEnter) {
      if (!data_atts.autoplay || data_atts.autoplay === true) {
        data_atts.autoplay = {};
      }
      data_atts.autoplay.pauseOnMouseEnter = true;
    }
    if (reverseDirection) {
      if (!data_atts.autoplay || data_atts.autoplay === true) {
        data_atts.autoplay = {};
      }
      data_atts.autoplay.reverseDirection = true;
    }
    if (stopOnLastSlide) {
      if (!data_atts.autoplay || data_atts.autoplay === true) {
        data_atts.autoplay = {};
      }
      data_atts.autoplay.stopOnLastSlide = true;
    }
    if (waitForTransition !== undefined && waitForTransition !== null) {
      if (!data_atts.autoplay || data_atts.autoplay === true) {
        data_atts.autoplay = {};
      }
      data_atts.autoplay.waitForTransition = waitForTransition;
    }
  }

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
  data_atts.pagination.type = pagination_type !== 'bullets' ? pagination_type : 'bullets';
  if (clickable_pagination) {
    data_atts.pagination.clickable = clickable_pagination ? true : '';
  }
  if (typeof breakpoints !== 'undefined' && breakpoints !== '') {
    data_atts.breakpoints = breakpoints;
  }
  return data_atts;
}

/**
 * Swiper Config Editor Component
 * Displays editable JSON config for the slider
 */
function SwiperConfigEditor({
  attributes,
  setAttributes
}) {
  const [jsonValue, setJsonValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [isValid, setIsValid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [hasChanges, setHasChanges] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  // Build the current config from attributes
  const currentConfig = buildSwiperConfig(attributes);
  const currentConfigJson = JSON.stringify(currentConfig, null, 2);

  // Update local state when attributes change (but only if user hasn't made changes)
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!hasChanges) {
      setJsonValue(currentConfigJson);
    }
  }, [currentConfigJson, hasChanges]);

  // Initialize on mount
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Swiper Configuration (JSON)'),
      help: !isValid ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Invalid JSON format. Please fix the syntax errors.') : '',
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("textarea", {
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
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        variant: "primary",
        onClick: handleSave,
        disabled: !isValid || !hasChanges,
        style: {
          marginRight: '8px'
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Apply Changes')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        variant: "secondary",
        onClick: handleReset,
        disabled: !hasChanges,
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reset')
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
      style: helperTextStyle,
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('This JSON object represents the Swiper initialization configuration. You can edit properties directly here and click "Apply Changes" to update the slider settings. This is useful for advanced customizations or copying configurations between sliders.')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("p", {
      style: helperTextStyle,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("strong", {
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tip:')
      }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Changes made here will update the corresponding settings in the sidebar panels. Some nested properties (like autoplay options) will be extracted to their respective settings.')]
    })]
  });
}

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
    debug,
    direction,
    previousIcon,
    nextIcon,
    slidesOffsetBefore,
    slidesOffsetAfter,
    overflowVisible
  } = attributes;
  const child_blocks = getBlocks(clientId);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
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
  const [alignment, setAlignment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('bottom center');

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
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    return;
    // removed by dead control flow


    // Extract the client IDs of the inner blocks
    // removed by dead control flow

    // removed by dead control flow


    // Check if the order of client IDs has changed
    // removed by dead control flow

  }, [tabsData]);
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
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        style: {
          borderTop: '1px solid #dddddd',
          marginTop: '16px',
          marginBottom: '16px',
          width: '100%'
        }
      })
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Overlay Settings'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaUploadCheck, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaUpload, {
              value: overlayImg,
              onSelect: media => {
                let img_url = media.sizes.full.url;
                setAttributes({
                  overlayImg: img_url
                });
              },
              type: "image",
              render: open => {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
                  onClick: open.open,
                  className: "button",
                  children: "Select overlay image"
                });
              }
            })
          })
        }), overlayImg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: (0,_utils_get_image__WEBPACK_IMPORTED_MODULE_11__["default"])(overlayImg)
        }), overlayImg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
            isSecondary: true,
            size: "small",
            className: "block-library-cover__reset-button",
            onClick: () => setAttributes({
              overlayImg: undefined
            }),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear Media')
          })
        }), overlayImg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Overlay Opacity', '@@text_domain'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Opacity'),
            value: overlayImgOpacity,
            onChange: value => setAttributes({
              overlayImgOpacity: value
            }),
            min: 0,
            max: 1,
            step: 0.01,
            required: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(Seperator, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Overlay Color', '@@text_domain'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ColorPicker, {
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
        }), overlayColor.rgb.a > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
            isSecondary: true,
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
              let iBlocks = block.innerBlocks;
              iBlocks.map(iBlock => {
                updateBlockAttributes(iBlock.clientId, {
                  overlayColor: defaultColor
                });
              });
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear Color')
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color Settings'),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Color', '@@text_domain'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ColorPicker, {
            color: txtColor,
            onChangeComplete: color => setAttributes({
              txtColor: color.hex
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Basic Slider Settings'),
        icon: "controls-play",
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: "Auto Play",
            checked: autoplay,
            onChange: () => {
              setAttributes({
                autoplay: !autoplay
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: "Loop",
            checked: loop,
            onChange: () => {
              setAttributes({
                loop: !loop
              });
            }
          })
        }), loop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
              label: "Loop Add Blank Slides",
              help: "Automatically adds blank slides if you use Grid or slidesPerGroup and the total amount of slides is not even to slidesPerGroup or to grid.rows",
              checked: loopAddBlankSlides,
              onChange: () => {
                setAttributes({
                  loopAddBlankSlides: !loopAddBlankSlides
                });
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
              label: "Loop Additional Slides",
              help: "Allows to increase amount of looped slides",
              value: loopAdditionalSlides,
              type: "number",
              onChange: option => {
                setAttributes({
                  loopAdditionalSlides: parseInt(option)
                });
              }
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
            label: "Speed",
            help: "Duration of transition between slides (in ms)",
            value: speed,
            type: "number",
            onChange: option => {
              setAttributes({
                speed: parseInt(option)
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
            label: "Delay",
            help: "Delay between transitions (in ms)",
            value: delay,
            type: "number",
            onChange: option => {
              setAttributes({
                delay: parseInt(option)
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
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
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: "Overflow Visible",
            help: "Apply overflow visible to the swiper container",
            checked: overflowVisible,
            onChange: () => {
              setAttributes({
                overflowVisible: !overflowVisible
              });
            }
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slides Configuration'),
        icon: "grid-view",
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
            label: "Slides per view",
            help: "Number of slides per view (slides visible at the same time on slider's container). Can be a number or auto",
            value: slidesPerView,
            onChange: option => {
              setAttributes({
                slidesPerView: option
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
            label: "Slides Per Group",
            help: "Set numbers of slides to define and enable group sliding. Useful to use with slidesPerView > 1",
            value: slidesPerGroup,
            type: "number",
            onChange: option => {
              setAttributes({
                slidesPerGroup: parseInt(option)
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: "Slides Per Group Auto",
            help: "This param intended to be used only with slidesPerView: 'auto' and slidesPerGroup: 1. When enabled, it will skip all slides in view on .slideNext() & .slidePrev() methods calls, on Navigation buttons clicks and in autoplay.",
            checked: slidesPerGroupAuto,
            onChange: () => {
              setAttributes({
                slidesPerGroupAuto: !slidesPerGroupAuto
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
            label: "Slides Per Group Skip",
            help: "If slidesPerGroupSkip equals 0 (default), no slides are excluded from grouping. If slidesPerGroupSkip is equal or greater than 1, the first X slides are treated as single groups, whereas all following slides are grouped by the slidesPerGroup value.",
            value: slidesPerGroupSkip,
            type: "number",
            onChange: option => {
              setAttributes({
                slidesPerGroupSkip: parseInt(option)
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
            label: "Space Between",
            help: "Distance between slides in px.",
            value: spaceBetween,
            onChange: option => {
              setAttributes({
                spaceBetween: parseInt(option)
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: "Auto Slide Width",
            help: "Makes each slide size itself based on its content instead of being evenly distributed. Useful for logos, badges, small cards, or any element that should not be stretched.",
            checked: autoSlideWidth,
            onChange: () => {
              setAttributes({
                autoSlideWidth: !autoSlideWidth
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
            label: "Slides Offset Before",
            help: "Add (in px) additional slide offset in the beginning of the container (before all slides)",
            value: slidesOffsetBefore,
            onChange: option => {
              setAttributes({
                slidesOffsetBefore: parseInt(option)
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
            label: "Slides Offset After",
            help: "Add (in px) additional slide offset in the end of the container (after all slides)",
            value: slidesOffsetAfter,
            onChange: option => {
              setAttributes({
                slidesOffsetAfter: parseInt(option)
              });
            }
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Navigation & Controls'),
        icon: "leftright",
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: "Show Navigation",
            checked: navigation,
            onChange: () => {
              setAttributes({
                navigation: !navigation
              });
            }
          })
        }), navigation && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
              children: "You can customize icons by uploading your own. Default icons used otherwise."
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaUploadCheck, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaUpload, {
                value: previousIcon,
                onSelect: media => {
                  let img_url = media.sizes.full.url;
                  setAttributes({
                    previousIcon: img_url
                  });
                },
                type: "image",
                render: open => {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
                    onClick: open.open,
                    className: "button",
                    children: "Select previous slide icon"
                  });
                }
              })
            })
          }), previousIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: (0,_utils_get_image__WEBPACK_IMPORTED_MODULE_11__["default"])(previousIcon)
          }), previousIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
              isSecondary: true,
              size: "small",
              className: "block-library-cover__reset-button",
              onClick: () => setAttributes({
                previousIcon: undefined
              }),
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear Media')
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaUploadCheck, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaUpload, {
                value: nextIcon,
                onSelect: media => {
                  let img_url = media.sizes.full.url;
                  setAttributes({
                    nextIcon: img_url
                  });
                },
                type: "image",
                render: open => {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
                    onClick: open.open,
                    className: "button",
                    children: "Select next slide icon"
                  });
                }
              })
            })
          }), nextIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: (0,_utils_get_image__WEBPACK_IMPORTED_MODULE_11__["default"])(nextIcon)
          }), nextIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
              isSecondary: true,
              size: "small",
              className: "block-library-cover__reset-button",
              onClick: () => setAttributes({
                nextIcon: undefined
              }),
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear Media')
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(Seperator, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: "Show Pagination",
            checked: pagination,
            onChange: () => {
              setAttributes({
                pagination: !pagination
              });
            }
          })
        }), pagination && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
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
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
              label: "Clickable Pagination",
              checked: clickable_pagination,
              onChange: () => {
                setAttributes({
                  clickable_pagination: !clickable_pagination
                });
              }
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(Seperator, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: "Auto Height",
            help: "Set to true and slider wrapper will adapt its height to the height of the currently active slide",
            checked: autoHeight,
            onChange: () => {
              setAttributes({
                autoHeight: !autoHeight
              });
            }
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Direction Settings'),
        icon: "sort",
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
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
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Autoplay Behavior'),
        icon: "controls-repeat",
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: "Disable On Interaction",
            checked: disableOnInteraction,
            help: "Set to false and autoplay will not be disabled after user interactions (swipes), it will be restarted every time after interaction",
            onChange: () => {
              setAttributes({
                disableOnInteraction: !disableOnInteraction
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: "Pause On Mouse Enter",
            checked: pauseOnMouseEnter,
            help: "When enabled autoplay will be paused on pointer (mouse) enter over Swiper container.",
            onChange: () => {
              setAttributes({
                pauseOnMouseEnter: !pauseOnMouseEnter
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: "Reverse Direction",
            checked: reverseDirection,
            help: "Enables autoplay in reverse direction",
            onChange: () => {
              setAttributes({
                reverseDirection: !reverseDirection
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: "Stop On Last Slide",
            checked: stopOnLastSlide,
            help: "Enable this parameter and autoplay will be stopped when it reaches last slide (has no effect in loop mode)",
            onChange: () => {
              setAttributes({
                stopOnLastSlide: !stopOnLastSlide
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: "Wait For Transition",
            checked: waitForTransition,
            help: "When enabled autoplay will wait for wrapper transition to continue. Can be disabled in case of using Virtual Translate when your slider may not have transition",
            onChange: () => {
              setAttributes({
                waitForTransition: !waitForTransition
              });
            }
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Advanced Features'),
        icon: "admin-generic",
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
            label: "Effect (Under Construction)",
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
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: "Mouse Wheel",
            help: "Enables navigation through slides using mouse wheel.",
            checked: mousewheel,
            onChange: () => {
              setAttributes({
                mousewheel: !mousewheel
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: "Release On Edges",
            help: "Set to true and swiper will release mousewheel event and allow page scrolling when swiper is on edge positions (in the beginning or in the end) NOTE: Mouse Wheel must be set to true for this to work.",
            checked: releaseOnEdges,
            onChange: () => {
              setAttributes({
                releaseOnEdges: !releaseOnEdges
              });
            }
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Free Mode'),
        icon: "controls-play",
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: "Enable Free Mode",
            help: "Whether the free mode is enabled. Slide will continue moving for a while after you release it.",
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
        }), freeMode && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
              label: "Minimum Velocity",
              help: "Minimum touchmove-velocity required to trigger free mode momentum",
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
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
              label: "Momentum",
              help: "If enabled, then slide will keep moving for a while after you release it",
              checked: freeModeMomentum,
              onChange: () => {
                setAttributes({
                  freeModeMomentum: !freeModeMomentum
                });
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
              label: "Momentum Bounce",
              help: "Set to false if you want to disable momentum bounce in free mode",
              checked: freeModeMomentumBounce,
              onChange: () => {
                setAttributes({
                  freeModeMomentumBounce: !freeModeMomentumBounce
                });
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
              label: "Momentum Bounce Ratio",
              help: "Higher value produces larger momentum bounce effect",
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
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
              label: "Momentum Ratio",
              help: "Higher value produces larger momentum distance after you release slider",
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
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
              label: "Momentum Velocity Ratio",
              help: "Higher value produces larger momentum velocity after you release slider",
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
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
              label: "Sticky",
              help: "Set to enabled to enable snap to slides positions in free mode",
              checked: freeModeSticky,
              onChange: () => {
                setAttributes({
                  freeModeSticky: !freeModeSticky
                });
              }
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Responsive Breakpoints'),
        icon: "smartphone",
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextareaControl, {
            label: "Responsive breakpoints (JSON Object)",
            help: "Allows to set different parameter for different responsive breakpoints (screen sizes). Not all parameters can be changed in breakpoints, only those which are not required different layout and logic, like slidesPerView, slidesPerGroup, spaceBetween, grid.rows. Such parameters like loop and effect won't work",
            value: breakpoints,
            onChange: option => {
              setAttributes({
                breakpoints: option
              });
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("p", {
            children: ["Example: ", '{\"720\":{\"slidesPerView\":2}}', " - Notice the double quotes"]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Thumbnails'),
        icon: "images-alt2",
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: "Thumbs",
            help: "Enables thumbs to be used as pagination.",
            checked: thumbs,
            onChange: () => {
              setAttributes({
                thumbs: !thumbs
              });
            }
          })
        }), thumbs && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
              label: "Space Between",
              help: "Distance between slides in px.",
              value: thumbsSpaceBetween,
              onChange: option => {
                setAttributes({
                  thumbsSpaceBetween: parseInt(option)
                });
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
              label: "Thumbs per view",
              help: "Number of slides per view (slides visible at the same time on slider's container). Can be a number or auto",
              value: thumbsSlidesPerView,
              onChange: option => {
                setAttributes({
                  thumbsSlidesPerView: parseInt(option)
                });
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalAlignmentMatrixControl, {
              disableAlignment: ['center'],
              value: alignment,
              onChange: newAlignment => setAlignment(newAlignment)
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Developer Tools'),
        icon: "admin-tools",
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
          label: "Debug",
          help: "Show (console.log) config JSON object for each slider",
          checked: debug,
          onChange: () => {
            setAttributes({
              debug: !debug
            });
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
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
            className: "button",
            children: "Fix Slide Slugs"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
            style: {
              marginTop: 'calc(8px)',
              fontSize: '12px',
              fontStyle: 'normal',
              color: 'rgb(117, 117, 117)',
              marginBottom: 'revert'
            },
            children: "On rare occasions, if the slide slugs become out of sync with the slide data stored in the parent block, you might notice all slide contents appearing under a single tab. Clicking this button could help resolve the issue. This action iterates over each slide and resets the slugs in ascending order (e.g., slide-1, slide-2, etc.), ensuring that each tab properly corresponds to its respective slide."
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(SwiperConfigEditor, {
          attributes: attributes,
          setAttributes: setAttributes
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
      ...blockProps,
      className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default()(blockProps.className, className),
      "data-tab-active": tabActive,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "wb-tabs-buttons-wrapper",
        style: style,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default()('wb-tabs-buttons', `wb-tabs-buttons-align-${buttonsAlign}`),
          children: [tabsData.map((tabData, i) => {
            const {
              slug
            } = tabData;
            const selected = tabActive === slug;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
              className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_0___default()('wb-tabs-buttons-item', selected ? 'wb-tabs-buttons-item-active' : ''),
              onClick: () => setAttributes({
                tabActive: slug
              }),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("h4", {
                children: ["Slide ", counter++]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_remove_button__WEBPACK_IMPORTED_MODULE_9__["default"], {
                show: isSelectedBlockInRoot,
                tooltipText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove slide?', '@@text_domain'),
                onRemove: () => {
                  removeTab(i);
                }
              })]
            }, `tab_button_${tabData.slug}`);
          }), isSelectedBlockInRoot ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
            text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add Slide', '@@text_domain'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
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
            })
          }) : '']
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          className: "wp-swiper__slide-content",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.InnerBlocks, {
            template: INNER_BLOCKS_TEMPLATE,
            templateLock: false,
            allowedBlocks: ['da/wp-swiper-slide']
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("style", {
      children: `
						[data-block="${props.clientId}"] [data-tab] {
							display: none;
						}
						[data-block="${props.clientId}"] [data-tab="${tabActive !== null && tabActive !== void 0 ? tabActive : 'slide-1'}"] {
							display: block !important;
						}
						`
    })]
  });
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

/***/ "./src/utils/get-unique-slug/index.js"
/*!********************************************!*\
  !*** ./src/utils/get-unique-slug/index.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "@wordpress/compose"
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
(module) {

"use strict";
module.exports = window["wp"]["compose"];

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
>>>>>>> master
