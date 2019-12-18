import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './http'
Vue.prototype.$http = http // 并发请求
Vue.config.productionTip = false

import { Lazyload } from 'vant';
import './plugins/element.js'
import './plugins/vant.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
