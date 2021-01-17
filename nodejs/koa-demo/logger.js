const fs = require("fs");

function log(ctx) {
  //   console.log(ctx.method, ctx.header.host + ctx.url);
  let data =
    ctx.method + " " + ctx.header.host + ctx.url + " " + new Date() + "\n";
  fs.appendFile("log.txt", data, function () {
    console.log("日志已记录...");
  });
}

module.exports = async function (ctx) {
  log(ctx);
};

// module.exports = function () {
//   return async function (ctx) {
//     log(ctx);
//   };
// };
