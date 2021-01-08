import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curPage:{
      name:'剧集',
      bgColor:'#e099d4'
    }
  },
  mutations: {
    changePage(state,obj){
      state.curPage = obj;
    }
  },
  actions: {
  },
  modules: {
  }
})
