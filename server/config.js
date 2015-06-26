/**
 * Set config
 */

/**
 * Port Running
 */
app.set('port', process.env.PORT || 3000);

/**
 * Base path
 */
app.set('path', 	'/');

/**
 * Getup register path
 */
app.set('register', 'https://broker.getupcloud.com/getup/account/signup/');

/**
 * Default language
 */
app.set('language', 'en');

/**
 * Debug mode
 */
app.set('debug', true);