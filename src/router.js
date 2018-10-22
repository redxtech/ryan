import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/submit',
      name: 'submit',
      component: () => import(/* webpackChunkName: "submit" */ './views/Submit.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import(/* webpackChunkName: "gallery" */ './views/Gallery.vue')
    }
  ]
})