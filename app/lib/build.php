<?php

namespace App\Lib;

use App\Helper\Directory;
use Silex\Application;
use Symfony\Component\Yaml\Yaml;

class Build
{
	/*
	 *
	 */
	private $_app;

	/*
	 *
	 */
	private $_build_directory;

	/*
	 *
	 */
	private $_config;

	/*
	 *
	 */
	private $_avaliable_builds = array();

	/*
	 *
	 */
	public function __construct (Application $app, $options) {
		$this->_config = Yaml::parse($options['config_directory'] . '/build.yml');
		$this->_app = $app;

		$this->_avaliable_builds = $this->_config['avaliable_builds'];
		$this->_build_directory = $options['builds_directory'];
	}

	/*
	 *
	 */
	public function initialConfig($build) {
		$this->_build_directory .= '/' . $build;
		$static_directory = $this->_build_directory . '/static';

		if (!is_dir($static_directory)) {
			if (!is_dir($this->_build_directory)) {
				mkdir($this->_build_directory);
			}

			mkdir($static_directory);		
		}

		Directory::copy('./static', $static_directory);
	}

	public function make($version = NULL) {
		if (NULL === $version) $version = microtime();

		$this->initialConfig($version);

		foreach($this->_avaliable_builds as $language => $directory) {

		    if (!empty($directory)) mkdir($this->_build_directory . '/' . $directory);

		    echo 'Language: ' . $language . '<br/>';

		    $this->_app['i18n']->setLocale($language);
		    $this->_app['i18n']->update();

		    $content = $this->_app['twig']->render('index.twig', array('language' => strtolower(str_replace('_', '-', $language))));
		    file_put_contents($this->_build_directory . '/' . $directory . 'index.html', $content);

			echo '<br/>';

			foreach(array('acceptable-use-policy', 'privacy-policy', 'support-policy', 'terms-of-service') as $term) {
				echo 'Terms: ' . $term . '<br/>';

				$content = $this->_app['twig']->render('terms/' . $term . '.twig');
			    file_put_contents($this->_build_directory . '/' . $directory . '/' . _($term) .'.html', $content);			
			}		    

			echo '<br/>';
		}

		echo '<br/>';
	}
}