const Koa = require("koa");
const app = new Koa();
let fs = require('fs');

// 我的需求：
// 1. http://localhost || http://localhost/index 加载index.html
// 2. http://localhost/todo 加载todo.html
// 3. http://localhost/xxx 加载404.html
// 那么我们的路由可以设定为：
// 1. "/"
// 2. "/index"
// 3. "/todo"
// 4. "/xxx"

// render: 渲染函数，一般用来加载网页
function render(path) {
    let fileName = "./views" + path + '.vue'; //".views/index.vue"
    return new Promise((resolve, reject)=>{
        fs.readFile(fileName, 'utf-8', function(err, data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    });
}

app.use(async (ctx) => {
    let url = ctx.url;
    let data = "";
    switch(url){
        case '/':
        case '/index':
            data = await render('/index'); // render('/')|render('/index')|render('/todo')|render('/xxx');
            break;
        case '/todo':
            data = await render('/todo');
            break;
        default:
            data = await render('/404');
            break;
    }
    ctx.body = data;
});

app.listen(3000);
console.log("[demo] start-quick is starting at port 3000");
