import Vue from 'vue'
import Router from 'vue-router'
import registe from '../views/registe'
import login from '../views/login'
import findPassword from '../views/findPassword'
Vue.use(Router)

export default new Router({
  routes: [
      {
        path : '/login',
        name : 'login',
        component : login,

      },
      {
        path : '/registe',
        name : 'registe',
        component : registe,

      },
      {
        path : '/findPassword',
        name : 'findPassword',
        component : findPassword,

      }
  ]
})
