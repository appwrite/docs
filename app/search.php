<?php

function search($string, $dir) {
    $files = glob('views/' . $dir . '/*');
    $results = [];
    foreach ($files as $file) {
        if (is_dir($file)) {
            $results = array_merge($results, search($string, $file));
        } else {
            $content = file_get_contents($file);
            if (strpos($content, $string) !== false) {
                $results[] = $file;
            }
        }
    }
    return $results;
}

$results = search('unique ID', 'docs');

foreach ($results as $result) {
    echo $result . PHP_EOL;
}