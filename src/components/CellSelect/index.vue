<template>
    <div class="cell-select-container">
        <van-cell :required="required" :title="title"  @click="show=true">{{data[displayMember]}}</van-cell>
        <!-- 弹出选择面板 -->
        <van-popup
        v-model="show"
        position="right"
        :style="{ height: '100vh',width:'100%' }"
        >
        <van-sticky>
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
           <div class="cell-select-items">
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
        // model:{
        //     prop:'data',
        //     event:'on-submit'
        // },
        props:['list','title','valueMember','displayMember','data','required'],
        data(){
            return{
                show:false ,
                searchValue:"",
                // container:this.$refs.container1,
                check:this.data[this.valueMember]
            }
        },
        methods:{
            onClickLeft(){
                this.show = false
            },
            onClickRight(){
                this.show = false 
                let data = {}
                this.list.some(item=>{
                    if (item.id==this.check) {
                        data = item
                        return true
                    }
                })  
                this.data[this.valueMember] = data.id
                this.data[this.displayMember] = data.text
                this.$emit('on-submit', data)
            }
        },
        watch:{
            // data(n,o){
            //     console.log(n)
            //     this.bind = n
            // }
        }
    }
</script>

<style lang="scss" scoped>
    .cell-select-container{
        text-align: left;
        .van-cell__title{
            font-weight: bold;
        }
    }
</style>