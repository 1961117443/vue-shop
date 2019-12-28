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
        </div>
        <!-- 订单明细展示 --> 
        <!-- <van-divider content-position="left">订单明细</van-divider> --> 
        <div class="order-detail-info">
            <el-card shadow="never" :body-style="{padding:'0'}">
                <div slot="header" class="clearfix" style="padding:8px 0;">
                    <span>订单明细</span>
                     <!-- <van-button style="float: right; padding: 3px 0" size="mini" round>删除</van-button> -->
                </div>
                <div v-for="(item,index) in order.detail" :key="index" class="text item">
                    <order-item-card :item="item"> 
                        <div slot="price" slot-scope="scope"> 
                            <p class="red title"><span>单价:￥{{scope.data.dj}}</span></p>
                            <p class="red title"><span>金额:￥{{scope.data.je}}</span></p>
                        </div>
                        <div slot="footer" class="order-detail-info-actions" slot-scope="scope">
                            <van-button size="mini" round @click="onClickGaijia(scope.data)">改价</van-button>
                            <!-- <van-button size="mini" round>加购</van-button> -->
                        </div>
                       
                    </order-item-card>
                </div>
            </el-card>            
        </div>
        
        <!-- 订单主表信息展示 -->
        <!-- <van-divider content-position="left">订单信息</van-divider> -->
        <el-card  class="order-main-info" shadow="never"  :body-style="{padding:'0 2px'}">
            <p class="text item">订单编号: {{order.code}}</p> 
            <p class="text item">下单时间: 2019-12-13 16:00:55</p>   
            <p class="text item">支付方式: 在线支付</p>  
            <p class="text item">支付时间: 2019-12-13 16:01:55</p>   
            <p class="text item">配送方式: 京东快递</p>  
            <p class="text item">订单支数: 120支</p>              
            <p class="text item">理论重量: 500KG</p>               
            <p class="text item">订单金额: ￥12540</p>
        </el-card>
        <!-- 订单操作按钮区域 -->
        
        <div class="order-actions">
            <van-goods-action>
                <van-button size="small" round>关闭</van-button>
                <van-button size="small" round>审价</van-button>
                <van-button size="small" round>付款</van-button>
            </van-goods-action>
        </div>

        <van-popup
        v-model="show" 
        position="bottom"
        :style="{ height: '75%' }"
        >
            <order-item-edit :item="item"></order-item-edit>
        </van-popup>
        <!-- <van-dialog
        v-model="show" 
        title="修改单价"
        show-cancel-button
        >
        <div style="height:250px;" >
            <van-field
            readonly
            clickable
            :value="danjia"
            @touchstart.native.stop="show = true"
            />

            <van-number-keyboard
            v-model="danjia"
            :show="show"
            theme="custom"
            extra-key="."
            close-button-text="完成"
            @close="onClose"
            />
        </div>
        </van-dialog>  -->
    </div>
</template>

<script>
import OrderItemCard from '@/components/Order/OrderItemCard.vue';
import OrderItemEdit from '@/components/Order/OrderItemEdit.vue';
    export default {
        components:{  
            [OrderItemCard.name]:OrderItemCard,
            [OrderItemEdit.name]:OrderItemEdit 
        }, 
        data(){
            return{
                 id:this.$route.params.id ,
                 order:{},
                 show:false,
                 danjia:"",
                 show2:false,
                 item:{}
            }
        },
        created(){
            this.getOrder()
        },
        methods:{
            getOrder(){
                this.$http.get('api/orders/'+this.id).then(res=>{
                    this.order=res
                })
            },
            onClickGaijia(data){ 
                this.danjia = ""+ data.dj
                this.show = true
                this.item = data
                console.log(data)
            },
            onClose(){
                this.show = false
                this.order.dj =this.danjia
            }
        }
    }
</script>

<style lang="scss" scoped>
.order-detail{
    font-size: 12px;
    overflow: hidden;
    background-color:#eee;

    .order-state-info{
        margin-top: 46px; 
        height: 100px; 
        .order-state-info-desc{
            padding-left: 50px;
            padding-top: 2px;
            color:bisque;
        }
        background-image: url("https://img.yzcdn.cn/vant/cat.jpeg")
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
            clear: both;
           
        } 
        .clearfix{
            text-align: center;
            padding: 8px 0;
            margin: -18px -20px;
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
        margin:8px 2px;
    }
} 

</style>