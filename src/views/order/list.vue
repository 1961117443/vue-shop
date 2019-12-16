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
                pageIndex:1,
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
                //获取订单数据
                this.$http.get('api/order/list?type='+this.id,{pageIndex:this.pageIndex,pageSize:5}).then(res=>{
                    //加载状态结束
                    this.loading = false
                    //数据全部加载完成
                    if (res.length==0) {
                        this.finished = true
                    }else{
                        //页码加1
                        this.pageIndex++
                        //数据添加到list
                        res.forEach(item => {
                            this.list.push(item)
                        })
                    }
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