<?php header("HTTP/1.0 404 Not Found"); ?>
<!DOCTYPE html>
<html>
	<head>
		<title>Not Found</title>
		<meta http-equiv="Content-Type" content="Text/html" ; charset="UTF-8" />
	</head>
	<body>
		<h1>Not Found</h1>
		<p>
			The file <?php echo $_SERVER['PHP_SELF']; ?> does not exist
		</p>
	</body>
</html>
<?php die(); ?>