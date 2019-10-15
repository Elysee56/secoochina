<template id="mk">
	<main>
		<div class="mktop">
			<router-link to='/home'><span class="iconfont icon-toleft topleft"></span></router-link>
			<span class="topmiddle">MK</span>
			<span class="iconfont icon-menu topright" @click="topshow()"></span>
			<transition name="slide">
				<div class="tophide" v-show="show">
					<ul>
						<li><router-link to="/home"><span class="iconfont icon-home_light"></span>首页</router-link></li>
						<li><router-link to="/buy"><span class="iconfont icon-goods_light"></span>购物袋</router-link></li>
						<li><router-link to="/my"><span class="iconfont icon-xiaolian"></span>我的寺库</router-link></li>
					</ul>
				</div>
			</transition>
			<div class="mksear">
				<form action="">
					<span class="iconfont icon-sousuo1 mkicon"></span>
					<input type="text" placeholder="店内搜索">
				</form>
				<h5>Michael Kors</h5><span class="searright">关注品牌</span>
			</div>
		</div>
		<div class="mkone">
			<img src="../../assets/images1/mk00.jpg" alt="">
		</div>
		<div class="choose">
			<span @click="msg='handbag';add(0)" v-show="show1" :class="{choosenum:0==num}">手提包</span>
			<span @click="msg='shoulderbag';add(1)" v-show="show2" :class="{choosenum:1==num}">单肩/斜挎包</span>
			<span @click="msg='backpack';add(2)" v-show="show3" :class="{choosenum:2==num}">双肩包</span>
		</div>	
			<component :is="msg"></component>
		
		
	</main>
</template>

<script>
	import handbag from './handbag.vue'
	import shoulderbag from './shoulderbag.vue'
	import backpack from './backpack.vue'
	export default {
		name:'mk',
		data(){
			return{
				msg:'handbag',
				show:false,
				show1:true,
				show2:true,
				show3:true,
				num:0
			}
		},
		components:{
			handbag,
			shoulderbag,
			backpack
		},
		methods:{
			topshow(){
				this.show=!this.show
			},
			add(i){
				this.num=i
			}
		}
	}
</script>

<style scoped>
	main{
		overflow: hidden;
	}
	.mktop{
		width:100%;
		height: 120px;
		padding:0px 15px;
		line-height: 40px;
		background: #fff;
		text-align: center;
		box-sizing: border-box;
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
	.tophide{
		width: 32%;
		background-color: #fff;
		position: absolute;
		right:8px;
		top:38px;
		z-index: 1;
	}
	.tophide ul{
		width: 100%;
	}
	.tophide span{
		font-size:25px;
		margin:0px 10px;
	}
	.tophide li{
		width: 90%;
		height: 40px;
		font-size: 15px;
		text-align: left;
		margin-left: 5px;
		border-bottom: 1px solid #ccc;
	}
	.slide-enter-active{
		animation: rightenter 1s;
	}
	.slide-leave-active{
		animation: rightleave 1s;
	}
	@keyframes rightenter{
		0%{
			right: -120px;
		}
		100%{
			right: 8px;
		}
	}
	@keyframes rightleave{
		0%{
			right: 8px;
		}
		100%{
			right: -120px;
		}
	}
	.mksear{
		width: 100%;
		height: 30px;
		line-height: 30px;
		background-color: #f7f7f7;
	}
	.mkicon{
		font-size: 20px;
		font-weight: bold;
		color: #999;
	}
	.mksear input{
		width: 85%;
		background: #f7f7f7;
		line-height: 26px;
		padding-left: 5px;
		border: none;
		outline: none;
	}
	.mkone{
		width: 100%;
		margin-top: 120px;
	}
	.mksear h5{
		font-weight: bold;
		font-size: 16px;
		float: left;
		margin-top:10px;
	}
	.searright{
		float: right;
		background-color: #fdb71c;
		color: #fff;
		padding:1px 10px;
		font-size: 12px;
		margin-top:8px;
	}
	.mkone img{
		width: 100%;
	}
	.choose{
		width: 100%;
		border-bottom: 1px solid #ccc;
		padding:10px 15px;
		box-sizing: border-box;
	}
	.choose span{
		width: 32%;
		text-align: center;
		font-size: 16px;
		display: inline-block;
	}
	.choosenum{
		color: #f8a120;
	}
</style>
