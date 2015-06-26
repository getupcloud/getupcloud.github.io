
/*
 * GET home page (PT).
 */

app.get('/', function(req, res) {
	gettext.textdomain('pt');
	
	controllers.main.index(req, res);
});

/*
 * GET pricing page (PT).
 */

app.get('/preco', function(req, res) {
	gettext.textdomain('pt');
	
	controllers.main.pricing(req, res);
});

/*
 * GET pricing page (EN).
 */

app.get('/pricing', function(req, res) {
	gettext.textdomain('en');
	
	controllers.main.pricing(req, res);
});

/*
 * GET contact page (PT).
 */

app.get('/contato', function(req, res) {
	gettext.textdomain('pt');
	
	controllers.main.contact(req, res);
});

/*
 * GET contact page (EN).
 */

app.get('/contact', function(req, res) {
	gettext.textdomain('en');
	
	controllers.main.contact(req, res);
});

/*
 * GET home page (PT).
 */

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

/*
 * GET terms of use page (EN).
 */

app.get('/terms-of-use', function(req, res) {
	gettext.textdomain('en');
	
	controllers.main.terms(req, res);
});

/*
 * GET terms of use page (PT).
 */

app.get('/termos-de-uso', function(req, res) {
	gettext.textdomain('pt');
	
	controllers.main.terms(req, res);
});

/*
 * GET privacy policy page (EN).
 */

app.get('/privacy-policy', function(req, res) {
	gettext.textdomain('en');
	
	controllers.main.privacy(req, res);
});

/*
 * GET privacy policy page (PT).
 */

app.get('/politica-de-privacidade', function(req, res) {
	gettext.textdomain('pt');
	
	controllers.main.privacy(req, res);
});

/*
 * GET Acceptable use policy page (EN).
 */

app.get('/acceptable-use-policy', function(req, res) {
	gettext.textdomain('en');
	
	controllers.main.acceptable(req, res);
});

/*
 * GET Acceptable use policy page (PT).
 */

app.get('/politica-de-utilizacao-aceitavel', function(req, res) {
	gettext.textdomain('pt');
	
	controllers.main.acceptable(req, res);
});

/*
 * GET Support policy page (EN).
 */

app.get('/support-policy', function(req, res) {
	gettext.textdomain('en');
	
	controllers.main.support(req, res);
});

/*
 * GET Support policy page (PT).
 */

app.get('/politica-de-suporte', function(req, res) {
	gettext.textdomain('pt');
	
	controllers.main.support(req, res);
});