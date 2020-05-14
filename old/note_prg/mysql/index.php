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



<ol>
	<li><a href="note.php#sec1-1" >phpMyAdminで日本語をINSERTすると文字化け</a></li>
	<li><a href="note.php#sec1-2" >MySQLにフィールドを追加する方法</a></li>
	<li><a href="note.php#sec1-3" >集計と演算とソートを組みわせる</a></li>
	<li><a href="note.php#sec1-4" >フィールドを削除する方法</a></li>
	<li><a href="note.php#sec1-5" >グループの中の最大値のデータを取得</a></li>
	<li><a href="note.php#sec1-6" >集計値に絞込をかける。～HAVING</a></li>
	<li><a href="note.php#sec1-7" >Null及び空文字の検索</a></li>
	<li><a href="note.php#sec1-8" >WHEREのIF文？</a></li>
	<li><a href="note.php#sec1-9" >リストで比較 ― IN句とNOT IN句の使い方</a></li>
	<li><a href="note2.php#sec2-1" >集計系画面の集計、結合、検索条件、ソートの組み合わせについて</a></li>
	<li><a href="note3.php#sec3-1" >重複を除いたデータ件数  COUNT( DISTINCT XXX )</a></li>
	<li><a href="note3.php#sec3-2" >ページネーションとLIMIT</a></li>
	<li><a href="note3.php#sec3-3" >日付の日の部分で検索</a></li>
	<li><a href="note3.php#sec3-4" >phpMyAdminの認証ぎれ対策</a></li>
	<li><a href="note3.php#sec3-5" >1つのテーブルでツリー構造データを扱う</a></li>
	<li><a href="note3.php#sec3-6" >新規追加と更新を自動判別 | ON DUPLICATE KEY UPDATE</a></li>
	<li><a href="note3.php#sec3-7" >複数行のデータをコンマで連結して1行にまとめる | GROUP_CONCAT</a></li>
	<li><a href="note3.php#sec3-8" >行の作成日時と更新日時を自動化する | DEFAULT CURRENT_TIMESTAMP</a></li>
	<li><a href="note3.php#sec3-9" >他のテーブルのSELECT結果をUPDATEする</a></li>
	<li><a href="note3.php#sec3-10" >月別で集計するSQL</a></li>
	<li><a href="note4.php#sec4-1" >GROUP BY と ORDER BYの組み合わせ</a></li>
	<li><a href="note4.php#sec4-2" >IN句にNULLを含めることはできるか？ | IN(NULL)</a></li>
	<li><a href="note4.php#sec4-3" >月別集計</a></li>
	<li><a href="note4.php#sec4-4" >0埋めによる桁数固定 | lpad</a></li>
	<li><a href="note4.php#sec4-5" >MySQLのパスワード変更（変更によるアクセス拒否対応）</a></li>
	<li><a href="note4.php#sec4-6" >日時フィールドを日付で検索するときの注意点</a></li>
	<li><a href="note4.php#sec4-7" >浮動小数floatのフィールドをWHERE検索する方法</a></li>
	<li><a href="note4.php#sec4-8" >テーブルコピー</a></li>
	<li><a href="note4.php#sec4-8-2" >カラムを指定してテーブルコピー</a></li>
	<li><a href="note4.php#sec4-9" >テーブル一覧を表示</a></li>
	<li><a href="note4.php#sec4-10" >フィールド一覧を表示</a></li>
	<li><a href="note5.php#sec5-1" >データを倍にする</a></li>
	<li><a href="note5.php#sec5-2" >テーブルのサイズを大きくする</a></li>
	<li><a href="note5.php#sec5-3" >パーティション</a></li>
	<li><a href="note5.php#sec5-4" >重複レコードを無視 | INSERT IGNORE</a></li>
	<li><a href="note5.php#sec5-5" >テーブルサイズ取得 | テーブルデータ量情報を取得するSQL</a></li>
	<li><a href="note5.php#sec5-6" >レコードのコピー</a></li>
	<li><a href="note5.php#sec5-7" >SQLに変数名を組み込む | 動的SQL</a></li>
	<li><a href="note5.php#sec5-8" >phpMyAdminで大容量ファイルをインポートできるようにする</a></li>
	<li><a href="note5.php#sec5-9" >最大値のレコードを取得（すべてのフィールドを取得）</a></li>
	<li><a href="note5.php#sec5-10" >idが存在しないテーブルにidと連番を入力する</a></li>
	<li><a href="note6.php#sec6-1" >連番を作る</a></li>
	<li><a href="note6.php#sec6-2" >IDを振りなおす</a></li>
	<li><a href="note6.php#sec6-3" >UPDATEとJOINの組み合わせ</a></li>


</ol>
			
			

			
			
			
			
<div class="yohaku"></div>
<ol class="breadcrumb">
	<li><a href="/">ホーム</a></li>
	<li><a href="/note_prg">プログラミングの覚書目次</a></li>
</ol>
</div><!-- content -->
<div id="footer">(C) kenji uehara 2014/4/24</div>
</body>
</html>