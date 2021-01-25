const blogModel = require("../models/blogModel");

module.exports = {
  postBlog: async function (ctx, next) {
    let { title, content, userId } = ctx.request.body;
    let results = await blogModel.saveBlog(title, content, userId);
    if (results.insertId > 0) {
      ctx.body = {
        state: "success",
      };
    } else {
      ctx.body = {
        state: "fail",
      };
    }
  },
  listBlog: async (ctx, next) => {
    let results = await blogModel.getBlogs();
    if (results.length > 0) {
      ctx.body = {
        state: "success",
        blogs: results,
      };
    } else {
      ctx.body = {
        state: "fail",
      };
    }
  },
};
