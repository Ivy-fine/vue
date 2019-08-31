<template>
    <div>
        <button @click="sub">-</button>
            {{num}}
        <button @click="add">+</button>
    </div>
</template>

<script>
import {mapState,mapMutations} from "vuex"
export default {
    computed:{
        ...mapState(['num']),
        // num(){
            // return this.$store.state.num
        // }
    },
    methods:{
        ...mapMutations(['change']),
        add(){
            this.change({type:'+',step:2})
            // this.$store.commit("change",{type:"+",step:2})
        },
        sub(){
            this.change({type:"-",step:1})
            // this.$store.commit("change",{type:"-",step:1})
        }
    }
}
</script>

<style>

</style>
