import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: ""
  },
  mutations: {},
  actions: {
    setToken: (state, token) => {
      state.token = token;
      localStorage.setItem("mytoken", token);
    },
    logout: state => {
      state.token = null;
      localStorage.removeItem('mytoken');
    }
  },
  modules: {}
});
