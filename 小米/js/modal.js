var Modal = (function () {
  function extend(target, obj) {
    for (var p in obj) {
      if (typeof obj[p] == "object") {
        target[p] = extend(obj[p].constructor == Array ? [] : {}, obj[p]);
      } else {
        target[p] = obj[p];
      }
    }
    return target;
  }
  // 弹层组件的默认选项
  var settings = {
    width: 600,
    height: 400,
  };

  // 定义一个弹层组件类（构造函数）
  function Modal(options) {
    var that = this;
    // 将options合并到settings中
    settings = extend(settings, options);

    this.myModal = document.getElementById(settings.el);
    this.myModal.onclick = function(){
      that.close();
    };
    this.myModal.style.display = "block";

    //var modalDialog = myModal.getElementsByClassName('modal-dialog')[0];
    var modalDialog = util.first(this.myModal);
    modalDialog.onclick = function(e){
      e.stopPropagation();
    };
    modalDialog.style.width = settings.width + "px";
    modalDialog.style.height = settings.height + "px";

    // myModal.querySelector('.close');
    var btnClose = this.myModal.getElementsByClassName("close")[0];
    btnClose.onclick = function () {
      that.close();
    };

    var btnCancel = this.myModal.getElementsByClassName('cancel')[0];
    btnCancel.onclick = function () {
      that.close();
    };

    var btnOk = this.myModal.getElementsByClassName('ok')[0];
    btnOk.onclick = function () {
     settings.onOk();
    };
  }
  Modal.prototype.close = function(){
    this.myModal.style.display = "none";
  };


  return Modal;
})();
