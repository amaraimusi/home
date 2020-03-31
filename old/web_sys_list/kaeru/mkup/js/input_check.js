/**
 *������
 *���̓`�F�b�N���s���B
 *���T�v
 *���l�`�F�b�N��A������ϊ��Ȃǂ��s���B
 *������
 *2009/7/9 �V�K�쐬
 *2009/7/17 ��ʒǉ�
 *
 */


// ���l�̃`�F�b�N
function isNumeric(num){
    if (num.match(/[^0-9]/g)) {
        return false;
    }
    return true;
}

// �����񒆂ɑS�p�������܂܂�Ă���΁A����𔼊p�����ɕϊ�����B
function numFulltohalf(data){	 
	//�S�p�����z��
	var char1 = new Array("�P","�Q","�R","�S","�T","�U","�V","�W","�X","�O");
	//���p�����z��
	var char2 = new Array(1,2,3,4,5,6,7,8,9,0);
	var count;
	//var data = document.form1.text1.value;
	while(data.match(/[�O-�X]/)){     	//���̓f�[�^�ɑS�p����������ꍇ
		for(count = 0; count < char1.length; count++){
				//���̓f�[�^��S�p�������甼�p�����ɒu������
			data = data.replace(char1[count], char2[count]);
		}
	}
	return data;	//���p�����ɒu�������f�[�^��ݒ�
}




//�������͈͒l�`�F�b�N�B
//str�̕�������v1,v2�͈͓̔��ɂ��邩�`�F�b�N����B
function rangeCheck(str,v1,v2){
	var flg=false;
	var v=str.length;
	if (v2 >= v && v >= v1){
		flg=true;
	}
	return flg;
}
//���p�`�F�b�N���s��
function hankakuCheck(str){
	var flg=true;
	var tmp = str.match(/[0-9a-zA-Z\+\-\/\*\,\. ]+/g);
	if (tmp != str) flg=false;
	return flg
}


//�S�p�Ђ炪�Ȃ�S�p�J�^�J�i�ɕϊ�����B
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




//���p�J�^�J�i����S�p�J�^�J�i�ɕϊ�����B
function hankakukanaToZenkakukana(str){

		//�����������ϊ����邽�߂̕ϊ�������z��
	var Kana1 = new Array("��","��","��","��","��","��","��","��","��","��","��","��",
		"��","��","��","��","��","��","��","��","��","��","��","��","��","�","�",
		"�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�",
		"�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�",
		"�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�");
	var Kana2 = new Array("�K","�M","�O","�Q","�S","�U","�W","�Y","�[","�]","�_","�a",
		"�d","�f","�h","�o","�r","�u","�x","�{","�p","�s","�v","�y","�|","��","�@",
		"�B","�D","�F","�H","��","��","��","�b","�[","�A","�C","�E","�G","�I","�J",
		"�L","�N","�P","�R","�T","�V","�X","�Z","�\","�^","�`","�c","�e","�g","�i",
		"�j","�k","�l","�m","�n","�q","�t","�w","�z","�}","�~","��","��","��","��",
		"��","��","��","��","��","��","��","��","��");
	while(str.match(/[�-�]/)){                              //���p�J�^�J�i������ꍇ
		for(var i = 0; i < Kana1.length; i++){
			str = str.replace(Kana1[i], Kana2[i]);  //������u��
		}
	}
	return str;			//�t�H�[���ɏ�������
}

//�J�^�J�i���̓`�F�b�N�i���p�X�y�[�X�A�S�p�X�y�[�X�����e�j
function katakana(msg){
    var i,msg2;
    //���e�͈͂𑝂₷�ꍇ�͂����ŕ����𑝂₹�΂悢
    var checkStr = new String   ("�@ �A�C�E�G�I�J�L�N�P�R�T�V�X�Z�\�^�`�c�e�g�i�j�k�l�m�n�q�t�w�z�}�~�����������������������������K�M�O�Q�S�U�W�Y�[�]�_�a�d�f�h�o�r�u�x�{�p�s�v�y�|�@�B�D�F�H��������");
    //�X�y�[�X����菜��
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
//�J�^�J�i���̓`�F�b�N�i���p�X�y�[�X�A�S�p�X�y�[�X�����e�j
function katakana2(msg){
    var i,msg2;
    //���e�͈͂𑝂₷�ꍇ�͂����ŕ����𑝂₹�΂悢
    var checkStr = new String   ("�@ �A�C�E�G�I�J�L�N�P�R�T�V�X�Z�\�^�`�c�e�g�i�j�k�l�m�n�q�t�w�z�}�~�����������������������������K�M�O�Q�S�U�W�Y�[�]�_�a�d�f�h�o�r�u�x�{�p�s�v�y�|�@�B�D�F�H���������O�P�Q�R�S�T�U�V�W�X0123456789");
    //�X�y�[�X����菜��
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

//�Ђ炪�ȓ��̓`�F�b�N�i���p�X�y�[�X�A�S�p�X�y�[�X�����e�j
function hiragana(msg){
    var i,msg2;
    //���e�͈͂𑝂₷�ꍇ�͂����ŕ����𑝂₹�΂悢
    var checkStr = new String   (" �@�����������������������������������ĂƂȂɂʂ˂̂͂Ђӂւق܂݂ނ߂�������������񂪂����������������������Âłǂ΂тԂׂڂς҂Ղ؂ۂ���������������");
    //�X�y�[�X����菜��
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

//���[���A�h���X�`�F�b�N
function isEmail(param){
    if(param.match("^[0-9A-Za-z._]+@[0-9A-Za-z.]+$")){
        return true;
    }else{
        return false;
    }
}