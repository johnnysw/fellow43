const router = require('koa-router')()

const userController = require('../controllers/userController')


router.get('/', userController.listUsers)

module.exports = router
