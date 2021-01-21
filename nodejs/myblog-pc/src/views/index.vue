<template>
  <div class="container">
    <div class="blog-list">
      <div class="blog">
        <h3 class="blog-title">
          <a href="/blog/detail/">22</a>
        </h3>
        <p class="blog-content">33</p>
        <span class="post-time">444</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    getData() {
      this.$http.get("http://localhost:3000/user/list").then((res) => {
          res.data
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