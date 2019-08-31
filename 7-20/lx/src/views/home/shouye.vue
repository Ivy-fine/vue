<template>
    <div>shouye{{$route.params.txt}}
        <router-link to="/shouye/tuijian">推荐</router-link>
        <router-link to="/shouye/beijing">北京</router-link>
        <router-view></router-view>


        <div :class="{active:islike}" class="zan" @click="zan">❤</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            islike:JSON.parse(localStorage.getItem("islike"))    
        }
    },
    methods:{
        zan(){
            this.islike=!this.islike;
            localStorage.setItem("islike",this.islike)
        }
    }
}
</script>

<style lang="scss" scoped>
    .zan{
        position: fixed;
        right: 10px;
        top: 45%;
        color:#ccc;
        font-size: 36px;
        &.active{
            color: red;
        }
    }
</style>
