<template>
    <dl @click="toDetails(item.id)">
        <dt>
          <img v-lazy="item.img" />
        </dt>
        <dd>
          <h4>{{item.nm}}</h4>
          <p>
            观众评分
            <b>{{item.sc}}</b>
          </p>
          <p class="actor">主演:{{item.star}}</p>
          <p>{{item.showInfo}}</p>
          <button v-if="item.globalReleased">购票</button>
          <button v-else class="blue">预售</button>
        </dd>
      </dl>
</template>

<script>
export default {
    props:['item'], 
    methods:{
    toDetails(id){
      this.$router.push({
        path:'/details',
        query:{
          id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
dl {
    width: 100%;
    height: 114px;
    display: flex;
    dt {
      width: 64px;
      flex-shrink: 0;
      height: 100%;
      margin-right: 10px;
      padding: 12px 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  dd {
  flex: 1;
  height: 100%;
  border-bottom: 1px solid #d8d8d8;
  overflow: hidden;
  padding: 12px 0;
  position: relative;
  h4 {
    padding-bottom: 5px;
  }
  p {
    width: 80%;
    font-size: 14px;
    color: #999;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    b {
      color: #faaf00;
    }
  }
  button{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    width: 48px;
    height: 27px;
    background: #f03d37;
    color:#fff;
    border:none;
    border-radius: 4px;
    font-size: 14px;
    &.blue{
      background: #3c9fe6;
    }
  }
}
</style>
