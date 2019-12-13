<template>
    <div class="order-container">
        <van-nav-bar
        title="我的订单"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-tabs v-model="active" :swipe-threshold="5" sticky>
            <van-tab title="全部" >
                <order-list kind="0"/>
            </van-tab>
            <van-tab title="待审价">
                <order-list kind="1"/>
            </van-tab>
            <van-tab title="待付款">
                <order-list kind="2"/>
            </van-tab>
            <van-tab title="待生产">
                <order-list kind="3"></order-list>
            </van-tab>
            <van-tab title="待发货">
                <order-list kind="4"></order-list>
            </van-tab>
        </van-tabs>
        <router-view/>
    </div>
</template>

<script>
    import { Tab, Tabs,NavBar  } from 'vant';
    import OrderList from '@/components/OrderList'
    export default {
        components:{
            [Tab.name]:Tab,
            [Tabs.name]:Tabs,
            [NavBar.name]:NavBar,
            [OrderList.name]:OrderList
        },
        data() {
            return {
                active: 0
            };
        },
        methods:{
            onClickLeft(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>