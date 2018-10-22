$(function() {

	//Block height
	var maxHeight = Math.max.apply(
		null,
			$.map($(".product__item"), function(e){
				return $(e).height();
		})
	);

	$(".product__item").height(maxHeight);

	//Visible(hide) block
	$(".search__icon").click(function(){
		$(this).next(".search__form").toggle();
	});

	$(".phones-number__link").click(function(){
		$(this).next(".drop__wrapper").toggle();
	});

	//Mobile-menu
	$(".mobile-nav__link").click(function() {
		$(".mobile-nav__wrap").fadeOut(600);
		$(".mobile-nav__toggle").toggleClass("active");
		$(".main__caption, .mobile-nav__toggle").css("opacity", "1");
	}).append("<span>");

	$(".mobile-nav__toggle").click(function() {
		if ($(".mobile-nav__wrap").is(":visible")) {
			$(".main__caption").css("opacity", "1");
			$(".mobile-nav__wrap").fadeOut(600);
		} else {
			$(".main__caption").css("opacity", ".1");
			$(".mobile-nav__wrap").fadeIn(600);
		};
	});

	$(".close-menu").click(function() {
		$(".mobile-nav__wrap").fadeOut(600);
		$(".main__caption").css("opacity", "1");
	});

	//Go-top
	$(document).ready(function(){
	  $('body').append('<a href="#" id="go-top" title="Вверх"></a>');
	});

	$(function() {
	 $.fn.scrollToTop = function() {
	  $(this).hide().removeAttr("href");
	  if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
	  var scrollDiv = $(this);
	  $(window).scroll(function() {
	   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
	   else $(scrollDiv).fadeIn("slow")
	  });
	  $(this).click(function() {
	   $("html, body").animate({scrollTop: 0}, "slow")
	  })
	 }
	});

$(function() {
 $("#go-top").scrollToTop();
});

	//Scroll-to-id
	$(".nav__link, .mobile-nav__link, .f-menu__link").mPageScroll2id();

});
