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
                        <div v-if="data.length>0">
                            <order-card v-for="item in data" :key="item.uuid" :order="item"/>
                        </div>
                        <div v-else class="empty-order">
                            <h2>没有相关订单</h2>
                        </div> 
                    </template>
               </pull-refresh-list>
            </van-tab>
        </van-tabs>
        
    </div>
</template>

<script>
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
            let tabName= this.$route.params.tab 
            if (tabName) {
                this.tabs.some(item=> {
                    if (item.name==tabName) {
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
    .order-container{
        .empty-order{
           text-align: center;
           padding: 50px 50px;
        }
    }
</style>