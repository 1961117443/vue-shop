<template>
    <div>
        <van-nav-bar
        title="订单详情"
        left-text="返回"
        left-arrow
        @click-left="$router.go(-1)"
        />
        <h1>订单详情:{{id}}</h1>
    </div>
</template>

<script>
import {  NavBar  } from 'vant';
    export default {
        components:{ 
            [NavBar.name]:NavBar
        },
        data(){
            return{
                 id:this.$route.params.id
            }
        },
        created(){
        },
        methods:{
            
        }
    }
</script>

<style lang="scss" scoped>

</style>