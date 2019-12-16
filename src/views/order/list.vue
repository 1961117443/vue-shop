<template>
    <div class="order-list-container"> 
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <!-- <p>刷新次数: {{ count }}</p> -->
            <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            >
                <order-card v-for="(item,index) in list" :key="index" :order="item"/>
            </van-list> 
        </van-pull-refresh>
    </div>
</template>

<script>
import OrderCard from '@/components/Order/OrderCard.vue'
    import { List, Field,Cell,CellGroup,PullRefresh } from 'vant'
    export default {
        components:{
            [Field.name]:Field,
             [Cell.name]:Cell,
             [CellGroup.name]:CellGroup,
             [OrderCard.name]:OrderCard,
             [List.name]:List,
             [PullRefresh.name]:PullRefresh
        },
        props:['kind'],
        data(){
            return{
                list: [], 
                loading: false,
                finished: false,
                value:"",
                isLoading:false,
                count:0,
                id:this.$route.params.id
            }
        },
        mounted(){
            // console.log('order-list-mounted')
            // console.log(this.$route.params.id)
        },
        created(){
            // console.log(this.$route.params.id)
            // console.log('order-list-created')
        },
        methods:{
            onRefresh() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                    this.count++;
                }, 500);
            },
            onLoad() {  
                
                // 异步更新数据
                setTimeout(() => {
                    let start = this.list.length
                    if(this.id!="sc"){
                        this.getOrder()
                    }
                    // 加载状态结束
                    this.loading = false;

                    if(this.id=="fk"){
                         this.finished = true; 
                    } 

                    if (this.list.length==0) {
                        this.finished = true;  
                    }
                    

                    // 数据全部加载完成
                    if (this.id!="0" && this.list.length >= 40) {
                        this.finished = true; 
                    }
                    }, 500);
            },
            //获取订单
            getOrder(){
                this.$http.get('api/order/list?type=sj').then(res=>{
                    this.list =res
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .order-list-container{
        background-color: #eee;
    }
</style>