<template>
    <div class="goods-list-container">
        <van-nav-bar title="型材型号" left-arrow> 
            <van-icon name="search" slot="right" />
        </van-nav-bar>

        <van-row >
            <van-col :span="12" v-for="(o, index) in 11" :key="index" >
                <el-card :body-style="{ padding: '0px' }">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                <div style="padding: 14px;">
                    <span>LX9017B-1.1</span>
                    <!-- <div class="bottom clearfix">
                    <span class="red" style="font-size:10px;">￥</span><span class="red" style="font-size:13px;">12345</span>
                    </div> -->
                </div>
                </el-card>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            currentDate: new Date()
            };
        }
    }
</script>

<style lang="scss" scoped>
.goods-list-container{
    background-color: #eee;
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
}
</style>