import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ApodOfDay from '../views/ApodOfDay'
import CardApod from '../views/CardApod'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/APODofDay',
    name: 'ApodOfDay',
    component : ApodOfDay
  },
  {
    path:'/OneDayAPOD/:date',
    name: 'CardApod',
    component: CardApod
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
