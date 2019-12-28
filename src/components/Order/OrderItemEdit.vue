<template>
    <div class="order-item-edit-container">
        <!-- <h3>编辑订单明细</h3> -->
        <div class="info">
            <van-cell-group>
                <van-field v-model="item.bm" disabled label="表面" placeholder="" />
                <van-field v-model="item.bz" disabled label="包装" placeholder="" />
                <van-field v-model="item.cz" disabled label="材质" placeholder="" />
                <van-field v-model="item.bh" disabled label="壁厚" placeholder="" />
                <van-field v-model="item.cd" disabled label="长度" placeholder="" />
                <van-field v-model="item.mz" disabled label="米重" placeholder="" />
                <van-field v-model="item.sl" disabled label="数量" placeholder="" />
                <van-field v-model="item.zl" disabled label="重量" placeholder="" />
                <van-field class="red" v-model="item.dj" label="单价" placeholder="" />
            </van-cell-group>
        </div>
        
        <div class="bottom">
            <van-sticky>
            <van-row>
                <van-col offset="18" span="6">
                    <van-button type="info">提交</van-button>
                </van-col>
            </van-row>
                </van-sticky>
        </div>
       
        
    </div>
</template>

<script>
    export default {
        name:'OrderItemEdit',
        props:['item'],
        data(){
            return {
                value:"abc"
            }
        }
    }
</script>

<style lang="scss" scoped>
    .order-item-edit-container{

    }
</style>