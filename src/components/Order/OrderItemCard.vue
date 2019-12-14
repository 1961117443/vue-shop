<template>
    <div class="order-item-card-container">
        <van-row>
            <van-col span="8">
                <van-image
                width="100%" 
                height="100%" 
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
            </van-col>
            <van-col span="16">属性描述</van-col> 
        </van-row>
    </div>
</template>

<script>
    import { Row, Col ,Image   } from 'vant'
    export default {
        name:'OrderItemCard',
        components:{ 
            [Row.name]:Row,
            [Col.name]:Col,
            [Image.name]:Image
        }
    }
</script>

<style lang="scss" scoped>
.order-item-card-container{
    background-color:red;
    height: 100%;

    .van-row{
        height: 100%;
    }
}
</style>