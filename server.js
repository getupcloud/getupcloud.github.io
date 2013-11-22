/**
 * Require app
 */
require('./app')

// Requires
var http = require('http');

/**
 * Create server
 */

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
