const Koa = require("koa");
const views = require("koa-views");
const path = require("path");
const static = require("koa-static");
const Router = require("@koa/router");

const app = new Koa();
const router = new Router();

// 加载模板引擎
app.use(
  views(path.join(__dirname, "./views"), {
    extension: "ejs",
  })
);

app.use(static(path.join(__dirname, "./public")));

router.get("/", async (ctx) => {
  let title = "hello koa2";
  let message = "hello world!";
  await ctx.render("index", {
    title,
    message,
  });
});

router.get("/todo", async (ctx) => {
    await ctx.render('todo.html');//如果手动指定扩展名，那么直接查找文件，否则默认查找ejs扩展名
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
console.log("[demo] start-quick is starting at port 3000");
