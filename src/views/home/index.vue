<template>
  <div class="home-container" ref="container1">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
    <van-cell-group class="cell-test-group">
      <van-sticky>
        <van-cell title="商品详情页面" is-link to="/goods/info" />
        <van-cell title="商品列表页面" is-link to="/goods/list" />
      </van-sticky>
      
      <van-cell title="测试数据绑定"  @click="testBindClick" :value="order.k1_text"/>

      <cell-select :list="list2" title="包装" required :data="order" value-member="k1" display-member="k1_text"></cell-select>
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
  import ChooseItem from '@/components/ChooseItem.vue'
  import CellSelect from '@/components/CellSelect'
  export default {
    components:{ 
      [ChooseItem.name]:ChooseItem, 
      [CellSelect.name]:CellSelect
    },
    data() {
      return {
        list: [],
        list2: [],
        list3: [],
        loading: false,
        finished: false,
        showBindPopup:false,
        order:{
          k1:2,
          k1_text:"单支隔珍珠棉，外套无字收缩膜",
          k2:-1,
          number:1
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
        this.order.k1 = data.id 
        this.order.k1_text = data.text
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
.home-container{
  .cell-test-group{
    text-align: left;
  }
    ::-webkit-scrollbar {
              display: none;
  } 
}
  
</style>