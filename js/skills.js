
jQuery(()=>{
	
	var tbl = jQuery('#tbl1');
	
	// テーブル一覧からデータを取得する
	var data = _getDataFromTbl(tbl);
	
	data = _starRating(data); // 星評価
	
	data = _calcYearCnt(data); // 年数算出
	
	_setDataToTbl(tbl,data); // テーブルへデータをセットする
	
});

/**
 * テーブル一覧からデータを取得する
 * @param jQuery tbl テーブル要素オブジェクト
 * @return object data
 */
function _getDataFromTbl(tbl){
	var data = [];
	
	var trs = tbl.find('tbody tr');
	
	trs.each((i,tr) => {
		tr = jQuery(tr);

		var tds = tr.find('td');
		
		var ent = {};
		ent['skill_name'] = tds.eq(0).html(); // スキル名
		ent['level'] = tds.eq(1).html(); // レベル（経験/知識）
		ent['star'] = ''; // 星評価
		ent['year_cnt'] = tds.eq(2).html(); // 経験年数
		ent['learn_year'] = tds.eq(3).html(); // 習得年
		ent['last_use_year'] = tds.eq(4).html(); // 最終使用年
		ent['past_year_cnt'] = tds.eq(5).html(); // 過去年数
		
		data.push(ent);
		
	});
	
	return data;
}


/**
 * 星評価
 * @param array data
 * @return array 星評価セット後のdata
 */
function _starRating(data){
	
	for(var i in data){
		var ent = data[i];
		var level = ent['level'];
		ent['star'] = _makeStar(level); // レベルから星評価文字列を組み立てる
	}

	return data;
}

/**
 * レベルから星評価文字列を組み立てる
 * @param int level レベル
 * @return string 星評価
 */
function _makeStar(level){
	var star = '';
	for(var i=0;i<10;i++){
		
		if(i==5) star += '<br>';
		if(i < level){
			star += '★';
		}else{
			star += '☆';
		}
	}
	star = "<div class='star'>" + star + "</div>";
	return star;
}



/**
 * 年数算出
 * @param array data
 * @returns 年数算出後のdata
 */
function _calcYearCnt(data){
	
	var date1 = new Date(); 
	var now_y = date1.getFullYear();
	
	for(var i in data){
		var ent = data[i];
		if(ent['past_year_cnt'] == null || ent['past_year_cnt']=='' ){
			var year_cnt = now_y - ent['learn_year'];
			if (year_cnt == 0) year_cnt = 1;
			ent['year_cnt'] = year_cnt + '年';
		}else{
			ent['year_cnt'] = ent['past_year_cnt'] + '年';
		}
		
		// 最終使用年が空なら現在年をセット
		if(ent['last_use_year'] == null || ent['last_use_year']==''){
			ent['last_use_year'] = now_y;
		}
	}
	
	return data;
}


/**
 * テーブルへデータをセットする
 * @param jQuery tbl テーブル要素オブジェクト
 * @param array data
 */
function _setDataToTbl(tbl,data){
	var trs = tbl.find('tbody tr');
	
	trs.each((i,tr) => {
		tr = jQuery(tr);
		var tds = tr.find('td');
		var ent = data[i];
		
		tds.eq(1).html(ent['star']); // レベル（経験/知識）
		tds.eq(2).html(ent['year_cnt']); // レベル（経験/知識）
		tds.eq(4).html(ent['last_use_year']); // 最終使用年
		
	});
}

