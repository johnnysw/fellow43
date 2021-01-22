## 开发过程
1. 安装koa-cors中间件，解决跨域问题
    `npm install koa-cors`
    在app.js中配置
    ```
    var cors = require('koa-cors');
    app.use(cors());
    ```
2. 安装jsonwebtoken中间件
    `npm install jsonwebtoken`
    - 使用jwt.sign(payload, secretOrPrivateKey)来生成token
    - 使用下面的代码来验证token
    ```
    try {
        jwt.verify(token, 'wrong-secret');
    } catch(err) {
    // err
    } 
    ```