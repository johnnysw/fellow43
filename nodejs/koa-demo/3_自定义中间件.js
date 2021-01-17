const Koa = require("koa");
const app = new Koa();
let logger = require('./logger');

app.use(  logger  );

app.listen(80);
console.log("[demo] start-quick is starting at port 80");
