<template>
  <div class="container">
    <button @click="goPostBlog">发表文章</button>
    <div class="blog-list">
      <div class="blog" v-for="item in blogList" :key="item.blogId">
        <h3 class="blog-title">
          <!-- <a href="/blog/detail/">{{item.title}}</a> -->
          <router-link :to="{ path: '/blog/detail/' + item.blogId }">{{
            item.title
          }}</router-link>
        </h3>
        <p class="blog-content">{{ item.content }}</p>
        <span class="post-time">{{ item.postTime }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blogList: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http
        .get("/blog/list")
        .then((res) => {
          let { state } = res.data;
          if (state == "auth-fail") {
            alert("请求未授权-then!");
          } else if (state == "success") {
            let { blogs } = res.data;
            this.blogList = blogs;
          }
        });
    },
    goPostBlog(){
      this.$router.push("/blog/post");
    }
  },
};
</script>

<style scoped>
.blog-list {
  width: 815px;
  margin: 20px auto;
}
.blog {
  background: #cccccc;
  padding: 20px;
  margin: 20px 0;
}
.blog-title,
.blog-content,
.post-time {
  margin: 20px 0;
}
</style>