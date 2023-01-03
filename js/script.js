"use strict";

(function ($) {

  $(window).on('load resize', function(){
    const windowWidth = $(window).width();
    const $menu = $('.menu');
    const $hamburger = $('.hamburger');
    const $textbody = $("[class^='textbody'")
    
    if (windowWidth <= 720) {
      $textbody.addClass('textbody_mobile');
      $textbody.removeClass('textbody');

      $menu.addClass('hide');
      $hamburger.removeClass('hide');
    }
    else {
      $textbody.addClass('textbody');
      $textbody.removeClass('textbody_mobile');

      $menu.removeClass('hide');
      $hamburger.addClass('hide');
    }
  })
  
})(window.jQuery);