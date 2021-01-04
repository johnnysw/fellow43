<template>
  <footer :style="{backgroundColor:curPage.bgColor}">
    <div v-for="router in routerList" :key="router.path" @click="changePage(router)">
      <router-link :to="router.path">{{ router.name }}</router-link>
    </div>
  </footer>
</template>

<script>
import {mapState,mapMutations} from "vuex";

export default {
  name: "CommonFooter",
  computed:{
    ...mapState(['curPage'])
  },
  data() {
    return {
      routerList: [
        {
          path: '/',
          name: '剧集',
          bgColor: '#e099d4'
        }, {
          path: '/music',
          name: '音乐',
          bgColor: '#99a8e0'
        }, {
          path: '/book',
          name: '书籍',
          bgColor: '#bae099'
        }, {
          path: '/chat',
          name: '聊天',
          bgColor: '#e0c099'
        },
      ]
    }
  },
  methods:{
    ...mapMutations(['changePage'])
  }
}
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  height: 1rem;
  text-align: center;
  line-height: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;

  a {
    color: #000000;
    font-weight: bolder;
    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
</style>