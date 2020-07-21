(function ($) {
  'use strict';

  jQuery(document).ready(function ($) {
    $('.testimonials').owlCarousel({
      items: 1,
      margin: 30,
      loop: false,
      dots: false,
      nav: true,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      autoplay: false,
      smartSpeed: 500,
      animateOut: 'fadeOut',
    });
  });

  jQuery(window).on('load', function () {});
})(jQuery);
