<template>
<div id="jokes"  calss="jokesss">
		
		<div  class="jokes "  v-for="c in titles">
			<div class="header">
				<img src="http://wxservice-wxservice.stor.sinaapp.com/imgjson/cbd.jpg" />
				<div class="body">
				<h4>admin</h4>
				<div>发表于 :2018-1-15 13:11:11</div>
				</div>
			</div>
				<img v-bind:src="c.url"/>
			<div class="footer">
				<div class="addnum">
					<a href="javascript:;" v-on:click="addnumf($event)">喜欢</a>
					<span>{{count1}}</span>
				</div>
				<div class="addnum">
					<a href="javascript:;" v-on:click="addnumf($event)">不喜欢</a>
					<span>{{count1}}</span>
				</div>
				<div class="addnum">
					<a style="text-align: left;" href="javascript:;" v-on:click="addnumf($event)">不感兴趣</a>
					<span >{{count1}}</span>
				</div>
			</div>
		</div>
		
	</div>		
</template>

<script>
	var humorreload=false;
	sessionStorage.setItem('humorpage',2);	
	import headerComponent from '../components/header'
	import {bus}  from '../../static/js/bus.js'
	export default{
		name: 'humor',
		data(){
			return {
				titles:'',
				t:'十一年',
				test:'',
				count1:'3',
				titl:'趣图',
				mark:false
				
			}
		},
		components:{headerComponent},
  		beforeCreate(){
  			
  			var self=this;
  			var humorisreload=true;
				var page=localStorage.getItem('jokesview');
				var self=this;
				if(page!='<div class="item"><div class="mark">2018-01-20</div> <ul class="posts large"></ul></div>'&&page!=''&&page){
					humorisreload=false;
					humorreload=true;
				}
		
			if(humorisreload){
				$.getJSON('./static/js/img/0.json',function(res){http://wxservice.applinzi.com/humor.php?page=1
  					self.titles=res.result.data;				
  				},'json')
			}
  			
  		},
  		methods:{
  			search(m){
  				var self=this;
  				let	src=m.target;
  				let t=document.querySelector("#search").value;
  				let loc="http://wxservice.applinzi.com/humor.php?page=1";
  				$.get(loc,function(res){
  					
  					self.titles=res.tracks;
  					self.test=self.titles[0].medias[0].p2purl
  				},'json')
  				
  			},
  		
           addnumf(m){
				
				var span=m.target.parentNode.querySelector('span');
				var n=parseInt(span.innerHTML);
				n++;
				span.innerHTML=n;
			}
  		},
		mounted(){
			var ul=document.querySelector("#flowbox");
			ul.style.transform="translateY("+0+"px)";
			if(humorreload){
				var page=localStorage.getItem('jokesview');
			
				$("#jokes").html(page);
			}	
			humortransletele ();
		}
		
	}
	function humortransletele (){
			setTimeout(function(){
	 				var ul=document.querySelector("#flowbox");
	 				var UlParHeight=ul.parentNode.offsetHeight;
        			var UlHeight=ul.offsetHeight;
        			var Limit=UlParHeight-UlHeight;
        			var StartY=0;
        			var MoveY=0;
       				var EndY=0;
        			var Fixed=0;
        			
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
                				addmore();
                				ul=document.querySelector("#flowbox");
	 							UlParHeight=ul.parentNode.offsetHeight;
        						UlHeight=ul.offsetHeight;
        						Limit=UlParHeight-UlHeight;
                				Limit=UlParHeight-UlHeight;
            				 }
           			ul.style.transform="translateY("+Fixed+"px)";
					},false);
					function addmore(){
						var page=sessionStorage.getItem('humorpage')
						var url="./static/js/img/"+page+".json";
						$.getJSON(url,function(res){
						if(res){
							var datas=res.result.data;
							var str="";
							for(var i=0;i<datas.length;i++){
							
	var str1='<div class="jokes"  ><div class="header"><img src="http://wxservice-wxservice.stor.sinaapp.com/imgjson/cbd.jpg" /><div class="body"><h4>admin</h4><div>发表于 :2018-1-15 13:11:11</div></div></div><img src="'+datas[i].url+'"/>'; 
	var str2='<div class="footer">'+'<div class="addnum">'+'<a href="javascript:;" onclick="addnumf(e)">喜欢</a>'+'<span>1</span>'+'</div>'+'<div class="addnum">'+'<a href="javascript:;" onclick="addnumf(e)">不喜欢</a>';
	var str3='<span>1</span>'+'</div>'+'<div class="addnum">'+ '<a style="text-align: left;" href="javascript:;" onclick="addnumf(e)">不感兴趣</a>'+'<span >1</span>'+'</div>'+'</div>'+'</div>';
		str+=str1+str2+str3;						
							}						
							$("#jokes").append(str);
							page++;
							sessionStorage.setItem('humorpage',page);
								ul=document.querySelector("#flowbox");
	 							UlParHeight=ul.parentNode.offsetHeight;
        						UlHeight=ul.offsetHeight;
        						Limit=UlParHeight-UlHeight;
                				Limit=UlParHeight-UlHeight;
                			
						}},'json');
					}
					if($("#jokes").html()!='<div class="item"><div class="mark">2018-01-20</div> <ul class="posts large"></ul></div>'&&$("#jokes").html()!=''&&$("#jokes").html()){
						localStorage.setItem('jokesview',$("#jokes").html());
					}	
        	},2000)	;
		}
		window.addnumf=function (e){
				
				var span=e.target.parentNode.querySelector('span');
				var n=parseInt(span.innerHTML);
				n++;
				span.innerHTML=n;
			}
</script>
	
<style>
	#jokes{
		background: #ddd;
	}
	#jokes .jokes{
		margin:0.5rem 0rem;
		width:100%;
		height:auto;
		background: #fff;
		padding: 0.125rem 0.25rem;
	}
	#jokes p{
		width:100%;
		height:auto;
		text-align: left;
		text-indent: 2em;
		background: #fff;
		padding: 1rem 0.125rem;
		font-size: 0.75rem;
	}
	#jokes .jokes   h4{
		text-align: left;
		font-weight: 400;
		font-size: 1rem;
		padding-left: 0rem;
		color: #666;
	}
	#jokes .header{
		width:100%;
		height:2.85rem;
		display: flex;
		border-bottom: 1px solid #ddd;
		padding: 0.3rem 0rem;
	}
	#jokes .header img{
		width:2rem;
		height:2rem;
		
	}
	#jokes .header .body{
		padding-left: 0.25rem;
	}
	#jokes .jokes div{
		text-align: left;
		font-weight: 400;
		font-size: 0.75rem;
		padding-left: 0rem;
		color: #666;
	}
	#jokes .jokes .footer{
		height:2.25rem;
		display: flex;
		border-top:1px  solid #ddd;
		line-height: 1rem;
		padding: 0.7125rem 0rem;
	}
	#jokes .jokes .footer .addnum{
		flex:1;
		display: flex;
		line-height: 1rem;
		height:1rem;
		
	}
	#jokes .jokes .footer .addnum a{
		color:#666;
		flex: 1;
		text-align: center;
		
	}
	#jokes .jokes .footer .addnum  span{
		color:red;
		flex: 1;
		text-align: left;
		
	}
</style>
