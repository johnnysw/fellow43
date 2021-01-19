const userModel = require('../models/userModel')

module.exports = {
    async listUsers(ctx){
        // 1. 接收数据
        // 2. 验证
        // 3. 连接数据库
        let results = await userModel.getAllUsers();
        // 4. 根据上一步数据库操作的结果，控制提示什么样的信息（或者向哪个页面跳转或重定向）
        if(results.length > 0){ //说明查到结果了
            // render第一参数是要加载（或跳转）的view页面，第二个参数是一个对象，对象中的属性可以传递给页面中使用
            await ctx.render('index.ejs', {
                // xxxx: results //此处xxxx是传递的数据名称
                users: results
            });
        }
    }
};