
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
  res.render('technology');
};