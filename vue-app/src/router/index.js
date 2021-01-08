import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tv',
    component: () => import('../views/Tv.vue')
  }, {
    path: '/book',
    name: 'Book',
    component: () => import('../views/Book.vue')
  }, {
    path: '/music',
    name: 'Music',
    component: () => import('../views/Music.vue')
  }, {
    path: '/chat',
    name: 'Chat',
    component: () => import('../views/Chat.vue')
  }, {
    path: '/tvDetails/:id',
    name: 'TvDetails',
    component: () => import('../views/TvDetails.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
