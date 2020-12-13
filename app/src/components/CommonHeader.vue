<template>
  <header :style="{backgroundColor:curMenu.bgColor}">
    <span class="home" @click="goHome">《 首页</span>
    {{ curMenu.name }}
  </header>
</template>

<script>
import {mapState, mapMutations} from "vuex";

export default {
  name: "CommonHeader",
  computed: {
    ...mapState(['curMenu'])
  },
  methods: {
    ...mapMutations(['setCurMenu']),
    goHome() {
      this.$router.push('/');
      this.setCurMenu({
        name: '剧集',
        bgColor: '#ff0000'
      })
    }
  },
}
</script>

<style scoped lang="scss">
header {
  width: 100%;
  height: 50px;
  background: #ff0000;
  color: #ffffff;
  line-height: 50px;
  font-weight: bolder;
  position: fixed;
  top: 0;

  .home {
    //float: left;
    position: absolute;
    left: 0;

  }

}
</style>