<template>
	<div id="joke">
		<div class="jokes "  v-for="c in data">
			<div class="header">
				<img src="http://wxservice-wxservice.stor.sinaapp.com/imgjson/cbd.jpg" />
				<div class="body">
				<h4>admin</h4>
				<div>发表于 {{c.updatetime}}</div>
				</div>
			</div>
				<p >{{c.content}}</p>
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
	sessionStorage.setItem('homepage',1);
	
	var homereload=false;
	export default {
		name:'home-view',
		data(){
			return{
				data:'',
       			count1:'1',
        		titl:'趣事'
			}
		},
		beforeCreate(){
			
			var self=this;
			var homeisreload=true;
			var page=localStorage.getItem('homeview');
			
			if(page!='<div class="item"><div class="mark">2018-01-20</div> <ul class="posts large"></ul></div>'&&page!=''&&page){
					homeisreload=false;
					homereload=true;
					
			}
			if(homeisreload){
				//$.getJSON('../../static/js/text/0.json',function(res,err){
				//console.log(res);
				//console.log(err)
				//})
				$.get('./static/js/text/0.json',function(res){
  					//self.data=res.result.data;
  					
  				},'json')
			}
  			
		},
		methods:{
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
			if(homereload){
				var page=localStorage.getItem('homeview');	
				$("#joke").html(page);
			}	
			hometransletele ();
		}
	}
	function hometransletele (){
			setTimeout(function(){
	 				var ul=document.querySelector("#flowbox");
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
                				addmorejokes();
                				ul=document.querySelector("#flowbox");
	 							UlParHeight=ul.parentNode.offsetHeight;
        						UlHeight=ul.offsetHeight;
        						Limit=UlParHeight-UlHeight;
                				Limit=UlParHeight-UlHeight;
            				 }
           			ul.style.transform="translateY("+Fixed+"px)";
					},false);
						function addmorejokes(){
						var page=sessionStorage.getItem('homepage')
						var url="./static/js/text/"+page+".json";
						$.getJSON(url,function(res){
						if(res){
							var datas=res.result.data;
							var str="";
							for(var i=0;i<datas.length;i++){
							
	var str1='<div class="jokes"  ><div class="header"><img src="http://wxservice-wxservice.stor.sinaapp.com/imgjson/cbd.jpg" /><div class="body"><h4>admin</h4><div>发表于 :2018-1-15 13:11:11</div></div></div><p >'+datas[i].content+'</p>'; 
	var str2='<div class="footer">'+'<div class="addnum">'+'<a href="javascript:;" onclick="addnumf(e)">喜欢</a>'+'<span>1</span>'+'</div>'+'<div class="addnum">'+'<a href="javascript:;" onclick="addnumf(e)">不喜欢</a>';
	var str3='<span>1</span>'+'</div>'+'<div class="addnum">'+ '<a style="text-align: left;" href="javascript:;" onclick="addnumf(e)">不感兴趣</a>'+'<span >1</span>'+'</div>'+'</div>'+'</div>';
		str+=str1+str2+str3;						
							}						
							$("#joke").append(str);
							page++;
							sessionStorage.setItem('homepage',page);
								ul=document.querySelector("#flowbox");
	 							UlParHeight=ul.parentNode.offsetHeight;
        						UlHeight=ul.offsetHeight;
        						Limit=UlParHeight-UlHeight;
                				Limit=UlParHeight-UlHeight;
                			
						}},'json');
					}
					if($("#joke").html()!='<div class="item"><div class="mark">2018-01-20</div> <ul class="posts large"></ul></div>'&&$("#joke").html()!=''&&$("#joke").html()){
						localStorage.setItem('homeview',$("#joke").html());
					}	
        	},2000)	
		}
</script>
<style>
	#joke{
		background: #ddd;
	}
	#joke .jokes{
		margin:0.5rem 0rem;
		width:100%;
		height:auto;
		background: #fff;
		padding: 0.125rem 0.25rem;
	}
	#joke p{
		width:100%;
		height:auto;
		text-align: left;
		text-indent: 2em;
		background: #fff;
		padding: 1rem 0.125rem;
		font-size: 0.75rem;
	}
	#joke .jokes   h4{
		text-align: left;
		font-weight: 400;
		font-size: 1rem;
		padding-left: 0rem;
		color: #666;
	}
	#joke .header{
		width:100%;
		height:2.85rem;
		display: flex;
		border-bottom: 1px solid #ddd;
		padding: 0.3rem 0rem;
	}
	#joke .header img{
		width:2rem;
		height:2rem;
		
	}
	#joke .header .body{
		padding-left: 0.25rem;
	}
	#joke .jokes div{
		text-align: left;
		font-weight: 400;
		font-size: 0.75rem;
		padding-left: 0rem;
		color: #666;
	}
	#joke .jokes .footer{
		height:2.25rem;
		display: flex;
		border-top:1px  solid #ddd;
		line-height: 1rem;
		padding: 0.7125rem 0rem;
	}
	#joke .jokes .footer .addnum{
		flex:1;
		display: flex;
		line-height: 1rem;
		height:1rem;
		
	}
	#joke .jokes .footer .addnum a{
		color:#666;
		flex: 1;
		text-align: center;
		
	}
	#joke .jokes .footer .addnum  span{
		color:red;
		flex: 1;
		text-align: left;
		
	}
</style>