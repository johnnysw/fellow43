<template>
	<div>
		<h1> 用户详情</h1>
		<p> 用户名 {{ $route.query.name }} </p>
		<p> 用户 id：{{ $route.query.id  }}</p>

		<p> 用户名 {{ params.name }} </p>
		<p> 用户 id：{{ params.id  }}</p>
		
		<p> 用户名 {{ $route.params.name }} </p>
		<p> 用户 id：{{ $route.params.id  }}</p>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				params: this.$route.query
			}
		},
	}
</script>

<style scoped>

</style>
