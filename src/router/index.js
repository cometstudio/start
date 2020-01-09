import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'

Vue.use(Router)

const routes = [
    { path: '/', name: 'index', component: Index },
    { path: '/other', name: 'other', component: () => import('../views/Other.vue') },
    // { path: '/browser', name: 'browser', component: () => import('./views/Browser.vue') },
    // { path: '/dialog', name: 'dialog', meta: { layout: 'dialog' }, component: () => import('./views/dialog/Index')},
    // { path: '/support', name: 'support', component: () => import('./views/support/Index'),
    //     children: [
    //         { path: 'docs', name: 'support.docs', component: () => import('./views/support/Docs') },
    //         { path: 'api', name: 'support.api', component: () => import('./views/support/Api') },
    //     ]
    // },

]

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
})
