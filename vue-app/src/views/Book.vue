<template>
  <div id="book">
    <div class="carousel">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in carouselList" :key="item">
          <img :src="baseImgUrl+item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="tab">
      <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
        <el-tab-pane label="虚构类" name="book_fiction"></el-tab-pane>
        <el-tab-pane label="非虚构类" name="book_nonfiction"></el-tab-pane>
        <div class="book-list">
          <ul>
            <li class="book-item" v-for="book in bookList" :key="book.id">
              <div class="img">
                <img :src="baseImgUrl + book.cover.url" alt="">
              </div>
              <div class="desc">
                <h3>{{ book.title }}</h3>
                <p>{{ book.info }}</p>
                <el-rate
                    :value="getRating(book.rating.value)"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}">
                </el-rate>
              </div>
            </li>
          </ul>
        </div>
      </el-tabs>
    </div>
  </div>

</template>

<script>
import { Loading } from 'element-ui';
export default {
  name: "Book",
  data() {
    return {
      baseImgUrl: 'https://images.weserv.nl/?url=',
      baseUrl: 'https://bird.ioliu.cn/v2?url=',
      bookList: [],
      carouselList: [],
      activeName: 'book_fiction',
      loading:false
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.loading = true;

      let options = {
        text:'拼命加载中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      }
      let loadingInstance = Loading.service(options);

      this.axios.get(this.baseUrl + 'https://m.douban.com/rexxar/api/v2/subject_collection/' + this.activeName + '/items?start=0&count=8')
          .then(res => {
            this.bookList = res.data.subject_collection_items;
            this.carouselList = this.bookList.map((item) => {
              return item.cover.url
            })
            this.loading = false;
            loadingInstance.close()
          }).catch((err) => {
        console.log(err)
      })
    },
    getRating(value) {
      value /= 2;//4.25
      value *= 10;//42.5
      value = Math.trunc(value);//42
      value /= 10;
      return value;
    },
    handleClick() {
      this.getData()
    }
  }
}
</script>

<style lang="scss" scoped>
#book {
  .carousel {
    .el-carousel__item img {
      width: 100%;
      height: 100%;
    }
  }

  .book-list {
    .book-item {
      height: 4rem;
      display: flex;
      padding: 0.1rem;
      border-bottom: 1px solid #cccccc;

      .img {
        flex: 3;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .desc {
        flex: 5;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h3 {
          font-weight: bolder;
        }
      }
    }
  }
}
</style>