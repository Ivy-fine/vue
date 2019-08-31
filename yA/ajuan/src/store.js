import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { stat } from 'fs';
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: [],
        contact: [],
        stranger: []
    },
    mutations: {
        setList(state, data) {
            if (localStorage.getItem("msglist")) {
                state.list = JSON.parse(localStorage.getItem("msglist"))
            } else {
                state.list = data
            }
            let contact = [];
            let stranger = [];
            state.list.forEach(item => {
                if (item.type == "1") {
                    contact.push(item)
                } else {
                    stranger.push(item)
                }
            })
            state.contact = contact;
            state.stranger = stranger;
        },
        setIsread(state, id) {
            state.list.forEach(item => {
                if (item.id == id) {
                    item.isread = 1;
                }
            })
            localStorage.setItem("msglist", JSON.stringify(state.list))
        }
    },
    actions: {
        getData(context) {
            axios.get('/getlist').then(res => {
                context.commit("setList", res.data)
            })
        }
    }
})