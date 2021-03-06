//= require "vendor/jquery.meanmenu.min"
//= require "vendor/slippry.min"

$(document).ready(function () {
  $('.main-menu').meanmenu({
    // onePage: true,
    meanScreenWidth: 600
  });
  $('.main-menu a, .smooth-link, .mean-nav a').click(function (e) {
    var target = $(this).attr('href');
    $('body, html').animate({
      scrollTop: $(target).offset().top
    }, 600);
    return false;
  });
  if ($('.glove').css('transitionDuration') !== '0s') {
    $(document).on('scroll', function () {
      if ($(this).scrollTop() > 100) {
        $('.glove').addClass('punch');
      } else {
        $('.glove').removeClass('punch');
      }
    });
  }
  if ($('.day-toggle').css('display') !== 'none') {
    $('.day_header').click(function () {
      $('.slots', $(this).closest('.day')).slideToggle();
      if ($('.day-toggle', $(this).closest('.day')).text() === '⬇︎') {
        $('.day-toggle', $(this).closest('.day')).text('⬆︎');
      } else {
        $('.day-toggle', $(this).closest('.day')).text('⬇︎');
      }
    });
  }
  $('.gallery').slippry({
    transition: 'kenburns',
    easing: 'linear',
    speed: 2000,
    pause: 6000,
    kenZoom: 120,
    autoHover: false
  });
});