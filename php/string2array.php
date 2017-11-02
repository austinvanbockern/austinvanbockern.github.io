<?php

$str = 'C# Java JavaScript PHP';

print("<strong>String to be split:</strong><br>$str<br><br><strong>String split by spaces:</strong><br>");

$chars = preg_split('/ /', $str);

print_r($chars);

?>