$(document).ready(function() {

  // Nav Bar Background Color

  $(window).on('scroll', function() {
    if ($(window).scrollTop() >= $('.navbar').height()) {
      $('.navbar').addClass('dark-bg').removeClass('none-scrolling');
    } else {
      $('.navbar').removeClass('dark-bg').addClass('none-scrolling');
    }
  });

  // Nav Bar Mobile Menu

  function MobileNavBar() {
    if ($(window).width() <= 991) {
      $('.navbar-toggler').on('click', function() {
        $(this).css({
          'left': ($(window).width() - 60)
        });
        $('.fixed-top').toggleClass('move');
        $('.navbar-brand').toggleClass('fixing');
      });
    }
  }

  MobileNavBar();

  // Services Opacity

  $('.Services .cont').on('click', function() {
    $(this).addClass('active').parents().find('.cont').removeClass('active');
    $(this).hasClass('active') ? $(this).addClass('active') : $(this).addClass('active');
  });
  $('.cont').on('click', function() {
    $(`.${$(this).attr('id')}`).show(750).siblings('.content-inf').hide(750);
  });

  // ScrollTop Button

  $('footer a').on('click', function() {
    $("html,body").animate({
      scrollTop: 0
    }, 1500);
  });
  

  // Nav Bar Active Links

  $('.navbar-nav a').on('click', function() {

    $(this).addClass('active').siblings().removeClass('active');

  });

  $('.navbar-brand').on('click', function() {

    $('[href="index.html"]').addClass('active').siblings().removeClass('active');

  });

  // Nav Bar Scroll To sections Function

  $(".navbar-nav a ").on("click", function(e) {

    e.preventDefault();

    $("html, body").animate({

    scrollTop: $('#' + $(this).data('scroll')).offset().top

    }, 700);

  });

  // Logo Scroll To the Top Function

  $(".navbar-brand").on("click", function() {

    $("html,body").animate({

    scrollTop: 0

    }, 1200);

    $(".navbar-nav a.main").addClass("active").siblings().removeClass("active");

  });

  // Carousel Controls

  $('.template .col-lg-7 , .carousel-control-prev , .carousel-control-next , .testmonials, .main-carousel ').on('mouseenter', function() {
    $('.carousel-control-next, .carousel-control-prev').fadeIn(650);
  });
  $('.template .col-lg-7 , .carousel-control-prev , .carousel-control-next , .testmonials, .main-carousel').on('mouseleave', function() {
    $('.carousel-control-next, .carousel-control-prev').fadeOut(400);
  });

  // Owl Carousel Controls

  function owl() {
    var owl = $('.owl-carousel');
    if ($(window).width() < 600) {
      owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false
      });
    } else {
      owl.owlCarousel({
        items: 3,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false
      });
    }
  }

  owl();

  // Footer Socail Media

  $('footer ul li').on('mouseenter', function() {
    $(this).addClass('layer-2').removeClass('layer-1');
    $(this).children().addClass('invert-color');
  });
  $('footer ul li').on('mouseleave', function() {
    $(this).addClass('layer-1').removeClass('layer-2');
    $('footer ul li i').removeClass('invert-color');
  });

});
