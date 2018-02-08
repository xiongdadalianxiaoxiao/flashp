<template>
	<div class="navpage">
		
		
		<router-view></router-view>
		
	</div>
</template>

<script>
	
	import headerComponent  from '../components/header'
	export default{
		name:'navpage',
		data(){
			return {}
		},
		components:{headerComponent}
			
	}
</script>

<style>
	
</style>