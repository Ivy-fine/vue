<template>
    <div class="r-wrap">
        <listitem
            v-for="(item,index) in curlist"
            :key="index"
            :item="item"
            :change="change"   
        />
    </div>
</template>

<script>
import listitem from './listitem'
import { mapState,mapMutations } from 'vuex'
export default {
    components:{
        listitem
    },
    computed:{
        ...mapState(['curlist'])
    },
    methods:{
        ...mapMutations(['changeCount']),
        change({type,id}){
            this.changeCount({type,id})
        }        
    }
}
</script>

<style lang="scss" scoped>
    .r-wrap{
        width: 100%;
        overflow-y: auto;
    }
</style>
