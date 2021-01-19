const model = require('../models/blogModel')

module.exports = {
  async welcome(ctx) {
    // 查询所有文章数据
    let results = await model.getBlogs();
    let loginUser = ctx.session.loginUser;
    await ctx.render("index", {
      blogs: results,
      user: loginUser
    });
  }
};
