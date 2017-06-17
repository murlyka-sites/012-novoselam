$(document).ready(function() {
	svg4everybody();

	$(".js-carousel-goods").slick({
		slidesToShow: 4,
		responsive: [{
			breakpoint: 1220,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1
			}
		}]
	});

	$(".header-search__catalog--nav").click(function() {
		$(".nav__container").toggleClass("nav__container-open")
	});

	$(".nav-top__button").click(function() {
		$(".nav-top__list").toggleClass("nav-top__list_open")
	});

	$(".section-zero__items").slick({
		slidesToShow: 2,
		responsive: [ {
			breakpoint: 992,
			settings: {
				slidesToShow: 1
			}
		}]
	})
});
