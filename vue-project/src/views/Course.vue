<template>
	<div>
		<h1> 课程页面</h1>
		<router-link to="/course/fe">前端</router-link> |
		<router-link to="/course/rd">后端</router-link> |
		<transition name="slide-fade" mode="out-in">
			<router-view />
		</transition>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				// key: value
			}
		},

	}
</script>

<style scoped>
	.slide-fade-enter-active {
		transition: all .3s ease;
	}

	.slide-fade-leave-active {
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}

	.slide-fade-enter,
	.slide-fade-leave-to

	/* .slide-fade-leave-active for below version 2.1.8 */
		{
		transform: translateX(10px);
		opacity: 0;
	}
</style>
