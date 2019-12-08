<template>
    <div class="order-list-container">
        <!-- 订单列表展示 -->
        <h6>订单列表</h6>
        <van-cell-group>
  <van-field v-model="value" placeholder="请输入用户名" />
</van-cell-group>
    </div>
</template>

<script>
    import { Field,Cell,CellGroup } from 'vant'
    export default {
        name:'OrderList',
        components:{
            [Field.name]:Field,
             [Cell.name]:Cell,
             [CellGroup.name]:CellGroup
        },
        data(){
            return{
                value:""
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>