<!DOCTYPE html>
<html>
	<head>
		<title>PHP Functions</title>
	</head>
	<body>
		<h1>PHP Functions / Austin Van Bockern</h1>

		
		<?php

			$string = 'This is my string text.';

			print('String: ' . $string . '<br><br>');

			$stringWithSlashes = addcslashes($string, "s");

			print('String with slashes before the letter s: ' . $stringWithSlashes . '<br><br>');

			$stringReversed = strrev($string);

			print('String reversed: ' . $stringReversed . '<br><br>');

		?>

		<p>
			
		</p>
	</body>
</html>