<template>
  <div class="register">
      <h3>沐恩之家欢迎你~</h3>
      <input type="text" placeholder="用户名">
      <input type="text" placeholder="姓名">
      <input type="password" placeholder="密码">
      <input type="password" placeholder="确认密码">
      <button>注册</button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
    .register{
        width: 100%;
        height: 100%;
        h3{
            padding-top: 100px;
            text-align: center;
            margin-bottom: 20px;
            font-weight: normal;
        }
        input,button{
            width: 60%;
            margin: 0 20%;
            height: 40px;
            margin-top: 20px;
            border-radius: 5px;
            padding-left: 5px;
            border: 1px solid #ccc;
            outline: none;
        }
        button{
            background: #fff;
            border-color: #666;
            &:active{
                background: #eee;
            }
        }
        
    }
</style>