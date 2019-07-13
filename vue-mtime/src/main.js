import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'

Vue.use(VueRouter)
Vue.config.productionTip = false
// 加载通用样式
import "./stylesheets/main.scss"
// 引入rem.js
import "./modules/rem"
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
