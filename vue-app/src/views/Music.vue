<template>
  <div>
    <aplayer :audio="audio" :lrcType="0"/>
    <ul class="music-list">
      <li>
        <span>编号</span>
        <span>歌曲名</span>
        <span>歌手名</span>
      </li>
      <li v-for="(song,index) in musicList" :key="song.id" @click="getSong(song.id)">
        <span>{{ index + 1 }}</span>
        <span>{{ song.name }}</span>
        <span>{{ song.ar[0].name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Music",
  data() {
    return {
      audio: {
        name: '',
        artist: '',
        url: '',
        cover: '', // prettier-ignore
      },
      musicList: []
    };
  },
  computed: {},
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.axios.get('https://bird.ioliu.cn/netease/playlist?id=924680166').then(res => {
        this.musicList = res.data.playlist.tracks;
      }).then(() => {
        this.getSong(this.musicList[0].id)
      }).catch(err => {
        console.log(err)
      })
    },
    getSong(id) {
      this.axios.get('https://bird.ioliu.cn/netease/song?id=' + id).then(res => {
        console.log(res.data.data.ar)
        this.audio = {
          name: res.data.data.name,
          artist: res.data.data.ar[0].name,
          url: res.data.data.mp3.url,
          cover: res.data.data.al.picUrl
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.music-list {
  li {
    display: flex;
    justify-content: space-between;

    span {
      padding: 0.1rem;
    }
  }
}
</style>