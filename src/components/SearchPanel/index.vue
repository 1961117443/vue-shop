<template>
    <div>
        <van-popup
            v-model="show"
            position="right"
            :style="{ height: '100%',width: '100%' }"
        >  
        <van-sticky :container="container">
            <button @click="handleQuery">查询</button> 
            <h1>查询面板</h1>
        </van-sticky>
            
            <!-- <div ref="container" style="height: 150px;">
            <van-sticky :container="container">
                <van-button type="warning">指定容器</van-button>
            </van-sticky>
            </div> -->

           <van-cell-group>
                    <van-cell v-for="(item,index) in list" :key="index" :title="'单元格'+item" @click="handleClick(item)"/>
                </van-cell-group>
        </van-popup>
    </div>
</template>

<script>
    export default {
        name:'SearchPanel',
        props: ['visible'],
        model:{
            prop:'visible',
            event:'on-change'
        },
        mounted(){
            console.log(this.$parent)
        },
        data(){
            return {
                show:this.visible,
                list:[],
                container:this.$parent
            }
        },
        methods:{
            handleClick(item){
                this.show = false
                this.$emit('on-change', this.show)
                this.$emit('on-search', item)
               // this.$emit('on-search', {value:"abc"})
            },
            handleQuery(){
                setTimeout(()=>{
                    for (let index = 0; index < 20; index++) {
                        this.list.push(index)
                    }
                },1000)
            }
        },
        watch:{
            visible(n,o){
                this.show= n
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>