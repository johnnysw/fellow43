import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import http from './utils/http'

Vue.config.productionTip = false

// Vue.use(VueAxios, axios)

Vue.prototype.$http = http;

let app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default app //这里将vue实例对象导出