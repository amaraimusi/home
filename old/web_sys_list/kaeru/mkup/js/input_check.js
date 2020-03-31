/**
 *☆名称
 *入力チェックを行う。
 *☆概要
 *数値チェックや、文字列変換などを行う。
 *☆履歴
 *2009/7/9 新規作成
 *2009/7/17 大量追加
 *
 */


// 数値のチェック
function isNumeric(num){
    if (num.match(/[^0-9]/g)) {
        return false;
    }
    return true;
}

// 文字列中に全角数字が含まれていれば、それを半角数字に変換する。
function numFulltohalf(data){	 
	//全角数字配列
	var char1 = new Array("１","２","３","４","５","６","７","８","９","０");
	//半角数字配列
	var char2 = new Array(1,2,3,4,5,6,7,8,9,0);
	var count;
	//var data = document.form1.text1.value;
	while(data.match(/[０-９]/)){     	//入力データに全角数字がある場合
		for(count = 0; count < char1.length; count++){
				//入力データを全角数字から半角数字に置換する
			data = data.replace(char1[count], char2[count]);
		}
	}
	return data;	//半角数字に置換したデータを設定
}




//文字数範囲値チェック。
//strの文字数がv1,v2の範囲内にあるかチェックする。
function rangeCheck(str,v1,v2){
	var flg=false;
	var v=str.length;
	if (v2 >= v && v >= v1){
		flg=true;
	}
	return flg;
}
//半角チェックを行う
function hankakuCheck(str){
	var flg=true;
	var tmp = str.match(/[0-9a-zA-Z\+\-\/\*\,\. ]+/g);
	if (tmp != str) flg=false;
	return flg
}


//全角ひらがなを全角カタカナに変換する。
function hira2kata(src) {
    var str = new String;
    var len = src.length;
    for (var i = 0; i < len; i++) {
        var c = src.charCodeAt(i);
        if (is_hira(c)) { 
            str += String.fromCharCode(c + 96);
        } else {
            str += src.charAt(i);
        } 
    }
    return str;
}
function is_hira(c) { return ((c >= 12353 && c <= 12435) || c == 12445 || c == 12446); }




//半角カタカナから全角カタカナに変換する。
function hankakukanaToZenkakukana(str){

		//検索文字列を変換するための変換文字列配列
	var Kana1 = new Array("ｶﾞ","ｷﾞ","ｸﾞ","ｹﾞ","ｺﾞ","ｻﾞ","ｼﾞ","ｽﾞ","ｾﾞ","ｿﾞ","ﾀﾞ","ﾁﾞ",
		"ﾂﾞ","ﾃﾞ","ﾄﾞ","ﾊﾞ","ﾋﾞ","ﾌﾞ","ﾍﾞ","ﾎﾞ","ﾊﾟ","ﾋﾟ","ﾌﾟ","ﾍﾟ","ﾎﾟ","ｦ","ｧ",
		"ｨ","ｩ","ｪ","ｫ","ｬ","ｭ","ｮ","ｯ","ｰ","ｱ","ｲ","ｳ","ｴ","ｵ","ｶ","ｷ","ｸ","ｹ",
		"ｺ","ｻ","ｼ","ｽ","ｾ","ｿ","ﾀ","ﾁ","ﾂ","ﾃ","ﾄ","ﾅ","ﾆ","ﾇ","ﾈ","ﾉ","ﾊ","ﾋ",
		"ﾌ","ﾍ","ﾎ","ﾏ","ﾐ","ﾑ","ﾒ","ﾓ","ﾔ","ﾕ","ﾖ","ﾗ","ﾘ","ﾙ","ﾚ","ﾛ","ﾜ","ﾝ");
	var Kana2 = new Array("ガ","ギ","グ","ゲ","ゴ","ザ","ジ","ズ","ゼ","ゾ","ダ","ヂ",
		"ヅ","デ","ド","バ","ビ","ブ","ベ","ボ","パ","ピ","プ","ペ","ポ","ヲ","ァ",
		"ィ","ゥ","ェ","ォ","ャ","ュ","ョ","ッ","ー","ア","イ","ウ","エ","オ","カ",
		"キ","ク","ケ","コ","サ","シ","ス","セ","ソ","タ","チ","ツ","テ","ト","ナ",
		"ニ","ヌ","ネ","ノ","ハ","ヒ","フ","ヘ","ホ","マ","ミ","ム","メ","モ","ヤ",
		"ユ","ヨ","ラ","リ","ル","レ","ロ","ワ","ン");
	while(str.match(/[ｦ-ﾝ]/)){                              //半角カタカナがある場合
		for(var i = 0; i < Kana1.length; i++){
			str = str.replace(Kana1[i], Kana2[i]);  //文字列置換
		}
	}
	return str;			//フォームに書きこむ
}

//カタカナ入力チェック（半角スペース、全角スペースも許容）
function katakana(msg){
    var i,msg2;
    //許容範囲を増やす場合はここで文字を増やせばよい
    var checkStr = new String   ("　 アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポァィゥェォャュョヶ");
    //スペースを取り除く
    msg2 = msg.replace(/ /g,"");
    if(msg2.length == 0){
        return false;
    }
    for(i=0;i<msg2.length;i++){
        if(checkStr.indexOf(msg2.charAt(i),0) == -1){
            return false;
        }
    }
    return true;
}
//カタカナ入力チェック（半角スペース、全角スペースも許容）
function katakana2(msg){
    var i,msg2;
    //許容範囲を増やす場合はここで文字を増やせばよい
    var checkStr = new String   ("　 アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポァィゥェォャュョヶ０１２３４５６７８９0123456789");
    //スペースを取り除く
    msg2 = msg.replace(/ /g,"");
    if(msg2.length == 0){
        return false;
    }
    for(i=0;i<msg2.length;i++){
        if(checkStr.indexOf(msg2.charAt(i),0) == -1){
            return false;
        }
    }
    return true;
}

//ひらがな入力チェック（半角スペース、全角スペースも許容）
function hiragana(msg){
    var i,msg2;
    //許容範囲を増やす場合はここで文字を増やせばよい
    var checkStr = new String   (" 　あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽぁぃぅぇぉゃゅょゐゑ");
    //スペースを取り除く
    msg2 = msg.replace(/ /g,"");
    if(msg2.length == 0){
        return false;
    }
    for(i=0;i<msg2.length;i++){
        if(checkStr.indexOf(msg2.charAt(i),0) == -1){
            return false;
        }
    }
    return true;
}

//メールアドレスチェック
function isEmail(param){
    if(param.match("^[0-9A-Za-z._]+@[0-9A-Za-z.]+$")){
        return true;
    }else{
        return false;
    }
}