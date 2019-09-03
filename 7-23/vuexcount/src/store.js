import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        num: 0,
        price: 5
    },
    mutations: {
        change(state, { type, step }) {
            if (type == "+") {
                state.num = state.num + step;
            } else {
                state.num = state.num - step;
            }
        }
    },
    actions: {

    },
    getters: {
        total(state) {
            return state.num * state.price
        }
    }
})