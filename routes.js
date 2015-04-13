
/*
 * GET home page (PT).
 */

app.get('/', function(req, res) {
	gettext.textdomain('pt');
	
	controllers.main.index(req, res);
});

app.get('/index.html', function(req, res) {
	gettext.textdomain('pt');
	
	controllers.main.index(req, res);
});

/*
 * GET home page (EN).
 */

app.get('/index_en.html', function(req, res) {
	gettext.textdomain('en');
	
	controllers.main.index(req, res);
});

/*
 * GET technology page (EN).
 */

app.get('/technology', function(req, res) {
	gettext.textdomain('en');

	controllers.main.technologies(req, res);
});

/*
 * GET tecnologia page (PT).
 */

app.get('/tecnologia', function(req, res) {
	gettext.textdomain('pt');

	controllers.main.technologies(req, res);
});

/*
 * GET technology/:technology page (EN).
 */

app.get('/technology/:technology', function(req, res) {
	gettext.textdomain('en');
	
	controllers.main.technologies(req, res);
});

/*
 * GET tecnologia/:technology page (PT).
 */

app.get('/tecnologia/:technology', function(req, res) {
	gettext.textdomain('pt');
	
	controllers.main.technologies(req, res);
});