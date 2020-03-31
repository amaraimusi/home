<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta name="google" content="notranslate" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>MySQLの覚書</title>
	<link href="/note_prg/css/bootstrap.min.css" rel="stylesheet">
	<link href="/note_prg/css/common2.css" rel="stylesheet">

	<script src="/note_prg/js/jquery-1.11.1.min.js"></script>
	<script src="/note_prg/js/bootstrap.min.js"></script>
	<script src="/note_prg/js/livipage.js"></script>
	<script src="/note_prg/js/ImgCompactK.js"></script>

</head>
<body>
<div id="header" ><h1>MySQLの覚書</h1></div>
<div class="container">













<!-- --------------------------------------------------------------- -->
<div id="sec6-1" class="sec1" >
	<h3>連番を作る</h3>
	
	
	<p>UPDATEで連番に変更する場合</p>
	<pre>
	SET <strong>@i</strong> := 0;
	UPDATE animals SET value1= (@i := @i +1) WHERE animal_type=4;
	</pre>
	animal_type=4で絞り込んだデータのvalue1に連番をセット更新する。連番は1から始まる。<br>
	<br>
	
	<p>SELECTで連番を作る場合</p>
	<pre>
	SET <strong>@a = 0</strong>;
	SELECT id,<strong> @a := @a + 1 AS new_id</strong>, diary_date,diary_note FROM diarys ORDER BY diary_date ASC;	
	</pre>
	diarysテーブルをdiary_dateでソートする。<br>
	ソートした表に対して、連番を新たに振る(new_id)。<br>
	<br>

	<br><time>2016-10-17 | 2017-1-11</time>
</div>
<hr />
<!-- --------------------------------------------------------------- -->





<!-- --------------------------------------------------------------- -->
<div id="sec6-2" class="sec1" >
	<h3>IDを振りなおす</h3>
	
	テーブルのIDを直接、振り直しすることはできない。<br>
	しかし、IDを振りなおしたテーブルのコピーを作ることは可能である。<br>
	<br>
	
	<pre>
	SET <strong>@a = 0</strong>;
	insert into diarys2 SELECT <strong>@a := @a + 1 AS id</strong>, diary_date,diary_note FROM diarys ORDER BY diary_date ASC;		
	</pre>

	<br><time>2016-10-17</time>
</div>
<hr />
<!-- --------------------------------------------------------------- -->









<!-- --------------------------------------------------------------- -->
<div id="sec6-3" class="sec1" >
	<h3>UPDATEとJOINの組み合わせ</h3>
	
	<pre>
	UPDATE animals
	LEFT JOIN foods
	ON animals.food_id = foods.id
	SET animals.animal_name = food.animal_name2
	</pre>

	<br><time>2017-1-11</time>
</div>
<hr />
<!-- --------------------------------------------------------------- -->









<!-- --------------------------------------------------------------- -->
<div id="sec6-0" class="sec1" style="display:none">
	<h3>XXX</h3>

	<br><time></time>
</div>
<hr />
<!-- --------------------------------------------------------------- -->








<ol class="breadcrumb">
	<li><a href="/">ホーム</a></li>
	<li><a href="/note_prg">プログラミングの覚書目次</a></li>
	<li><a href="/note_prg/mysql/">MySQLの覚書目次</a></li>
</ol>
</div><!-- content -->
<div id="footer">(C) kenji uehara 2016-10-17</div>
</body>
</html>