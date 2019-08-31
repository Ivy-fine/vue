<template>
  <div class="wrap">
    <header>猫眼电影</header>
    <nav>
      <span>北京</span>
      <!-- <span>正在热映</span>
      <span>即将上映</span> -->
      <router-link to="/home/movie/hot" tag="span">正在热映</router-link>
      <router-link to="/home/movie/coming" tag="span">即将上映</router-link>
      <i class="iconfont icon-fangdajing"></i>
    </nav>
      <router-view class="con"></router-view>
  </div>
</template>

<script>
export default {
 
};
</script>

<style lang="scss" scoped>
@import url("../../../fonts/iconfont.css");
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  header {
    height: 50px;
    line-height: 50px;
    background: #e54847;
    text-align: center;
    color: #fff;
  }
}
nav{
  flex-shrink: 0;
  height: 44px;
  line-height: 44px;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #eee;
  span{
    padding: 0 10px;
    &.router-link-active{
      border-bottom: 2px solid #ef4238;
      color: #ef4238;
    }
  }
  i{
    width: 45px;
    color: #ef4238;
    font-size: 20px;
    text-align: right;
  }
}
.con {
  flex: 1;
  padding: 0 15px;
  overflow: scroll;
}

</style>
