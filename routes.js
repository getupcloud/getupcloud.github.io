
/*
 * GET home page.
 */

app.get('/', controllers.main.index);

/*
 * GET technology page (EN).
 */

app.get('/technology', controllers.main.technologies);

/*
 * GET tecnologia page (EN).
 */

app.get('/tecnologia', controllers.main.technologies);

/*
 * GET technology/:technology page (EN).
 */

app.get('/technology/:technology', controllers.main.technologies);

/*
 * GET tecnologia/:technology page (PT).
 */

app.get('/tecnologia/:technology', controllers.main.technologies);