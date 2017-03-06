(function ($, window, document, undefined) {
    'use strict';
	
	// scroll functions
	$(window).scroll(function(){
		
		// fixed menu
		if ($(this).scrollTop() > 135) {
			$('#nav').addClass('navbar-fixed-top slideInDown');
		} else {
			$('#nav').removeClass('navbar-fixed-top slideInDown');
		}
		
		
		// sticky social sharing bar [source: http://stickyjs.com/] 
		if ($(window).scrollTop() >= $('.single-post .author-box').offset().top) {
			$("#sharing-bar").unstick();
		} else {
			$("#sharing-bar").sticky({topSpacing:40});
		}
		
	});
	
	
	/* time ticker ccarousel */
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:40,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			767:{
				items:2,
				nav:true
			},
			991:{
				items:3,
				nav:false
			},
			1000:{
				items:4,
				nav:true,
				loop:false
			}
		}
	})

})(jQuery, window, document);