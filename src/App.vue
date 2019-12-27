<template>
  <div id="app">
    <van-nav-bar v-if="$store.getters.showNavbar"
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <router-view/>
    <van-tabbar v-if="$store.getters.showTabbar" v-model="active">
      <van-tabbar-item replace icon="home-o" to="/index">首页</van-tabbar-item>
      <van-tabbar-item replace icon="search" to="/cateory">分类</van-tabbar-item>
      <van-tabbar-item replace icon="cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item replace icon="friends-o" to="/member">会员</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default { 
  data(){
    return{
      active:0
    }
  },
  methods:{
    onClickLeft(){

    },
    onClickRight(){

    }
  }
}
</script>
<style>
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
