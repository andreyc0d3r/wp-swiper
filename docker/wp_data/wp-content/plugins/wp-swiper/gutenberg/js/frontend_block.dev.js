import "../../css/frontend.scss";

var wp_swiper = new (function () {
	var self = this;
	self.options = {};

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
		var wpSwipers = document.querySelectorAll(".wp-swiper");
		window.wpSwiper = [];
		window.wpSwiperThumbs = [];
		for (let i = 0; i < wpSwipers.length; i++) {
			wpSwipers[i].classList.add(`wp-swiper--${i}`);
			let swiper_container = wpSwipers[i].querySelector(".swiper-container");

			if (swiper_container.hasAttribute("data-freemode")) {
				if (swiper_container.getAttribute("data-freemode") == "true") {
					if (swiper_container.getAttribute("data-freemode") == "true" && swiper_container.getAttribute("data-sticky") == "true") {
						self.options.freeMode = {
							enabled: true,
							sticky: true
						}
					} else {
						self.options.freeMode = true;
					}
				}
			}

			if (swiper_container.hasAttribute("data-navigation")) {
				if (swiper_container.getAttribute("data-navigation") == "true") {
					self.options.navigation = {
						nextEl: wpSwipers[i].querySelector(".swiper-button-next"),
						prevEl: wpSwipers[i].querySelector(".swiper-button-prev"),
					};
				}
			}
			if (swiper_container.hasAttribute("data-pagination")) {
				if (swiper_container.getAttribute("data-pagination") == "true") {
					self.options.pagination = {
						el: wpSwipers[i].querySelector(".swiper-pagination"),
					};

					if (swiper_container.getAttribute("data-paginationtype")) {
						self.options.pagination.type = swiper_container.getAttribute("data-paginationtype");
					}

					if (swiper_container.getAttribute("data-clickablepagination")) {
						self.options.pagination.clickable = swiper_container.getAttribute("data-clickablepagination");
					}
				} else {
					self.options.pagination = false;
				}
			} else {
				self.options.pagination = false;
			}
			if (swiper_container.hasAttribute("data-slidespercolumn")) {
				self.options.slidesPerColumn = self.getNumber(swiper_container.getAttribute("data-slidespercolumn"), 1);
			}
			if (swiper_container.hasAttribute("data-autoplay")) {
				self.options.autoplay = swiper_container.getAttribute("data-autoplay") == "true" ? true : false;
			}
			if (swiper_container.hasAttribute("data-delay") && self.options.autoplay) {
				self.options.autoplay = {};
				self.options.autoplay.delay = swiper_container.getAttribute("data-delay");
			}
			if (swiper_container.hasAttribute("data-speed")) {
				self.options.speed = self.getNumber(swiper_container.getAttribute("data-speed"), 500);
			}
			if (swiper_container.hasAttribute("data-loop")) {
				self.options.loop = swiper_container.getAttribute("data-loop") == "true";
			}
			if (swiper_container.hasAttribute("data-effect")) {
				self.options.effect = swiper_container.getAttribute("data-effect");
				if(self.options.effect == "fade") {
					self.options.fadeEffect = {
						crossFade: true
					}
				}
			}
			if (swiper_container.hasAttribute("data-direction")) {
				self.options.direction = swiper_container.getAttribute("data-direction");
			}
			if (swiper_container.hasAttribute("data-slidesperview")) {
				self.options.slidesPerView = swiper_container.getAttribute("data-slidesperview");
			}
			if (swiper_container.hasAttribute("data-spacebetween")) {
				self.options.spaceBetween = self.getNumber(swiper_container.getAttribute("data-spacebetween"), 0);
			}
			if (swiper_container.hasAttribute("data-autoheight")) {
				if ("true" === swiper_container.getAttribute("data-autoheight")) {
					self.options.autoHeight = true;
				}
			}
			if (swiper_container.hasAttribute("data-breakpoints")) {
				const breakpoints = swiper_container.getAttribute("data-breakpoints");
				if (typeof breakpoints !== "undefined") {
					self.options.breakpoints = JSON.parse(breakpoints.replace(/\\/g, ""));
				}
			}
			if (swiper_container.hasAttribute("data-mousewheel")) {
				self.options.mousewheel = swiper_container.getAttribute("data-mousewheel");
			}
			if (swiper_container.hasAttribute("data-releaseonedges")) {
				if ("true" === swiper_container.getAttribute("data-mousewheel") && "true" === swiper_container.getAttribute("data-releaseonedges")) {
					self.options.mousewheel = {};
					self.options.mousewheel.releaseOnEdges = swiper_container.getAttribute("data-releaseonedges");
				}
			}

			// Swiper Thumbs
			if (swiper_container.hasAttribute("data-thumbsconfig")) {
				let thumbsConfig = {
					spaceBetween: 10,
					slidesPerView: 4,
					freeMode: true,
					watchSlidesProgress: true,
				};
				const slides = wpSwipers[i].querySelector(".swiper-wrapper").cloneNode(true);
				const thumbsSwiper = wpSwipers[i].querySelector(".wp-swiper__thumbs .swiper-container");

				const thumbsWrapper = wpSwipers[i].querySelector(".wp-swiper__thumbs .swiper-wrapper");
				thumbsWrapper.replaceWith(slides);
				thumbsConfig = JSON.parse(swiper_container.getAttribute("data-thumbsconfig"));
				window.wpSwiperThumbs[i] = new Swiper(thumbsSwiper, thumbsConfig);

				self.options = {
					...self.options,
					thumbs: {
						swiper: window.wpSwiperThumbs[i]
					}
				}
			}

			if (swiper_container.hasAttribute("data-debug")) {
				if(swiper_container.getAttribute("data-debug") == "true") {
					console.log({
						swiper_container,
						"options": self.options
					})
				}
			}

			window.wpSwiper[i] = new Swiper(swiper_container, self.options);
		}
	};

	window.addEventListener("DOMContentLoaded", (event) => {
		try {
			self.init();
		} catch (e) {
			console.warn("JS Error: ");
			console.log(e);
		}
	});
})();
