<template>
    <div class="order-detail">
        <van-nav-bar
        title="订单详情"
        left-text="返回"
        left-arrow
        fixed
        @click-left="$router.go(-1)"
        />
        <!-- 订单状态栏 -->
        <div class="order-state-info">
            <!-- <van-sticky :offset-top="50">  -->
              <h2 class="order-state-info-desc">交易关闭</h2>
              <h3 class="order-state-info-desc">超时关闭</h3>
            <!-- </van-sticky> -->
            <!-- <van-image
            width="100%"
            height="100%"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            /> -->
        </div>
        <!-- 订单明细展示 --> 
        <!-- <van-divider content-position="left">订单明细</van-divider> --> 
        <div class="order-detail-info">
            <el-card shadow="never">
                <div slot="header" class="clearfix header-info">
                    <span>订单明细</span>
                     <van-button style="float: right; padding: 3px 0" size="mini" round>删除</van-button>
                    <!-- <el-button style="float: right; padding: 3px 0" type="text">删除</el-button> -->
                </div>
                <div v-for="(item,index) in order.detail" :key="index" class="text item">
                    <order-item-card :item="item">
                        <!-- <div slot="desc" class="order-detail-info-desc">
                            这里是额外描述区域
                        </div> -->
                        <div slot="footer" class="order-detail-info-actions">
                            <van-button size="mini" round>改价</van-button>
                            <van-button size="mini" round>加购</van-button>
                        </div>
                    </order-item-card>
                </div>
            </el-card>            
        </div>
        
        <!-- 订单主表信息展示 -->
        <!-- <van-divider content-position="left">订单信息</van-divider> -->
        <el-card  class="order-main-info" shadow="never">
            <p class="text item">订单编号: 107869928209</p> 
            <p class="text item">下单时间: 2019-12-13 16:00:55</p>   
            <p class="text item">支付方式: 在线支付</p>  
            <p class="text item">支付时间: 2019-12-13 16:01:55</p>   
            <p class="text item">配送方式: 京东快递</p> 
        </el-card>
        <!-- 订单操作按钮区域 -->
        
        <div class="order-actions">
            <van-goods-action>
                <van-button size="small" round>关闭</van-button>
                <van-button size="small" round>审价</van-button>
                <van-button size="small" round>付款</van-button>
            </van-goods-action>
        </div>
          
    </div>
</template>

<script>
import OrderItemCard from '@/components/Order/OrderItemCard.vue';
    export default {
        components:{  
            [OrderItemCard.name]:OrderItemCard 
        }, 
        data(){
            return{
                 id:this.$route.params.id ,
                 order:this.$route.query.order
            }
        },
        created(){
            console.log(this.$route)
        },
        methods:{
            
        }
    }
</script>

<style lang="scss" scoped>
.order-detail{
    font-size: 12px;
    overflow: hidden;


    .order-state-info{
        margin-top: 46px;
        // display: flex;
        height: 100px;
        // justify-content: space-around;
        .order-state-info-desc{
            padding-left: 50px;
            padding-top: 2px;
            color:bisque;
        }
        background-image: url("https://img.yzcdn.cn/vant/cat.jpeg")
    }
    .order-detail-info{
        .el-card{
            .el-card__header{
                        text-align: center;
                        padding: 8px 0;
                        font-weight: bolder;
                        background-color: aliceblue;
                    }
        }
        
        font-size: 16px;
        .text {
            font-size: 14px;
        }

        .item {
            margin-bottom: 18px;
        }

        .clearfix:before,
        .clearfix:after {
            display: table;
            content: "";
        }
        .clearfix:after {
            clear: both
        } 
       .header-info {
            // text-align: center;
            padding: 8px 0;
            font-weight: bolder;
            background-color: aliceblue;
        }
        .order-detail-info-actions{
            .van-button{
                float: right;
                margin: 0 3px;
            } 
        }

        .order-detail-info-desc{
            text-align: left;
        }
    }
    .order-main-info{
        // position: relative;
        // z-index: 10;
        // .el-card{
        //     margin-bottom: 46px;
        // }
    }
    .order-actions{ 
        margin-bottom: 50px;
        .van-button {
            margin: 8px 5px;
        }
    }

    .round{
        border-radius: 5px;
    }

    .el-card{
        margin:8px 8px 0 8px;
        .el-card__body{
            padding: 8px;
        }
    }
} 

</style>