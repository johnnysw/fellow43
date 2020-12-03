<template>
	<div>
		<h1> 活动测试页</h1>
		<button @click="goBack"> 后退</button>
		<button @click="goForward"> 前进</button>
		<button @click="go"> 后退两步</button>
		<button @click="goHome"> 回到首页</button>
	</div>
</template>

<script>
	export default {
		methods: {
			goBack() {
				this.$router.back()
			},
			goForward() {
				this.$router.forward()
			},
			go() {
				this.$router.go(-2)
			},
			goHome() {
				// this.$router.push('/')
				// this.$router.push({
				// 	name: 'User',
				// 	params: {
				// 		name: 'xiaohua',
				// 		id: 999
				// 	}
				// })
				this.$router.push({
					path: '/user',
					query: {
						name: 'xiaoming',
						id: 666
					}
				})
			}
		}
	}
</script>

<style scoped>

</style>
