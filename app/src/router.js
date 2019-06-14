import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
   
    {
    path: '/servicios',
      name: 'servicios',
      component: () => import(/* webpackChunkName: "about" */ './views/Servicios.vue')
    }
  ]
})
