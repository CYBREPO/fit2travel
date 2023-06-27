$(document).ready(function(){
  // Setup index-slider
  $('.index-slider').slick({
  	infinite: true,
  	speed: 500,
  	slidesToShow: 1,
  	autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: true,
    dots: false,
    cssEase: 'linear'
  });
  // Setup index-slider
  $('.articles-slider').slick({
  	infinite: true,
  	speed: 800,
  	slidesToShow: 1,
  	autoplay: true,
    autoplaySpeed: 8000,
    fade: false,
    arrows: false,
    dots: true,
    cssEase: 'linear'
  });
  // Setup photos-slider
  $('.photos-slider').slick({
  	infinite: true,
  	speed: 800,
  	slidesToShow: 1,
  	autoplay: true,
    autoplaySpeed: 8000,
    fade: false,
    arrows: true,
    dots: false,
    cssEase: 'linear'
  });
});
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 200) {
    $("#mainNav").addClass("darkHeader");
	} else {
	  $("#mainNav").removeClass("darkHeader");
	}
});