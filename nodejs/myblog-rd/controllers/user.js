const userModel = require("../models/userModel");
const {createToken} = require('../auth')

module.exports = {
  login: async function (ctx, next) {
    // 1. 接数据
    let { username, password } = ctx.request.body;
    // 2. 验证

    // 3. 连数据库
    let results = await userModel.getByNameAndPwd(username, password);
    // 4. 根据数据库操作的结果，返回相应的信息
    if (results.length > 0) {
      // 登录成功
      // 生成token
      let payload = {
        userId: Math.random(),
        username,
      };
      var token = createToken(payload);
      ctx.body = {
        state: "success",
        token,
        user: results[0]
      };
    } else {
      ctx.body = {
        state: "fail"
      }
    }
  },
};
