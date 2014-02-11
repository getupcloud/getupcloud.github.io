
// Require
var fs = require('fs');

/*
 * Controller Index
 */

exports.index = function(req, res){
  res.render('index');
};

/*
 * Controller Technologies
 */

exports.technologies = function(req, res){
  var technology = req.param('technology');
  var partial = 'views/partials/technologies/' + app.get('language') + '/' + (technology ? (technology + '/') : '') + 'index.handlebars';
  var options = {};

  options.partials = {
  	technology: fs.readFileSync(__dirname + '/../' +  partial, 'utf8'),
    
  };

  options.resource = technology ? ('/' + technology) : '';

/*  var route = pages
  options.pt_url = route.urls.pt;
  options.en_url = route.urls.en;
  
  options.language = route.language;
  
  options.description = route.description;
  options.keywords = route.keywords;
  options.title = route.title;*/

  res.render('technology', options);
};