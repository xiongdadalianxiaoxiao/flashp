<template>
	
<div id="light"  class="body">
	
	<div  class="item">
		<!-- 日期分类 -->
		<div class="mark" v-show="loaded">{{date}}</div>
		<ul class="posts large">
			<!-- 文章 -->
			<a v-for="(post,index) in posts" v-bind:href="'#/article-detail:'+index" >
				
				<span href="javascript:;" class="tag" v-if="post.column.name">{{post.column.name}}</span>
				<div class="cont">
					<h3>{{post.title}}</h3>
					<div class="brief">
						<!-- 10001 -->
						<!-- 10002 -->
						<p v-bind:class="post.display_style == 10001 ? 'only':''" v-if="post.display_style != 10003">{{post.abstract}}</p>
						<!-- 10002 -->
						<div class="thumb" v-if="post.display_style == 10002">
							<img v-bind:src="post.thumbs[0].small.url" alt="">
						</div>
						<!-- 10003 -->
						<div class="gallery" v-if="post.display_style == 10003">
							<img v-bind:src="post.thumbs[0].small.url" alt="">
						</div>
					</div>							
				</div>
			</a>
		</ul>
	</div>
</div>
</template>

<script>
	var reloaded=false;
	
	import headerComponent from '../components/header'	
	import {bus}  from '../../static/js/bus.js'
	export default {
		name: 'light',
		data(){
			return {
				img:'yes',
				data:'',
				posts:'',
				date:'2018-01-20',
				loaded : true,
				titl:'趣闻',
				mark:false,
				reload:false
				
			}
		},
		components:{headerComponent},
		beforeCreate(){
				
				var isreload=true;
				var page=localStorage.getItem('lightview');
				var self=this;
				if(page!='<div class="item"><div class="mark">2018-01-20</div> <ul class="posts large"></ul></div>'&&page!=''&&page){
					isreload=false;
					reloaded=true;
				}
				if(isreload){
					$.get('http://wxservice.applinzi.com/today.php',{today:'2017-01-20'},function(info){						
						self.date = info.date;
						self.posts = info.posts;
					},'json');
				}
							
		},
		methods: {
            
        },
		mounted(){
			var ul=document.querySelector("#flowbox");
			ul.style.transform="translateY("+0+"px)";
			var self=this;
			if(reloaded){
				var page=localStorage.getItem('lightview');
				$("#light").html(page);
			}	
			transletelea ();
			
		}
		
	}
	function transletelea (){
			setTimeout(function(){
					
	 				var ul=document.querySelector("#flowbox");
	 				ul.style.transform="translateY("+Fixed+"px)";
	 				var UlParHeight=ul.parentNode.offsetHeight;
        			var UlHeight=ul.offsetHeight;
        			var Limit=UlParHeight-UlHeight;
        			var StartY=0;
        			var MoveY=0;
       				var EndY=0;
        			var Fixed=0;
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
                				Fixed=Limit;
                				
            				 }
           			ul.style.transform="translateY("+Fixed+"px)";
					},false);
				if($("#light").html()!='<div class="item"><div class="mark">2018-01-20</div> <ul class="posts large"></ul></div>'&&$("#light").html()!=''&&$("#light").html()){
					localStorage.setItem('lightview',$("#light").html());
				}					
        	},3000)		
		}
</script>

<style>
.body .posts a {
  padding: 0 1.25rem;
  border-top: 1px solid #dadada;
}
.body .posts .tag {
  display: block;
  width: 4.1875rem;
  text-align: center;
  line-height: 1;
  padding: 0.375rem 0;
  font-size: 0.5rem;
  color: #e6e5e5;
  background-color: #b9b9b9;
  border-radius: 0 0 0.25rem 0.25rem;
}
.body .posts .cont {
  padding: 1rem 0;
}
.body .posts h3 {
  line-height: 1.5;
  color: #1a1a1a;
  font-size: 1rem;
  margin-bottom: 0.6875rem;
}
.body .posts .brief {
  position: relative;
}
.body .posts .brief p {
  line-height: 1.75;
  color: #7f7f7f;
  font-size: 0.6875rem;
  padding-right: 4.375rem;
}
.body .posts .brief  .only {
  padding-right: 0;
}
.body .posts .thumb {
  width: 3.75rem;
  height: 3.75rem;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
}
.body .posts .gallery {
  display: flex;
  justify-content: space-between;
}
.body .posts .gallery .img-box {
  width: 5rem;
  height: 3rem;
  overflow: hidden;
}
	.body .large .cont {
  padding: 1.25rem 0;
}
.body .large h3 {
  line-height: 1.3;
  font-size: 1rem;
  margin-bottom: 0.75rem;
}
.body .large .brief {
  min-height: 7.5rem;
  font-size: 0.8125rem;
}
.body .large .brief p {
  padding-right: 7.8125rem;
}
.body .large .thumb {
  width: 7.5rem;
  height: 7.5rem;
}
.body .large .gallery {
  height: 10.8125rem;
  padding-top: 0.5625rem;
  padding-right: 0.5625rem;
  background-size: contain;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>