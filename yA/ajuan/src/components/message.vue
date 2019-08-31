<template>
    <div class="msg" @click="handleclick(item.id)">
        <h3>{{item.phone}}</h3>
        <p>{{item.msg}}</p>
        <span v-if="item.isread==0"></span>
    </div>
</template>

<script>
export default {
    props:["item","handleclick"]
}
</script>

<style lang="scss" scoped>
    .msg{
        border-bottom: 1px solid #eee;
        margin-bottom: 20px;
        position: relative;
        h3{
            line-height: 40px;
        }
        p{
            line-height: 30px;
        }
        span{
            position: absolute;
            top: 20px;
            left: -20px;
            width: 10px;
            height: 10px;
            background: turquoise;
            border-radius: 50%;
        }
    }
</style>
