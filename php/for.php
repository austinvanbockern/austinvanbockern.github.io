<!DOCTYPE html>
<html>
	<head>
		<title>PHP For</title>
	</head>
	<body>
		<h1>PHP For / Austin Van Bockern</h1>

		<h3>Please enter one number</h3>
		<form action="for.php">
			<input type="number" name="num1"><br><br>
			<input type="submit" value="Submit">
		</form>
		
		<br>

		<?php

			$num1 = $_REQUEST['num1'];

			if ($num1 != "") {
				
				for ($i = $num1; $i > 0; $i--) { 
					
					print("$num1<br>");

					$num1 = $num1 * $i;

				}

			}
			
		?>

	</body>
</html>