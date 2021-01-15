var http = require("http");
var querystring = require("querystring");

http
  .createServer(function (req, res) {
    // 我们设计两个页面
    // 1. http://localhost:3000/：首页，显示的是用户注册的表单
    // 2. http://localhost:3000/regist：注册成功的回显页面
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    if (req.url == "/") {
      res.write("<h1>用户注册</h1>");
      res.write('<form action="regist" method="post">');
      res.write('     <p>用户名：<input type="text" name="username"></p>');
      res.write('     <p>密码：<input type="password" name="password"></p>');
      res.write('     <p>电话：<input type="text" name="tel"></p>');
      res.write('     <p><button type="submit">注册</button></p>');
      res.write("</form>");
      res.end("");
    } else if (req.url == "/regist") {
      var postData = "";
      req.on("data", function (data) {
        postData += data;
      });

      req.on("end", function () {
        // "username=lisi&password=1234&tel=13030060020"
        // console.log(postData);
        var userInfo = querystring.parse(postData);
        // { username: 'lisi', password: '', tel: '13030060020' }
        // console.log(userInfo);
        console.log("用户名：", userInfo.username);
        console.log("密码：", userInfo.password);
        console.log("电话：", userInfo.tel);
      });
      res.end("");
    }
  })
  .listen(3000);
console.log("HTTP server is listening at port 3000.");
