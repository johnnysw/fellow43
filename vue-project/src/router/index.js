import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Course from "../views/Course.vue"
import Fe from "../views/Fe.vue"
import Rd from "../views/Rd.vue"
import User from "../views/User.vue"
import Details from "../views/Details.vue"
import Error from "../views/Error.vue"
import Test from "../views/Test.vue"

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		alias: '/aaa',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
	}, {
		path: '/course',
		name: 'Course',
		component: Course,
		children: [{
			path: 'fe',
			component: Fe
		}, {
			path: 'rd',
			component: Rd
		}]
	}, {
		path: '/user',
		name: 'User',
		component: User
	}, {
		path: '/details/:id/:price',
		name: 'Details',
		component: Details
	}, {
		path: '/test',
		// path: '/test/:id/:price',
		name: 'Test',
		component: Test,
		// redirect:'/',
		// redirect:'/details/:id/:price',
		beforeEnter(to, from, next) {
			console.log('to', to)
			console.log('from', from)
			console.log('next', next)
			next()
		}
	}, {
		path: '*',
		name: 'Error',
		component: Error
	},
]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

export default router
