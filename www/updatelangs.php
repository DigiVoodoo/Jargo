<?php 
header("content-type: application/json; charset=utf-8");
header("access-control-allow-origin: *");

$test   = array('test' => 'value');
$testVal = "";

$testArray = array();
$testSubArray = array(
        'testAttr1' => 'val1'
    );
$testSubArray2 = array(
        'testAttr1' => 'val1'
    );
$testSubSubArray = array('name' => 'bob',
                         'color' => 'blue'
                        );
array_push($testSubArray, $testSubSubArray);
$testArray['testObj'] = $testSubArray;
$testArray['testObj2'] = $testSubArray2;

$langDir = "Lang";
$langArray = array();
$fileList = array();

if ($langHandle = opendir($langDir)) {
    while (false !== ($langEntry = readdir($langHandle))) {
        $currentLangDir = $langDir . "/" . $langEntry;
        if (is_dir($currentLangDir) && $langEntry != '.' && $langEntry != '..') {
            $currentLang = array();
            if ($currentLangHandle = opendir($currentLangDir)) {
                while (false !== ($catEntry = readdir($currentLangHandle))) {
                    $currentCatFile = $currentLangDir . "/" . $catEntry;
                    if(is_file($currentCatFile) && $catEntry != '.' && $catEntry != '..') {
						$currentCat = file_get_contents($currentCatFile);
						$currentLang[removeFileExtension($catEntry)] = $currentCat;
                    }
                }
            }
            $langArray[$langEntry] = $currentLang;
        }
    }
}

$test['val'] = $testVal;

$json   = json_encode($langArray);


echo "{$_GET['callback']}('$json');";
exit();


function removeFileExtension($fileName) {
	$parts = explode('.', $fileName);
	return $parts[0];
}

function readJSON($fileName) {
	
	

}

?>