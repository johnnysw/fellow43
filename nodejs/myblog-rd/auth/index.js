let jwt = require("jsonwebtoken");

let secretKey = "**my_secret_key$$";

module.exports = {
  createToken: (payload) => {
      return jwt.sign(payload, secretKey, {expiresIn: '1h'});
  },
  verifyToken: async (ctx, next) => {
    if (ctx.header.authorization) {
      let token = ctx.header.authorization;
      try {
        // 验证token
        jwt.verify(token, secretKey);
        await next();
      } catch (err) {
        // err
        ctx.status = 401;
        ctx.body = {
          state: "auth-fail",
        };
      }
    }
  },
};
