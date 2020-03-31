/**
 *☆名称
 *カテゴリ表示切替
 *☆概要
 *大項目をクリックすることにより小項目を表示する
 *小項目はロード直後には隠される
 *☆履歴
 *2008/11/21 新規作成
 *2009/7/21 大幅な変更
 *
 */

//カテゴリリスト
var m_categoryList;

//カテゴリリストの取得と隠蔽
window.onload = function(){
	//alert('TEST');
	var categoryA = document.getElementById('category_a');
	
	m_categoryList =categoryA.getElementsByTagName('ul');
	for(var i=0;i<m_categoryList.length;i++){	//すべてのパーツ数分、処理を繰り返す
		m_categoryList[i].style.display = "none";	//パーツを隠す。
	}
	
}

//カテゴリリストの表示切替
function showChange(elemId){
	
	//■すべてのパーツをいったん隠す
	for(var i=0;i<m_categoryList.length;i++){	//すべてのパーツ数分、処理を繰り返す
		m_categoryList[i].style.display = "none";	//パーツを隠す。
	}

	//■対象パーツを表示する
	//対象パーツを取得する
	targetNode=document.getElementById(elemId);
	targetNode.style.display = "block";	//対象パーツを表示する

}