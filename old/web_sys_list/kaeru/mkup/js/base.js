/**
 *☆名称
 *メニューナビゲート(大項目と小項目）
 *☆概要
 *大項目をクリックすることにより小項目を表示する
 *小項目はロード直後には隠される
 *☆履歴
 *2008/11/21 新規作成
 *
 *
 */

var AryPart;
var AryPartId;
var AryPartNo;
var HshPartFlg;

//コンテンツロードイベント
window.onload = function(){

	//■パーツIDを初期化
	AryPartId=['tropical_fish','reptiles','insect','mammals'];

	//■パーツフラグとパーツの初期化
	HshPartFlg=new Array();
	AryPart=new Array();
	AryPart.length=AryPartId.length;
	for(var i=0;i<AryPartId.length;i++){
		HshPartFlg[AryPartId[i]]= 0 ;//パーツフラグをOFFにする。
		
		//パーツを取得し、パーツオブジェクトにセットする
		var node = document.getElementById(AryPartId[i]);
		AryPart[i]=node;
	}

	allPartHide()//すべてのパーツを隠す。

	//window.alert('TestOK');
}

//すべてのパーツを隠す。
function allPartHide(){
	for(var i=0;i<AryPart.length;i++){	//すべてのパーツ数分、処理を繰り返す
		AryPart[i].style.display = "none";	//パーツを隠す。
	}
}

//タグの切替を行う
function smallPartShow(elemId){
	
	//■すべてのパーツをいったん隠す
	//allPartHide();

		//■対象パーツを表示する
		//対象パーツを取得する
		targetNode=document.getElementById(elemId);
		if(targetNode.style.display=="none"){
		targetNode.style.display = "block";	//対象パーツを表示する
		}else{
			targetNode.style.display = "none";	//対象パーツを隠す
		}
		HshPartFlg[elemId]=1;				//対象パーツフラグをONにする。
		
	


}