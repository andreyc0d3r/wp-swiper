import './styles/frontend.scss';

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
			let swiper_config = JSON.parse(swiper_container.getAttribute('data-swiper'));

			options = swiper_config;

			// Convert slidesPerView to integer if it's not 'auto'
			if (options.slidesPerView && options.slidesPerView !== 'auto') {
				options.slidesPerView = parseInt(options.slidesPerView, 10);
			}

			if (options.navigation) {
				options.navigation = {
					nextEl: `.wp-swiper--${i} .swiper-button-next`,
					prevEl: `.wp-swiper--${i} .swiper-button-prev`,
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
					watchSlidesProgress: true,
				};

				const slides = wpSwipers[i].querySelectorAll('.wp-swiper__slide');
				const thumbsSwiper = wpSwipers[i].querySelector('.wp-swiper__thumbs .swiper-container');
				const thumbsWrapper = wpSwipers[i].querySelector('.wp-swiper__thumbs .swiper-wrapper');
				const existingThumbs = thumbsWrapper.querySelectorAll('.wp-swiper__thumb');

				let thumbSlidesArray = [];

				Array.from(slides).forEach((slide, index) => {
					const thumbNumber = index + 1;
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
				if (swiper_container.getAttribute('data-debug') === 'true') {
					window.dispatchEvent(new CustomEvent('wp-swiper:debug', {
						detail: {
							element: swiper_container,
							options: options,
						},
					}));
				}
			}

			// Auto Slide Width logic - attach lifecycle events to override Swiper's width calculations
			if (options.autoSlideWidth) {
				// Width fix function that sets each slide to auto width (with redundancy check)
				const fixWidths = (swiper) => {
					swiper.slides.forEach((slide) => {
						if (slide.style.width !== 'auto') {
							slide.style.width = 'auto';
						}
					});
				};

				// Helper to wrap event handlers while preserving existing handlers
				const wrapHandler = (existingHandler) => {
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
					beforeResize: wrapHandler(existingOn.beforeResize),
				};

				// Remove autoSlideWidth from options as it's not a native Swiper property
				delete options.autoSlideWidth;
			}

			window.wpSwiper[i] = new Swiper(swiper_container, options);
		}
	};

	window.addEventListener('DOMContentLoaded', () => {
		try {
			self.init();
		} catch (error) {
			window.dispatchEvent(new CustomEvent('wp-swiper:error', {
				detail: { error },
			}));
		}
	});
})();
