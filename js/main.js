$(document).ready(function(){
	var altura = $('.fijo').offset().top;

	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.fijo').addClass('fijo-fixed');
		} else {
			$('.fijo').removeClass('fijo-fixed');
		}
	});

});
