
/*
 * Consolidade Helpers
 */

exports._ = function(msgid) {
	return gettext.gettext(msgid);
}

exports.path = function(directory) {
	return app.get('path') + directory;
}

exports.javascripts = function(script) {
	return '<script src="' + exports.path('javascripts/') + script + '.js"></script>';
}

exports.stylesheets = function(style) {
	return '<link rel="stylesheet" href="' + exports.path("stylesheets/") + style + '.css">';
}