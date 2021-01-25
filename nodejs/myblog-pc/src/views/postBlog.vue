<template>
  <div>
    <h1>发表文章</h1>
    <p>标题：<input type="text" v-model="title" /></p>
    <p>
      内容：<textarea
        name=""
        id=""
        cols="30"
        rows="10"
        v-model="content"
      ></textarea>
    </p>
    <!-- <input type="hidden" value="5"> -->
    <p>
      <button @click="postBlog">发表</button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  created() {},
  methods: {
    postBlog() {
      let loginUser = this.$store.state.loginUser;
      if (loginUser) {
        this.$http
          .post("/blog/post", {
            title: this.title,
            content: this.content,
            userId: loginUser.user_id,
          })
          .then((res) => {
            let { state } = res.data;
            if (state == "success") {
              this.$router.push("/");
            } else {
              alert("发表文章失败!");
            }
          });
      }else{
          alert('你还没登录呢，滚去登录!');
          this.$router.push('/login');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>