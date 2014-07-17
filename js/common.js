head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	console.log($('body').html());

	function divHeight() {
		var windowHeight = $(window).height();
		$(".js-main-screen").css({
			height: windowHeight
		});
	}
	divHeight();

	$(window).resize(function(){
		divHeight();
	});

});