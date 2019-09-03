<template>
  <div class="login">
      <h3>欢迎来到沐恩之家</h3>
      <input type="text" placeholder="用户名">
      <input type="password" placeholder="密码">
      <p><span class="reg">立即注册</span><span class="forget">忘记密码</span></p>
      <button>登录</button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
    .login{
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
        p{
           width: 60%;
            margin: 0 20%;
             margin-top: 10px;
            display: flex;
            justify-content: space-between;
            span{
                font-size: 14px;
                &.reg{
                    color: #f90;
                }
                &.forget{
                    color: #999;
                }
            }
        }
        // button{
        //      width: 60%;
        //     margin: 0 20%;
        // }
    }
</style>