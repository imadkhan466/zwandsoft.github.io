
$(document).ready(function(){
	$('.nav-container').sticky({
		topSpacing :0,
		zIndex :9999 

	});

	$('.service-video').parallaxie({
		speed : .5
	});

	$('.ach-cover').parallaxie({
		speed : .5
	});

	$('.playvid').magnificPopup({
		type : 'iframe',
			iframe: {
			  markup: '<div class="mfp-iframe-scaler">'+
			            '<div class="mfp-close"></div>'+
			            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
			          '</div>', 

			  patterns: {
			    youtube: {
			      index: 'youtube.com/', 

			      id: 'v=',

			      src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
			    },
			    vimeo: {
			      index: 'vimeo.com/',
			      id: '/',
			      src: 'https://player.vimeo.com/video/%id%?autoplay=1'
			    },
			    gmaps: {
			      index: '//maps.google.',
			      src: '%id%&output=embed'
			    }

			  },

			  srcAction: 'iframe_src', 
			}
	});

	var config = document.querySelector('.port-cover');
	var mixer = mixitup(config);

	$('.testi-cover').owlCarousel({
		items : 2,
		margin: 30,
		loop : true,
		mouseDrag : false,
		autoplay : true,
		autoplayTimeout : 3000
	})
});