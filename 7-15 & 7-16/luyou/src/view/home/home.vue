<template>
  <div class="wrap">
    <main>
      <router-view></router-view>
    </main>

    <footer>
      <router-link :to="item.route" v-for="(item,index) in links" :key="index">
        <i class="iconfont" :class="item.icon"></i>
        <span>{{item.text}}</span> 
        </router-link>
    </footer>
  </div>
</template>

<script>
export default {
    data(){
        return{
            links:[{
                route:"/home/movie",
                text:'电影',
                icon:"icon-dianying"
            },{
                route:"/cinema",
                text:'影院',
                icon:"icon-yingyuana"                
            },{
                route:"/mine",
                text:'我的',
                icon:"icon-wode"
            }]
        }
    }
};
</script>

<style lang="scss" scoped>
@import url("../../font-movie/iconfont.css");
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  main {
    flex: 1;
    overflow: auto;
  }
  footer {
    height: 48px;
    display: flex;
    a {
      flex:1;
      height: 48px;
      text-align: center;
      padding-top: 2px;
      border-top: 0.5px solid #d8d8d8;
      font-size: 12px;
      text-decoration: none;
      &.router-link-active{
          color: #f03d37;
      }
      i{
        display: inline-block;
        font-size: 24px;
      }
      span{
        display:block;
        text-align: center;
      }
    }
  }
}
</style>
