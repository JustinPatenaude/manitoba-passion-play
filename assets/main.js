$(document).ready(function(){
  $('.js-mobile-menu').on('click', function(){
    $('body').toggleClass('nav-opened');
  });
  $('.overlay').on('click', function(){
    $('body').removeClass('nav-opened');
  });
  $('.gallery-item').magnificPopup({
    type: 'image',
    gallery:{
      enabled:true
    }
  });
});