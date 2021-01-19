// 引入koa-router路由
const Router = require("@koa/router");
const router = new Router();
let controller = require('../controllers/blogController');


// 首页路由
router.get("/", controller.welcome);



module.exports = router;
