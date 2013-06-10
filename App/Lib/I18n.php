<?php

namespace App\Lib;

use Symfony\Component\Yaml\Yaml;

class I18n
{

	/*
	 *
	 */
	private $_locale;

	/*
	 *
	 */
	private $_default_locale;

	/*
	 *
	 */
	private $_start_locale;

	/*
	 *
	 */
	private $_codeset;

	/*
	 *
	 */
	private $_translations_directory;

	/*
	 *
	 */
	private $_config;

	/*
	 * 
	 */
	private $_browser_language;

	/*
	 *
	 */
	public function __construct ($options) {
		$this->_config = Yaml::parse($options['config_directory'] . '/i18n.yml');

		$this->setDefaultLocale($this->_config['default']);
		$this->setDomain($this->_config['domain']);
		$this->setCodeset($this->_config['codeset']);

		$this->setTranslationsDirectory($options['translations_directory']);

		$locale = NULL != $this->getBrowserLanguage() ? $this->getBrowserLanguage() : $this->getDefaultLocale();

		$this->setStartLocale($locale);

		$this->update();
	}

	/*
	 *
	 */
	public function update() {
		putenv('LC_ALL='. $this->getLocale());
		setlocale(LC_ALL, $this->getLocale());

		bindtextdomain($this->getDomain(), $this->getTranslationsDirectory() . '/nocache'); // nocache
		bindtextdomain($this->getDomain(), $this->getTranslationsDirectory());

		bind_textdomain_codeset($this->getDomain(), $this->getCodeset());

		textdomain($this->getDomain());		
	}

	/*
	 *
	 */
	public function setTranslationsDirectory($directory) {
		$this->_translations_directory = $directory;
	}

	/*
	 *
	 */
	public function getTranslationsDirectory() {
		return $this->_translations_directory;
	}

	/*
	 *
	 */
	private function setDomain($domain) {
		$this->_domain = $domain;
	}

	/*
	 *
	 */
	public function getDomain() {
		return $this->_domain;
	}

	/*
	 *
	 */
	public function setCodeset($codeset) {
		$this->_codeset = $codeset;
	}

	/*
	 *
	 */
	public function getCodeset() {
		return $this->_codeset;
	}

	/*
	 *
	 */
	public function setLocale($locale) {
		$this->_locale = $locale;
	}

	/*
	 *
	 */
	public function getLocale() {
		return $this->_locale;
	}

	/*
	 *
	 */
	public function getFormatedLocale() {
		return str_replace('_', '-', strToLower($this->getLocale()));
	}

	/*
	 *
	 */
	public function setLocaleToDefault() {
		$this->setLocale($this->getDefaultLocale());
	}

	/*
	 *
	 */
	public function setLocaleToStart() {
		$this->setLocale($this->getStartLocale());
	}

	/*
	 *
	 */
	private function setDefaultLocale($locale) {
		$this->_default_locale = $locale;
	}

	/*
	 *
	 */
	public function getDefaultLocale() {
		return $this->_default_locale;
	}

	/*
	 *
	 */
	private function setStartLocale($locale) {
		$this->_start_locale = $locale;

		$this->setLocale($this->_start_locale);
	}

	/*
	 *
	 */
	public function getStartLocale() {
		return $this->_start_locale;
	}

	/*
	 *
	 */
	private function getBrowserLanguage() {
		return isset($_SERVER) && isset($_SERVER['HTTP_ACCEPT_LANGUAGE'])
			? \Locale::acceptFromHttp($_SERVER['HTTP_ACCEPT_LANGUAGE'])
			: false;
	}
}