$(document).ready(function() {

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".mnu a").click(function() {
		$(".mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".mnu").is(":visible")) {
			$(".top_text").removeClass("h_opacify");
			$(".mnu").fadeOut(600);
			$(".mnu li a").removeClass("fadeInUp animated");
		}else {
			$(".top_text").addClass("h_opacify");
			$(".mnu").fadeIn(600);
			$(".mnu li a").addClass("fadeInUp animated");
		};
	});

	$(".navbar li a, .btn").mPageScroll2id();

	$("#works_grid").mixItUp();

	$(".works li").click(function() {
		$(".works li").removeClass("active");
		$(this).addClass("active");
	});

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	}

	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

		$('.carousel-team').owlCarousel({
			loop:true,
			smartSpeed : 1000,
			margin: 10,
			dots: false,
			nav:true,
			navText : ["",""],
			responsive : {
				0 : {
						items:1
				},
				450 : {
						items:2
				},
				700 : {
						items:3
				},
				1000 : {
						items:4
				}
			}
		});

	$(".owl-carousel").owlCarousel({
		responsive : {
			0 : {
					items:1,
					nav:true
			}
		},
		navText : ""
	});

	$(window).load(function() {
		$(".loader_inner").fadeOut();
		$(".loader").delay(400).fadeOut("slow");
	});

});