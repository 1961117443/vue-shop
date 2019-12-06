<template>
    <div class="cell-select-container">
        <van-cell :title="title"  @click="show=true"/>
        <!-- 弹出选择面板 -->
        <van-popup
        v-model="show"
        position="right"
        :style="{ height: '100vh',width:'100%' }"
        >
        <van-sticky :container="container">
            <van-nav-bar
            :title="title"
            left-text="返回"
            right-text="确定"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            />
            <van-search placeholder="请输入搜索关键词" v-model="searchValue" />
            </van-sticky>
           <div class="cell-select-items" slot="items">
               <van-radio-group v-model="check">
                <van-cell-group>
                    <van-cell v-for="item in list" :key="item.id" clickable @click="check=item.id" class="van-ellipsis--l2">
                        <van-radio :name="item.id">{{item.text}}</van-radio>
                    </van-cell>
                </van-cell-group>
            </van-radio-group>
           </div>
        </van-popup>
    </div>
</template>

<script>
    import {  Cell,CellGroup,RadioGroup,Radio,NavBar,Sticky,Search ,Popup   } from 'vant';
    export default {
        name:'CellSelect',
        components:{
            [CellGroup.name]:CellGroup,
            [RadioGroup.name]:RadioGroup,
            [Radio.name]:Radio,
            [Cell.name]:Cell,
            [NavBar.name]:NavBar,
            [Sticky.name]:Sticky,
            [Popup.name]:Popup,
            [Search.name]:Search
        },
        props:['list','title'],
        data(){
            return{
                show:false ,
                searchValue:"",
                container:this.$refs.container1,
                check:-1
            }
        },
        methods:{
            onClickLeft(){

            },
            onClickRight(){
                this.show = false 
                // this.$emit('onChoose', this.list[this.check])
            }
        }
    }
</script>

<style lang="scss" scoped>
    .cell-select-container{

    }
</style>