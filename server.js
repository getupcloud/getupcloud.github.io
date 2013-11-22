/**
 * Require app
 */
require('./app')

// Requires
var http = require('http');

// load controllers
controllers = {
	main: require('./controllers/main')
};

// load routes
var routes = require('./routes');

app.use(app.router);

/**
 * Create server
 */

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
