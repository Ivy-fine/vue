<template>
    <div class="wrap">
        <nav>
            <router-link to="/contact" tag="span">联系人和普通短信</router-link>
            <router-link to="/stranger" tag="span">不在联系人</router-link>
        </nav>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
export default {
   
}
</script>

<style lang="scss" scoped>
    .wrap{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    nav{
        height: 50px;
        line-height: 50px;
        text-align: center;
        border-bottom: 1px solid #eee;
        span{
            width: 50%;
            float: left;
            &.router-link-active{
                color:darkturquoise;
            }
        }
    }
    main{
        flex:1;
        padding:20px 30px;
    }
</style>
