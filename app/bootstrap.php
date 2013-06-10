<?php require '../vendor/autoload.php'; // Load Composer

use Symfony\Component\Yaml\Yaml;

/*
 * Environments:
 *   development
 *   stage
 *   production
 */
define('ENV', 'development');

/**
 * Start Silex
 *
 */
$app = new Silex\Application();

// Debug
$app['debug'] = (ENV !== 'produciton');

/**
 * Initial Config
 *
 */
$app['path']  = __DIR__;

$app['paths'] = array(
	'config'	=> $app['path'] . '/config',
	'templates'	=> $app['path'] . '/template',
	'i18n'		=> $app['path'] . '/i18n',
	'storage'   => realpath($app['path'] . '/../storage'),
    'builds'    => realpath($app['path'] . '/../builds'),
);

/**
 * URLs
 *
 */
$config = Yaml::parse($app['paths']['config'] . '/config.yml');
$app['url'] = $config['url'];

/**
 * Set i18n
 *
 */
$app->register(new App\Provider\I18nServiceProvider());

/**
 * Start Twig Service
 *
 */
$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path'	   => $app['paths']['templates'],
    'twig.options' => array(
    	'cache' => $app['paths']['storage'] . '/twig.cache',
    	'auto_reload' => true
    ),
));

$app['twig']->addExtension(new Twig_Extensions_Extension_I18n());

/**
 * App Routes
 *
 */
$app->before(function () use ($app) {
    if ($locale = $app['request']->get('locale')) {
        $app['locale'] = $locale;
    }
});

$app->get('/', function() use($app) {
    return $app['twig']->render('index.twig', array('language' => $app['i18n']->getFormatedLocale()));
});

$app->get('/{page}', function($page) use($app) {
    $file = substr($page, 0, -5);

    return $app['twig']->render('terms/' . $file . '.twig', array('language' => $app['i18n']->getFormatedLocale()));
});

$app->get('/build/{version}', function($version) use($app) {
    $app['debug'] = 0;

    $app->register(new App\Provider\BuildServiceProvider());
    $app['build']->make($version);

    return 'Build: ' . $version;
});