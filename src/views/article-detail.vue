<template>
	<div>
		
	<div class="article-detail">
		
	</div>
	</div>
	
</template>

<script>
	import {bus}  from '../../static/js/bus.js'

	export default{
		name:'article-detail',
		data(){
			return{
				posts:'',
				mark:false,
				titl:'',
				id:''
			}
		},
		beforeCreate(){
			var self=this;					
				$.get('http://wxservice.applinzi.com/today.php',{today:'2018-01-20'},function(info){
					let id=self.$route.params.id.substring(1,3);	
					self.date = info.date;
					self.posts = info.posts[id].content;
					self.titl=info.posts[id].title;
					$(".article-detail").html(self.posts);
				},'json');	
				
		},
		methods:{
			
		},
		mounted(){
			atransletele ();
			addbackbtn();
		}
	}
	function atransletele (){
			setTimeout(function(){
	 				var ul=document.querySelector("#flowbox");
	 				var UlParHeight=ul.parentNode.offsetHeight;
        			var UlHeight=ul.offsetHeight;
        			var Limit=UlParHeight-UlHeight;
        			var StartY=0;
        			var MoveY=0;
       				var EndY=0;
        			var Fixed=0;
        			console.log()
        			ul.style.transform="translateY("+Fixed+"px)";
        			ul.addEventListener("touchstart",function(e){
             			StartY=e.touches[0].clientY;
        			},false);
       				ul.addEventListener("touchmove",function(e){
            			 MoveY= e.touches[0].clientY;
          				 var step=parseInt(StartY-MoveY);
                		 Fixed-=step/5;
          				if(Fixed>150){
              				Fixed=150;
          				}
         				if(Fixed<(Limit-150)){
             				 Fixed=Limit-150;
             				 
       				   	}
         				
          				ul.style.transform="translateY("+Fixed+"px)";
        			},false);	
        			ul.addEventListener("touchend",function(e){
           					 if(Fixed>0){
                				Fixed=0;
          					  }
           					  if(Fixed<Limit){
                				Fixed=Limit
            				 }
           			ul.style.transform="translateY("+Fixed+"px)";
					},false)
        	},2000)	
		}
	function addbackbtn(){
		$("#back-btn").html('<a  href="javascript:;" onclick=" removebackbtn() ">返回</a>');
	}
	window.removebackbtn=function (){
		window.history.go(-1);
		$("#back-btn").html("");
		
	}
</script>

<style>
	#header{
		width: 100%;
		height:auto;
		padding-top: 1rem;
	}
	#column-top{
		width:100%;
		height:2rem;
		font-size: 1.1rem;
		font-weight: bold;
		display: none;
		
	}
	.article-detail{
		width: 100%;
		height:auto;
		
		padding-top: 2rem;
	}
	#title{
		width:100%;
		min-height:2rem;
		font-size: 1rem;
		font-weight: bold;
		margin-bottom: 1rem;
		padding: 0rem 0.5rem;
	}
	#author{
		font-size: 0.6rem;
		flex:1;
		display: flex;
		text-align: left;
		height:1rem;
		line-height: 1rem;
	}
	#author a{
		width:45%;
		text-align: right;
		height:1rem;
		line-height: 1rem;
		padding-right: 0.125rem;
	}
	.info{
		display: flex;
	}
	a{
		color:lightseagreen;
	}
	img{
		
	}
	#content p{
		text-align: left;
		text-indent: 2em;
		font-size: 0.75rem;
		line-height: 1.5rem;
		min-height:1.5rem;
		padding: 0.125rem 0.3rem;
		
	}
	#content a{
		display: inline;
	}
	.img_hr{
		display: none;
	}
	#serial{
		display: flex;
		font-size: 0.8rem;
		margin-top:2rem;
		padding-left: 0.5rem;
	}
	#serial ul{
		display: flex;
	}
	#author-feed,.column{
		font-size: 0.8rem;
		display:flex;
		padding-left: 0.5rem;
		margin-top:0.5rem;
	}
	.url_box{
		font-size: 0.8rem;
	}
	#copyright{
		padding-top:0.5rem;
	}
</style>