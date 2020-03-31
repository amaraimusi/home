<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta name="google" content="notranslate" />
	<title>ワクガンス | CSSの覚書</title>
	<link href="/note_prg/css/jquery-ui.min.css" rel="stylesheet">
	<link href="/note_prg/css/bootstrap.min.css" rel="stylesheet">
	<link href="/note_prg/css/highlight/default.css" rel="stylesheet">
	<link href="/note_prg/css/common2.css" rel="stylesheet">

	<script src="/note_prg/js/jquery-1.11.1.min.js"></script>
	<script src="/note_prg/js/jquery-ui.min.js"></script>
	<script src="/note_prg/js/bootstrap.min.js"></script>
	<script src="/note_prg/js/highlight.pack.js"></script>
	<script src="/note_prg/js/livipage.js"></script>
	<script src="/note_prg/js/ImgCompactK.js"></script>

</head>
<body>	
<div id="header" ><h1>CSSの覚書</h1></div>
<div class="container">












<!-- --------------------------------------------------------------- -->
<div id="sec3-1" class="sec1" >
	<h3>ファイルアップロード要素を画像化する | input type="file" </h3>
	
	labelとfor属性を併用することにより、ファイルアップロード要素(input type="file")のデザインを変更できる。<br>
	ただし、ドラッグ＆ドロップが効かなくなる弱点がある。<br>
	とはいえドラッグ＆ドロップを任意の要素に組み込む方法はある。
	（参考：<a href="/note_prg/JavaScript/note12.php#sec12-7">任意の要素でファイルアップロードができるようにする</a>）<br>
	<br>
	
	<style>
	#sec3-1_a{
		display:block;
		wdith:80px;
		height:40px;
		background: url(img/btn_back.png) left top no-repeat;
		
	}
	</style>
	
	<p>サンプル</p>
	
	<label id="sec3-1_a" for="sec3-1_fu">
		<input type="file" id="sec3-1_fu" style="display:none"/>
	</label>
	<br>
	
	<p>ソースコード</p>
	<pre><code>
	&lt;style&gt;
	#sec3-1_a{
		display:block;
		wdith:80px;
		height:40px;
		background: url(img/btn_back.png) left top no-repeat;
		
	}
	&lt;/style&gt;
	
	&lt;label id="sec3-1_a" for="sec3-1_fu"&gt;
		&lt;input type="file" id="sec3-1_fu" style="display:none"/&gt;
	&lt;/label&gt;
	</code></pre>
	<br>

	<br><time>2017-1-27</time>
</div>
<hr />
<!-- --------------------------------------------------------------- -->







<!-- --------------------------------------------------------------- -->
<div id="sec3-2" class="sec1" >
	<h3>子要素のmargin-topが親要素に適用されてしまう</h3>
	
	検証1：子要素のmargin-topが親要素に適用されてしまうケース。
	<div style="border: solid 1px #a28396;color:white">
		<div style="width:80px;height:80px;background-color:red;">
			<div style="margin-top:20px;background-color:green">子要素</div>
		</div>
	</div>
	<pre>
	&lt;div style="width:80px;height:80px;background-color:red;"&gt;
		&lt;div style="<span class="text-danger">margin-top:20px</span>;background-color:green"&gt;検証1&lt;/div&gt;
	&lt;/div&gt;
	</pre>
	<br><br>
	
	検証2：対策として親要素に「padding-top:1px」を指定する。
	<div style="border: solid 1px #a28396;color:white">
		<div style="padding-top:1px;width:80px;height:80px;background-color:red;">
			<div style="margin-top:20px;background-color:green">子要素</div>
		</div>
	</div>
	<pre>
	&lt;div style="<strong class="text-success">padding-top:1px;</strong>width:80px;height:80px;background-color:red;"&gt;
		&lt;div style="<span class="text-danger">margin-top:20px;</span>background-color:green"&gt;子要素&lt;/div&gt;
	&lt;/div&gt;
	</pre>
	※ padding-top以外にもpadding,borderで対策できる。<br>
	子要素の前に任意文字を入力する方法もある。
	<br><br>
	
	

	<br><time>2017-1-30</time>
</div>
<hr />
<!-- --------------------------------------------------------------- -->







<!-- --------------------------------------------------------------- -->
<div id="sec3-3" class="sec1" >
	<h3>子要素のサイズに合わせる | display:inline-block</h3>
	
	<p>指定なし</p>
	親要素のサイズは、子要素のサイズに合わせず横いっぱいに広がってしまう。<br>
	<br>
	
	<div style="border:solid 5px #de5549">
		<div style="background-color:#97f0c6;width:50px;height:50px"></div>
	</div><br>
	<pre>
	&lt;div style="border:solid 5px #de5549"&gt;
		&lt;div style="background-color:#97f0c6;width:50px;height:50px"&gt;&lt;/div&gt;
	&lt;/div&gt;
	</pre><br>
	<hr>
	
	<p>display:inline-block;</p>
	親要素のサイズは、子要素のサイズに合わせる。<br>
	<br>
	
	<div style="display:inline-block;border:solid 5px #de5549">
		<div style="background-color:#97f0c6;width:50px;height:50px"></div>
	</div>
	<pre>
	&lt;div style="<strong>display:inline-block</strong>;border:solid 5px #de5549"&gt;
		&lt;div style="background-color:#97f0c6;width:50px;height:50px"&gt;&lt;/div&gt;
	&lt;/div&gt;
	</pre>

	<br><time>2017-3-17</time>
</div>
<hr />
<!-- --------------------------------------------------------------- -->







<!-- --------------------------------------------------------------- -->
<div id="sec3-4" class="sec1" >
	<h3>キャンバスや画像下の余白を消す | vertical-align: bottom</h3>
	
	img要素や、canvas要素の下にわずかな余白が生じることがある。
	<img src="img/note3/sec3_4.png"  />
	<br><br>
	
	img要素に「vertical-align:bottom」または「display:block」を指定することにより解決できる。
	<pre>
	&lt;div&gt;
		&lt;img src="img/note3/imori_md.png" style="<strong>vertical-align:bottom;</strong>" /&gt;
	&lt;/div&gt;
	</pre>
	
	<pre>
	&lt;div&gt;
		&lt;img src="img/note3/imori_md.png" style="<strong>display:block;</strong>" /&gt;
	&lt;/div&gt;
	</pre>

	<br><time>2017-3-17</time>
</div>
<hr />
<!-- --------------------------------------------------------------- -->







<!-- --------------------------------------------------------------- -->
<div id="sec3-0" class="sec1" style="display: none">
	<h3>xxx</h3>

	<br><time></time>
</div>
<hr />
<!-- --------------------------------------------------------------- -->












</div><!-- content -->
<div id="footer">(C) kenji uehara 2013/09/03</div>
</body>
</html>