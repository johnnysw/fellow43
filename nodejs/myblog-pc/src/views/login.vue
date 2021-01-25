<template>
    <div class="container">
        <div class="login-form">
            <h3>用户登录</h3>
            <p>
                用户名：<input type="text" name="username" v-model="username">
            </p>
            <p>
                密码：<input type="password" name="password" v-model="password">
            </p>
            <p>
                <button @click="doLogin" class="btn">登录</button></button>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    doLogin() {
      this.$http
        .post("/user/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
            let {state, token, user} = res.data;
          if (state == "success") {
            //   登录成功
            // 存登录用户信息
            this.$store.commit('storeLoginUser', user);
            // 存储token
            this.$store.dispatch('setToken', token)
            this.$router.push('/');
          } else {
            //   登录失败
            alert('用户名或密码不正确!');
          }
        });
    },
  },
};
</script>

<style scoped>
.login-form {
  width: 650px;
  background: #cccccc;
  margin: 40px auto;
  padding: 20px 0;
  text-align: center;
}
.login-form p {
  padding: 20px 0;
}

.btn {
  width: 70px;
}
</style>