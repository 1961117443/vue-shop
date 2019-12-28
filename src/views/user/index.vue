<template>
  <div class="user-contatiner">
    <img
      class="user-poster"
      src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png"
    />
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="records" :info="stateCounts.sj" @click="onLinkClick('sj')"/>待审价
      </van-col>
      <van-col span="6">
        <van-icon name="pending-payment" :info="stateCounts.fk" @click="onLinkClick('fk')" />待付款
      </van-col>
      <van-col span="6">
        <van-icon name="tosend" :info="stateCounts.sc" @click="onLinkClick('sc')"/>待生产
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" :info="stateCounts.fh" @click="onLinkClick('fh')"/>已发货
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link to="/order" />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
      <van-cell icon="gift-o" title="我收到的礼物" is-link />
    </van-cell-group>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from "vant";

export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data(){
    return {
      stateCounts:{}
    }
  },
  mounted(){
    this.getInfoCount()
  },
  methods:{
    onLinkClick(name){
      this.$router.push({path:'/order',query:{tab:name}})
    },
    getInfoCount(){
      this.$http.get('api/orders/state_count').then(res=>{
        this.stateCounts = res
      })
    }
  }
};
</script>
 <style lang="less" scoped>
.user {
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }
  &-group {
    margin-bottom: 15px;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
.van-info{
  top:5px;
  right: 15px;
}
</style>
 
