var m_blink01_val=0;
function g_blink01(id){
	//var msg="現在、開発中のため、仕事受付は一時停止中ですが、ご相談のお問い合わせは受け付けております。";
	var msg="仕事受付停止中";
	//var msg="現在、仕事募集中です。";
	if(m_blink01_val==0){
		document.getElementById(id).innerHTML="<span style='color:#d5302a'>★</span>" + msg;
		m_blink01_val=1;
	}else{
		document.getElementById(id).innerHTML="<span style='color:#e68280'>★</span>"+msg;
		m_blink01_val=0;
	}
	
	setTimeout("g_blink01('"+id+"')",500);
}