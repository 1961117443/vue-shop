<template>
    <div class="order-item-card-container">
        <van-row>
            <van-col span="8">
                <van-image
                width="100%" 
                height="100%" 
                lazy-load
                :src="imgUrl"
                />
                <span class="title">{{item.xh}}</span> 
            </van-col>
            <van-col span="16" class="van-hairline--left">
                <div class="item-desc van-ellipsis">
                    <van-row>
                        <span class="item-desc-info">{{item.bm}}</span>
                        </van-row>
                    <van-row><span class="item-desc-info">{{item.bz}}</span></van-row>
                    <van-row>
                        <van-col span="12"><span class="item-desc-info">{{item.cz}}</span></van-col>
                        <van-col><span class="item-desc-info">{{item.bh}}</span><span class="danwei">mm</span></van-col>
                    </van-row>
                    <van-row>
                        <van-col span="12"><span class="item-desc-info">{{item.cd}}</span><span class="danwei">米</span></van-col>
                        <van-col><span class="item-desc-info">{{item.mz}}</span><span class="danwei">kg/m</span></van-col>
                    </van-row>
                    <van-row>
                        <van-col span="12"><span class="item-desc-info"><span class="red">{{item.sl}}</span><span class="danwei">支</span></span></van-col>
                        <van-col><span class="red">{{weight}}</span><span class="danwei">{{ item.zl>1000?'吨':'kg'}}</span></van-col>
                    </van-row>
                </div>
            </van-col> 
        </van-row>
    </div>
</template>

<script>
    import { Cell, CellGroup,Row, Col ,Image   } from 'vant'
    export default {
        name:'OrderItemCard',
        components:{ 
            [Row.name]:Row,
            [Col.name]:Col,
            [Image.name]:Image,
            [Cell.name]:Cell,
            [CellGroup.name]:CellGroup
        },
        props:['item'],
        data(){
            return{

            }
        },
        computed:{
            weight(){
                return this.item.zl>1000?(this.item.zl*0.001).toFixed(2):this.item.zl
            },
            imgUrl(){
                return this.item.img + "-img_100"
            }
        }
    }
</script>

<style lang="scss" scoped>
.order-item-card-container{
    // background-color:beige;
    text-align: center;
    height: 100%;
    .van-row{
        height: 100%;
    }
    .title{
        font-weight: bold;
    }
    .item-desc{
        padding:0 5px;
        overflow:hidden;
        overflow-y: scroll;
        text-align: left;
        justify-content: center;
        .van-cell{
            padding: 0 0;
        } 
        // .red{
        //     // color: red;
        // }
        .item-desc-info{
            font-size: 10px;
            font-weight: 100;
        }
    }

    .danwei{
        font-weight: bold;
    }


}
</style>