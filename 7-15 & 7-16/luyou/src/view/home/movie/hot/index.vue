<template>
    <div>
        <movieItem v-for="(item,index) in list" :key="index" :item="item"></movieItem>
    </div>
</template>

<script>
import movieItem from "@/components/movie-item.vue"
export default {
    components:{
      movieItem
    },data() {
    return {
      list: []
    };
  },
  
  created() {
    this.$axios.get("/movielist").then(res => {
      this.list = res.data;
    });
  }
}
</script>

<style lang="scss" scoped> 
</style>
