const Koa = require("koa");
const views = require("koa-views");
const path = require("path");

const app = new Koa();

// 加载模板引擎
console.log(__dirname);
app.use(
  views(path.join(__dirname, "./views"), {
    extension: "ejs",
  })
);

app.use(async (ctx) => {
  let title = "hello koa2";
  let message = 'hello world!'
  await ctx.render("index", {
    title,
    message
  });
});

app.listen(3000);
console.log("[demo] start-quick is starting at port 3000");
