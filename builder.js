/**
 * Require app
 */
require('./app')

// Requires
var fs = require('fs');
var builder = require('./libraries/builder')(app);

/**
 * Config
 */
var base = 'build';

/**
 * Files tree
 */

var tree = [
	//EN
	{ language: 'en', route: '/',                      view: 'index',      destination: '/index_en.html',                                                            urls: { en: '/index_en.html',         pt: '/' } },
	{ language: 'en', route: '/technology',            view: 'technology', destination: '/technology/index.html',            partial: 'technologies/en/',            urls: { en: '/technology',            pt: '/tecnologia' } },
	{ language: 'en', route: '/technology/php',        view: 'technology', destination: '/technology/php/index.html',        partial: 'technologies/en/php/',        urls: { en: '/technology/php',        pt: '/tecnologia/php' } },
	{ language: 'en', route: '/technology/ruby',       view: 'technology', destination: '/technology/ruby/index.html',       partial: 'technologies/en/ruby/',       urls: { en: '/technology/ruby',       pt: '/tecnologia/ruby' } },
	{ language: 'en', route: '/technology/nodejs',     view: 'technology', destination: '/technology/nodejs/index.html',     partial: 'technologies/en/nodejs/',     urls: { en: '/technology/nodejs',     pt: '/tecnologia/nodejs' } },
	{ language: 'en', route: '/technology/python',     view: 'technology', destination: '/technology/python/index.html',     partial: 'technologies/en/python/',     urls: { en: '/technology/python',     pt: '/tecnologia/python' } },
	{ language: 'en', route: '/technology/tomcat',     view: 'technology', destination: '/technology/tomcat/index.html',     partial: 'technologies/en/tomcat/',     urls: { en: '/technology/tomcat',     pt: '/tecnologia/tomcat' } },
	{ language: 'en', route: '/technology/perl',       view: 'technology', destination: '/technology/perl/index.html',       partial: 'technologies/en/perl/',       urls: { en: '/technology/perl',       pt: '/tecnologia/perl' } },
	{ language: 'en', route: '/technology/mysql',      view: 'technology', destination: '/technology/mysql/index.html',      partial: 'technologies/en/mysql/',      urls: { en: '/technology/mysql',      pt: '/tecnologia/mysql' } },
	{ language: 'en', route: '/technology/postgresql', view: 'technology', destination: '/technology/postgresql/index.html', partial: 'technologies/en/postgresql/', urls: { en: '/technology/postgresql', pt: '/tecnologia/postgresql' } },
	{ language: 'en', route: '/technology/mongodb',    view: 'technology', destination: '/technology/mongodb/index.html',    partial: 'technologies/en/mongodb/',    urls: { en: '/technology/mongodb',    pt: '/tecnologia/mongodb' } },
	//PT
	{ language: 'pt', route: '/',                      view: 'index',      destination: '/index.html',                                                               urls: { en: '/index_en.html',         pt: '/' } },
	{ language: 'pt', route: '/technology',            view: 'technology', destination: '/tecnologia/index.html',            partial: 'technologies/pt/',            urls: { en: '/technology',            pt: '/tecnologia' } },
	{ language: 'pt', route: '/technology/php',        view: 'technology', destination: '/tecnologia/php/index.html',        partial: 'technologies/pt/php/',        urls: { en: '/technology/php',        pt: '/tecnologia/php' } },
	{ language: 'pt', route: '/technology/ruby',       view: 'technology', destination: '/tecnologia/ruby/index.html',       partial: 'technologies/pt/ruby/',       urls: { en: '/technology/ruby',       pt: '/tecnologia/ruby' } },
	{ language: 'pt', route: '/technology/nodejs',     view: 'technology', destination: '/tecnologia/nodejs/index.html',     partial: 'technologies/pt/nodejs/',     urls: { en: '/technology/nodejs',     pt: '/tecnologia/nodejs' } },
	{ language: 'pt', route: '/technology/python',     view: 'technology', destination: '/tecnologia/python/index.html',     partial: 'technologies/pt/python/',     urls: { en: '/technology/python',     pt: '/tecnologia/python' } },
	{ language: 'pt', route: '/technology/tomcat',     view: 'technology', destination: '/tecnologia/tomcat/index.html',     partial: 'technologies/pt/tomcat/',     urls: { en: '/technology/tomcat',     pt: '/tecnologia/tomcat' } },
	{ language: 'pt', route: '/technology/perl',       view: 'technology', destination: '/tecnologia/perl/index.html',       partial: 'technologies/pt/perl/',       urls: { en: '/technology/perl',       pt: '/tecnologia/perl' } },
	{ language: 'pt', route: '/technology/mysql',      view: 'technology', destination: '/tecnologia/mysql/index.html',      partial: 'technologies/pt/mysql/',      urls: { en: '/technology/mysql',      pt: '/tecnologia/mysql' } },
	{ language: 'pt', route: '/technology/postgresql', view: 'technology', destination: '/tecnologia/postgresql/index.html', partial: 'technologies/pt/postgresql/', urls: { en: '/technology/postgresql', pt: '/tecnologia/postgresql' } },
	{ language: 'pt', route: '/technology/mongodb',    view: 'technology', destination: '/tecnologia/mongodb/index.html',    partial: 'technologies/pt/mongodb/',    urls: { en: '/technology/mongodb',    pt: '/tecnologia/mongodb' } },
];

fs.mkdirSync(base);

// EN
fs.mkdirSync(base + '/technology');
fs.mkdirSync(base + '/technology/php');
fs.mkdirSync(base + '/technology/ruby');
fs.mkdirSync(base + '/technology/nodejs');
fs.mkdirSync(base + '/technology/python');
fs.mkdirSync(base + '/technology/tomcat');
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
fs.mkdirSync(base + '/tecnologia/tomcat');
fs.mkdirSync(base + '/tecnologia/perl');
fs.mkdirSync(base + '/tecnologia/mysql');
fs.mkdirSync(base + '/tecnologia/postgresql');
fs.mkdirSync(base + '/tecnologia/mongodb');

/**
 *
 */
function build () {

	// Route
	var route = tree.shift();

	// Exit if route not exists
	if (!route) return false;

 	// Set language
 	gettext.textdomain(route.language);

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

	// Build
	builder.render(route.view, base + route.destination, options, build);
}

// 
build();

