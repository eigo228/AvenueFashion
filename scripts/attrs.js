$(document).ready(function() {
	window.onresize = function() {
		if(document.body.clientWidth < 650) {
			$('.lookbook__item').removeAttr('style');
		} else if (document.body.clientWidth > 650) {
			$('.lookbook__item').attr('style', 'padding: 42px 56px 0 0');
		}

	}
})