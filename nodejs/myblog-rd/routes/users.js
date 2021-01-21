const router = require('koa-router')()
let jwt = require('jsonwebtoken');


router.prefix('/user')

let  secretKey = "**my_secret_key$$";

router.post('/login', function (ctx, next) {
  let {username, password} = ctx.request.body;
  if(username == 'lisi' && password == "123456"){
    // 登录成功
    // 生成token
    let payload = {
      userId: Math.random(),
      username,
    };
    var token = jwt.sign(payload, secretKey, {expiresIn: 120});
    ctx.body = {
      status: "success",
      token
    }
  }else{
    ctx.body = 'fail';
  }
})

// router.get('/list', ...);

module.exports = router
