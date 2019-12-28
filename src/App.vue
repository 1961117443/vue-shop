<template>
  <div id="app" class="app-container">
    <van-nav-bar v-show="$store.getters.appBar.showNavbar"
      :title="$store.getters.appBar.navBarTitle"
      left-text="返回" 
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
     <router-view/>
    <!-- <transition name="fade">
      <router-view/>
    </transition> -->
    <van-tabbar v-show="$store.getters.appBar.showTabbar" v-model="active">
      <van-tabbar-item replace icon="home-o" to="/index">首页</van-tabbar-item>
      <van-tabbar-item replace icon="search" to="/cateory">分类</van-tabbar-item>
      <van-tabbar-item replace icon="cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item replace icon="friends-o" to="/member">会员</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { watch } from 'fs'
export default { 
  data(){
    return{
      active:0
    }
  },
  methods:{
    onClickLeft(){
       this.$router.go(-1)
    },
    onClickRight(){

    }
  },
  watch:{
    'router.path':function(n,o){
      console.log(n)
    }
  }
}
</script>
<style lang="scss">
.app-container{
  overflow: hidden; 
  .fade-enter {
      opacity: 0;
      transform: translateX(100%);
    }
    .fade-leave-to {
      opacity: 0;
      transform: translateX(-100%);
      position: absolute;
    }
    .fade-enter-active,.fade-leave-active {
      transition: all 0.3s ease;
    }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;  
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} 
  .title{
    font-weight: bold;
  }
  .red{
     color: red;
  }
</style>
