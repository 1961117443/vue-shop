<template>
    <div class="order-container">
        <!-- <van-nav-bar
        title="我的订单"
        left-text="返回"
        left-arrow 
        @click-left="onClickLeft"
        /> -->
        <van-tabs 
        swipeable
        sticky   
        v-model="activeName" 
        :swipe-threshold="5" 
         @change="onTabChange"
         ref="orderIndexTabs"
        >
            <van-tab v-for="tab in tabs" :key="tab.name" :name="tab.name" :title="tab.title" >
               <!-- <router-view/> -->
               <pull-refresh-list :url="'api/orders?type='+tab.name" :params="tab" >
                    <template v-slot="{data}">  
                        <order-card v-for="item in data" :key="item.uuid" :order="item"/>
                    </template>
               </pull-refresh-list>
            </van-tab>
        </van-tabs>
        
    </div>
</template>

<script> 
    // import OrderList from '@/components/Order/OrderList.vue'
    import OrderCard from '@/components/Order/OrderCard.vue' 
    import PullRefreshList from '@/components/PullRefreshList'
    export default {
        components:{
            [PullRefreshList.name]:PullRefreshList,
            [OrderCard.name]:OrderCard
        },
        data() {
            return {
                active: 0,
                activeName:"sj",
                tabs:[
                    {name:"sj",title:"待审价"},
                    {name:"fk",title:"待付款"},
                    {name:"sc",title:"待生产"},
                    {name:"fh",title:"已发货"},
                    {name:"qb",title:"全部"}
                ]
            };
        },
        created(){
            if (this.$route.query.tab) {
                this.tabs.some(item=> {
                    if (item.name==this.$route.query.tab) {
                        this.activeName = item.name
                        return true
                    }
                })
                
            }
        },
        mounted(){
            this.onTabChange(this.activeName)
        },
        methods:{
            onClickLeft(){
                this.$router.go(-1)
            },
            onTabChange(name){ 
            //   this.$router.replace('/order/list/'+name)
                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>