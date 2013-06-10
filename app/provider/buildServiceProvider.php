<?php

namespace App\Provider;

use Silex\Application;
use Silex\ServiceProviderInterface;

class BuildServiceProvider implements ServiceProviderInterface
{
    public function register(Application $app)
    {
        $app['build.options'] = array();

        $app['build.class_name'] = 'App\Lib\Build';
        $app['build'] = $app->share(function() use ($app) {
            $app['build.options'] = array_replace(
                array(
                    'builds_directory' => $app['paths']['builds'],
                    'config_directory' => $app['paths']['config'],
                    'static_directory' => './static',
                ), $app['build.options']
            );

            $service = new $app['build.class_name']($app, $app['build.options']);

            return $service;
        });
    }

    public function boot(Application $app)
    {
    }
}