<template>
    <div>
        <h1>这是测试页面</h1>
         <van-button @click="login"  type="default">登录</van-button>
        <van-button @click="logout"  type="default">注销</van-button>
        <van-button @click="getUser"  type="default">用户信息</van-button>
        <van-button @click="getApi"  type="default">api</van-button>
        

        <div>
            {{ showResult }}
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import OidcManager from '@/plugins/ids4.js'
    export default {
        data(){
            return{
                result:'点击按钮进行测试'
            }
        },
        created(){
            console.log(OidcManager)
        },
        methods:{
            //调用api
            getApi(){
                OidcManager.getUser().then((user) => {
                    console.log(user)
                    axios.get("http://localhost:8090/api/Values",
                    {
                        headers:{
                            "Authorization":"Bearer " + user.access_token
                        }
                    })
                    .then(res=>{
                        console.log(res)
                    }).catch(err=>console.log(err)) 
                })
            },
            //获取用户信息
            getUser(){
                OidcManager.getUser().then(user=>{
                    if (user) {
                        this.result = user
                        console.log("User logged in", user.profile);
                    }
                    else {
                        console.log("User not logged in");
                    }
                })
            },
            //登录
            login(){
                OidcManager.clearStaleState();
                OidcManager.signinRedirect();
                console.log("login")
            },
            //注销
            logout(){
                this.$dialog.alert({
                    message: 'logout'
                    }).then(()=>{
                        OidcManager.signoutRedirect();
                    }); 
            }
        },
        computed:{
            showResult(){
                let msg = this.result
                if (this.result instanceof Error) {
                    msg ="Error: " +this.result.message
                }else if (typeof this.result !== 'string') {
                    msg = JSON.stringify(this.result,null,2)
                }
                 msg += '\r\n'
                 return msg
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>