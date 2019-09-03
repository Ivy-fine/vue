import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

let router = new Router({
        routes: [{
                path: '/',
                name: 'home',
                component: Home,
                redirect: '/shouye',
                children: [{
                    path: '/shouye',
                    name: 'shouye',
                    // redirect: '/shouye/tuijian',
                    component: () =>
                        import ("./views/home/shouye.vue"),
                    children: [{
                        path: '/shouye/beijing',
                        component: () =>
                            import ("./views/home/shouye/beijing.vue")
                    }, {
                        path: '/shouye/tuijian',
                        component: () =>
                            import ("./views/home/shouye/tuijian.vue")
                    }]
                }, {
                    path: '/guanzhu/:txt',
                    name: 'guanzhu',
                    component: () =>
                        import ("./views/home/guanzhu.vue")
                }, {
                    path: '/xiaoxi/:txt',
                    name: 'xiaoxi',
                    component: () =>
                        import ("./views/home/xiaoxi.vue")
                }, {
                    path: '/wode/:txt',
                    name: 'wode',
                    component: () =>
                        import ("./views/home/wode.vue"),
                    // beforeEnter(to, from, next) {
                    //     if (localStorage.getItem("user")) {
                    //         next()
                    //     } else {
                    //         next("/about")
                    //     }
                    // }
                }]
            },
            {
                path: '/about',
                name: 'about',
                component: () =>
                    import ('./views/About.vue'),
            }
        ]
    })
    // router.beforeEach((to, from, next) => {
    //     if (to.name == "wode") {
    //         if (localStorage.getItem("user")) {
    //             next()
    //         } else {
    //             next("/about")
    //         }
    //     } else {
    //         next()
    //     }
    // })
export default router