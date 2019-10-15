<template id="login">
	<main>
		<div class="logintop">
			<router-link to='/my'><span class="iconfont icon-fanhuijiantou topleft"></span></router-link>
			<span class="topmiddle">登录 / 注册</span>
			<router-link to='/home'><span class="iconfont icon-home_light topright"></span></router-link>
		</div>
		<div class="choose">
			<span @click="msg='loginin';add(0)" v-show="show1" :class="{choosecolor:0==num}">登录</span>
			<span @click="msg='register';add(1)" v-show="show2" :class="{choosecolor:1==num}">注册</span>
			<component :is="msg"></component>
		</div>
	</main>
</template>
<script>
	import register from './register.vue'
	import loginin from './loginin.vue'
	export default {
		name:'login',
		data(){
			return{
				msg:'loginin',
				show1:true,
				show2:true,
				num:0
			}
		},
		components:{
			loginin,
			register
		},
		methods:{
			add(i){
				this.num=i
			}
		}
	}
</script>
<style scoped>
	.logintop{
		width:100%;
		height: 40px;
		padding:0px 15px;
		line-height: 40px;
		background: #fff;
		text-align: center;
		box-sizing: border-box;
		border-bottom: 1px solid #ccc;
		position: fixed;
		top: 0px;
		left: 0px;
		z-index: 2;
	}
	.topleft{
		float: left;
		font-size: 25px;
		font-weight: bold;
	}
	.topmiddle{
		font-size: 16px;
	}
	.topright{
		float: right;
		font-weight: bold;
		font-size: 25px;
	}
	.choose{
		width: 100%;
		margin-top:140px;
		text-align: center;
		font-size: 18px;
	}
	.choose span{
		font-size: 20px;
		margin:0px 10px;
		padding-bottom: 5px;
	}
	.choosecolor{
		color: #f8a120;
	}
	/* .choose span:nth-child(1){
		color: #f8a120;
		border-bottom: 1px solid #f8a120;
	} */
</style>