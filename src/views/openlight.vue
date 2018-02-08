<template>
	<div id="openlight">
		<h3>手机电筒</h3>
		<p>开：打开手电筒</p>
		<p>关：关闭手电筒</p>
		<div class="lights">
			<a href="javascript:;" v-on:click="turnonLight()">开</a>
			<a href="javscript:;" v-on:click="turnoffLight()">关</a>
		</div>		
	</div>
	
</template>

<script>
	export default {
		name:'openlight',
		data(){
			return{
				markde:false
			}
		},
		methods:{
			turnonLight:function () {
   				if(plus.os.name == "iOS") {
    				var avcaptClass = plus.ios.importClass("AVCaptureDevice");
       				 if(avcaptClass) {
           				var device = avcaptClass.defaultDeviceWithMediaType("vide");
           				plus.ios.invoke(device, "lockForConfiguration:", null);       			
             	   		 	plus.ios.invoke(device, "setTorchMode:", 1);
                		 	plus.ios.invoke(device, "setFlashMode:", 1);     			
            			plus.ios.invoke(device, "unlockForConfiguration");
       	 			}
  	 	 		}
   			},
   			turnoffLight:function () {
   				if(plus.os.name == "iOS") {
    				var avcaptClass = plus.ios.importClass("AVCaptureDevice");
       				 if(avcaptClass) {
           				var device = avcaptClass.defaultDeviceWithMediaType("vide");
           				plus.ios.invoke(device, "lockForConfiguration:", null);       			
             	   		 	plus.ios.invoke(device, "setTorchMode:", 0);
                		 	plus.ios.invoke(device, "setFlashMode:", 0);     			
            			plus.ios.invoke(device, "unlockForConfiguration");
       	 			}
  	 	 		}
   			}
		}
	}

</script>


                		 	
           			

<style>
	#openlight{
		width:100%;
		height:31.5rem;
		padding-top:2rem;
		padding-bottom: 2rem;
	}
	#openlight h3{
		width:100%;
		height:2.3rem;
		background:lightseagreen;
		padding-right: 1rem;
		font-size: 1rem;
		text-align: center;
		line-height: 2.3rem;
		margin:2rem 0rem;
		
	}
	#openlight p{
		width:100%;
		height:1.5rem;
		line-height: 1.5rem;
		padding-left:2rem;
		text-align: left;
	}
	#openlight .lights{
		margin-top: 2rem;
		width:100%;
		height:4rem;
		display: flex;
		justify-content: space-around;
		padding: 0rem 1rem;
	}
	#openlight .lights a{
		
		width:4rem;
		height:4rem;
		line-height: 4rem;
		text-align: center;
		background: lightseagreen;
		color:#fff
	}
</style>