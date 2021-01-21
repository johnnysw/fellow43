<template>
  <div class="container">
    <div class="blog-list">
      <div class="blog" v-for="item in blogList" :key="item.blogId">
        <h3 class="blog-title">
          <a href="/blog/detail/">{{item.title}}</a>
        </h3>
        <p class="blog-content">{{item.content}}</p>
        <span class="post-time">{{item.postTime}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        blogList: []
    };
  },
  created(){
      this.getData();
  },
  methods: {
    getData() {
    this.axios({
        url: "http://localhost:3000/blog/list",
        headers: {
            "Authorization": localStorage.getItem('mytoken')
        }
    }).then((res) => {
          let {blogs} = res.data;
          this.blogList = blogs;
      });
    },
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