
<template>
	<div id="headernav">
		<ul>
			
				 <router-link :to="{ name: 'home'}">
          			趣事
       			 </router-link>
			
			
				 <router-link  :to="{ name: 'light'}">
       				  趣闻
       			 </router-link>
			
				 <router-link  :to="{ name: 'humor'}">
       					趣图
       			 </router-link>
			
		</ul>
	</div>
	
</template>

<script>
	export default{
		name:"header-component",
		data (){
			return {
				msg:"hello world"
			}
		}
		
	}
</script>

<style>
	#headernav{
		
		
	}
	#headernav ul{
		width:100%;
		text-align: center;
		list-style: none;
		display: flex;
		height:2rem;
	}
	#headernav ul a{
		flex:1;
		height:2rem;
		line-height:2rem;
		border: 1px solid #ddd;
		font-size: 0.75rem;
		
	}
	#headernav ul  a{
		height:2rem;
		line-height:2rem;
		float:left;
		width:100%;
		background: lightseagreen;
		color:#fff;
	}
</style>
