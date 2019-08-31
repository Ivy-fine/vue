<template>
    <div class="cart-wrap">
        <h4>购物车 <span @click="clearCart"><i class="iconfont icon-shanchu"></i> 清空购物车</span></h4>
        <div class="con">
            <div class="list" v-for="(item,index) in cartlist" :key="index">
            <span>{{item.spuName}}</span>
            <b>￥{{item.count*item.currentPrice}}</b>
             <p class="count">
                <b v-if="item.count>0">
                     <span class="sub" @click="change({type:'-',id:item.spuId})">-</span>
                    {{item.count}}
                </b>
                <span @click="change({type:'+',id:item.spuId})">+</span>
            </p>
        </div>
        </div>
        
    </div>
</template>

<script>
export default {
    props:['cartlist','change','clearCart']
}
</script>

<style lang='scss' scoped>
    .cart-wrap{
        width: 100%;
        background: #fff;
        color: #000;
        h4{
            padding: 0 15px;
            background: #eee;
            font-size: 14px;
            font-weight: normal;
            span{
                float: right;
            }
        }
    }
    .con{
        max-height: 300px;
        overflow-y: auto;
    }
    .list{
        margin: 0 15px;
        display: flex;
        border-bottom: 1px solid #eee;
        &>span{
            flex:2;
        }
        &>b{
            flex:1;
            color: red;
            font-weight: normal;
            text-align: right;
        }
        .count{
            flex: 2;
            text-align: right;
            b{
                font-weight: normal;
            }
            span{
                width: 25px;
                height: 25px;
                margin: 0 5px;
                background: rgb(255, 196, 0);
                border-radius: 50%;
                display: inline-block;
                line-height: 23px;
                text-align: center;
                font-size: 20px;
                font-weight: bold;
                &.sub{
                    background: #fff;
                    border: 1px solid #ccc;
                    color: #999;
                }
            }
        }
    }
</style>
