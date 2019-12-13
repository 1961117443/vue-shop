<template>
    <div class="order-list-container">
        <!-- 订单列表展示 --> 
        <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        >
            <order-card v-for="(item,index) in list" :key="index" :order="item"/>
        </van-list>
    </div>
</template>

<script>
    import OrderCard from '@/components/OrderList/OrderCard.vue'
    import { List, Field,Cell,CellGroup } from 'vant'
    export default {
        name:'OrderList',
        components:{
            [Field.name]:Field,
             [Cell.name]:Cell,
             [CellGroup.name]:CellGroup,
             [OrderCard.name]:OrderCard,
             [List.name]:List
        },
        props:['kind'],
        data(){
            return{
                list: [], 
                loading: false,
                finished: false,
                value:""
            }
        },
        methods:{
            onLoad() {
                // 异步更新数据
                setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    this.list.push({code:this.kind+"-"+i});
                }
                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.list.length >= 40) {
                    this.finished = true;
                }
                }, 500);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .order-list-container{
        background-color: #eee

    }
</style>