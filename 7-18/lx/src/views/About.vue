<template>
   <div class="about">
    <h1>This is an about page</h1>

    <count :num="num" :change="change" @jian="change">
      计算组件
      <template v-slot:footer>123</template>
    </count>
  </div>
</template>

<script>
import count from "./count"
export default {
  data(){
    return {
      num:1
    }
  },
  components:{
    count
  },
  methods:{
    change(num){
      this.num=num;
    }
  }
}
</script>

<style>

</style>
