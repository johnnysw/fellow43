const router = require("koa-router")();
let jwt = require('jsonwebtoken');
router.prefix("/blog");

router.get(
  "/list",
  async (ctx, next) => {
    if(ctx.header.authorization){
      let token = ctx.header.authorization;
      try {
        // 验证token
        jwt.verify(token, '**my_secret_key$$');
        await next();
      } catch(err) {
        // err
        ctx.status = 401;
        ctx.body = "token不存在或已过期";
      }
    }
    
  },
  async (ctx, next) => {
    let blogs = [
      { blogId: 11, title: "标题11", content: "内容11", postTime: new Date() },
      { blogId: 22, title: "标题22", content: "内容22", postTime: new Date() },
      { blogId: 33, title: "标题33", content: "内容33", postTime: new Date() },
    ];
    ctx.body = {
      blogs,
    };
  }
);

module.exports = router;
