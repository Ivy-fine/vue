<template>
  <div class="wrap">
    <header>
      <i class="iconfont icon-xiangzuo" @click="$router.push('/home/movie/hot')"></i>
      {{info.nm}}
    </header>
    <div class="movieInfo">
        <img :src="info.img">
        <div class="info">
            <h3>{{info.nm}}</h3>
            <p><b>{{info.sc}}</b> (16.3万人评)</p>
            <p>剧情，家庭</p>
            <p>中国大陆/147分钟</p>
            <p>{{info.rt}}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            info:{}
        }
    },
    created(){
        this.$axios.get("/getDetails",{
            params:{
                id:this.$route.query.id
            }
        }).then(res=>{
            this.info=res.data
        })
    }
};
</script>

<style lang="scss" scoped>
@import url("../../fonts/iconfont.css");
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  height: 50px;
  line-height: 50px;
  background: #e54847;
  text-align: center;
  color: #fff;
  position: relative;
  i{
      position: absolute;
      left: 20px;
  }
}
.movieInfo{
    height: 188px;
    padding: 19px 30px 19px 15px;
    background: rgba($color: #000000, $alpha: .7);
    display: flex;
    img{
        width: 110px;
        height: 150px;
    }
}
.info{
    margin-left: 12.5px;
    h3{
        color: #fff;
    }
    p{
        color: rgba($color: #fff, $alpha: .8);
        margin-top: 10px;
        font-size: 12px;
        b{
            font-size: 18px;
            color: #fc0;
        }
    }
}
</style>
