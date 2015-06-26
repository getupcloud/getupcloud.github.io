
// Require
var fs = require('fs');

/*
 * Controller Index
 */

exports.index = function(req, res){
  res.render('index');
};

/*
 * Controller Pricing
 */

exports.pricing = function(req, res){
  res.render('pricing');
};

/*
 * Controller Contact
 */

exports.contact = function(req, res){
  res.render('contact');
};

/*
 * Controller Terms of Use
 */

exports.terms = function(req, res){
  res.render('terms');
};

/*
 * Controller Privacy Policy
 */

exports.privacy = function(req, res){
  res.render('privacy');
};

/*
 * Controller Acceptable use policy
 */

exports.acceptable = function(req, res){
  res.render('acceptable');
};

/*
 * Controller Support policy
 */

exports.support = function(req, res){
  res.render('support');
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
