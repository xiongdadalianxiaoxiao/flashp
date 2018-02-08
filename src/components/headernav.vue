<template>
	<ul class="headernav">
		<li v-on:click="onClick">
          			登陆
		</li>
		<li>{{titl}}</li>
		<li id="back-btn">
			
		</li>
		
	</ul>
</template>

<script>
	import {bus}  from '../../static/js/bus.js'
	export default{
		name:'headernav',
		data (){
			return {
				mark:false,
				titl:'',
				showor:'false'
				
			}
		},
		 methods: {
            onClick: function(){
				this.mark=(!this.mark);
				let smark=this.mark;
                bus.$emit('showmarkChanged',smark );
            }
       }
       
	}
</script>

<style>
	.headernav{
		display:flex;
		height:2rem;
		background:lightseagreen;
	}
	.headernav li{
		flex:1;
		border: none;
		text-align: center;
		height:2rem;
		line-height:2rem;
		color: #FFF;
		font-size: 0.75rem;
	}
	.headernav li:nth-child(1){
		text-align: left;
		padding-left: 1rem;
	}
	.headernav li a{
		color:#fff;
		width:100%;
		height:2rem;
		line-height:2rem;
		float:left;
		
		font-size: 0.75rem;
	}
</style>