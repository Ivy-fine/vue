import Vue from "vue"
import VueRouter from "vue-router";
import movie from "./view/home/movie/movie.vue"
import cinema from "./view/home/cinema/cinema.vue"
import mine from "./view/mine/mine.vue"
import home from "./view/home/home.vue"

Vue.use(VueRouter);

let router = new VueRouter({
    routes: [{
        path: '/home',
        component: home,
        children: [{
                path: "/home/movie",
                component: movie,
                redirect: '/home/movie/hot',
                children: [{
                    path: "/home/movie/hot",
                    component: () =>
                        import ("./view/home/movie/hot"),
                    alias: '/movie',
                }, {
                    path: "/home/movie/coming",
                    component: () =>
                        import ("./view/home/movie/coming"),
                }]
            },
            {
                path: "/home/cinema",
                component: cinema,
                alias: '/cinema'
            }
        ]
    }, {
        path: "/mine",
        component: mine
    }, {
        path: "/details",
        component: () =>
            import ("./view/details")
    }, {
        path: "*",
        redirect: "/home/movie/hot"
    }]
})

export default router;