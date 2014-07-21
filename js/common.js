head.ready(function() {

	$(document).on("click", function(){
		$(".js-popup").hide();
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
		if (section.length > 0) {
			$('html, body').animate({
	            scrollTop: ($("."+section)).offset().top-70
	        }, 500);
		}
		
		return false;
	});


}); 