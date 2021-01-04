<template>
  <header :style="{backgroundColor:curPage.bgColor}">
    <span class="home" @click="goHome"> &lt;首页</span>
    {{curPage.name}}
  </header>
</template>

<script>
import {mapState,mapMutations} from "vuex";

export default {
  name: "CommonHeader",
  computed:{
    ...mapState(['curPage'])
  },
  methods:{
    ...mapMutations(['changePage']),
    goHome(){
      this.$router.push('/');
     this.changePage({
       name:"剧集",
       bgColor:'#e099d4'
     })
    }
  }
}
</script>

<style lang="scss" scoped>
html{
  font-size: 50px;
}
header {
  width: 100%;
  height:1rem;
  text-align: center;
  line-height: 1rem;
  font-weight: bolder;

  .home {
    //1em = 父元素的字体大小
    //padding-left: 1em;
    //1rem = 根元素的字体大小
    //margin-left: 1rem;
    position: absolute;
    left: 0.2rem;
  }
}
</style>