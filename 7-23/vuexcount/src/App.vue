<template>
  <div id="app">
    <button @click="isShow=true">show</button>
      <count></count>
    <transition name="abc">
     <p v-if="isShow">单价：{{price}}</p> 
    </transition>
    <p>总价:{{total}}</p>
  </div>
</template>

<script>
import count from './components/count.vue'
import {mapState,mapGetters} from "vuex"
export default {
  name: 'app',
  data(){
    return {
      isShow:false
    }
  },
  components: {
    count
  },
  computed:{
    ...mapState(['price']),
    ...mapGetters(['total']),
    // price(){
    //   return this.$store.state.price
    // },
    // total(){
    //   return this.$store.getters.total
    // }
  }
}
</script>

<style lang="scss">
#app {
 
}
.abc-enter-active{
  transition: opacity .5s;
}
.abc-enter{
  opacity: 0;
}
</style>
