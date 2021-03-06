
import Home from '../views/Home.vue'
const routes = [
    {
      path: '/',
      name:'_index',
      redirect: '/index',
      component:() => import('../App.vue'),
      children: [
        {
          path: '/index',
          name: 'index',
          meta:{
            showNavbar:false,
            showTabbar:true 
          },
          component: () => import('../views/home/index.vue')
        },
        {
          path: '/cateory',
          name: 'cateory',
          meta:{
            showNavbar:false,
            showTabbar:true  
          },
          component: () => import('../views/goods/index.vue')
        },
        {
          path: '/cart',
          name: 'cart',
          meta:{
            showNavbar:false ,
            showTabbar:true 
          },
          component: () => import('../views/cart/index.vue')
        },
        {
          path: '/member',
          name: 'member',
          meta:{
            showNavbar:false ,
            showTabbar:true 
          },
          component: () => import('../views/user/index.vue')
        }
      ]
    }, 
    {
      path: '/goods/info',
      name: '/goods/info',
      meta:{
        showNavbar:true,
        showTabbar:false,
        title:"详情" 
      },
      component: () => import('../views/goods/info.vue')
    },
    {
      path: '/goods/list',
      name: '/goods/list',
      meta:{
        showNavbar:true,
        showTabbar:false,
        title:"型材型号",
        keepAlive: true
      },
      component: () => import('../views/goods/list.vue')
    },
    {
      path: '/order',
      name: 'order',
      meta:{
        showNavbar:true,
        showTabbar:false,
        title:"订单列表" 
      },
      component: () => import('../views/order/index.vue')
    },
    {
      path: '/order/detail/:id',
      name: '/order/detail/:id',
      component: () => import('../views/order/detail.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/Test.vue')
    },
    {
      path: '/callback',
      name: 'callback',
      component: () => import('../views/auth/CallBack.vue')
    },
    {
      path: '/oidc-client',
      name: 'oidc-client',
      component: () => import('../views/auth/OidcClient.vue')
    }
  ]
  
export default routes