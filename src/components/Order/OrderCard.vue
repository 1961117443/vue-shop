<template>
    <div class="order-card-container">
        <van-panel :title="order.code" :status="status">
            <!-- <div slot="header">
                <span class="title" style="padding: 3px">{{ order.code }}</span>
                <span class="red" style="float: right; padding: 3px">待审价</span> 
            </div> -->
            <van-row class="van-cell info"  @click="onClick">
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
                <van-button v-show="(order.states & 32)> 0" size="mini" type="danger" plain  round @click="onClose">关闭</van-button>
                <van-button size="mini" round plain @click="onApproval">审价</van-button>
            </div>
        </van-panel>
    </div>
</template>

<script> 
   import OrderItemCard from '@/components/Order/OrderItemCard.vue';
    export default {
        name:'OrderCard',
        components:{ 
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
                this.$router.push({path:'/order/detail/'+this.order.code})
            },
            //关闭订单
            onClose(){
                this.$dialog.confirm({
                    title: '确认关闭此订单？',
                    message: '关闭后可以从电脑端订单回收站回复'
                    }).then(() => {
                        // on confirm
                        console.log('调用api关闭成功')
                    }).catch(() => {
                        // on cancel
                });
            },
            //订单审价
            onApproval(){
                this.$dialog.confirm({
                    title: '确认审批此订单？',
                    message: '审批后，客户可支付定金后安排生产'
                    }).then(() => {
                        // on confirm
                        console.log('调用api审价成功')
                    }).catch(() => {
                        // on cancel
                });
            }
        },
        computed:{
            status(){
                if ((this.order.states & 32)>0) {
                    return "已完结"
                }else if ((this.order.states & 16)>0) {
                    return "已生产"
                }else if ((this.order.states & 8)>0) {
                    return "已关闭"
                }else if ((this.order.states & 4)>0) {
                    return "已审价"
                }else{
                    return "待审价"
                }
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
            // height: 160px;
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
            color:red;
            font-size: 12px;
            background: rgba(0, 0, 0, 0.1);
        }
    }
</style>