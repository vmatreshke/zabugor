head.ready(function() {

	$(document).on("click", function(){
		$(".js-popup").fadeOut(200);
		$('.js-overlay').fadeOut(500);
		$(".js-share").removeClass("is-active");
		$(".js-drop").removeClass("is-active");
	});

	setTimeout(function(){
		$(".js-preloader").addClass("is-opacity");
	}, 2000);
	setTimeout(function(){
		$(".js-preloader").addClass("is-hidden");
	}, 2500);

	$(".js-menu-key").on("click", function(event){
		$(".js-overlay-menu, .js-menu").addClass("is-visible");
		$(".js-nav").fadeOut(400);
		return false;
		event.stopPropagation();
	});

	$(".js-overlay-menu, .js-menu-close").on("click", function(event){
		$(".js-overlay-menu, .js-menu").removeClass("is-visible");
		$(".js-nav").show();
		return false;
		event.stopPropagation();
	});


	function fixedNav() {
		if ($(window).scrollTop()>0) {
			$("body").addClass("has-fixed-nav");
		}
		else {
			$("body").removeClass("has-fixed-nav");
		}
	}
	fixedNav();
	function fixedDropNav() {
		if ($(window).scrollTop() > $(".js-drop-subnav").offset().top - $(".js-nav").outerHeight()) {
			$(".js-drop-subnav .js-drop").addClass("is-fixed");
		}
		else {
			$(".js-drop-subnav .js-drop").removeClass("is-fixed");
		}
	}
	if ($(".js-drop-subnav").length > 0 ){
		fixedDropNav();
	}

	$(window).scroll(function(){
		fixedNav();
		if ($(".js-drop-subnav").length > 0 ){
			fixedDropNav();
		}
	});

	$(".js-scroll-to").on("click", function(){
		var section = $(this).attr("data-section");
		var attrMargin = $(this).attr("data-margin");
		var navHeight = +$(".js-nav").outerHeight();
		if (attrMargin == undefined ) {
			var margin = 0;
		}
		else {
			var margin = +attrMargin;
		}
		if (section.length > 0) {
			$('html, body').animate({
	            scrollTop: $("."+section).offset().top + margin - navHeight
	        }, 500);
		}

		return false;
	});
	$(".js-scroll-to-country ul a").on("click", function(){
		$(this).parents(".js-scroll-to-country").find("ul a").removeClass("is-active");
		$(this).parents(".js-drop").removeClass("is-active");
		$(this).addClass("is-active");
		var country = $(this).attr("data-country");
		var navHeight = +$(".js-nav").outerHeight();
		if (country.length > 0) {
			$('html, body').animate({
	            scrollTop: $("."+country).offset().top - navHeight
	        }, 500);
		}
		return false;
	});
	$(".js-share-link").on("click", function(event){
		$(this).parents(".js-share").addClass("is-active");
		event.stopPropagation();
		return false;
	});
	$(".js-share-list").on("click", function(event){
		event.stopPropagation();
		return false;
	});
	$(".js-drop-link").on("click", function(event){
		$(this).parents(".js-drop").addClass("is-active");
		event.stopPropagation();
		return false;
	});
	$(".js-drop-list").on("click", function(event){
		event.stopPropagation();
		return false;
	});
	$(".js-drop-close").on("click", function(event){
		$(this).parents(".js-drop").removeClass("is-active");
		event.stopPropagation();
		return false;
	});

	$('.js-slider').slick({
		slidesToShow: 1,
		infinite: true,
		speed: 300,
		touchMove: true,
		arrows: true,
		dots: true,
		autoplay: true,
  		autoplaySpeed: 5000
	});

	$('.js-inview').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
	  if (isInView) {

	    if (visiblePartY == 'top') {
	      $(this).addClass("is-visible");
	    } else if (visiblePartY == 'bottom') {
	      $(this).addClass("is-visible");
	      $(this).addClass("is-visible-bottom");
	    } else {
	      // whole part of element is visible
	    }
	  } else {
	    // element has gone out of viewport
	  }
	});


	$('.js-link-to-popup').on('click', function(event) {
		var targetPopup = $('#' + $(this).attr('href'));
		$('.js-overlay').fadeIn(200);
		targetPopup.fadeIn(500);
		event.stopPropagation();
		return false
	});

	$('.js-close-popup').on('click', function(event) {
		$(this).parents('.js-popup').fadeOut(200);
		$('.js-overlay').fadeOut(500);
		event.stopPropagation();
		return false
	});

	$('.js-popup').on('click', function(event) {
		event.stopPropagation();
	})

});