const Koa = require("koa");
const Router = require("@koa/router");
const views = require("koa-views");
const path = require("path");

const app = new Koa();
const router = new Router();

// 加载模板引擎
app.use(
  views(path.join(__dirname, "./views"), {
    extension: "ejs",
  })
);

var mysql = require("mysql");
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "blog",
// });
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "blog",
});

// function getUsers() {
//   return new Promise((resolve, reject) => {
//     // connection.connect();
//     connection.query("select * from t_user", function (error, results) {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(results);
//       }
//     });
//     // connection.end();
//   });
// }

// function getUser(userId) {
//   return new Promise((resolve, reject) => {
//     // connection.connect();
//     connection.query("select * from t_user where user_id=" + userId, function (error, results) {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(results);
//       }
//     });
//     // connection.end();
//   });
// }

function query(sql) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
        if (error) reject(error); // not connected!
      // Use the connection
      connection.query(sql, function (error, results) {
        // When done with the connection, release it.
        connection.release();
        // Handle error after the release.
        if (error) {
          reject(error);
        } else {
            
          resolve(results);
        }
        // Don't use the connection here, it has been returned to the pool.
      });
    });
  });
}

router.get("/", async (ctx) => {
  let results = await query("select * from t_user");
  await ctx.render("users", {
    users: results,
  });
});

router.get("/userDetail", async (ctx) => {
  var param = ctx.query;
  let result = await query(
    "select * from t_user where user_id=" + param.userId
  );

  await ctx.render("user-detail", {
    user: result[0],
  });
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
console.log("[demo] start-quick is starting at port 3000");
