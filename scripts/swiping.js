$(document).ready(function() {
	new Swiper('.view__cont', {
		navigation: {
			nextEl: '.view__arrow-right',
			prevEl: '.view__arrow-left'
		},
		grabCursor: true,
		loop: true,

		zoom: {
			maxRatio: 1.5,
			minRatio: 1,
		},
	});
	new Swiper('.head__main', {
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 3500,
			stopOnLastSlide: false,
			disableOnInteraction: false,
		}
	});
})