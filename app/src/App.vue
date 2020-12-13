<template>
  <div id="app">
    <common-header/>
    <div id="container">
      <router-view/>
    </div>
    <common-footer/>
  </div>
</template>

<script>
import CommonHeader from './components/CommonHeader.vue';
import CommonFooter from '@/components/CommonFooter.vue';

export default {
  components: {
    CommonHeader,
    CommonFooter
  },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  #container{
    margin-top: 50px;
    margin-bottom: 50px;
  }
}

</style>
