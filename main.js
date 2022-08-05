$(function() {
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 10) {
      $('.navbar').addClass('active');
    } else {
      $('.navbar').removeClass('active');
    }
  });
});

// scroll animation
var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = '#E1EBFF';

// trigger this function every time the user scrolls
window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll < 300) {
        // green
        body.style.backgroundColor = '#E1EBFF';
    } else if (scroll >= 300 && scroll < 600) {
        // yellow
        body.style.backgroundColor = 'rgba(211,215,176,1)';
    } else if (scroll >= 600 && scroll < 1200) {
        // blue
        body.style.backgroundColor = 'blue';
    } else if (scroll >= 1200 && scroll < 1800) {
        // orange
        body.style.backgroundColor = 'orange';
    } else if (scroll >= 1800 && scroll < 3000) {
        // red
        body.style.backgroundColor = 'red';
    } else {
        // purple
        body.style.backgroundColor = 'purple';
    }
}
