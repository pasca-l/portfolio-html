"use strict";

(function ($) {
  const $menu = $('.menu');
  const menuWidth = $menu.width();

  $(window).on('load resize', function(){
    const windowWidth = $(window).width();
    const $textbody = $('.textbody');

    if (menuWidth >= windowWidth * 0.7) {
      $menu.removeClass('all');
      $menu.addClass('hamburger');
    }
    else {
      $menu.removeClass('hamburger');
      $menu.removeClass('active');
      $menu.addClass('all');
    }

    if (windowWidth <= 510) {
      $textbody.width(280);
    }
    else {
      $textbody.width("55%");
    }

    $('.hamburger').click(function () {
      const $hamburger = $('.hamburger');
      $hamburger.toggleClass('active');
      // $('.hamburger').children('li').stop().slideToggle();
    });

  })

})(window.jQuery);