<template>
  <div id="tv">
    <ul>
      <li @click="getDetails(tv.id)" class="tv-item" v-for="tv in tvList" :key="tv.id">
        <div class="img">
          <img :src=" baseImgUrl +  tv.cover.url" alt="">
        </div>
        <div class="content">
          <h3>{{ tv.title }}</h3>
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
      baseImgUrl: 'https://images.weserv.nl/?url=',
      tvList: [],
      start: 0,
      isFinish: true
    }
  },
  created() {
    this.getData();
    this.listenScroll();
  },
  methods: {
    //因为浏览器的同源策略会产生跨域问题（协议，域名，端口号）
    //解决： jsonp ，iframe， cors【让后端给配一下就可以了】, 第三方服务器代理
    getData() {
      if (this.isFinish) {
        this.isFinish = false;
        let baseUrl = 'https://bird.ioliu.cn/v2?url=';
        this.axios.get(baseUrl + `https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?start=${this.start}&count=10`)
            .then(res => {
              // this.tvList = res.data.subject_collection_items;
              this.tvList = [...this.tvList, ...res.data.subject_collection_items];
              this.isFinish = true;
            }).catch(err => {
          console.log(err)
        })
      }
    },
    listenScroll() {
      let htmlDom = document.documentElement;//获取 html 元素
      let fullHeight = 0;//整个页面的高度
      let deviceHeight = htmlDom.clientHeight; // 窗口高度
      let scrollTop = 0;

      window.onscroll = () => {
        scrollTop = htmlDom.scrollTop;
        deviceHeight = htmlDom.clientHeight;
        fullHeight = htmlDom.offsetHeight;
        if (fullHeight - 10 < scrollTop + deviceHeight && this.start < 50 && this.isFinish === true) {
          this.start += 10;
          this.getData();
        }
      }
    },
    getDetails(id){
      this.$router.push('/tvDetails/' + id);
    }
  }
}
</script>

<style lang="scss" scoped>
#tv {
  .tv-item {
    display: flex;
    height: 4rem;
    padding: {
      top: 5px;
      bottom: 5px;
    };
    border-bottom: 1px solid #cccccc;

    .img {
      flex: 3;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .content {
      flex: 5;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h3 {
        font-weight: bolder;
      }

      p {
        margin-top: 20px;
      }
    }
  }
}
</style>