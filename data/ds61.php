<?php
/**
 * @author Stanislav Vetlovskiy
 * @date 30.01.2016
 */

$rawList = file_get_contents('ds61_items_list');

$list = array();

foreach (explode("\n", $rawList) as $row) {
    list($id, $title) = explode(';', $row);
    if (!array_key_exists($id, $list)) {
        $list[$id] = array();
    }
    $list[$id][] = $title;
}


// json
$formattedList = array();
foreach ($list as $id => $titles) {
    $formattedList[] = array_merge(array($id), $titles);
}
$output = sprintf(
    'var ds61ItemList = JSON.parse(\'%s\');',
     json_encode($formattedList)
);
file_put_contents('ds61_items_list.js', $output);
