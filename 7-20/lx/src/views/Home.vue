<template>
  <div class="home">
    <div class="main">
      <router-view></router-view>
    </div>
    <nav>
      <router-link v-for="(item,index) in navlist" :key="index" :to="{name:item.path,params:{txt:item.text}}" tag="span">{{item.text}}</router-link>
    </nav>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data(){
    return {
      navlist:[{
        path:'shouye',
        text:'首页'
      },{
        path:'guanzhu',
        text:'关注'
      },{
        path:'xiaoxi',
        text:'消息'
      },{
        path:'wode',
        text:'我的'
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main{
  flex:1;
}
nav{
  height: 44px;
  line-height: 44px;
  display: flex;
  span{
    flex: 1;
    text-align: center;
    &.router-link-active{
      color: red;
    }
  }
}
</style>

