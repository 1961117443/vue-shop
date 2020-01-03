<template>
  <div>
    <div class="top-container">
        <van-search placeholder="请输入搜索关键词" @focus="showSearchPanel=true"/>
        <!-- <van-popup
            v-model="showSearchPanel"
            position="right"
            :style="{ height: '100%',width: '100%' }"
        >
            <search-panel></search-panel>
        </van-popup> -->
        <search-panel v-model="showSearchPanel" @on-search="onSearch"></search-panel>
    </div>
    <div class="goods-list-container"> 
    <div class="goods-item" v-for="item in goodsList" :key="item.id" @click="onClick(item)">
      <el-card :body-style="{ padding: '0px' }">
        <van-image lazy-load height="100" :src="item.img_url" />
        <div style="padding: 14px;">
          <span class="title">{{ item.title }}</span>
          <div class="bottom clearfix van-multi-ellipsis--l2">
            <time class="time">{{ item.desc }}</time>
          </div>
        </div>
      </el-card>
    </div>
    <van-row v-show="busy" type="flex" justify="center" style="width:100%;">
      <van-col span="8"></van-col>
      <van-col span="8">
        <van-loading size="24px" vertical>加载中...</van-loading>
      </van-col>
      <van-col span="8"></van-col>
    </van-row>
    <div
      v-infinite-scroll="loadMore"
      :infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
      infinite-scroll-immediate-check="false"
    ></div>
  </div>
  </div>
</template>

<script>
import SearchPanel from '@/components/SearchPanel'
export default {
    components:{
        [SearchPanel.name]:SearchPanel
    },
  data() {
    return {
      pageIndex: 1,
      goodsList: [],
      isLoading: false,
      loading: false,
      finished: false,
      busy: false,
      showSearchPanel:false
    };
  },
  mounted() {
    this.getGoodsList();
  },
  methods: { 
    loadMore() {
      this.$nextTick(() => {
        this.busy = true;
        this.pageIndex++;
        this.getGoodsList();
      });
      // 多次加载数据
      // setTimeout(() => {

      // }, 500);
    },
    getGoodsList() {
      console.log("getGoodsList:加载数据。。。");
      this.$http
        .get("api/goods", { pageIndex: this.pageIndex, pageSize: 10 })
        .then(res => {
          if (res.length > 0) {
            this.goodsList = this.goodsList.concat(res);
          } else {
            this.finished = true;
          }
        });
    },
    onClick(data) {
      this.$router.push({ path: "/goods/info", query: { id: data } });
    },
    //查询数据
    onSearch(data){
        console.log("查询数据:")
        console.log(data)
    }
  }
};
</script>

<style lang="scss" scoped>
.top-container{
    background-color: red;
    // padding: 0px;
}
.goods-list-container {
  display: flex;
  flex-wrap: wrap;
  padding: 2px;
  justify-content: space-between;
  .goods-item {
    width: 49.3%;
    padding: 1px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  background-color: #eee;
  .van-clearfix {
    &::after {
      display: table;
      clear: both;
      content: "";
    }
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both;
  }
}
</style>