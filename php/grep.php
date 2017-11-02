<?php

$strArray = array("Austin is my name.",
				  "Austin has always been my name",
				  "My sister's name is Bryanna.",
				  "I am a Computer Programmer.",
				  "My name tag says \"Austin Van Bockern\"");

print("<strong>Array containing 5 different strings:</strong><br>");

print_r($strArray);

print("<br><br><strong>The following values are the strings from that array that contain \"Austin\" (using preg_match):</strong><br>");

$output = "";

// Find strings that contain Austin
foreach ($strArray as $value) {
	
	if (preg_match("/Austin/i", $value)) {
		$output = $output . "$value<br>";
	}

}

print($output);

?>