
<template >
	<div class="detal_content">
        <div class="dconten_left" >
            <ul class="lists">
               <li v-for="chi in arr" :class="'l'+chi">{{chi}}</li>
            </ul>
        </div>
        <div class="dconten_right"  >
            <div class="drcontent_top"><img src="../assets/cp5.jpg"/></div>
            <div class="drcontetn_bottom">
                <ul class="details">
                     <li v-for="chi in arr" :id="'l'+chi">{{chi}}</li>
                </ul>
            </div>
        </div>
        <ul>
        	
        </ul>
    </div>
</template>

<script>
	
	import '../../static/js/jquery-1.9.1.min.js'
	import vue from 'vue'
	export default{
	
		name:'home',
		data(){
			return{
				bode:"body",
				conter:1,
				price:100,
				total:100,
				arr:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
				titles:''
				
			}
		},
		components:{
			
		},
		 mounted:function(){
 			bindevent();	
  		}
	}
	
function bindevent(){
    var LeftList=$(".lists");
    var RightList=$(".details");
    var n=1;
    fox_tap(LeftList,function(e){
        e=window.event||e;
        n=(e.target.className).substring(1,e.target.length);
         var lim=e.target.className.substring(1,3);
        
        for(var i=0;i<$s(".lists li").length;i++){
        	parseInt(lim);
        	if(lim==i){
        		 var setheight=0;
 				for(var r=0;r<i-1;r++){
 					setheight+=$s(".details li")[r].offsetHeight;
 				}
   				 $(".details").style.transform="translateY(-"+setheight+"px)";

        	}
            $s(".lists li")[i].style.background="#eee";
        }
        e.target.style.background="#fff";
  
    });

    TouchUpAndDown(LeftList);
    TouchUpAndDown(RightList);
    function TouchUpAndDown(ul){
        var UlParHeight=ul.parentNode.offsetHeight;
        var LiHeight=40;
        var UlHeight=ul.offsetHeight;
        
        var Limit=UlParHeight-UlHeight;
        var StartY=0;
        var MoveY=0;
        var EndY=0;
        var Fixed=0;
        ul.addEventListener("touchstart",function(e){
             StartY=e.touches[0].clientY;
        });
        ul.addEventListener("touchmove",function(e){
             MoveY= e.touches[0].clientY;

            var step=MoveY-StartY;
                Fixed+=(step)/4;
          if(Fixed>150){
              Fixed=150;
          }
          if(Fixed<(Limit-150)){
              Fixed=Limit-150;
          }
          ul.style.transform="translateY("+Fixed+"px)";

        });
        ul.addEventListener("touchend",function(e){
            if(Fixed>0){
                Fixed=0;
            }
            console.log(Limit)
            if(Fixed<Limit){
                Fixed=Limit
            }
            ul.style.transform="translateY("+Fixed+"px)";
            var uls=ul.style.transform;
        	var uloffsettop= parseInt(uls.substring(12,uls.length));
        	if(!uloffsettop){
        		uloffsettop=220;
        	}
        if(ul==$(".details")){
        			
            	for(var i=1;i<$s(".details li").length;i++){
            				var max=parseInt($s(".details li")[i].offsetTop);
            				var min=parseInt($s(".details li")[i-1].offsetTop);
            				
            		if(min<uloffsettop&&max>uloffsettop){
            			for(var r=0;r<$s(".lists li").length;r++){
            				$s(".lists li")[r].style.background="#eee";
            			}
            			$s(".lists li")[i-1].style.background="#fff";
            		}
       
            	}
         }
            
        });
       
    };
    function $(el){
        return document.querySelector(el);
    };
    function $s(el){
        return document.querySelectorAll(el);
    };
};
function fox_tap(ele,callsback){
    var IsTrue=1;
    var PreTime=0;
    var NowTime=0;
    ele.addEventListener("touchstart",function(e){
        IsTrue=1;
        PreTime=new Date();
       var SratX= e.touches[0].clientX;
       var SratY= e.touches[0].clientY;
    });
    ele.addEventListener("touchmove",function(e) {
        IsTrue=0;
    });
    ele.addEventListener("touchend",function(e){
            NowTime=new Date();
            var totalt=NowTime-PreTime;
         
            if(IsTrue==1&&totalt<200){
                callsback();
            }
     });

};

</script>

<style>
	input{
		border: none;
		outline: none;
	}
	html,

  body{
    width:100%;
    height:33.5rem;
}

body {
  overflow: hidden;
}
.detal_content {
  width: 100%;
  float: left;
  height: 33.5rem;
  overflow: hidden;
}
.detal_content .dconten_left {
  float: left;
  width: 33%;
  overflow: hidden;
  height:33.5rem;
}
.detal_content .dconten_left ul {
  width: 100%;
  float: left;
  transition: all .5s linear;
}
.detal_content .dconten_left li {
  width: 100%;
  float: left;
  height: 40px;
  line-height: 40px;
  border-right: 1px solid #ddd;
  border-left: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  text-align: center;
  background: #eee;

}
.detal_content .dconten_left li:nth-child(1){
	background: #fff;
}
.detal_content .dconten_right {
  float: left;
  width: 67%;
  height: 100%;
}
.detal_content .dconten_right .drcontent_top {
  width: 100%;
  float: left;
  height: 30%;
}
.detal_content .dconten_right .drcontent_top img {
  width: 100%;
  height: 100%;
}
.detal_content .dconten_right .drcontetn_bottom {
  width: 100%;
  height: 70%;
  float: left;
  overflow: hidden;
}
.detal_content .dconten_right .drcontetn_bottom ul {
  width: 100%;
  float: left;
}
.detal_content .dconten_right .drcontetn_bottom ul li {
  width: 100%;
  float: left;
  height:220px;
  line-height:220px;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  text-align: center;
}

</style>