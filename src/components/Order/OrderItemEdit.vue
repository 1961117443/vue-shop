<template>
    <div class="order-item-edit-container">
        <!-- <h3>编辑订单明细</h3> -->
        <div class="info">
            <van-cell-group>
                <van-field v-for="item in fields" v-bind:key="item.field" 
                label-class="title"
                v-model="data[item.field]" 
                :disabled="item.disabled" 
                :label="item.caption" 
                placeholder=""
                /> 
                <!-- <van-field label-class="title" v-model="data.bm" disabled label="表面" placeholder="" />
                <van-field label-class="title" v-model="data.bz" disabled label="包装" placeholder="" />
                <van-field label-class="title" v-model="data.cz" disabled label="材质" placeholder="" />
                <van-field label-class="title" v-model="data.bh" disabled label="壁厚" placeholder="" />
                <van-field label-class="title" v-model="data.cd" disabled label="长度" placeholder="" />
                <van-field label-class="title" v-model="data.mz" disabled label="米重" placeholder="" />
                <van-field label-class="title" v-model="data.sl" disabled label="数量" placeholder="" />
                <van-field label-class="title" v-model="data.zl" disabled label="重量" placeholder="" />
                <van-field label-class="red title" v-model="data['dj']" type="number" label="单价" placeholder="" /> -->
            </van-cell-group>
        </div>
        
        <div class="bottom">
            <van-button type="info" @click="onClick">提交</van-button>
        </div> 
    </div>
</template>

<script>
    export default {
        name:'OrderItemEdit',
        props:['item','fields'],
        data(){
            return {
                show:false,
                data:Object.assign({},this.item)
            }
        },
        methods:{
            onClick(){
                this.data.dj=parseFloat(this.data.dj)
                this.$emit('success',this.data)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .order-item-edit-container{
        .bottom{
            bottom: 0;
            position: fixed;
            text-align: center;
            width: 100vw;
            .van-button{
                
                float: right; 
                margin: 5px 5px;
            }
        }
    }
</style>