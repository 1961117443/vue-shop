<template>
    <div class="order-card-container">
        <van-panel :title="title">  
            <div class="van-cell info">内容</div>
            <div slot="footer">
                <van-button size="mini" round>按钮</van-button>
                <van-button size="mini" round type="danger">按钮</van-button>
            </div>
        </van-panel>
    </div>
</template>

<script>
   import { Panel,Button  } from 'vant'
    export default {
        name:'OrderCard',
        components:{
            [Panel.name]:Panel,
            [Button.name]:Button
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
    
       padding: 5px 0 0 0;
        .van-cell__title{
            font-weight: bold;
        }
        .info{
            font-size: 14px
        }

    }
</style>