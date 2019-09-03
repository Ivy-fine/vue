<template>
    <div>
        <message
            v-for="(item,index) in contact" :key="index"
            :item="item"
            :handleclick="handleclick"
        ></message>
    </div>
</template>

<script>
import message from "@/components/message.vue"
import { mapState,mapMutations } from "vuex";

export default {
    components:{
        message
    },
     computed: {
    ...mapState(["contact","stranger"])
  },
  methods:{
      ...mapMutations(['setIsread']),
      handleclick(id){
        //   this.$router.push({path:"/detail",query:{id}})
          this.$router.push({name:"detail",params:{id}})
          this.setIsread(id)
      }
  }
}
</script>

<style>

</style>
