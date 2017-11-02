<!DOCTYPE html>
<html>
	<head>
		<title>PHP Calculate</title>
	</head>
	<body>
		<h1>PHP Calculate / Austin Van Bockern</h1>

		
		<?php

			$num1 = 100;
			$num2 = 1000;

			print("<strong>Num1: $num1<br>Num2: $num2</strong><br><br>");

			print("$num1 + $num2 = " . ($num1 + $num2) . "<br>");
			print("$num1 - $num2 = " . ($num1 - $num2) . "<br>");
			print("$num1 * $num2 = " . ($num1 * $num2) . "<br>");
			print("$num1 / $num2 = " . ($num1 / $num2));
		?>

		<p>
			Calculations in PHP are similar to most other programming languages.<br>
			<i>However</i>, if you are doing a calculation and trying to concatenate the result of that calculation, you must surround the calculation with parenthesis.
		</p>
	</body>
</html>