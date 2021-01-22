const router = require('koa-router')()
const {createToken} = require('../auth');

router.prefix('/user')

router.post('/login', function (ctx, next) {
  let {username, password} = ctx.request.body;
  if(username == 'lisi' && password == "123456"){
    // 登录成功
    // 生成token
    let payload = {
      userId: Math.random(),
      username,
    };
    var token = createToken(payload);
    ctx.body = {
      state: "success",
      token
    }
  }else{
    ctx.body = 'fail';
  }
})

// router.get('/list', ...);

module.exports = router
