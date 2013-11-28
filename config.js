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
app.set('language', 'pt');

/**
 * Debug mode
 */
app.set('debug', true);













// # site config
// export BROKER=${BROKER:-https://broker.getupcloud.com}
// export SIGNUP=${SIGNUP:-$BROKER/getup/account/signup/}
// export SITE=${SITE:-http://getupcloud.com/}
// export SUPPORT=${SUPPORT:-https://getup.zendesk.com/home/}
// export DEBUG=0
// export BUILD_ID=${BUILD_ID:-testing-`date +%Y%m%d%H%M%S`}
// export TEXTDOMAINDIR=$PWD/locale
// export TEXTDOMAIN=site
// export GETTEXT_PATH=$PWD/gettext