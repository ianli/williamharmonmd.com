$(function() {
  resizeBanner();
  showBanner();
});

$(window).resize(function() {
  resizeBanner();
  showBanner();
});

$('#banner-menu__toggle').on('click', function() {
  var $bannerNav = $('#banner-nav');
  if ($bannerNav.hasClass('is-visible')) {
    $bannerNav.removeClass('is-visible');
  } else {
    $bannerNav.addClass('is-visible');
  }
});

function resizeBanner() {
  var windowHeight = $(window).height();
  $('#banner').height(windowHeight);
}

function showBanner() {
  $('#banner').addClass('is-visible');
}
