<template>
  <div class="about">
    <input type="text" placeholder="用户名" v-model="name"><br>
    <input type="password" placeholder="密码" v-model="pwd"><br>
    <button @click="add">登录</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name:'',
      pwd:''
    }
  },
  methods:{
    add(){
      localStorage.setItem("user",this.name+this.pwd);
      this.$router.push({name:"wode",params:{txt:"我的"}})
    }
  }
}
</script>

<style lang="scss" scoped>
.about{
  width: 100%;
  height: 100%;
  padding: 20px;
}
  input{
    width: 90%;
    margin: 5%;
    height: 30px;
  }
</style>
