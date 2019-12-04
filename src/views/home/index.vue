<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
    <van-cell-group class="cell-test-group">
      <van-sticky>
        <van-cell title="商品详情页面" is-link to="/goods/info" />
      </van-sticky>
      
      <van-cell title="测试数据绑定"  @click="testBindClick" :value="order.bzName"/>

    </van-cell-group>
      <van-cell
        v-for="item in list"
        :key="item"
        :title="item"
      />
    </van-list>

    <!-- 测试绑定数据空间 -->
    <van-popup
      v-model="showBindPopup"
      position="right"
      :style="{ height: '100vh',width:'100%' }"
    >
      <choose-item 
      :list="list2" 
      :data="order.k1" 
      @onChoose="onChoose"
      >
      </choose-item>
    </van-popup>

  </div>
</template>

<script>
  import { List,Cell,CellGroup,Popup,Sticky  } from 'vant';
  import ChooseItem from '@/components/ChooseItem.vue'
  export default {
    components:{
      [List.name]:List,
      [Cell.name]:Cell,
      [ChooseItem.name]:ChooseItem,
      [Popup.name]:Popup,
      [CellGroup.name]:CellGroup,
      [Sticky.name]:Sticky
    },
    data() {
      return {
        list: [],
        list2: [],
        loading: false,
        finished: false,
        showBindPopup:false,
        order:{
          k1:-1,
          bzName:""
        }
      };
    },
    mounted(){
      this.getPackingCategory()
    },
    methods: {
      testBindClick(){
        this.showBindPopup = true
      },
      getPackingCategory(){
        this.$http.get('/api/packing/category').then(res=>{
          this.list2 = res
        })
      },
      onChoose(data){
        this.order.bzName = data.text
        this.order.k1 = data.id 
        this.showBindPopup = false;
      },
      onLoad() {
        // 异步更新数据
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1);
          }
          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 500);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cell-test-group{
    text-align: left;
  }
</style>