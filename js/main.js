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

	$(".slider-category").slick({
		arrows: false,
		dots: true
	})

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

	$(".aside-filter__checkbox, .aside-filter__radio").styler();

	$(".aside-filter__group-title").click(function() {
		$(this).toggleClass("aside-filter__group-title_open");
		$(this).next().toggleClass("aside-filter__group-body_open");
	});

	$(".product-gallery__prs").slick({
		arrows: false,
		asNavFor: ".product-gallery__dots",
		infinite: false
	});

	$(".product-gallery__dots").slick({
		slidesToShow: 3,
		asNavFor: ".product-gallery__prs",
		focusOnSelect: true,
		infinite: false,

		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		}]
	});

	$(".product-tabs__link").click(function() {
		var $list = $(this).closest(".product-tabs__items"),
				index = $list.find(".product-tabs__item").index($(this).parent());

		// console.log($list.find(".product-tabs__item"));

		if($(this).hasClass("product-tabs__link_active")) {
			return false;
		}

		$(".product-tabs__item_active, .product-tabs__link_active").removeClass("product-tabs__link_active product-tabs__item_active")

		$(this).addClass("product-tabs__link_active");
		$(this).parent().addClass("product-tabs__item_active");

		$(".product-tabs-content__item_active").removeClass("product-tabs-content__item_active");

		$($(".product-tabs-content__item")[index]).addClass("product-tabs-content__item_active");

		return false;
	});

	$(".product-size__current").click(function() {
		var $parent = $(this).closest(".product-size");

		$parent.find(".product-size__body").toggleClass("product-size__body_open");
	});

	$(".product-size__item").click(function() {
		var $parent = $(this).closest(".product-size");

		$parent.find(".product-size__body").toggleClass("product-size__body_open");
		$parent.find(".product-size__current").text($(this).text());
	});

	$(".product-desc__more").click(function() {
		$($(this).attr("href")).toggleClass("product-desc__text_hidden");

		return false;
	})

	$(".catalog-menu-pointer").click(function() {
		$("#menu_left").toggleClass("active")
	});

	$("#menu_left > div").click(function(){ var num = $(this).attr("num");
		if ($(".menu_left_inside[num^='"+num+"']").css('display') == 'block') {
			var visible = '1';
		};
		$(".menu_left_inside[style^='display: block;']").stop();
		$(".menu_left_inside[style^='display: block;']").slideToggle("fast");
		if (visible != '1') {
			$(".menu_left_inside[num^='"+num+"']").slideToggle("normal");
		};
		$("#menu_left > div").removeAttr("id");
		$(this).attr("id","hover");	
	});
});
