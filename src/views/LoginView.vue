<template>
  <div class="login-view">
  	<div class="head">
  			<h4>
     			<img src="../assets/cbd.jpg" alt="请登录"> 			
   			 </h4>  
    		<p>潇潇奥妮</p>
  	</div>
    <div class="nav">
    	<div class="navbar">
    			<p>个人中心</p>
    			<b >></b>
    	</div>	
    	<div class="navbar">
    			<p>手电筒</p>
    			<b >></b>
    	</div>
    </div>
    <div class="nav">
    	<div class="navbar">
    			<p>设置</p>
    			<b >></b>
    	</div>
    </div>	
    <div class="nav">
    	<div class="navbar">
    			<p class="exit" >退出登陆</p>
    		
    	</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'login-view',
  data () {
    return {
      loginState: '登录',
      isDisabled: false,    // Disabled submit button
      isShow: 0,            // Show pwd
      passType: 'password',
      error: ''             // Verification results
    }
  }
 
}
</script>

<style>
	.login-view{
		width:100%;
		border: 1px solid #eee;
		height:30rem;
		background: #ddd;
		
	}
	.login-view .head{
		width:100%;
			height:6rem;
			background: #fff;
			padding: 0.5rem 0rem;
	}
	.login-view h4{
			width:100%;
			height:3rem;
			padding-left:5.5rem;
		
			
	}
	.login-view h4 img{
		width:3rem;
		height:3rem;
		border-radius: 50%;
		
	}
	.login-view .head p{
		width:100%;
		height:2rem;
		line-height: 2rem;
		text-align: center;
	}
	
	.login-view  .nav{
		margin-top:0.3rem;
		background: #fff;
		height:auto;
	}
	.login-view  .navbar{
		display: flex;
		border-bottom:1px solid #ddd ;
	}
	.login-view  .navbar p{
		text-align: left;
		padding-left: 1rem;
		flex: 1;
		line-height: 2rem;
		font-size: 0.75rem;
	}
	.login-view  .navbar b{
		width: 2rem;
		height: 2rem;
		color: #999;
		line-height: 2rem;
		font-size: 1.25rem;
		font-weight: 200;
	}
	.login-view  .navbar .exit{
		text-align: center;
		color:lightseagreen;
	}
</style>
