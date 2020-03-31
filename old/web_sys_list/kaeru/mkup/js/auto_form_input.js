/**
 *☆名称
 *フォーム自動入力
 *☆概要
 *「Ctrl」を押し続けて「Q」キーを押すと、入力ボックスが表示され、そこにカンマ区切りのデータを入力すると
 *　フォームに自動的にデータが入力される。
 *入力するカンマ区切りのデータには順番があります。input系、select系、textarea系で入力すること。
 *☆使い方
 *このファイルをインクルードするのみ。
 *☆履歴
 *2009/07/27
 *
 *
 */

var ctrlFlg=false;
window.onkeypress =function keypress()
{
	if(String.fromCharCode(event.keyCode)=='q' && this.ctrlFlg==true){
		this.ctrlFlg==false;
		 var dataStr = window.prompt("テストデータを入力して下さい。","");
		
		
		if (dataStr != undefined){
			var aryData = dataStr.split(',');
			var inps=document.getElementsByTagName('input');
			var i;
			var str="";
			for (i=0;i<inps.length;i++){
				inps(i).value=aryData[i];
				str=str + ',' +inps(i).value;
			}
			var nxt=i;
			var inps2=document.getElementsByTagName('select');
			for (i=0;i<inps2.length;i++){
				inps2(i).value=parseInt(aryData[nxt+i]);
				str=str + ',' +inps2(i).value;
				
			}
			nxt=nxt +i;
			var inps3=document.getElementsByTagName('textarea');
			for (i=0;i<inps3.length;i++){
				inps3(i).value=aryData[nxt+i];
				str=str + ',' +inps3(i).value;
				
			}
			alert(str);
		}
	}else{
		
		this.ctrlFlg=false;
	
	}
	if (event.ctrlKey==true){
		this.ctrlFlg=true;
	}

	
	

}