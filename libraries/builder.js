/**
 * Module dependencies.
 */

var fs = require('fs');

module.exports = function(app) { 

  return {
    render: function(name, destination, options, callback){
      var opts = {}
        , engines = app.engines
        , view;

      // merge options
      for (var property in options) {
        opts[property] = options[property];
      }

      // view
      view = new (app.get('view'))(name, {
        defaultEngine: app.get('view engine'),
        root: app.get('views'),
        engines: engines
      });

      if (!view.path) {
        var err = new Error('Failed to lookup view "' + name + '"');
        err.view = view;
        return console.log(err);
      }

      // render
      try {
        view.render(opts, function(req, content) {
          fs.writeFileSync(destination, content);

          callback();
        });
      } catch (err) {
        console.log(err);
      }
    }
  }

};