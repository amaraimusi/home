/**
 *������
 *�J�e�S���\���ؑ�
 *���T�v
 *�區�ڂ��N���b�N���邱�Ƃɂ�菬���ڂ�\������
 *�����ڂ̓��[�h����ɂ͉B�����
 *������
 *2008/11/21 �V�K�쐬
 *2009/7/21 �啝�ȕύX
 *
 */

//�J�e�S�����X�g
var m_categoryList;

//�J�e�S�����X�g�̎擾�ƉB��
window.onload = function(){
	//alert('TEST');
	var categoryA = document.getElementById('category_a');
	
	m_categoryList =categoryA.getElementsByTagName('ul');
	for(var i=0;i<m_categoryList.length;i++){	//���ׂẴp�[�c�����A�������J��Ԃ�
		m_categoryList[i].style.display = "none";	//�p�[�c���B���B
	}
	
}

//�J�e�S�����X�g�̕\���ؑ�
function showChange(elemId){
	
	//�����ׂẴp�[�c����������B��
	for(var i=0;i<m_categoryList.length;i++){	//���ׂẴp�[�c�����A�������J��Ԃ�
		m_categoryList[i].style.display = "none";	//�p�[�c���B���B
	}

	//���Ώۃp�[�c��\������
	//�Ώۃp�[�c���擾����
	targetNode=document.getElementById(elemId);
	targetNode.style.display = "block";	//�Ώۃp�[�c��\������

}