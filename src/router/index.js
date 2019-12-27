import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import store from '../store'

Vue.use(VueRouter)


const router = new VueRouter({
  //mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
}) 

const getTitle = function(data){
  let title = "vue-app"
  if (data) {
    title = data
  } 
  return title
}
// 导航守卫
router.beforeEach(async (to, from, next) => { 
  let meta = Object.assign({showNavbar:false,showTabbar:true,title:"vue-app"},to.meta)
  document.title = meta.title
  store.dispatch('app/_setBarState',meta)  
  next()
  
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
