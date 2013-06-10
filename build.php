<?php require 'vendor/autoload.php'; // Load Composer

use App\Command;
use Symfony\Component\Yaml\Yaml;

/*
 * Environments:
 *   development
 *   stage
 *   production
 */
define('ENV', 'production');

/**
 * Start Silex
 *
 */
$app = new Silex\Application();

// Debug
$app['debug'] = false;

/**
 * Initial Config
 *
 */
$app['path']  = __DIR__ . '/app';

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
 * Routes
 */
$app->get('/', function() use($app) {
    $app['debug'] = 0;

    $app->register(new App\Provider\BuildServiceProvider(), array(
    	'build.options' => array(
    		'static_directory' => './public/static'
    	)
    ));
    $app['build']->make('site');

    return 'Build: OK' . "\n";
});

/**
 * Run
 *
 */
$app->run();

