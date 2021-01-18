// 引入koa-router路由
const Router = require("@koa/router");
const { reject } = require("any-promise");
const router = new Router();

var mysql = require("mysql");
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "myblog",
});

// 首页路由
router.get("/", async (ctx) => {
  await ctx.render("index");
});
// 登录路由
router.get("/login", async (ctx) => {
  await ctx.render("login");
});

function getUserData(username, password) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        // not connected!
        reject(err);
      } else {
        connection.query(
          //   "SELECT * FROM t_user where username='"+username+"' and password='"+password+"'",
          `SELECT * FROM t_user where username='${username}' and password='${password}'`,
          function (error, results) {
            connection.release(); //释放连接，放回pool中
            if (error) {
              reject(err);
            } else {
              if (results.length > 0) {
                resolve("登录成功!");
              } else {
                resolve("登录失败，用户名或密码不正确");
              }
            }
          }
        );
      }
    });
  });
}
router.post("/login", async (ctx) => {
  // 1. 接收表单数据
  let { username, password } = ctx.request.body;
  // 2. 安全验证
  // 3. 连接数据库
  ctx.body = await getUserData(username, password);
});

module.exports = router;
