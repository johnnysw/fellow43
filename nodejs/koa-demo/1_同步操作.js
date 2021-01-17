const Koa = require("koa");
const app = new Koa();

// app.use: 加载中间件
// let fn = async (ctx) => {
//   ctx.body = "hello koa2";
// };
// let fn = async function(ctx) {
//   ctx.body = "hello koa2";
// };
// 同步操作，不需要加async
app.use((ctx) => {
  ctx.body = "hello koa2";
});

app.listen(80);
console.log("[demo] start-quick is starting at port 80");
