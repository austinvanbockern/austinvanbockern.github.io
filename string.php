<!DOCTYPE html>
<html>
	<head>
		<title>PHP Strings</title>
	</head>
	<body>
		<h1>PHP Strings / Austin Van Bockern</h1>

		
		<?php

			$strStartH2Tag = '<h2>';
			$strEndH2Tag = '</h2>';
			$string = 'This is my string text.';

			print('Results of $strStartH2Tag . $string . $strEndH2Tag:<br>');

			print($strStartH2Tag . $string . $strEndH2Tag);

		?>

		<p>
			Concatenation uses periods in PHP as opposed to plus signs in most other languages.
		</p>
	</body>
</html>