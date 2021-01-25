const router = require('koa-router')()
const user = require('../controllers/user');

router.prefix('/user')

router.post('/login', user.login)

// router.get('/list', ...);

module.exports = router
