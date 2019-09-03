import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: [],
        curIndex: 0,
        curlist: [],
        total: 0,
        cart: []
    },
    mutations: {
        setList(state, data) {
            state.list = data;
            state.list.forEach(item => {
                item.spuList = item.spuList.map(item => {
                    return Object.assign({}, item, { count: 0 })
                })
            })
        },
        setIndex(state, n) {
            state.curIndex = n;
            state.curlist = state.list[n].spuList;
        },
        changeCount(state, { type, id, listType }) {
            let list = []
            if (listType == "cart") {
                list = state.cart
            } else {
                list = state.curlist
            }
            list.forEach(item => {
                if (item.spuId == id) {
                    let index = state.cart.findIndex(val => val == item);
                    if (type == "+") {
                        item.count++;
                        state.total += item.currentPrice;
                        if (index == -1) {
                            state.cart.push(item)
                        }
                    } else {
                        item.count--;
                        state.total -= item.currentPrice;
                        if (item.count <= 0) {
                            state.cart.splice(index, 1)
                        }
                    }
                }
            })
        },
        clearCart(state) {
            state.cart = [];
            state.total = 0;
            state.list.forEach(item => {
                item.spuList.forEach(item => {
                    item.count = 0;
                })
            })
        }
    },
    actions: {
        getData({ commit }) {
            axios.get("/getlist").then(res => {
                commit('setList', res.data)
                commit('setIndex', 0)
            })
        }
    }
})