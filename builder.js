/**
 * Require app
 */
require('./app');

// Requires
var fs = require('fs');
var builder = require('./libraries/builder')(app);

/**
 * Config
 */
var base = 'build';

fs.mkdirSync(base);

// EN
fs.mkdirSync(base + '/technology');
fs.mkdirSync(base + '/technology/php');
fs.mkdirSync(base + '/technology/ruby');
fs.mkdirSync(base + '/technology/nodejs');
fs.mkdirSync(base + '/technology/python');
fs.mkdirSync(base + '/technology/java');
fs.mkdirSync(base + '/technology/perl');
fs.mkdirSync(base + '/technology/mysql');
fs.mkdirSync(base + '/technology/postgresql');
fs.mkdirSync(base + '/technology/mongodb');

// PT
fs.mkdirSync(base + '/tecnologia');
fs.mkdirSync(base + '/tecnologia/php');
fs.mkdirSync(base + '/tecnologia/ruby');
fs.mkdirSync(base + '/tecnologia/nodejs');
fs.mkdirSync(base + '/tecnologia/python');
fs.mkdirSync(base + '/tecnologia/java');
fs.mkdirSync(base + '/tecnologia/perl');
fs.mkdirSync(base + '/tecnologia/mysql');
fs.mkdirSync(base + '/tecnologia/postgresql');
fs.mkdirSync(base + '/tecnologia/mongodb');

/**
 *
 */
function build () {

	// Route
	var route = pages.shift();

	// Exit if route not exists
	if (!route) return false;

 	// Set language
 	gettext.textdomain(route.language.slice(0, 2));

 	// Options
	var options = {};

	// Partials
	if (route.partial) {
		var partial = 'views/partials/' + route.partial + 'index.handlebars';
		var technology = fs.readFileSync(__dirname + '/' +  partial, 'utf8');

		options.partials = { technology : technology };
	}

	// Languages URLs
	options.pt_url = route.urls.pt;
	options.en_url = route.urls.en;

	options.language = route.language;
    
    options.description = route.description;
    options.keywords = route.keywords;
    options.title = route.title;

	// Build
	builder.render(route.view, base + route.destination, options, build);
}

// 
build();

