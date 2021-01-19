// 引入koa-router路由
const Router = require("@koa/router");
const router = new Router();
const db = require('../models/db')



// 首页路由
router.get("/", async (ctx) => {
  // 查询所有文章数据
  let results = await db.query(`SELECT * FROM t_blog`);
  await ctx.render("index", {
    blogs: results,
  });
});
// 登录路由
router.get("/login", async (ctx) => {
  await ctx.render("login");
});

router.post("/login", async (ctx) => {
  // 1. 接收表单数据
  // {username: 'lisi', pasword: '123456'}
  let { username, password } = ctx.request.body;
  // 2. 安全验证
  // 3. 连接数据库
  let results = await db.query("SELECT * FROM t_user where username=? and password=?", [username, password]);
  // 4. 根据查询的结果跳转(或输出)不同的结果页面
  if (results.length > 0) {
    // redirect重定向：它会将页面的地址重新定向到指定的路由
    ctx.redirect("/");
  } else {
    await ctx.render("error", {
      message: "登录失败，用户名或密码不正确",
    });
  }
});

router.get("/regist", async (ctx) => {
  await ctx.render("regist");
});

router.post("/regist", async (ctx) => {
  // 1. 接收表单数据
  let { username, password, nickname } = ctx.request.body;
  // 2. 安全验证
  if (username.trim().length == 0) {
    await ctx.render("error", {
      message: "用户名不能为空!",
    });
  } else {
    // 3. 连接数据库
    let results = await db.query("insert into t_user set ?", { username, password, nickname });
    // 4. 根据查询的结果跳转(或输出)不同的结果页面
    if (results.insertId) {
      //通过判断insertId是不是有正常值，如果有，说明插入成功
      await ctx.render("login");
    } else {
      await ctx.render("error", {
        message: "注册失败!",
      });
    }
  }
});

module.exports = router;
