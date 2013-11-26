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

var tree = {
	'en' : {
		'/' : { view: 'index', destination: '/index_en.html' },

		'/technology' : { view: 'technology', destination: '/technology/index.html', partial: 'technologies/en/' },

		'/technology/php' : { view: 'technology', destination: '/technology/php/index.html', partial: 'technologies/en/php/' },
		'/technology/ruby' : { view: 'technology', destination: '/technology/ruby/index.html', partial: 'technologies/en/ruby/' },
		'/technology/nodejs' : { view: 'technology', destination: '/technology/nodejs/index.html', partial: 'technologies/en/nodejs/' },
		'/technology/python' : { view: 'technology', destination: '/technology/python/index.html', partial: 'technologies/en/python/' },
		'/technology/tomcat' : { view: 'technology', destination: '/technology/tomcat/index.html', partial: 'technologies/en/tomcat/' },
		'/technology/perl' : { view: 'technology', destination: '/technology/perl/index.html', partial: 'technologies/en/perl/' },
		'/technology/mysql' : { view: 'technology', destination: '/technology/mysql/index.html', partial: 'technologies/en/mysql/' },
		'/technology/postgresql' : { view: 'technology', destination: '/technology/postgresql/index.html', partial: 'technologies/en/postgresql/' },
		'/technology/mongodb' : { view: 'technology', destination: '/technology/mongodb/index.html', partial: 'technologies/en/mongodb/' }
	},

	'pt' : {
		'/' : { view: 'index', destination: '/index.html' },

		'/technology' : { view: 'technology', destination: '/tecnologia/index.html', partial: 'technologies/pt/' },

		'/technology/php' : { view: 'technology', destination: '/tecnologia/php/index.html', partial: 'technologies/pt/php/' },
		'/technology/ruby' : { view: 'technology', destination: '/tecnologia/ruby/index.html', partial: 'technologies/pt/ruby/' },
		'/technology/nodejs' : { view: 'technology', destination: '/tecnologia/nodejs/index.html', partial: 'technologies/pt/nodejs/' },
		'/technology/python' : { view: 'technology', destination: '/tecnologia/python/index.html', partial: 'technologies/pt/python/' },
		'/technology/tomcat' : { view: 'technology', destination: '/tecnologia/tomcat/index.html', partial: 'technologies/pt/tomcat/' },
		'/technology/perl' : { view: 'technology', destination: '/tecnologia/perl/index.html', partial: 'technologies/pt/perl/' },
		'/technology/mysql' : { view: 'technology', destination: '/tecnologia/mysql/index.html', partial: 'technologies/pt/mysql/' },
		'/technology/postgresql' : { view: 'technology', destination: '/tecnologia/postgresql/index.html', partial: 'technologies/pt/postgresql/' },
		'/technology/mongodb' : { view: 'technology', destination: '/tecnologia/mongodb/index.html', partial: 'technologies/pt/mongodb/' }
	}
};

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

 for (var language in tree) {
 	// Paths
 	var paths = tree[language];

 	// Set language
 	gettext.textdomain(language);

 	for (var path in paths) {
 		var route = paths[path];
 		var options = {};

 		if (route.partial) {
 			var partial = 'views/partials/' + route.partial + 'index.handlebars';
 			var technology = fs.readFileSync(__dirname + '/' +  partial, 'utf8');

 			options.partials = { technology : technology };
 		}
		
		options.pt_url = tree.pt[path].destination;
		options.en_url = tree.en[path].destination;

		console.log('route:');
		console.log(route);
	
 		builder.render(route.view, base + route.destination, options);
 	}
 }

