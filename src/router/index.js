import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '../views/home.vue'
import light from '../views/light.vue'
import humor from '../views/humor.vue'
import navpage from  '../views/navpage.vue'
import LoginView from '../views/LoginView.vue'
import homeView from '../views/homeview.vue'
import articleDetail from '../views/article-detail.vue'
import openlight from '../views/openlight.vue'
Vue.use(Router)


export default new Router({
 	 routes: [
  		{
    	    path: '/',
     		redirect: '/navpage/light'
      },  
      {
     		  path:'/navpage',   		
    		  component:navpage,
     		  children:[
      					 {
      	  					  path: '',
           					  redirect: '/pages/light'  		
     					 },
      					 {
     						path: 'home',
      						name: 'home',
            				component: homeView
      					},
    					{
    	 	   				path:'light',
    	   					name:'light',
    	   	 				component:light
     					},
     					{
        					path:'humor',
        					name:'humor',
    						component:humor
        				},
       					{
        					path:'/article-detail:id',
        					name:'article-detail',
        					component:articleDetail
        				}			
     	 			]
     		 },
     		 {
     	 		path:'/opnelight',
     	 		name:'openlight',
     	 		component:openlight
     		 }
     	 
   
    ]
 
  
})
