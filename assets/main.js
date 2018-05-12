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
  $('.home-testimonials').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-circle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-circle-right"></i></button>'
  });
});