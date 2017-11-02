<?php

$array = array(1, 5, 9, 20, 60);

print("<strong>Contents of array: </strong>");
print_r($array);

$total = $array[0];

$firstTime = true;

foreach ($array as $item) {

	if ($firstTime) {
		
		$total = $item;

		$firstTime = false;

	}
	else {
	
		$total *= $item;

	}
}

print("<br><br><strong>Result of every item multiplied together using foreach:</strong> " . $total);

?>