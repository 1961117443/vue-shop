<template>
    <div class="order-card-container">
        <van-panel :title="order.code">
            <van-row class="van-cell info">
                <van-col span="18">
                    <van-swipe indicator-color="red"> 
                        <van-swipe-item v-for="(item,index) in detail" :key="index">
                            <order-item-card :item="item"></order-item-card>
                        </van-swipe-item>
                    </van-swipe>
                </van-col>
                <van-col span="6" class="desc van-hairline--left">
                    <!-- <van-circle
                    v-model="currentRate"
                    text="订单进度"
                    :stroke-width="60"
                    size="80px"
                    /> -->
                    <p class="desc-money"><span>￥{{order.money}}</span></p>
                    <p class="desc-info">{{order.number}}<span class="danwei">支</span></p>
                    <p class="desc-info">{{order.weight}}<span class="danwei">吨</span></p>
                </van-col> 
            </van-row>
             
            <!-- <div slot="footer">
                <van-button size="mini" round>按钮</van-button>
                <van-button size="mini" round>按钮</van-button>
            </div> -->
        </van-panel>
    </div>
</template>

<script>
   import { Row, Col ,Panel,Button,Swipe, SwipeItem ,Circle  } from 'vant'
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
            [Circle.name]:Circle,
            [OrderItemCard.name]:OrderItemCard
        },
        props:['order'],
        data(){
            return{
                currentRate: 0 ,
                detail:[
                    {
                        xh:'021-HY106',
                        bm:"氧化平光古铜/JT（非标）",
                        bz:"单支隔珍珠棉，外套无字收缩膜",
                        cz:"6063-T5",
                        bh:"0.7",
                        cd:6.4,
                        mz:0.366,
                        sl:455,
                        zl:1065.792
                    }
                ]
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
        .van-cell{
            padding: 5px 5px;
        }
       padding: 8px 0 0 0;
        .van-cell__title{
            font-weight: bold;
        }
        
        .info{
            font-size: 12px;
            height: 22vh;
            border: 1px;
            border-color: red;
            padding: 0 0; 
            .van-swipe{
                width: 100%;
                height: 100%;
            } 
            p{
                margin: 0 0;
            }
            .desc{ 
                margin: 20px 5px 10px 0;
                justify-content: center;
                .desc-money{
                    font-weight:bold;
                    font-size: 13px;
                    text-align: right; 
                }
                .desc-info{
                    text-align: right; 
                    font-size: 8px;
                }
            }
            
        }
        .danwei{
            font-weight: bold;
        }
    }
</style>