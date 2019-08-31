<template>
  <div class="wrap">
    <header>影院</header>
    <div class="cont">
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <h4>
            {{item.nm}}
            <b>{{item.sellPrice}}</b>
            <span>元起</span>
          </h4>
          <p class="address">
            <span>{{item.addr}}</span>
            <span class="distance">{{item.distance}}</span>
          </p>
          <p class="tags">
            <span class="refund" v-if="item.tag.allowRefund==1">退</span>
            <span v-if="item.tag.endorse==1">改签</span>
            <span class="snack" v-if="item.tag.snack==1">小吃</span>
            <span class="vip" v-if="item.tag.vipTag">折扣卡</span>
            <span v-for="(item,index) in item.tag.hallType" :key="index">{{item}}</span>
          </p>
          <p>{{item.promotion.cardPromotionTag}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.$axios.get("/cinemalist").then(res => {
      this.list = res.data;
    });
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  header {
    height: 50px;
    line-height: 50px;
    background: #e54847;
    text-align: center;
    color: #fff;
  }
}
.cont {
  flex: 1;
  overflow-y: auto;
  ul {
    padding: 0 15px;
    li {
      padding: 20px 0;
      border-bottom: 1px solid #d8d8d8;
      h4 {
        font-weight: normal;
        b,
        span {
          color: #f03d37;
        }
        b {
          font-size: 18px;
          font-weight: normal;
        }
        span {
          font-size: 12px;
        }
      }
      p {
        color: #ccc;
        font-size: 12px;
        line-height: 20px;
      }
    }
  }
}
.cont .address {
  display: flex;
  color: #666;
  font-size: 14px;
  line-height: 25px;
  span {
    flex: 5;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &.distance {
      flex: 1;
    }
  }
}
.tags {
  span {
    margin-right: 5px;
    padding: 0 2px;
    color: #589daf;
    border: 1px solid #589daf;
  }
  .snack,
  .vip {
    color: #f90;
    border: 1px solid #f90;
  }
  // .refund {
  //   color: #589daf;
  //   border: 1px solid #589daf;
  // }
}
</style>
