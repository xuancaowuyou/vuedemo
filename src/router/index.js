import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '@/components/Login'
import Home from '@/components/Home'
import Content from '@/components/children/Content'
import MyOrder from '@/components/children/MyOrder'
import Manage from '@/components/children/Manage'
import Cartlist from '@/components/children/Cartlist'
import ele from '@/components/children/ele'
var router = new VueRouter({
	mode:'history',
	routes:[
		{
			path:'/home',
			component:Home,
			children:[
				{
					path:'/content',
					component:Content		
				},
				{
					path:'/myorder',
					component:MyOrder
				},
				{
					path:'/manage',
					component:Manage
				},
				{
					path:'/cartlist',
					component:Cartlist
				},
				{
					path:'/ele',
					component:ele
				},
				{
					path:'/',
					redirect:'/content'
				}
			]			
		},
		{
			path:'/login',
			component:Login
		},
		{
			path:'/',
			redirect:'home'
		}
	]
})

export default router