import VueRouter from 'vue-router'

import index from '../../component/index.vue'
import home from '../../component/index/home.vue'
import search from '../../component/index/search.vue'
import brand from '../../component/brand/brand.vue'
import classify from '../../component/classify/classify.vue'
import sign from '../../component/classify/sign.vue'
import buy from '../../component/buy/buy.vue'
import my from '../../component/my/my.vue'
import login from '../../component/my/login.vue'
import mk from '../../component/brand/mk.vue'
import details from '../../component/brand/details.vue'
import payment from '../../component/buy/payment.vue'

export default new VueRouter({
	routes:[
				{
					path:'/',component:index,
					redirect:'/home'
				},
				{
					path:'/index',component:index
				},
				{
					path:'/home',component:home
				},
				{
					path:'/brand',component:brand
				},
				{
					path:'/search',component:search
				},
				{
					path:'/classify',component:classify
				},
				{
					path:'/sign',component:sign
				},
				{
					path:'/buy',component:buy
				},
				{
					path:'/my',component:my
				},
				{
					path:'/login',component:login
				},
				{
					path:'/mk',component:mk
				},
				{
					path:'/payment',component:payment
				},
				{
					path:'/details/:id',component:details
				},
				{
					path:'/*',redirect:'/home'
				}
			]
})