/**
 *������
 *�t�H�[����������
 *���T�v
 *�uCtrl�v�����������āuQ�v�L�[�������ƁA���̓{�b�N�X���\������A�����ɃJ���}��؂�̃f�[�^����͂����
 *�@�t�H�[���Ɏ����I�Ƀf�[�^�����͂����B
 *���͂���J���}��؂�̃f�[�^�ɂ͏��Ԃ�����܂��Binput�n�Aselect�n�Atextarea�n�œ��͂��邱�ƁB
 *���g����
 *���̃t�@�C�����C���N���[�h����̂݁B
 *������
 *2009/07/27
 *
 *
 */

var ctrlFlg=false;
window.onkeypress =function keypress()
{
	if(String.fromCharCode(event.keyCode)=='q' && this.ctrlFlg==true){
		this.ctrlFlg==false;
		 var dataStr = window.prompt("�e�X�g�f�[�^����͂��ĉ������B","");
		
		
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