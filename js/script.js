"use strict";

(function ($) {
  const $menu = $('.menu');
  const menuWidth = $menu.width();

  $(window).on('load resize', function(){
    const windowWidth = $(window).width();
    const $hamburger = $('.hamburger');
    const $textbody = $('.textbody');

    if (menuWidth >= windowWidth * 0.7) {
      $menu.addClass('hide');
      $hamburger.removeClass('hide');
    }
    else {
      $menu.removeClass('hide');
      $hamburger.addClass('hide');
    }

    if (windowWidth <= 510) {
      $textbody.width(280);
    }
    else {
      $textbody.width("55%");
    }
  })
  
})(window.jQuery);