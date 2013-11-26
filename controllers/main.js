
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

  var partials = {
  	technology: fs.readFileSync(__dirname + '/../' +  partial, 'utf8')
  };

  res.render('technology', { partials: partials });
};