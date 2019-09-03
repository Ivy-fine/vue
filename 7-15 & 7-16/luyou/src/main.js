import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import axios from "axios"
import lazyload from "vue-lazyload"
Vue.use(lazyload, {
    preload: 1.3,
    error: 'http://ku.90sjimg.com/element_origin_min_pic/01/37/86/37573c65819a30c.jpg',
    loading: 'http://hbimg.b0.upaiyun.com/98aefafe79d36f431f17dba205b3d4faa3684a2f96c1-qG1kd0_fw658',
    attempt: 1,
})
Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')