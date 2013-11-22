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

		'/technology' : { view: 'technology', destination: '/technology/index.html' },

		'/technology/php' : { view: 'technology', destination: '/technology/php/index.html' },
		'/technology/ruby' : { view: 'technology', destination: '/technology/ruby/index.html' },
		'/technology/nodejs' : { view: 'technology', destination: '/technology/nodejs/index.html' },
		'/technology/python' : { view: 'technology', destination: '/technology/python/index.html' },
		'/technology/tomcat' : { view: 'technology', destination: '/technology/tomcat/index.html' },
		'/technology/perl' : { view: 'technology', destination: '/technology/perl/index.html' },
		'/technology/mysql' : { view: 'technology', destination: '/technology/mysql/index.html' },
		'/technology/postgresql' : { view: 'technology', destination: '/technology/postgresql/index.html' },
		'/technology/mongodb' : { view: 'technology', destination: '/technology/mongodb/index.html' },
	},

/*	'pt' : {
		'/' : { view: 'index', destination: '/index.html' }
	 
		'/technology' : '/tecnologia/index.html',

		'/technology/php' : '/tecnologia/php/index.html',
		'/technology/ruby' : '/tecnologia/ruby/index.html',
		'/technology/nodejs' : '/tecnologia/nodejs/index.html',
		'/technology/python' : '/tecnologia/python/index.html',
		'/technology/tomcat' : '/tecnologia/tomcat/index.html',
		'/technology/perl' : '/tecnologia/perl/index.html',
		'/technology/mysql' : '/tecnologia/mysql/index.html',
		'/technology/postgresql' : '/tecnologia/postgresql/index.html',
		'/technology/mongodb' : '/tecnologia/mongodb/index.html',
	}	*/
};

fs.mkdirSync(base);

// -- TESTING
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
 	var paths = tree[language];

 	for (var path in paths) {
 		var route = paths[path];
 		var options = {};

 		builder.render(route.view, base + route.destination, options);
 	}
 }

