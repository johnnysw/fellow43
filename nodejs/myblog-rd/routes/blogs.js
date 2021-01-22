const router = require("koa-router")();
const { verifyToken } = require("../auth");

router.prefix("/blog");

router.get("/list", verifyToken, async (ctx, next) => {
  let blogs = [
    { blogId: 11, title: "标题11", content: "内容11", postTime: new Date() },
    { blogId: 22, title: "标题22", content: "内容22", postTime: new Date() },
    { blogId: 33, title: "标题33", content: "内容33", postTime: new Date() },
  ];
  ctx.body = {
    state: "success",
    blogs,
  };
});

router.get("/detail", verifyToken, async (ctx, next) => {
  
  let blog = {
    blog_id: ctx.query.blogId,
    title: '标题11',
    content: '内容111',
    post_time: new Date()
  };
  
  ctx.body = {
    state: "success",
    blog,
  };
});

module.exports = router;
