import '../../css/frontend.scss';

var wp_swiper = new (function () {
	var self = this;

	self.init = function () {
		self.init_options();
	};

	self.getNumber = function (value, inital = 1) {
		return Number(value) ? Number(value) : inital;
	};

	this.JSONify = (obj) => {
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

			if (swiper_container.hasAttribute('data-freemode')) {
				if (swiper_container.getAttribute('data-freemode') == 'true') {
					if (swiper_container.getAttribute('data-freemode') == 'true' && swiper_container.getAttribute('data-sticky') == 'true') {
						options.freeMode = {
							enabled: true,
							sticky: true,
						};
					} else {
						options.freeMode = true;
					}
				}
			}

			if (swiper_container.hasAttribute('data-navigation')) {
				if (swiper_container.getAttribute('data-navigation') == 'true') {
					options.navigation = {
						nextEl: `.wp-swiper--${i} .swiper-button-next`,
						prevEl: `.wp-swiper--${i} .swiper-button-prev`,
					};
				}
			}
			if (swiper_container.hasAttribute('data-pagination')) {
				if (swiper_container.getAttribute('data-pagination') == 'true') {
					options.pagination = {
						el: wpSwipers[i].querySelector('.swiper-pagination'),
					};

					if (swiper_container.getAttribute('data-paginationtype')) {
						options.pagination.type = swiper_container.getAttribute('data-paginationtype');
					}

					if (swiper_container.getAttribute('data-clickablepagination')) {
						options.pagination.clickable = swiper_container.getAttribute('data-clickablepagination');
					}
				} else {
					options.pagination = false;
				}
			} else {
				options.pagination = false;
			}
			if (swiper_container.hasAttribute('data-slidespercolumn')) {
				options.slidesPerColumn = self.getNumber(swiper_container.getAttribute('data-slidespercolumn'), 1);
			}
			if (swiper_container.hasAttribute('data-autoplay')) {
				options.autoplay = swiper_container.getAttribute('data-autoplay') === 'true' ? true : false;
			}
			if (swiper_container.hasAttribute('data-delay') && options.autoplay) {
				options.autoplay = {};
				options.autoplay.delay = self.getNumber(swiper_container.getAttribute('data-delay'));
			}
			if (swiper_container.hasAttribute('data-disableoninteraction') && swiper_container.getAttribute('data-autoplay') === 'true' && swiper_container.getAttribute('data-disableoninteraction') === 'true') {
				options.autoplay.disableOnInteraction = true;
			}
			if (swiper_container.hasAttribute('data-pauseonmouseenter') && swiper_container.getAttribute('data-autoplay') === 'true' && swiper_container.getAttribute('data-pauseonmouseenter') === 'true') {
				options.autoplay.pauseOnMouseEnter = true;
			}
			if (swiper_container.hasAttribute('data-speed')) {
				options.speed = self.getNumber(swiper_container.getAttribute('data-speed'), 500);
			}
			if (swiper_container.hasAttribute('data-loop')) {
				options.loop = swiper_container.getAttribute('data-loop') === 'true' ? true : false;
			}
			if (swiper_container.hasAttribute('data-effect')) {
				options.effect = swiper_container.getAttribute('data-effect');
				if (options.effect == 'fade') {
					options.fadeEffect = {
						crossFade: true,
					};
				}
			}
			if (swiper_container.hasAttribute('data-direction')) {
				options.direction = swiper_container.getAttribute('data-direction');
			}
			if (swiper_container.hasAttribute('data-slidesperview')) {
				options.slidesPerView = swiper_container.getAttribute('data-slidesperview');
			}
			if (swiper_container.hasAttribute('data-spacebetween')) {
				options.spaceBetween = self.getNumber(swiper_container.getAttribute('data-spacebetween'), 0);
			}
			if (swiper_container.hasAttribute('data-autoheight')) {
				if ('true' === swiper_container.getAttribute('data-autoheight')) {
					options.autoHeight = true;
				}
			}
			if (swiper_container.hasAttribute('data-breakpoints')) {
				const breakpoints = swiper_container.getAttribute('data-breakpoints');
				if (typeof breakpoints !== 'undefined') {
					options.breakpoints = JSON.parse(breakpoints.replace(/\\/g, ''));
				}
			}
			if (swiper_container.hasAttribute('data-mousewheel')) {
				options.mousewheel = swiper_container.getAttribute('data-mousewheel');
			}
			if (swiper_container.hasAttribute('data-releaseonedges')) {
				if ('true' === swiper_container.getAttribute('data-mousewheel') && 'true' === swiper_container.getAttribute('data-releaseonedges')) {
					options.mousewheel = {};
					options.mousewheel.releaseOnEdges = swiper_container.getAttribute('data-releaseonedges');
				}
			}

			// Swiper Thumbs
			if (swiper_container.hasAttribute('data-thumbs')) {
				let thumbsConfig = {
					spaceBetween: 10,
					slidesPerView: 4,
					freeMode: true,
					watchSlidesProgress: true,
				};

				const slides = wpSwipers[i].querySelectorAll('.wp-swiper__slide');
				const thumbsSwiper = wpSwipers[i].querySelector('.wp-swiper__thumbs .swiper-container');
				const thumbsWrapper = wpSwipers[i].querySelector('.wp-swiper__thumbs .swiper-wrapper');
				const existingThumbs = thumbsWrapper.querySelectorAll('.wp-swiper__thumb');

				let thumbSlidesArray = [];

				Array.from(slides).forEach((slide, index) => {
					const thumbNumber = index + 1; // Assuming thumb numbers start from 1
					const matchingThumb = Array.from(existingThumbs).find((thumb) => parseInt(thumb.getAttribute('data-thumb')) === thumbNumber);

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
				thumbSlidesArray.forEach((element) => {
					thumbsWrapper.appendChild(element);
				});
		
				thumbsConfig = JSON.parse(swiper_container.getAttribute('data-thumbs'));
				window.wpSwiperThumbs[i] = new Swiper(thumbsSwiper, thumbsConfig);

				options = {
					...options,
					thumbs: {
						swiper: window.wpSwiperThumbs[i],
					},
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
					},
				};
			}

			if (swiper_container.hasAttribute('data-debug')) {
				if (swiper_container.getAttribute('data-debug') == 'true') {
					console.log({
						swiper_container,
						options: options,
					});
				}
			}

			window.wpSwiper[i] = new Swiper(swiper_container, options);
		}
	};

	window.addEventListener('DOMContentLoaded', (event) => {
		try {
			self.init();
		} catch (e) {
			console.warn('JS Error: ');
			console.log(e);
		}
	});
})();
