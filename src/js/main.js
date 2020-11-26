$(function () {

  $('.main__slider').slick({
    dots: true,
    prevArrow: false,
    nextArrow: false,
    responsive:[
      {
        breakpoint: 969,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $('.tab').on('click', function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs__content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs__content--active');
    
    $('.products__slider').slick('setPosition');
  });

  $('.products__item-favorite').on('click', function(){
    $(this).toggleClass('products__item-favorite--active');
  });

  $('.products__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<buttom class="products__slider-btn products__slider-btnprev"><img src="images/arrow-black-left.svg" alt="arrow-left"></buttom>',
    nextArrow: '<buttom class="products__slider-btn products__slider-btnnext"><img src="images/arrow-black-right.svg" alt="arrow-right"></buttom>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 1201,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 870,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 590,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1
        }
      }
    ]
  });

  $('.filter-style').styler();

  $('.filter__item-drop, .filter__extra').on('click', function(){
    $(this).toggleClass('filter__item-drop--active');
    $(this).next().slideToggle('200');
  });

  $(".js-range-slider").ionRangeSlider({
  });

  $('.catalog__filter-btngrid').on('click', function () {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
    $('.products__item-wrapper').removeClass('products__item-wrapper--list');
  });

  $('.catalog__filter-btnline').on('click', function () {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
    $('.products__item-wrapper').addClass('products__item-wrapper--list');
  });

  $(".rate-yo").rateYo({
    normalFill: "rgba(0, 0, 0, 0.4)",
    ratedFill: "#1C62CD",
    spacing: "7px",
    starWidth: "15px"
  });

  $('.menu__btn').on('click', function(){
    $('.menu__mobile-list').toggleClass('menu__mobile-list--active')
  });

  $('.footer__top-title').on('click', function() {
    $(this).next().slideToggle();   
    $(this).toggleClass('footer-title--active');   
  });

  $('.slidetoggle__btn').on('click', function(e) {
    e.preventDefault();
    $(this).next().slideToggle();
    $(this).toggleClass('arrow--active');
  });
  
  
  

    
});