<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link to="/course">课程目录</router-link> |
			<!-- <router-link :to="{ path:'/user' , query:{ name:'lisi' , id:1001 } }">用户详情</router-link> | -->
			<router-link :to="{ name:'User' , params:{ name:'wangwu' , id:1002 } }">用户详情</router-link> |
			<router-link to="/details/201/16900">课程详情</router-link> |
			<router-link to="/test">活动测试</router-link> |
			<!-- <router-link to="/test/202/18900">活动测试</router-link> | -->
		</div>
		<router-view />
	</div>
</template>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>
