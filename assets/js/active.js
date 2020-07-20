(function($){
	"use strict";
	
	jQuery(document).ready(function($){
		$('.testimonial_author').owlCarousel({
            items: 1,
            margin: 30,
            loop: false,
            dots: false,
            nav: false,
            navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
            autoplay: false,
            smartSpeed: 500,
            animateOut: "fadeOut"
        });
	});
	
	
	jQuery(window).on("load", function(){
		
	});
	
})(jQuery);
