// 登录
(function () {
  var oBtnLogin = document.getElementById("btn-login");
  oBtnLogin.onclick = function () {

    //创建一个新的弹层组件
    new Modal({
      width: 800,
      el: 'myModal1'
    });
    

    return false;//阻止浏览器默认行为
  };

  var oBtnRegist = document.getElementById("btn-regist");
  oBtnRegist.onclick = function () {

    new Modal('myModal2', 700, 500);//创建一个新的弹层组件
    

    return false;//阻止浏览器默认行为
  };
})();
