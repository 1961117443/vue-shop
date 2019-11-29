import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/index',
    component: Home,
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/home/index.vue')
      },
      {
        path: '/cateory',
        name: 'cateory',
        component: () => import('../views/goods/index.vue')
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('../views/cart/index.vue')
      },
      {
        path: '/member',
        name: 'member',
        component: () => import('../views/user/index.vue')
      }
    ]
  },
  {
    path: '/goods/info',
    name: '/goods/info',
    component: () => import('../views/goods/goodsInfo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
