export const swiperConfigFixtures = [
	{
		name: 'fractional grouped carousel',
		attributes: {
			clickable_pagination: true,
			pagination: true,
			pagination_type: 'bullets',
			slidesPerGroup: 2,
			slidesPerView: '2.5',
			spaceBetween: 24,
		},
		expectedRuntime: {
			pagination: {
				clickable: true,
				type: 'bullets',
			},
			slidesPerGroup: 2,
			slidesPerView: 2.5,
			spaceBetween: 24,
		},
	},
	{
		name: 'autoplay and mousewheel carousel',
		attributes: {
			autoplay: true,
			delay: 4500,
			disableOnInteraction: false,
			mousewheel: true,
			pauseOnMouseEnter: true,
			releaseOnEdges: true,
			slidesPerView: '1',
			waitForTransition: true,
		},
		expectedRuntime: {
			autoplay: {
				delay: 4500,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
				reverseDirection: false,
				stopOnLastSlide: false,
				waitForTransition: true,
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		},
	},
	{
		name: 'responsive carousel',
		attributes: {
			breakpoints:
				'{"720":{"slidesPerView":"2.5","spaceBetween":20},"1024":{"slidesPerView":4,"spaceBetween":32}}',
			slidesPerView: '1.2',
		},
		expectedRuntime: {
			breakpoints: {
				720: {
					slidesPerView: 2.5,
					spaceBetween: 20,
					watchSlidesProgress: true,
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 32,
					watchSlidesProgress: true,
				},
			},
			slidesPerView: 1.2,
		},
	},
];
