$(document).ready(function(){
  // Init ScrollMagic https://scrollmagic.io/docs/
	var controller = new ScrollMagic.Controller();
	//parallax scene
	var slideParallaxScene = new ScrollMagic.Scene({
	  triggerElement: '.bcg-parallax',
	  triggerHook: 0,
	  duration: '100%'
	})
	.setTween(TweenMax.from('.bcg', 1, {y:'-30%',ease:Power0.easeNone}))
	.addTo(controller);
});