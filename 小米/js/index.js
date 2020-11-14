// 登录
(function () {
  var myModal1;

  var oBtnLogin = document.getElementById("btn-login");
  oBtnLogin.onclick = function () {

    //创建一个新的弹层组件
    myModal1 = new Modal({
      el: 'myModal1',
      width: 800,
      onOk: function(){
        var username = document.getElementById('username');
        var password = document.getElementById('password');
        console.log(username.value, password.value);
      }
    });
    

    return false;//阻止浏览器默认行为
  };

  var oBtnRegist = document.getElementById("btn-regist");
  oBtnRegist.onclick = function () {

    new Modal('myModal2', 700, 500);//创建一个新的弹层组件
    

    return false;//阻止浏览器默认行为
  };

  var btn1 = document.getElementById('btn1');
  btn1.onclick = function(){
    myModal1.close();
  };
})();
