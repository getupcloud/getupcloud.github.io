<?php

namespace App\Provider;

use Silex\Application;
use Silex\ServiceProviderInterface;

class I18nServiceProvider implements ServiceProviderInterface
{
    public function register(Application $app)
    {
        $app['i18n.options'] = array();
        
        $app['i18n.class_name'] = 'App\Lib\I18n';
        $app['i18n'] = $app->share(function() use ($app) {
            $app['i18n.options'] = array_replace(
                array(
                    'translations_directory' => $app['paths']['i18n'],
                    'config_directory' => $app['paths']['config']
                ), $app['i18n.options']
            );

            $service = new $app['i18n.class_name']($app['i18n.options']);

            return $service;
        });
    }

    public function boot(Application $app)
    {
    }
}