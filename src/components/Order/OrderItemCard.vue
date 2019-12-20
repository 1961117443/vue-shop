<template>
  <div class="order-item-card-container">
    <van-row>
      <van-col span="8">
        <van-image width="100%" height="100%" lazy-load :src="imgUrl" class="item-img" />
        <span class="title">{{item.xh}}</span>
      </van-col>
      <van-col span="16" class="van-hairline--left">
        <div class="item-desc van-ellipsis">
          <van-row class="item-desc-info">
            <p>
              <span>材质:</span>
              {{item.cz}}
              <span>;</span>
              <span>壁厚:</span>
              {{item.bh}}mm
              <span>;</span>
            </p>
            <p>
              <span>长度:</span>
              {{item.cd}}米
              <span>;</span>
              <span>米重:</span>
              {{item.mz}}kg/m
              <span>;</span>
            </p>
            <p>
              <span>数量:</span>
              {{item.sl}}支
              <span>;</span>
              <span>重量:</span>
              {{weight}}{{ item.zl>1000?'吨':'kg'}}
              <span>;</span>
            </p>
            <div style="padding:5px 0 ;"> 
                <slot name="price" :data="item">
                    <!-- <p class="red title"><span>单价:￥12345</span></p>
                    <p class="red title"><span>金额:￥12345</span></p> -->
                </slot>
            </div>
          </van-row>
        </div>
      </van-col>
    </van-row>
    <van-row>
      <slot name="desc" :data="item">
        <div class="slot-desc van-ellipsis">
          <p>
            <span class="title">表面:</span>
            <span>{{item.bm}}</span>
          </p>
          <p>
            <span class="title">包装:</span>
            <span>{{item.bz}}</span>
          </p>
        </div>
      </slot>
    </van-row>

    <van-row>
      <slot name="footer"  :data="item"></slot>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "OrderItemCard",
  props: ["item"],
  data() {
    return {
        data:this.item
    };
  }, 
  computed: {
    weight() {
      return this.item.zl > 1000
        ? (this.item.zl * 0.001).toFixed(2)
        : this.item.zl;
    },
    imgUrl() {
      return this.item.img + "-img_100";
    }
  }
};
</script>

<style lang="scss" scoped>
.order-item-card-container { 
  text-align: center; 
  .title {
    font-weight: bold;
  }
  .item-desc {
    padding: 0 5px;
    text-align: left;
    justify-content: center;
    .item-desc-info {
      font-size: 10px;
      font-weight: 100;

      p {
        margin: 2px;
      }
    }
  }
  .slot-desc {
    font-size: 10px;
    text-align: left;
    padding-left: 6px;
  }

  .danwei {
    font-weight: bold;
  }

  .red{
     color: red;
  }
}
</style>