	
<template>

  <div id="app">
  	<div v-bind:class="state? 'float_box1':'float_box'" >
  		<div class="login-box">
  			<login-view ></login-view>
  		</div>
  		<div class="main-box">
  			<headernav></headernav>
  			<div id="showbox">
  				<div id="flowbox">
  					<transition :name="transitionName"> 
 　　	　　	　			<router-view class="child-view"></router-view> 
　　					</transition> 
  				</div>	
  			</div>	
 		
			<header-component></header-component>
  		</div>
  		
  	</div>	
  </div>
  
</template>

<script>
import headerComponent  from './components/header'
import headernav  from './components/headernav'
import LoginView from './views/LoginView.vue'
import {bus}  from '../static/js/bus.js'
//import '../static/js/jquery-1.9.1.min.js'
// ...

export default { 
 　　name: 'app', 
 　　data () { 
　　　　return { 
　　　　　 transitionName: 'slide-right' ,
		  state: sessionStorage.getItem('mark'),
		  
　　　　}
	},
	methods:{
       		
    	
 　　	},
	 mounted () { 
	 	
	 
 	},

 //监听路由的路径，可以通过不同的路径去选择不同的切换效果 
 	watch: {
 　　 $route (to,from) {
   			 const toDepth = to.path.split('/').length
    		 const fromDepth = from.path.split('/').length
   			 this.transitionName = toDepth > fromDepth ? 'slide-left':'slide-right'
				
 		}
	},
	components:{LoginView,headerComponent,headernav},
	created () {
  		bus.$on('showmarkChanged', (text) => {
  		
    	 this.state=text;
 	 })
	}
}

</script>

<style>

@media only screen and (width: 320px) {
  html {
    font-size: 16px;
  }
}
@media only screen and (width: 360px) {
  html {
    font-size: 18px;
  }
}
@media only screen and (width: 375px) {
  html {
    font-size: 18.75px;
  }
}
@media only screen and (width: 400px) {
  html {
    font-size: 20px;
  }
}
@media only screen and (width: 412px) {
  html {
    font-size: 20.55px;
  }
}
@media only screen and (width: 414px) {
  html {
    font-size: 20.7px;
  }
}
@media only screen and (min-width: 640px) {
  html {
    font-size: 32px;
  }
}
@media only screen and (min-width: 768px) {
  html {
    font-size: 38.4px;
  }
 }
@media only screen and (min-width: 1024px) {
  html {
    font-size: 51.2px;
  }
}
* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
}
html{

}
body,div,li,img,
h2,
h3,
h4,
h5,
ul,
dl,
dt,
dd,
p {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: roman, Arial, Helvetica, sans-serif;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
  display: block;
 
}
h2,
h3,
h4,
h5 {
  font-weight: bold;
}
ul {
  list-style: none;
}
a {
  display: block;
  text-decoration: none;
  color:#333;
  flex-direction: ;
}
img {
  display: block;
  width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  float:left;
  width:100%;
  min-height:34.25rem;
  cursor: pointer;
}
#app .float_box{
	float:left;
	width:200%;
	transform: translateX(-14rem);
	transition: all 0.15s linear;
	min-height:34.25rem;
}
#app .float_box1{
	float:left;
	width:200%;
	transform: translateX(0);
	transition: all 0.15s linear;
	min-height:34.25rem;
}
#app .login-box{
	width:14rem;
	float:left;
	height:34.25rem;
}
#app .main-box{
	width:20rem;
	float:left;
	min-height:34.25rem;
}
#app  .login-view{
	min-height:34.25rem;
}
#showbox{
	height:32.25rem;
	width:100%;
	overflow: hidden;
}
#flowbox{
	width:100%;
	height:auto;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
	width:20rem;
  will-change: transform;
  transition: all 0.5s ease;
   position: absolute;
}
.child-view { 
 		width:20rem;
		
 } 
 #headernav{
		position:fixed;
		z-index: 100;
		width: 20rem;
		bottom: 0rem;
		
	}
.headernav a{
	text-align: right;
	padding-right: 1rem;
}	
.navpage{
	height:auto;
	
}	
.slide-right-enter {
  opacity: 0;
  transform: translate(-60%, 0);
}
.slide-right {
  opacity: 0;  
  transform: translate(-60%, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate(60%, 0);
}
.slide-left {
  opacity: 0;
  transform: translate(60%, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate(60%, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate(-60%, 0);
}
.headernav{
		display:flex;
		height:2rem;
		background:lightseagreen;
		position:fixed;
		z-index: 100;
		width: 20rem;
		top:0rem;
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
	#app .headernav .tit{
		width:12rem;
		overflow: hidden;
	}
	.navpage{
		padding-top: 1rem;
	}
	.hd{
		display: flex;
		padding: 0.5rem 0.25rem;
		font-size: 0.8rem;
	}
	.hd .avatar{
		width:2rem;
		height:2rem;
	}
	.hd a{
		font-size: 0.8rem;
		padding-left: 0.5rem;
	}
</style>

