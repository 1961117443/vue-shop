<template>
    <div class="order-card-container">
        <van-panel :title="order.code">  
            <!-- <div class="van-cell info">
               
                <van-row>
                    <van-col span="16">span: 16</van-col>
                    <van-col span="8">span: 8</van-col> 
                </van-row>
            </div> -->
            <van-row class="van-cell info">
                    <van-col span="18">
                        <van-swipe indicator-color="red"> 
                            <van-swipe-item v-for="item in 4" :key="item">
                                <order-item-card></order-item-card>
                            </van-swipe-item>
                            <!-- <van-swipe-item>2</van-swipe-item>
                            <van-swipe-item>3</van-swipe-item>
                            <van-swipe-item>4</van-swipe-item> -->
                        </van-swipe>
                    </van-col>
                    <van-col span="6">span: 8</van-col> 
            </van-row>
             
            <div slot="footer">
                <van-button size="mini" round>按钮</van-button>
                <van-button size="mini" round>按钮</van-button>
            </div>
        </van-panel>
    </div>
</template>

<script>
   import { Row, Col ,Panel,Button,Swipe, SwipeItem   } from 'vant'
   import OrderItemCard from '@/components/Order/OrderItemCard.vue';
    export default {
        name:'OrderCard',
        components:{
            [Panel.name]:Panel,
            [Button.name]:Button,
            [Row.name]:Row,
            [Col.name]:Col,
            [Swipe.name]:Swipe,
            [SwipeItem.name]:SwipeItem,
            [OrderItemCard.name]:OrderItemCard
        },
        props:['order'],
        data(){
            return{ 
            }
        },
        computed:{
            title(){
                return "订单号:" + this.order.code
            }
        }
    }
</script>

<style lang="scss" scoped>
    .order-card-container{
    
       padding: 8px 8px 0 8px;
        .van-cell__title{
            font-weight: bold;
        }
        
        .info{
            font-size: 14px;
            height: 16vh;
            border: 1px;
            border-color: red;
            padding: 0 0;
            // van-row{
            //     width: 100%;
            //     van-cell{
            //         width: 100%;
            //     }
            // }
            .van-swipe{
                width: 100%;
                height: 100%;
            }
            
        }

    }
</style>