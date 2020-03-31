<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta name="google" content="notranslate" />
   	<meta http-equiv="X-UA-Compatible" content="IE=edge">
   	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>テンプレート</title>
	
	<link href="/note_prg/css/jquery-ui.min.css" rel="stylesheet">
	<link href="/note_prg/css/bootstrap.min.css" rel="stylesheet">
	<link href="/note_prg/css/common2.css" rel="stylesheet">

	<script src="/note_prg/js/jquery-1.11.1.min.js"></script>
	<script src="/note_prg/js/jquery-ui.min.js"></script>
	<script src="/note_prg/js/bootstrap.min.js"></script>
	<script src="/note_prg/js/open_src.js"></script>



</head>
<body>
<div id="header" ><h1>テンプレート</h1></div>
<div class="container">










<h2>デモ</h2>
<img src="real/imori.png" alt="" /><br>

<form action="#" method="post">
	
<?php 
if(!empty($_POST)){
	echo 'いろは';
}
?>
	<br>
	
	<input type="submit" name="submit1" value="TEST1"/>
</form>
<br>









<div class="yohaku"></div>
<ol class="breadcrumb">
	<li><a href="/">ホーム</a></li>
	<li><a href="/sample">サンプルソースコード</a></li>
	<li><a href="/sample/php">PHP ｜ サンプル</a></li>
	<li>テンプレート</li>
</ol>
</div><!-- content -->
<div id="footer">(C) kenji uehara 2016-11-1</div>
</body>
</html>