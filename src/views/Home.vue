<template>
  <div class="home-container">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
 
    <!-- <transition name="fade">
        <router-view/>
    </transition>  -->

    
    <!-- <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/index">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/cateory">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/member">会员</van-tabbar-item>
    </van-tabbar> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { Tabbar, TabbarItem } from 'vant';
export default {
  name: 'home',
  components: {
    // HelloWorld
    [Tabbar.name]:Tabbar, 
    [TabbarItem.name]:TabbarItem
  },
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.home-container{
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
      transition: all 0.2s ease;
    }
}

</style>
