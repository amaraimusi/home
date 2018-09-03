/**
 * トップ画面専用JavaScript
 *
 * @date 2018-5-28 | 2018-6-13
 * @version 1.1
 */

jQuery(() =>{
	//☆マークを点滅させる。
	g_blink01("msgid2");

	//本日日付を表示する。
	todayShow();
	
	// プログラミング歴の算出して表示
	programmingHistory();
})


function todayShow(){
	//本日を取得
	var d=new Date().toLocaleDateString();
	$("#today_").html(d);
}


// プログラミング歴の算出して表示
function programmingHistory(){
	var now = new Date();
	var now_year = now.getFullYear(); //年
	var start_year = 2001;
	
	var his_year = now_year - start_year;
	jQuery('#his_year').html(his_year);
	
}