$(function() {

	// $(".main-menu").on("click","a", function (event) {
	//     event.preventDefault();
	//     var id  = $(this).attr('href'),
	//         top = $(id).offset().top;
	//     $('body,html').animate({scrollTop: top}, 1500);
	// });


	$('a.page-scroll').click(function() {
 		var $anchor = $(this);
 			$('body').animate({
             	scrollTop: ($($anchor.attr('href')).offset().top - 100)
         	}, 600);
         event.preventDefault();
 	});

  		$('.bxslider').bxSlider();
});