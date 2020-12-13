<template>
  <div>
    <ul class="tv-list">
      <li class="tv-item" v-for="tv in tvList" :key="tv.id" @click="goDetails(tv.id)">
        <div class="img-box">
          <img :src="'https://images.weserv.nl/?url=' + tv.cover.url" alt="">
        </div>
        <div class="content">
          <h2>{{ tv.title }}</h2>
          <p>{{ tv.info }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tv",
  data() {
    return {
      tvList: [],
      isFinish: true,
      start: 0
    }
  },
  created() {
    this.getData();
  },
  mounted() {
    this.listenScroll()
  },
  methods: {
    getData() {
      if (this.isFinish) {
        this.isFinish = false;
        let baseUrl = 'https://bird.ioliu.cn/v2?url=';
        let tvUrl = 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?os=ios&for_mobile=1&start=' + this.start + '&count=10'
        this.axios.get(baseUrl + tvUrl).then(res => {
          this.tvList = this.tvList.concat(res.data.subject_collection_items);
          this.isFinish = true;
          console.log(res.data.subject_collection_items);
        })
      }

    },
    listenScroll() {
      let htmlDom = document.documentElement;
      let deviceHeigth = htmlDom.clientHeight;
      let fullHeight = 0;
      let scrollTop = 0;
      window.onscroll = () => {
        fullHeight = htmlDom.offsetHeight;
        scrollTop = htmlDom.scrollTop;
        if (fullHeight - 10 < scrollTop + deviceHeigth && this.start < 50 && this.isFinish == true) {
          this.start += 10;
          this.getData();
        }
      }
    },
    goDetails(id){
      this.$router.push('/tvDetails/' + id)
    }
  }
}
</script>

<style scoped lang="scss">
.tv-item {
  display: flex;
  padding: 5px;
  border-bottom: #cccccc solid 1px;

  .img-box {
    flex: 3;

    img {
      width: 100%;
    }
  }

  .content {
    flex: 5;

    h2 {
      font-weight: bolder;
      margin-top: 10px;
    }

    p {
      margin-top: 10px;
    }
  }
}
</style>