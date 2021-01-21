# myblog-pc

## 开发过程
1. 安装vue-axios和axios: npm install --save axios vue-axios
2. 在main.js中配置vue-axios
    ```
    import axios from 'axios'
    import VueAxios from 'vue-axios'

    Vue.use(VueAxios, axios)
    ```
    [vue-axios手册](https://www.npmjs.com/package/vue-axios)
