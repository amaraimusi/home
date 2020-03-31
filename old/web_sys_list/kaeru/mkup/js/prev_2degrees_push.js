/**
 *������
 *2�x�����h�~
 *���T�v
 *���ׂẴ����N����у{�^����2�x������h�~����B
 *������
 *2009/7/17 �V�K�쐬
 *
 */


/// window �� Load �C�x���g���擾����B
window.onload = window_Load;
    
function window_Load() {
  var i;
  
  // �S�����N�̃N���b�N�C�x���g�� submittableObject_Click �Ŏ擾����B
  for (i = 0; i < document.links.length; i ++) {
    var item = document.links[i]
    Object.Aspect.around(item, "onclick", checkLoading);
  }
  
  // �S�{�^���̃N���b�N�C�x���g�� submittableObject_Click �Ŏ擾����B
  for (i = 0; i < document.forms[0].elements.length; i ++) {
    var item = document.forms[0].elements[i]
    if (item.type == "button" ||
      item.type == "submit" ||
      item.type == "reset") {
      Object.Aspect.around(item, "onclick", checkLoading);
      
    }
  }
  
  return true;
}

//2�x�����}�~�A�X�y�N�g
var checkLoading = function(invocation) {
  if (isDocumentLoading()) {
    alert("�������ł��c");
    return false;
  }
  
  return invocation.proceed();
}

//��ʕ`�悪�I��������ǂ���
function isDocumentLoading() {
  return (document.readyState != null &&
          document.readyState != "complete");
}

//�A�X�y�N�g�p
Object.Aspect = {
  _around: function(target, methodName, aspect) {
    var method = target[methodName];
    target[methodName] = function() {
      var invocation = {
        "target" : this,
        "method" : method,
        "methodName" : methodName,
        "arguments" : arguments,
        "proceed" : function() {
          if (!method) {
            return true;
          }
          return method.apply(target, this.arguments);
        }
      };
      return aspect.apply(null, [invocation]);
    };
  },
  around: function(target, methodName, aspect) {
    this._around(target, methodName, aspect);
  }
}