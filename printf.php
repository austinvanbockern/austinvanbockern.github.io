<!DOCTYPE html>
<html>
	<head>
		<title>PHP Printf</title>
	</head>
	<body>
		<h1>PHP Printf / Austin Van Bockern</h1>

		
		<?php

			$result = (2 / 3);

			print("<strong>Using print: 2 / 3 =</strong> $result<br><br>");

			print("<strong>Using printf and round to 1 decmial place:</strong> ");
			printf("%.1f", $result);
			print("<br>");

			print("<strong>Using printf and round to 2 decmial places:</strong> ");
			printf("%.2f", $result);
			print("<br>");

			print("<strong>Using printf and round to 3 decmial places:</strong> ");
			printf("%.3f", $result);
			print("<br>");

			print("<strong>Using printf and round to 4 decmial places:</strong> ");
			printf("%.4f", $result);

		?>

		<p>
			The "printf" function in PHP can be used to format output and display output all in one step.
		</p>
	</body>
</html>