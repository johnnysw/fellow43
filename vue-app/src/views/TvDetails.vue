<template>
  <div>
    <h1>{{ tvDetails.title }}</h1>
    <p>{{ tvDetails.intro }}</p>
    <img :src="baseImgUrl + tvDetails.cover_url" alt="">
  </div>
</template>

<script>
export default {
  name: "Tvdetails",
  data() {
    return {
      baseImgUrl: 'https://images.weserv.nl/?url=',
      tvDetails: {}
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      let baseUrl = 'https://bird.ioliu.cn/v2?url=';
      this.axios.get(baseUrl + 'https://m.douban.com/rexxar/api/v2/tv/' + this.$route.params.id).then(res => {
        console.log(666)
        this.tvDetails = res.data
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
img{
  width: 100%;
}
</style>