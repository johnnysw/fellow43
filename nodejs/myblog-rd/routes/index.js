const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  ctx.body = 'hello server get!';
})

router.post('/', async (ctx, next) => {
  ctx.body = 'hello server post!';
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
