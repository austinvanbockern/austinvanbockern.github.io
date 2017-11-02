<?php

$array = array(8000, 5, 100, 20, 60, "Justin", "C#", "1st", "Front9");

// Contents
print("<strong>Contents of array: </strong>");
print_r($array);

// Sorted contents
print("<br><br><strong>Contents of array after asort(): </strong>");
asort($array);
print_r($array);

// Backwards sorted contents
print("<br><br><strong>Contents of array after arsort(): </strong>");
arsort($array);
print_r($array);

?>