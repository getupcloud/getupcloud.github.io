<?php

namespace App\Helper;

class Directory {

	static public function copy($source, $destination) {
		$ignored_files = array('.', '..');
		$diretory = opendir($source);

		if (!is_dir($destination)) {
			mkdir($destination);
		}

		while(FALSE !== ($file = readdir($diretory))) { 
			if (in_array($file, $ignored_files)) continue;

			$sourceFile = $source . '/' . $file;
			$destinationFile = $destination . '/' . $file;

			if (is_dir($sourceFile)) {
				self::copy($sourceFile, $destinationFile);
			}  else { 
				copy($sourceFile, $destinationFile);
			} 
		}

		closedir($diretory); 
	}
	
}