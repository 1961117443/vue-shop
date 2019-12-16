<template>
    <div class="order-container">
        <van-nav-bar
        title="我的订单"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-tabs 
        swipeable
        sticky 
        :replace="true"
        v-model="activeName" 
        :swipe-threshold="5" 
         @change="onTabChange"
         ref="orderIndexTabs"
        >
            <van-tab v-for="tab in tabs" :key="tab.name" :name="tab.name" :title="tab.title" >
                <router-view/>
            </van-tab>
        </van-tabs>
        
    </div>
</template>

<script>
    import { Tab, Tabs,NavBar  } from 'vant';
    import OrderList from '@/components/Order/OrderList.vue'
    export default {
        components:{
            [Tab.name]:Tab,
            [Tabs.name]:Tabs,
            [NavBar.name]:NavBar,
            [OrderList.name]:OrderList
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
               this.$router.replace('/order/list/'+name)
                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>