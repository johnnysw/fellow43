const blogModel = require("../models/blogModel");
const model = require("../models/blogModel");

module.exports = {
  async welcome(ctx) {
    // console.log(ctx.state.loginedUser);
    // 查询所有文章数据
    let results = await model.getBlogs();
    let loginUser = ctx.session.loginUser;
    await ctx.render("index", {
      blogs: results,
      user: loginUser,
    });
  },
  async getBlogDetail(ctx) {
    let { blogId } = ctx.params;
    let results = await blogModel.getBlogById(blogId);
    if (results.length > 0) {
      let { blog_id, title, content, post_time } = results[0];
      let blogInfo = {
        blog_id,
        title,
        content,
        post_time,
      };
      blogInfo.comments = [];
      for (let i = 0; i < results.length; i++) {
        let obj = results[i];
        blogInfo.comments.push({
          comm_id: obj.comm_id,
          comm_content: obj.comm_content,
          comm_post_time: obj.comm_post_time,
          username: obj.username
        });
      }
      console.log(blogInfo);

      await ctx.render("blog-detail", {
        blog: blogInfo,
      });
    }else{
      await ctx.render("error", {
        message: '该条文章不存在！'
      });
    }
  },
};
