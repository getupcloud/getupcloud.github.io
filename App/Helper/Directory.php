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

	static public function delete($directory) {
		if (!file_exists($directory)) return true; 
		if (!is_dir($directory) || is_link($directory)) return unlink($directory);

		foreach (scandir($directory) as $item) {
			if ($item == '.' || $item == '..') continue; 
			
			if (!self::delete($directory . "/" . $item)) { 
				chmod($directory . "/" . $item, 0777);
				if (!self::delete($directory . "/" . $item)) return false; 
			};
		}

		return rmdir($directory); 
	}	
}