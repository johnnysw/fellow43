const Koa = require("koa");
// 引入ejs模板引擎
const views = require("koa-views");

const path = require("path");
// 引入koa-static
const staticPath = require("koa-static");

const bodyParser = require('koa-bodyparser')

const app = new Koa();

// 引入路由模块
const router = require('./routes');

// 使用ctx.body解析中间件
app.use(bodyParser())

// 加载模板引擎
app.use(
  views(path.join(__dirname, "/views"), {
    extension: "ejs",
  })
);

// 配置静态资源目录
app.use(staticPath(path.join(__dirname, "/public")));

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
console.log("start-quick is starting at port 3000");
