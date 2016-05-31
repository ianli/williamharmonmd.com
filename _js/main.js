$(function() {
  resizeBanner();
  showBanner();
});

$(window).resize(function() {
  resizeBanner();
  showBanner();
});

$('#app-banner-menu__link--toggle').on('click', function() {
  var $bannerNav = $('#app-banner-menu');
  if ($bannerNav.hasClass('is-visible')) {
    $bannerNav.removeClass('is-visible');
  } else {
    $bannerNav.addClass('is-visible');
  }
});

function resizeBanner() {
  var windowHeight = $(window).height();
  $('#app-banner').height(windowHeight);
}

function showBanner() {
  $('#app-banner').addClass('is-visible');
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
