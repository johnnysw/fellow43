const Koa = require("koa");
const Router = require("@koa/router");
var bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

app.use(bodyParser());


router.get("/", (ctx) => {
  ctx.body = "首页...";
});

// 1. "name=lisi&age=23"
// 2. {name: 'lisi', age: 23}
// router.get("/index", (ctx) => {
//     // let query = ctx.querystring;
//     let query = ctx.query;
//     console.log(query);
//     ctx.body = query.name + ', ' + query.age;
// });
// url params
// :name
// router.get("/index/:name/:age", (ctx) => {
//   let params = ctx.params;
//   console.log(params);
//   ctx.body = params.name + ", " + params.age;
// });

router.get("/index", (ctx) => {
  let html = `
    <h1>koa2 request post demo</h1>
    <form method="POST" action="/regist">
      <p>userName</p>
      <input name="userName" /><br/>
      <p>nickName</p>
      <input name="nickName" /><br/>
      <p>email</p>
      <input name="email" /><br/>
      <button type="submit">submit</button>
    </form>
  `;
  ctx.body = html;
});

router.post('/regist', (ctx) => {
    // { userName: 'lisi', nickName: 'lisi', email: 'lisi@163.com' }
    let data = ctx.request.body;
    console.log(data);
    ctx.body = data.userName + ', ' + data.nickName + ', ' + data.email;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
console.log("[demo] start-quick is starting at port 3000");
