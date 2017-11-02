<!DOCTYPE html>
<html>
	<head>
		<title>PHP Boolean</title>
	</head>
	<body>
		<h1>PHP Boolean / Austin Van Bockern</h1>

		<h3>Please enter three numbers</h3>
		<form action="boolean.php">
			<input type="number" name="num1"><br>
			<input type="number" name="num2"><br>
			<input type="number" name="num3"><br><br>
			<input type="submit" value="Submit">
		</form>

		<br>

		<?php

			$num1 = $_REQUEST['num1'];
			$num2 = $_REQUEST['num2'];
			$num3 = $_REQUEST['num3'];

			if ($num1 != "" || $num2 != "" || $num3 != "") 
			{
							
				$greaterValue = ($num1 > $num2) ? $num1 : $num2;

				print("$greaterValue is the <strong>greater</strong> value among the following values: $num1, $num2<br><br>");

				$greatestvalue = ($greaterValue > $num3) ? $greaterValue : $num3;

				print("However, $greatestvalue is the <strong>greatest</strong> value among the following values: $num1, $num2, $num3");
			
			} 
			
		?>

		<p>
			Boolean operations in PHP are very similar to most other languages.<br>
			However, PHP combines allows the use of some other conditional operators like "OR" and "AND".
		</p>
	</body>
</html>