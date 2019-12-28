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
                    <div class="van-hairline--bottom"></div>
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
                <van-button size="small" round @click="onClickPrice">批改价格</van-button>
            </van-goods-action>
        </div>

        <van-popup
        v-model="show" 
        position="bottom"
        transition="van-slide-up"
        :style="{ height: '68%' }"
        >
            <order-item-edit v-if="show" :item="item" :fields="fs" @success="onSuccess"></order-item-edit>
        </van-popup>

        <van-popup
        v-model="showBatch" 
        position="bottom"
        transition="van-slide-up"
        :style="{ height: '20%' }"
        >
            <order-item-edit v-if="showBatch" :item="item2" :fields="fsBatch" @success="onSuccess2"></order-item-edit>
        </van-popup>
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
                 showBatch:false,
                 item:{},
                 item2:{},
                 fs:[
                     {field:'bm',disabled:true,caption:'表面'},
                     {field:'bz',disabled:true,caption:'包装'},
                     {field:'cz',disabled:true,caption:'材质'},
                     {field:'bh',disabled:true,caption:'壁厚'},
                     {field:'cd',disabled:true,caption:'长度'},
                     {field:'mz',disabled:true,caption:'米重'},
                     {field:'sl',disabled:true,caption:'数量'},
                     {field:'zl',disabled:true,caption:'重量'},
                     {field:'dj',disabled:false,caption:'单价'}
                 ],
                 fsBatch:[ 
                     {field:'dj',disabled:false,caption:'单价'}
                 ]
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
                this.show = true
                this.item =data// Object.assign({},data)
            },
            onClose(){
                this.show = false
                this.order.dj =this.danjia
            },
            onSuccess(data){
                this.item = Object.assign(this.item,data)
                this.item.je = (this.item.dj * this.item.zl).toFixed(2)
                this.show=false 
            },
            onSuccess2(data){
                this.order.detail.forEach(item=>{ 
                    item = Object.assign(item,data)
                    item.je = (item.dj * item.zl).toFixed(2)
                })
                console.log(data)
                this.showBatch=false 
            },
            onClickPrice(){
                this.showBatch=true 
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