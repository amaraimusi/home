

/**
 * ★概要
 * 共通メソッドを提供
 * ★履歴
 * 2011/8/4		新規作成
 * 2011/11/09	preタグをdebug出力に追加
 * 2011/12/5	escape_html_tag,sanitaizeTreeData,isArray,replaceAllを追加
 * 2012/08/07	stringLeft,stringRightを追加
 * 2012/08/08	getGETを追加
 */


/**
 * 文字列を出力する。
 * ※HTMLコード中に次のタグを埋め込むこと。<div id='js_test'></div>
 * @param 出力するメッセージ
 */
function debug(msg){
	obj=document.getElementById('js_test');
	obj.innerHTML=obj.innerHTML + '<br>' + '<pre>' + msg + '</pre>';
}

/**
 * 配列の中身を出力する。
 * ※HTMLコード中に次のタグを埋め込むこと。<div id='js_test'></div>
 * @param 出力するメッセージ
 */
function debugArray(ary){
	
	if(ary==null){
		debug('配列はnullです');
	}else{
		msg=ary.join('<br>');
		if (msg==''){
			debug('空白データです');
		}else{
			debug(msg);
		}
	}

}

//データの中身を出力する。データは配列の配列）
function debugData(data){
	
	if(data==null){
		debug('データはnullです');
	}else{
		for (var i=0;i<data.length;i++){
			var ent=data[i];
			if(ent==null){
				debug('エンティティはnull');
			}else{
				msg=ent.join(',');
				debug(msg);
			}
			
		
		}

	}
	
}

//タグ関連をエスケープします。（XSS対策）
function escape_html_tag(string) {
    return string.replace(/[&<>"']/g, function(match) {
         return {
              '&' : '&amp;',
              '<' : ' &lt;',
              '>' : '&gt;',
              '"' : '&quot;',
              "'" : '&#39;'
         }[match];
    });
}

//配列であるかチェックする。
function isArray(array){
  return !(
    !array || 
    (!array.length || array.length == 0) || 
    typeof array !== 'object' || 
    !array.constructor || 
    array.nodeType || 
    array.item 
  );
}

//ツリー構造（多重配列）のデータをまとめて、サニタイズ（XSS用）する。
function sanitaizeTreeData(treeData){
	if(treeData==null){return null;}
	
	if(isArray(treeData)==true){
		for (var i=0;i<treeData.length;i++){
		
			treeData[i]=arguments.callee(treeData[i]);
		}
	}else{
		if(typeof(treeData)=='string'){
			treeData=escape_html_tag(treeData);
			
		}
	}
	
	return treeData;
}


//全ての文字列 s1 を s2 に置き換える  置換対象,検索文字,置換文字
function replaceAll(expression, org, dest){  
    return expression.split(org).join(dest);  
}  

///印文字から左側の文字を切り出す。
function stringLeft(s,mark){
	if (s==null || s==""){
		return s;
	}
	var a=s.indexOf(mark);
	var s2=s.substring(0,a);
	return s2;
}

///印文字から右側の文字を切り出す。
function stringRight(s,mark){
	if (s==null || s==""){
		return s;
	}
	var a=s.lastIndexOf(mark);
	var s2=s.substring(a+mark.length,s.length);
	return s2;

}

//GETパラメータをURLから取得する。
//return パラメータ連想配列（キー　=> 値）
function getGET() 
{ 
    var vars = [], hash; 
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&'); 
    for(var i = 0; i < hashes.length; i++) { 
        hash = hashes[i].split('='); 
        vars.push(hash[0]); 
        vars[hash[0]] = hash[1]; 
    } 
    return vars; 
}

