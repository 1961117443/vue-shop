import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
// const VueRouterPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(to){
//   return VueRouterPush.call(this,to).catch(err=> console.log(err))
// }

const routes = [
  {
    path: '/',
    name:'_index',
    redirect: '/index',
    component:() => import('../App.vue'),
    meta:{
      showNavbar:false,
      showTabbar:true
    },
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
    path: '/home',
    name: 'home',
    redirect: '/index',
    component: Home 
  },
  {
    path: '/goods/info',
    name: '/goods/info',
    component: () => import('../views/goods/info.vue')
  },
  {
    path: '/goods/list',
    name: '/goods/list',
    component: () => import('../views/goods/list.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/order/index.vue') ,
    children:[
      {
        path: 'list/:id',
        name: '/order/list/:id',
        component: () => import('../views/order/list.vue')
      }
    ]
  },
  {
    path: '/order/detail/:id',
    name: '/order/detail/:id',
    component: () => import('../views/order/detail.vue')
  }
]




const router = new VueRouter({
  //mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
}) 

// 导航守卫
router.beforeEach(async (to, from, next) => {
  console.log(to)
  next()
  //document.title = getTitle(to.meta.title)
  // if (to.path === '/login') {
  //   next()
  // } else {
  //   if (store.getters.token) {
  //     const hasRoles = store.getters.roles.length > 0
  //     if (hasRoles) {
  //       next()
  //     } else {
  //       try {
  //         const { roles } = await store.dispatch('user/_getInfo')
  //         const addRoutes = await store.dispatch(
  //           'permission/getAsyncRoutes',
  //           roles
  //         )
  //         router.addRoutes(addRoutes)

  //         // hack method to ensure that addRoutes is complete
  //         // set the replace: true, so the navigation will not leave a history record
  //         next({ ...to, replace: true })
  //       } catch (error) {
  //         Message.error(error)
  //       }
  //     }
  //   } else {
  //     next({
  //       path: '/login',
  //       query: {
  //         redirect: to.fullPath
  //       }
    //   })
    // }
  })

export default router
