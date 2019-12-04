<template>
    <div class="choose-item-container" ref="container"> 
        <van-sticky :container="container" :z-index="99">
            <van-nav-bar
            title="包装方式"
            left-text="返回"
            right-text="确定"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            />
            <van-search placeholder="请输入搜索关键词" v-model="value" />
        </van-sticky>
        
        <van-radio-group v-model="check">
            <van-cell-group>
                <van-cell v-for="item in list" :key="item.id" clickable @click="check=item.id" class="van-ellipsis--l2">
                    <van-radio :name="item.id">{{item.text}}</van-radio>
                </van-cell>
            </van-cell-group>
        </van-radio-group>
    </div>
</template>

<script>
import {  Cell,CellGroup,RadioGroup,Radio,NavBar,Sticky,Search    } from 'vant';
    export default {
        name:'ChooseItem',
        components:{
            [CellGroup.name]:CellGroup,
            [RadioGroup.name]:RadioGroup,
            [Radio.name]:Radio,
            [Cell.name]:Cell,
            [NavBar.name]:NavBar,
            [Sticky.name]:Sticky,
            [Search.name]:Search
        },
        data(){
            return{
                check:this.data,
                container:null,
                value:""
            }
        },
        props:['list','data'],
        mounted(){
            this.container = this.$refs.container
        },
        methods:{
            onClickLeft(){

            },
            onClickRight(){ 
                this.$emit('onChoose', this.list[this.check])
            }
        }
    }
</script>

<style lang="scss" scoped>
.choose-item-container{

}
</style>