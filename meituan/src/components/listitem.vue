<template>
    <div class="item-wrap">
        <div class="img">
            <img :src="item.bigImageUrl">
        </div>
        <div class="info">
            <h3>{{item.spuName}}</h3>
            <p class="desc">{{item.spuDesc}}</p>
            <p class="price">￥ {{item.currentPrice}}</p>
            <p class="count">
                <b v-if="item.count>0">
                     <span class="sub" @click="change({type:'-',id:item.spuId})">-</span>
                    {{item.count}}
                </b>
                <span @click="change({type:'+',id:item.spuId})">+</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props:['item','change']
}
</script>

<style lang="scss" scoped>
    .item-wrap{
        padding: 10px;
        display: flex;
    }
    .img{
        width: 75px;
        height: 75px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .info{
        flex:1;
        padding-left: 10px;
        position: relative;
        h3{
            width: 192px;
            font-weight: 500;
            font-size: 16px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;}
        .desc{
            height: 30px;
            width: 192px;
            color: #666666;
            font-size: 12px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        .price{
            color:#fb4e44;
            font-size: 18px;
        }
        .count{
            position: absolute;
            right: 0px;
            bottom: 0;
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
