<template>
    <!-- 分类页面 -->
    <div class="goods-container">
        <van-search placeholder="请输入搜索关键词" v-model="value" shape="round"/>
        <van-tree-select
        height="calc(100vh - 104px)"
        :items="items"
        :main-active-index.sync="activeIndex"
        @click-nav="onClickNav"
        @click-item="onClickItem"
        >
        <template slot="content">
            <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
            <van-grid :column-num="2" :border="false">
                <van-grid-item
                    v-for="gitem in gridItems"
                    :key="gitem.id"
                    icon="photo-o"
                    text="文字"
                    @click="onClickGridItem(gitem)"
                >
                    <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" ></van-image>
                    <span>{{gitem.text}}</span>
                </van-grid-item>
               
            </van-grid>
        </template>
        </van-tree-select>
    </div>
</template>

<script>
import { TreeSelect ,Image ,Search,Grid, GridItem } from 'vant';
    export default {
        components:{
            [TreeSelect .name]:TreeSelect,
            [Image .name]:Image,
            [Search .name]:Search,
            [Grid.name]:Grid,
            [GridItem.name]:GridItem
        },
        data() {
            return { 
            activeIndex: 0,
            items: [],
            //{items.id,[]}
            gridItems:[], 
            value:""
            };
        },
        mounted(){
            this.getCateoryList()
            this.getCateoryItemList({id:0})
        },
        methods:{
            onClickNav(data){  
                 let id= this.items[data].id 
                this.getCateoryItemList({id})
            },
            onClickItem(data){
                console.log(data)
            },
            onClickGridItem(data){
                 console.log(data)
            },
            getCateoryList(){
                this.$http.get('api/goods/category',{id:""}).then(res=>{
                    this.items = res
                })
            },
            getCateoryItemList({id}){
                let list=[]
                for (let index = 1; index <= 10; index++) {
                    list.push({ id:id+'_' + index, text: '子系列' + '_' + index })
                }
                this.gridItems = list 
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>