import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: () =>
                import ("./views/home"),
            redirect: '/contact',
            children: [{
                path: '/contact',
                component: () =>
                    import ("./views/home/contact")
            }, {
                path: '/stranger',
                component: () =>
                    import ("./views/home/stranger")
            }]
        },
        {
            path: '/detail/:id?',
            name: 'detail',
            component: () =>
                import ('./views/detail')
        }
    ]
})