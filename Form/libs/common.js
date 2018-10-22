$(document).ready(function() {

	$('#sign-up1').click( function(){
		$('.form__register').css('display', 'block');
		$('.form__pending').css('display', 'none');
	});

	$('#sign-up2').click( function(event){
		event.preventDefault();
		$('.form__register').css('display', 'none');
		$('.form__confirmation').css('display', 'block');
	});

});

