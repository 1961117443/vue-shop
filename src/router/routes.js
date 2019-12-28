
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
        title:"型材型号" 
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
      component: () => import('../views/order/index.vue') ,
      children:[
        {
          path: 'list/:id',
          name: '/order/list/:id',
          meta:{
            showNavbar:true,
            showTabbar:false,
            title:"订单列表" 
          },
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
  
export default routes