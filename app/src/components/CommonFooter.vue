<template>
  <footer :style="{backgroundColor:curMenu.bgColor}">
    <div  v-for="menu in menuList" :key="menu.path" @click="changeMenu(menu)">
      <router-link :to="menu.path"> {{ menu.name }}</router-link>
    </div>
  </footer>
</template>

<script>
import { mapState , mapMutations} from "vuex";

export default {
  name: "CommonHeader",
  data() {
    return {
      menuList: [
        {path: '/', name: '剧集', bgColor: '#ff0000'},
        {path: '/book', name: '书籍', bgColor: '#00ff00'},
        {path: '/music', name: '音乐', bgColor: '#0000ff'},
        {path: '/chat', name: '聊天', bgColor: '#c06600'},
      ]
    }
  },
  computed:{
    ...mapState(['curMenu'])
  },
  methods: {
    ...mapMutations(['setCurMenu']),
    changeMenu(menu) {
      this.setCurMenu(menu)
    }
  },
}
</script>

<style scoped lang="scss">
footer {
  height: 50px;
  width: 100%;
  background: #ff0000;
  color: #ffffff;
  line-height: 50px;
  font-weight: bolder;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;

  a {
    color: #000000;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
</style>