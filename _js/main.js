$(function() {
  resizeBanner();
});

$(window).resize(function() {
  resizeBanner();
});

$('#app-banner-menu__link--toggle').on('click', function() {
  var $bannerMenu = $('#app-banner-menu');
  if ($bannerMenu.hasClass('is-visible')) {
    $bannerMenu.removeClass('is-visible');
  } else {
    $bannerMenu.addClass('is-visible');
  }
});

$('#app-header-menu__toggle').on('click', function() {
  var $headerMenu = $('#app-header-menu');
  if ($headerMenu.hasClass('is-visible')) {
    $headerMenu.removeClass('is-visible');
  } else {
    $headerMenu.addClass('is-visible');
  }
});

function resizeBanner() {
  var windowHeight = $(window).height();
  $('#app-banner').height(windowHeight);
}

var ScrollDispatcher = require('./ScrollDispatcher');
var ScrollScene = require('./ScrollScene');
var SimpleScrollScene = require('./SimpleScrollScene');

new ScrollScene({
  triggerElement: '#app-banner-body',
  triggerHook: 'onLeave',
  downCallback: function() {
    $('#app-banner-nav').addClass('is-hidden');
    $('#app-header').addClass('is-visible');
  },
  upCallback: function() {
    $('#app-banner-nav').removeClass('is-hidden');
    $('#app-header').removeClass('is-visible');
  }
})
.addTo(ScrollDispatcher);
