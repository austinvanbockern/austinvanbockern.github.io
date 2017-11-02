<!DOCTYPE html>
<html>
	<head>
		<title>PHP Quotes</title>
	</head>
	<body>
		<h1>PHP Quotes / Austin Van Bockern</h1>

		
		<?php

			$v = 'These are the variable contents.';

			print('<strong>Results of printing $v with no quotes: </strong>' . $v . "<br>"); 
			print('<strong>Results of printing $v with double quotes: </strong>' . "$v" . "<br>");
			print('<strong>Results of printing \$v with double quotes: </strong>' . "\$v" . "<br>");
			print('<strong>Results of printing $v with single quotes: </strong>' . '$v' . "<br>");
			print('<strong>Results of printing \$v with single quotes: </strong>' . '\$v' . "<br>");

		?>

		<p>
			The way I see it, single quotes would be used for an absolute single literal.<Br>
			Double quotes can contain backslashes to delimit special characters and can also print variable contents.
		</p>
	</body>
</html>