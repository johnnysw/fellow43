<template>
  <div>
    <h1>{{tvDetails.title}}</h1>
      <img :src="'https://images.weserv.nl/?url=' + tvDetails.cover_url" alt="">
  </div>
</template>

<script>
export default {
  name: "TvDetails",
  data() {
    return {
      tvDetails: {}
    }
  },
  created() {
    this.getDetails()
  },
  methods: {
    getDetails() {
      let baseUrl = 'https://bird.ioliu.cn/v2?url=';
      let tvDetailUrl = 'https://m.douban.com/rexxar/api/v2/tv/' + this.$route.params.id + '?ck=&for_mobile=1'
      this.axios.get(baseUrl + tvDetailUrl).then((res => {
        this.tvDetails = res.data
      }))
    }
  },
}
</script>

<style scoped>

</style>