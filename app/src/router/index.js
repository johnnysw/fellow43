import Vue from 'vue'
import VueRouter from 'vue-router'
import Tv from '../views/Tv.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Tv',
        component: Tv
    },
    {
        path: '/music',
        name: 'Music',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Music.vue')
    }, {
        path: '/book',
        name: 'Book',
        component: ()=>import('../views/Book.vue')
    }, {
        path: '/chat',
        name: 'Chat',
        component: ()=>import('../views/Chat.vue')
    }, {
        path: '/tvDetails/:id',
        name: 'TvDetails',
        component: ()=>import('../views/TvDetails.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
