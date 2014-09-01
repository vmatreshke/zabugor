head.ready(function() {

	$(document).on("click", function(){
		$(".js-popup").hide();
		$(".js-share").removeClass("is-active");
		$(".js-drop").removeClass("is-active");
	});



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
	$(window).scroll(function(){
		fixedNav();
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
	    } else {
	      // whole part of element is visible
	    }
	  } else {
	    // element has gone out of viewport
	  }
	});

}); 