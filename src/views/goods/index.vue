<template>
    <!-- 分类页面 -->
    <div class="goods-container">
        <van-search placeholder="请输入搜索关键词" v-model="value" shape="round"/>
        <van-tree-select
        height="80vh"
        :items="items"
        :main-active-index.sync="activeIndex"
        >
        <template slot="content">
            <van-image v-if="activeIndex === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
            <van-image v-if="activeIndex === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        </template>
        </van-tree-select>
        <!-- <h1>分类</h1> -->
    </div>
</template>

<script>
import { TreeSelect ,Image ,Search } from 'vant';
    export default {
        components:{
            [TreeSelect .name]:TreeSelect,
            [Image .name]:Image,
            [Search .name]:Search
        },
        data() {
            return {
            activeIndex: 0,
            items: [{ text: '分组 1',id:1 }, { text: '分组 2',id:2 },{ text: '分组 3',id:3 }, { text: '分组 4',id:4 },
            { text: '分组 1',id:1 }, { text: '分组 2',id:2 },{ text: '分组 3',id:3 }, { text: '分组 4',id:4 },
            { text: '分组 1',id:1 }, { text: '分组 2',id:2 },{ text: '分组 3',id:3 }, { text: '分组 4',id:4 },
            { text: '分组 1',id:1 }, { text: '分组 2',id:2 },{ text: '分组 3',id:3 }, { text: '分组 4',id:4 }],
            value:""
            };
        }
    }
</script>

<style lang="scss" scoped>

</style>