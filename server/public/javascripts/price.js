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


	$('#dedicated-servers-price .dedicated-server-gear').on({
		mouseover: function() {
			$('.dedicated-server-hover').addClass('hide');
		},
		mouseout: function() {
			$('.dedicated-server-hover').removeClass('hide');
		}
	});

	/* Check URL hash and update plans values by region */
	$(window).on('hashchange',function() {
		if (!window.location.hash) return;
		var location = window.location.hash.substring(1);
		$('#price .filters').find("[data-activing='active-" + location + "']").trigger('click');
		history.pushState('', document.title, window.location.pathname);
	}).trigger('hashchange');
	
}());
