<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta name="google" content="notranslate" />
   	<meta http-equiv="X-UA-Compatible" content="IE=edge">
   	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Hello PHP</title>

</head>
<body>
<div id="header" ><h1>Hello PHP</h1></div>
<div class="container">


	<?php 
		echo "PHP動作中<br>";
		echo "PHPバージョン" . phpversion();
	?>
	
</div><!-- content -->
<div id="footer">(C) example</div>
</body>
</html>