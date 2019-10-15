import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './assets/js/router.js'
import Mint from 'mint-ui'
Vue.use(Mint)
import '../node_modules/mint-ui/lib/style.css'
import axios from 'axios'
Vue.prototype.$http = axios
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
import Vuex from 'vuex'
Vue.use(Vuex)
import $ from 'jquery'
import './assets/font/iconfont.css'

const store=new Vuex.Store({
	state:{
		num:0
	},
	mutations:{
		add(state,n){
			state.num=state.num+n
		}
	}
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
