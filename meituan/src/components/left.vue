<template>
    <div class="l-wrap">
        <p :class="{active:index==curIndex}"
            v-for="(item,index) in list"
            :key="index"
            @click="setIndex(index)"
        >
            {{item.categoryName}}
        </p>
    </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'

export default {
 computed:{
        ...mapState(['list','curIndex'])
    },
    methods:{
        ...mapMutations(['setIndex'])
    }
}
</script>

<style lang="scss" scoped>
    .l-wrap{
        width: 100%;
        p{
            padding: 20px 0;
            text-align: center;
            font-size: 14px;
            &.active{
                background: #fff;
            }
        }
    }
</style>
