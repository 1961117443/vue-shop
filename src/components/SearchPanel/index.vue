<template>
    <div class="search-container">
        <van-popup
            v-model="show"
            position="right"
            :style="{ height: '100%',width: '100%' }"
        >  
        <van-sticky :container="container">
            <form action="/">
                <van-search
                    v-model="value"
                    placeholder="请输入搜索关键词"
                    show-action
                    @search="onSearch"
                    @cancel="onCancel"
                />
            </form>
        </van-sticky>  
        <div class="history-container" v-show="queryList.length==0">
            <van-row>
                <van-col span="8" class="title">搜索历史</van-col>
                <van-col  style="float: right;padding:0 5px">
                    <div v-if="!editTag">
                        <van-icon name="delete"  @click="editTag=tagsList.length>0" />  
                    </div>
                    <div v-else>
                        <van-button  class="van-icon" round plain size="mini" type="default" @click="handleDeleteAllTags">全部删除</van-button>
                        <van-button  class="van-icon" round plain size="mini" type="danger" @click="editTag=false">完成</van-button>
                    </div>
                </van-col>
            </van-row>
            <div class="van-hairline--bottom"></div>
            <van-tag class="history-tag" plain round v-for="item in tagsList" 
            :key="item.id"
            :closeable="editTag"
            @click="handleTagClick(item)"
            @close="handleTagClose(item.id)"
            >
                {{ item.text }}
            </van-tag> 
        </div>  
           <van-cell-group>
                <van-cell v-for="(item) in queryList" :key="item.id" :title="item.title" :value="item.desc" @click="handleClick(item)"/>
            </van-cell-group>
        </van-popup>
    </div>
</template>

<script>
    export default {
        name:'SearchPanel',
        props: ['visible','historyKey'],
        model:{
            prop:'visible',
            event:'on-change'
        }, 
        data(){
            return {
                show:this.visible,
                queryList:[],
                container:this.$parent,
                tagsList:[],
                editTag:false,
                value:""
            }
        },
        methods:{
            //初始化数据
            init(){
                if (this.show) {
                    this.editTag=false
                    this.queryList=[]
                    this.getHistoryTags()
                }
            },
            //查询数据
            onSearch(){
                console.log("onSearch")
                if (this.value.length>0) {
                    let where={
                        tag:{
                            id:"",
                            text:""
                        },
                        value:this.value
                    }
                    this.$http.get('api/goods',where).then(res=>{
                         this.queryList = res
                    })

                    this.$http.post('api/history/create',{key:this.historyKey,value:this.value})
                    .then(res=>{
                        if (res.success && res.data) {
                             this.tagsList.push(res.data)
                        } 
                    })
                }
            },
            //取消查询
            onCancel(){
                this.show = false
                this.$emit('on-change', this.show)
            },
            handleClick(item){
                this.show = false
                this.$emit('on-change', this.show)
                this.$emit('on-search', item)
               // this.$emit('on-search', {value:"abc"})
            }, 
            //获取历史搜索记录
            getHistoryTags(){
                this.$http.get('api/history/his_tags?key='+this.historyKey).then(res=>{
                    this.tagsList = res
                })
            },
            //点击历史记录
            handleTagClick(data){
                if (!this.editTag) {
                    this.value = data.text
                    this.onSearch()
                    // console.log(data)
                    // this.show = false
                    // this.$emit('on-change', this.show)
                } 
            },
            //删除历史记录
            handleTagClose(data){
                this.$http.post('api/history/delete',{key:this.historyKey,id:data})
                .then(res=>{
                    if (res.success) {
                        let index = -1
                        this.tagsList.some((item,i)=>{
                            if (item.id==data) {
                                index= i
                                return true
                            }
                        })
                        if (index>-1) {
                            this.tagsList.splice(index, 1)
                        } 
                    }
                })
               
            },
            //删除所有tags
            handleDeleteAllTags(){
                this.$http.post('api/history/delete',{key:this.historyKey,all:true})
                .then(res=>{
                    if (res.success) {
                        this.tagsList.splice(0, this.tagsList.length)
                        this.editTag = false
                    }
                })
            }
        },
        watch:{
            visible(n,o){
                this.show= n 
                this.init()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .search-container{
        .header{ 
            // .button{
            //     padding-bottom: 20px;
            // }
        }
        .history-container{
            .history-tag{
                margin: 5px 5px;
            }
        }
    }
</style>