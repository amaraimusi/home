
var m_show_flg = 0;

/**
 * 開始月、終了月、場所の列を表示切替する。
 * @returns
 */
function changeClms(){
	
	if(m_show_flg == 0){
		m_show_flg = 1;
	}else{
		m_show_flg = 0;
	}
	var tbl = jQuery('#tbl1');
	
	_tblClmShow(tbl,1,m_show_flg);
	_tblClmShow(tbl,2,m_show_flg);
	_tblClmShow(tbl,6,m_show_flg);
	
}

/**
 * テーブルの列表示を切り替える
 * @param object tbl テーブル要素（セレクタ）
 * @param int 列インデックス（一番左は0)
 * @param int show_flg 表示フラグ 0:非表示 , 1:表示（デフォルト）
 */
function _tblClmShow(tbl,clm_index,show_flg){
	
	if(show_flg == null ) show_flg = 1;
	if(!(tbl instanceof jQuery)) tbl = jQuery(tbl);
	if(!tbl[0]) return;
	if(isNaN(clm_index)) return;
	

	var th = tbl.find("thead tr th").eq(clm_index);
	if(show_flg == 1){
		th.show();
	}else{
		th.hide();
	}
	
	jQuery.each(tbl.find("tbody tr"), (i,elm) => {

		var td=$(elm).children();
		if(show_flg == 1){
			td.eq(clm_index).show();
		}else{
			td.eq(clm_index).hide();
		}
	});

}