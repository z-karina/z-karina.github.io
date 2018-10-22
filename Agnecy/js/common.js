$(document).ready(function() {

	$(".menu-links a").mPageScroll2id();
});

(function($){
  $(function() {
    $('.menu-icon').on('click', function() {
      $(this).closest('.nav').toggleClass('nav_state_open');
    });
  });
})(jQuery);	left: 0;



