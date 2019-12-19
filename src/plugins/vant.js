import Vue from 'vue'
 import { Cell, CellGroup,Row, Col ,Image,Lazyload,
    NavBar,Button,Sticky,GoodsAction,Panel ,Divider,
    Swipe, SwipeItem ,Circle,Tab, Tabs, 
    List, Field,PullRefresh   } from 'vant'

Vue.use(List)
Vue.use(Field)
Vue.use(PullRefresh)
Vue.use(Tab)
Vue.use(Tabs)

Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Row)
Vue.use(Col)
Vue.use(Image)
Vue.use(NavBar)
Vue.use(Button)
Vue.use(Sticky)
Vue.use(GoodsAction)
Vue.use(Panel)
Vue.use(Divider)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Circle) 
// options 为可选参数，无则不传
Vue.use(Lazyload)
