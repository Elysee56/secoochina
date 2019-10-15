<template id="brand">
	<main>
		<div class="brandtop">
			<router-link to='/home'><span class="iconfont icon-back_android_light topleft"></span></router-link>
			<span class="topmiddle">品牌优选</span>
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
		</div>
		<div class="brandlist">
			<h5>品牌优选</h5>
			<ul>
      			<li v-for="(v,i) in list">
      				<div class="listimg"><img :src="v.images"></div>
					<h6>{{v.title}}</h6>
					<p>查看更多</p>
				</li>
      		</ul>
		</div>
		<div class="brandlist2">
			<ul>
      			<li v-for="(v,i) in list2">
      				<img :src="v.images">
					<p>{{v.title}}</p>
				</li>
      		</ul>
		</div>
	<router-view></router-view>
	</main>
</template>
<script>
	export default {
		name:'brand',
		data(){
			return{
				list:'',
				list2:'',
				show:false
			}
		},
		mounted(){
	        this.$http.get('./data/brand.json')
			.then((response)=>{
				this.list=response.data.pros,
				this.list2=response.data.pros2
			})
			.catch(function (error) {
				console.log(error);
			})
			.then(function () {
				// always executed
			}); 
		},
		methods:{
			topshow(){
				this.show=!this.show
			}
		}
	}
</script>

<style scoped>
	.brandtop{
		width:100%;
		height: 40px;
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
	.brandlist{
		width: 100%;
		margin-top:60px;
		padding:0px 15px;
		text-align: center;
		box-sizing: border-box;
	}
	.brandlist h5{
		font-weight: bold;
		font-size: 20px;
		margin:10px 0px;
	}
	.brandlist h6{
		font-size: 16px;
		margin:8px 0px;
	}
	.brandlist p{
		font-size: 12px;
		border: 1px solid #000;
		padding:3px 0px;
		width: 50%;
		margin-left: 25%;
	}
	.brandlist .listimg{
		width: 100%;
		height: 0px;
		padding-bottom: 122.05%;
	}
	.brandlist img{
		width: 100%;
	}
	.brandlist li{
		float: left;
		width: 50%;
		padding:5px;
		margin:10px 0px;
		box-sizing: border-box;
	}
	.brandlist2{
		width: 100%;
		padding:0px 15px;
		text-align: center;
		box-sizing: border-box;
	}
	.brandlist2 li{
		width: 33.33%;
		float: left;
		margin:10px 0px;
		padding:0px 1px;
		box-sizing: border-box;
	}
	.brandlist2 img{
		width: 100%;
	}
	.brandlist2 p{
		font-size: 12px;
		margin:5px 0px;
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
</style>

