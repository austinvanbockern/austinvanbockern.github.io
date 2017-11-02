<?php

$str = "Drums are like thunder.";

print("<strong>String to be split:</strong> $str<br><br>");

$array = str_split($str);

print("<strong>Array made from string and str_split method:</strong><br>");

print_r($array);

?>