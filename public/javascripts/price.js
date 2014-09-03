//price.js

(function() {
	'use strict';
	$('.region').change(function(e) {
		var region = e.target.id;
		$('.price:not(.' + region + ')').hide();
		$('.price.' + region).show();
	});

	$(U.language == 'en-us' ? '#region-us' : '#region-br').click();
}());
