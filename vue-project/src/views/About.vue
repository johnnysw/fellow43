<template>
	<div class="about">
		<h1>This is an about page</h1>
	</div>
</template>
<script>
	export default {
		beforeRouteEnter: (to, from, next) => {
			console.log('to', to)
			console.log('from', from)
			console.log('next', next)
			next()
		},
		beforeRouteLeave: (to, from, next) => {
			console.log('to', to)
			console.log('from', from)
			console.log('next', next)
			next()
		}
	}
</script>
