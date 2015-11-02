$(document).ready(function() {
	$('ul.library').click(function(event){
		$(this).css('background', '#2a6cbe');
		$('.library .menu').css('display', 'block');
		$('.students .menu').css('display', 'none');
		$('ul.students').css('background', 'none');
		event.stopPropagation();
	});
	$('ul.students').click(function(event){
		$(this).css('background', '#2a6cbe');
		$('.students .menu').css('display', 'block');
		$('.library .menu').css('display', 'none');
		$('ul.library').css('background', 'none');
		event.stopPropagation();
	});
	$(document).click(function(){
		$('ul.students').css('background', 'none');
		$('ul.library').css('background', 'none');
		$('.students .menu').css('display', 'none');
		$('.library .menu').css('display', 'none');
	});
});