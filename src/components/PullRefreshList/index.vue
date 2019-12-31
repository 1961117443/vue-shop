<template>
    <div class="pull-refresh-list-container">
        <van-pull-refresh v-model="isPullLoading" :head-height=100 @refresh="onRefresh">
            <van-list
            v-model="listLoading"
            :finished="listFinished"
            :immediate-check="false"
            finished-text="没有更多了"
            @load="onLoad"
            >
            <slot :data="list"></slot>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
    export default {
        name:'PullRefreshList',
        props:{
            url:{
                type:String
            },
            params:{
                type:Object
            }
        },
        data(){
            return{
                isPullLoading:false,
                listLoading:false,
                listFinished:false,
                list:[],
                query:{
                    pageIndex:1,
                    pageSize:5
                }
            }
        },
        mounted(){
            this.getApiData()
        },
        methods:{
            onRefresh(){
                setTimeout(() => {
                    // this.$toast('刷新成功');
                    this.isPullLoading = false
                    // this.count++;
                    this.listFinished = false
                    this.listLoading = false
                    this.query.pageIndex=1
                    this.list.splice(0,this.list.length)
                    this.getApiData()
                }, 500);
            },
            onLoad() {
                // 异步更新数据
                setTimeout(() => {
                    this.getApiData()
                }, 500);
            },
            getApiData(){
                this.$emit('on-handle-params',this.query)
                
                this.$http.get(this.url,this.query).then(res=>{
                    // 数据全部加载完成
                    if (res.length==0) {
                        this.listFinished = true;
                    }else {
                        this.query.pageIndex++
                        this.list=this.list.concat(res)
                    } 
                }).finally(()=>{
                    // 加载状态结束
                    this.listLoading = false;
                }) 
            }
        }
    }
</script>

<style lang="scss" scoped>
    .pull-refresh-list-container{
        background-color: #eee;
    }
</style>