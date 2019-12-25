<template>
    <div class="goods-list-container">
        <van-nav-bar title="型材型号" left-arrow> 
            <van-icon name="search" slot="right" />
        </van-nav-bar>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-row  >
                <van-list
               
                v-model="loading"
                :finished="finished"
                :immediate-check="false"
                finished-text="没有更多了"
                @load="onLoad"
                >
                    <van-col :span="12" v-for="item in goodsList" :key="item.uuid" class="clearfix">
                        <el-card :body-style="{ padding: '0px' }"> 
                        <van-image lazy-load height="100" :src="item.img_url"/>
                        <div style="padding: 14px;">
                            <span>{{ item.title }}</span>
                            <div class="bottom clearfix van-multi-ellipsis--l2">
                                <time class="time">{{ item.desc }}</time>
                                <!-- <span class="red" style="font-size:10px;">￥</span> -->
                            <!-- <span class="red" style="font-size:10px;">￥</span><span class="red" style="font-size:13px;">12345</span> -->
                            </div>
                        </div>
                        </el-card>
                    </van-col>
                </van-list>
            </van-row>
        </van-pull-refresh>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pageIndex: 1,
                goodsList:[],
                isLoading:false,
                loading:false,
                finished:false

            };
        },
        mounted(){
             this.getGoodsList()
           // console.log(this.getGoodsList())
        },
        methods:{
            getGoodsList(){
               this.$http.get('api/goods',{pageIndex: this.pageIndex,pageSize:10})
                .then(res=>{
                    if (res.length>0) {
                         this.goodsList=  this.goodsList.concat(res)
                    }else{
                        this.finished = true;
                    }   
                  
                    // console.log(this.goodsList) 
                })
            },
            onLoad(){ 

                // this.pageIndex ++
                // this.getGoodsList()
                // .then(res=>{
                    
                //     console.log(res)
                //     // if (res.length==0) {
                //     //     this.finished = true;
                //     // }
                // })
                // .finally(()=>{
                //         this.loading = false;
                // }) 
               //异步更新数据
                setTimeout(() => {
                    this.pageIndex ++
                    this.$http.get('api/goods',{pageIndex: this.pageIndex,pageSize:10})
                    .then(res=>{
                        if (res.length>0) {
                            this.goodsList=  this.goodsList.concat(res)
                        }else{
                            this.finished = true;
                        }    
                    
                        // console.log(this.goodsList) 
                    })
                    
                    
                    // 加载状态结束
                    this.loading = false;

                    // // 数据全部加载完成
                    // if (this.goodsList.length >= 40) {
                    //     this.finished = true;
                    // }
                }, 500);
            },
            onRefresh(){ 
                this.pageIndex = 1
                this.goodsList.splice(0,this.goodsList.length)
                // this.getGoodsList()
                this.isLoading = false;
                
            }
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
    margin-top: 10px;
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

   
  .van-col{
      padding: 1px;
  }
}
</style>