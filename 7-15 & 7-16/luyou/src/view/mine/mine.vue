<template>
  <div class="wrap">
    <header>
            <router-link to="/movie" tag="i" class="iconfont icon-arrow-left"></router-link>
            猫眼电影
        </header>
    <main>
        <input type="text" placeholder="账户名">
        <input type="text" placeholder="密码">
        <input type="button" value="登录">
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("../../fonts/iconfont.css");

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
    position: relative;
    i{
        position: absolute;
        left: 20px;
        font-size: 28px;
    }
  }
}
main{
    width: 100%;
    input{
        width: 100%;
        height: 40px;
        &[type="button"]{
            background: #df2d2d;
            border: 0;
            color: #fff;
        }
    }
}
</style>
