$(document).ready(function() {

	$(function() {
			var link = $(".menu-link");
			var close = $(".close-menu");
			var menu = $(".m-menu");
			link.on("click", function(event) {
				event.preventDefault();
				menu.toggleClass("m-menu-active");
			});
			close.on("click", function(event) {
				event.preventDefault();
				menu.toggleClass("m-menu-active");
			});
	});

	$(".header-menu ul a, .m-menu li a").mPageScroll2id();
});
