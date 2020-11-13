var Modal = (function () {
  // 定义一个弹层组件类（构造函数）
  function Modal(options) {
    var myModal = document.getElementById(options.el);
    myModal.style.display = "block";

    //var modalDialog = myModal.getElementsByClassName('modal-dialog')[0];
    var modalDialog = util.first(myModal);

    modalDialog.style.width = (options.width ? options.width : 600) + "px";
    modalDialog.style.height = (options.height ? options.height : 400) + "px";
  }

  return Modal;
})();
