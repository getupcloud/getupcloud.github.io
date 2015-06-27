//price.js

(function() {
	'use strict';
	
	$('#price .filters a').on('click' , function(e) {
		var act = $(this).data('activing');
		var dsb = $(this).data('disable');

		$(this).parent().find('.active').removeClass('active');
		$(this).addClass('active');

		$('#price .plans').removeClass(dsb).addClass(act);
	});
	
}());
