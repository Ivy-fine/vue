<template>
    <div class="wrap">
        <main>
            <leftView class="left"></leftView>
            <rightView class="right"></rightView>
        </main>
        <footer>
           <i class="iconfont icon-gouwuche"  @click="show"></i> ￥<span> {{total}}</span> 
            <mycart class="cart"
                :cartlist="cart"
                :change="change"
                v-if="isShow"
                :clearCart="clearCart"
            />
        </footer>
    </div>
</template>

<script>
import leftView from "../components/left"
import rightView from "../components/right"
import mycart from "../components/shoppingcart"
import { mapActions,mapState,mapMutations } from 'vuex'
export default {
    data(){
        return {
            showCart:false
        }
    },
    components:{
        leftView,
        rightView,
        mycart
    },
    computed:{
        ...mapState(['total','cart']),
        isShow(){
            if(this.cart.length==0){
                this.showCart=false
            }
            return this.showCart && this.cart.length>0
        }
    },
    methods:{
        ...mapActions(['getData']),
        ...mapMutations(['changeCount','clearCart']),
        change({type,id}){
            this.changeCount({type,id,listType:'cart'})
        },
        show(){
            if(this.cart.length==0){
                this.showCart=false;
                return
            }
            this.showCart=!this.showCart
        }
    },
    created(){
        this.getData();
    }
}
</script>

<style lang="scss" scoped>
@import url("../fonts/iconfont.css");
    .wrap{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    main{
        flex:1;
        display: flex;
        .left{
            width: 95px;
            background: #f5f5f5;
        }
        .right{
            flex:1;
        }
    }
    footer{
        height: 50px;
        line-height: 50px;
        background: #3b3b3c;
        color: #fff;
        font-size: 16px;
        padding-left: 80px;
        position: relative;
        i{
            display: inline-block;
            width: 50px;
            height: 50px;
            padding-top: 5px;
            text-align: center;
            color: #333;
            font-size: 40px;
            background: rgb(255, 196, 0);
            border-radius: 50%;
            position: absolute;
            top: -10px;
            left: 10px;
            z-index: 10;
        }
        span{
            font-size: 24px;
            font-weight: bold;
        }
    }
    .cart{
        position: absolute;
        bottom: 50px;
        left: 0;
    }
</style>
