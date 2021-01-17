const Koa = require("koa");
const app = new Koa();

function getData(){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      let data = Math.random();
      if(data){
        resolve(data);
      }else{
        reject('fail...');
      }
    }, 2000);
  });
}

// async function fn(ctx) {
//   var data = await getData();
//   ctx.body = data;
// };

// 异步操作
app.use(async (ctx) => {
  var data = await getData();
  ctx.body = data;
});

app.listen(80);
console.log("[demo] start-quick is starting at port 80");
