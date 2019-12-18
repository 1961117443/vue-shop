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
            <van-image
            width="100%"
            height="100%"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
        </div>
        <!-- 订单明细展示 --> 
        <!-- <van-divider content-position="left">订单明细</van-divider> --> 
        <div class="order-detail-info">
            <el-card>
                <div slot="header" class="clearfix">
                    <span>订单明细</span>
                    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                </div>
                <div v-for="(item,index) in order.detail" :key="index" class="text item">
                    <order-item-card :item="item"></order-item-card>  
                    <div class="order-detail-info-actions">
                        <van-button size="mini" round>改价</van-button>
                        <van-button size="small" round>加购</van-button>
                    </div>    
                </div>
            </el-card>            
        </div>
        
        <!-- 订单主表信息展示 -->
        <!-- <van-divider content-position="left">订单信息</van-divider> -->
        <el-card  class="order-main-info">
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
import {  NavBar,Button,Sticky,GoodsAction,Panel ,Divider,Image   } from 'vant';
import OrderItemCard from '@/components/Order/OrderItemCard.vue';
import { Card } from 'element-ui'
    export default {
        components:{ 
            [NavBar.name]:NavBar,
            [Button.name]:Button,
            [Panel.name]:Panel,
            [Divider.name]:Divider,
            [Sticky.name]:Sticky,
            [Image.name]:Image,
            [GoodsAction.name]:GoodsAction,
            [OrderItemCard.name]:OrderItemCard,
            [Card.name]:Card
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
        display: flex;
        height: 100px;
        justify-content: space-around;
        .order-state-info-desc{
            padding-left: 50px;
            color: red;
        }
    }
    .order-detail-info{
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

        // .box-card {
        //     width: 480px;
        // }
        // width: 480px;
        .order-detail-info-actions{
            .van-button{
                float: right;
            margin: 5px 0;
            }
            
        }
    }
    .order-main-info{
        margin-bottom: 46px;
        .box-card{
            // .text {
            //     font-size: 14px;
            // }

            // .item {
            //     padding: 18px 0;
            // }

            // .box-card {
            //     width: 480px;
            // }
        }
    }
    .order-actions{
        // padding: 3px;
        // position: absolute;
        // left: 0;
        // bottom: 0;
        // width: 100%;
        // height: 50px;
        // background: aqua;
        .van-button {
            margin: 8px 5px;
        }
    }

    .round{
        border-radius: 5px;
    }

    .el-card{
        margin-top:16px;
    }
} 

</style>