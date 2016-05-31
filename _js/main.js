$(function() {
  resizeBanner();
  showBanner();
});

$(window).resize(function() {
  resizeBanner();
  showBanner();
});

$('#app-banner-menu__toggle').on('click', function() {
  var $bannerNav = $('#app-banner-nav');
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
    $('#app-banner-temp').hide();
  },
  upCallback: function() {
    $('#app-banner-temp').show();
  }
})
.addTo(ScrollDispatcher);
