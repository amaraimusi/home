/**
 *������
 *���j���[�i�r�Q�[�g(�區�ڂƏ����ځj
 *���T�v
 *�區�ڂ��N���b�N���邱�Ƃɂ�菬���ڂ�\������
 *�����ڂ̓��[�h����ɂ͉B�����
 *������
 *2008/11/21 �V�K�쐬
 *
 *
 */

var AryPart;
var AryPartId;
var AryPartNo;
var HshPartFlg;

//�R���e���c���[�h�C�x���g
window.onload = function(){

	//���p�[�cID��������
	AryPartId=['tropical_fish','reptiles','insect','mammals'];

	//���p�[�c�t���O�ƃp�[�c�̏�����
	HshPartFlg=new Array();
	AryPart=new Array();
	AryPart.length=AryPartId.length;
	for(var i=0;i<AryPartId.length;i++){
		HshPartFlg[AryPartId[i]]= 0 ;//�p�[�c�t���O��OFF�ɂ���B
		
		//�p�[�c���擾���A�p�[�c�I�u�W�F�N�g�ɃZ�b�g����
		var node = document.getElementById(AryPartId[i]);
		AryPart[i]=node;
	}

	allPartHide()//���ׂẴp�[�c���B���B

	//window.alert('TestOK');
}

//���ׂẴp�[�c���B���B
function allPartHide(){
	for(var i=0;i<AryPart.length;i++){	//���ׂẴp�[�c�����A�������J��Ԃ�
		AryPart[i].style.display = "none";	//�p�[�c���B���B
	}
}

//�^�O�̐ؑւ��s��
function smallPartShow(elemId){
	
	//�����ׂẴp�[�c����������B��
	//allPartHide();

		//���Ώۃp�[�c��\������
		//�Ώۃp�[�c���擾����
		targetNode=document.getElementById(elemId);
		if(targetNode.style.display=="none"){
		targetNode.style.display = "block";	//�Ώۃp�[�c��\������
		}else{
			targetNode.style.display = "none";	//�Ώۃp�[�c���B��
		}
		HshPartFlg[elemId]=1;				//�Ώۃp�[�c�t���O��ON�ɂ���B
		
	


}