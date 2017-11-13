<?php
// First array
print("<strong>Array declared with => operator and letter indexes:</strong><br><br>");

$array = array("a" => "orange", "b" => "banana", "c" => "apple", "d" => "kiwi");

print_r($array);


// Second array
print("<br><br><strong>Array declared with automatic index assignment and => operator:</strong><br><br>");

$array = array("value0", "value1", "value2", 10 => "value3", 5 => "value4");

print_r($array);

// Sort second array
sort($array);

print("<br><br><strong>After sort:</strong><br><br>");

print_r($array);

?>