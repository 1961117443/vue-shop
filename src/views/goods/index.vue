<template>
    <!-- 分类页面 -->
    <div class="goods-container">
        <van-search placeholder="请输入搜索关键词" v-model="value" shape="round"/>
        <!-- <van-tree-select
        height="100%"
        :items="items"
        :main-active-index.sync="activeIndex"
        >
        <template slot="content">
            <van-image v-if="activeIndex === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
            <van-image v-if="activeIndex === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
            <van-grid :column-num="3" v-if="activeIndex === 2">
                <van-grid-item
                    v-for="value in 15"
                    :key="value"
                    icon="photo-o"
                    text="文字"
                >
                    <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" >文字</van-image>
                </van-grid-item>
            </van-grid>
        </template>
        </van-tree-select> -->
        <!-- <h1>分类</h1> -->
        <van-sidebar v-model="activeKey">
        <van-sidebar-item title="标签名称" dot v-for="value in 10" :key="value" />
        <van-sidebar-item title="标签名称" info="5" />
        <van-sidebar-item title="标签名称" info="99+" />
        </van-sidebar>
    </div>
</template>

<script>
import { TreeSelect ,Image ,Search,Grid, GridItem ,Sidebar, SidebarItem } from 'vant';
    export default {
        components:{
            [TreeSelect .name]:TreeSelect,
            [Image .name]:Image,
            [Search .name]:Search,
            [Grid.name]:Grid,
            [GridItem.name]:GridItem,
            [Sidebar.name]:Sidebar,
            [SidebarItem.name]:SidebarItem
        },
        data() {
            return {
            activeKey: 0,
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