const Koa = require("koa");
// 引入koa-router路由
const Router = require("@koa/router");
// 引入ejs模板引擎
const views = require("koa-views");

const path = require("path");
// 引入koa-static
const staticPath = require('koa-static')

const app = new Koa();
const router = new Router();

// 加载模板引擎
app.use(
  views(path.join(__dirname, "/views"), {
    extension: "ejs",
  })
);

// 配置静态资源目录
app.use(staticPath(
  path.join(__dirname,  "/public")
));

// 首页路由
router.get("/", async (ctx) => {
  await ctx.render("index");
});
// 登录路由
router.get("/login", async (ctx) => {
  await ctx.render("login");
});

app.use(router.routes())
.use(router.allowedMethods());

app.listen(3000);
console.log("start-quick is starting at port 3000");
