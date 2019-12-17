<template>
    <div class="order-card-container">
        <van-panel :title="order.code" @click="onClick">
            <van-row class="van-cell info">
                <van-col span="18">
                    <van-swipe @change="onChange"> 
                        <van-swipe-item v-for="(item,index) in order.detail" :key="index">
                            <order-item-card :item="item"></order-item-card>
                        </van-swipe-item>
                        <div class="custom-indicator" slot="indicator">
                            {{ current + 1 }}/{{order.detail.length}}
                        </div>
                    </van-swipe>
                </van-col>
                <van-col span="6" class="desc van-hairline--left">
                    <p class="desc-money"><span>￥{{order.money}}</span></p>
                    <p class="desc-info">{{order.number}}<span class="danwei">支</span></p>
                    <p class="desc-info">{{(order.weight*0.001).toFixed(2)}}<span class="danwei">吨</span></p>
                </van-col> 
            </van-row>
             
            <div slot="footer">
                <van-button size="mini" round>关闭</van-button>
                <van-button size="mini" round>审价</van-button>
            </div>
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
                current:0,
                currentRate: 0
            }
        },
        methods:{
            onChange(index){
                this.current = index;
            },
            onClick(){
                this.$router.push(
                    {path:'/order/detail/'+this.order.code,
                query:{order:this.order}
                })
            }
        },
        computed:{
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
            height: 160px;
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
                    font-size: 11px;
                }
            }
            
        }
        .danwei{
            font-weight: bold;
        }

        .custom-indicator {
            position: absolute;
            right: 5px;
            bottom: 5px;
            padding: 2px 5px;
            color: #fff;
            font-size: 12px;
            background: rgba(0, 0, 0, 0.1);
        }
    }
</style>