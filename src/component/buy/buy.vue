<template id="buy">
	<main>
	    <!-- <h1>增加{{this.$store.state.num}}</h1>
		<h2 @click='add()'>点击</h2> -->
		<div class="buytop">
			<router-link to='/home'><span class="iconfont icon-toleft topleft"></span></router-link>
			<span class="topmiddle">购物袋</span>
		</div>
		<div class="buyone">
			<img src="../../assets/images1/buy.jpg" alt="">
			<p>千万好物等待您的挑选</p>
		</div>
		<div class="like">
			<h5>猜你喜欢</h5>
			<ul>
				<li v-for="(v,i) in list">
					<img :src="v.img">
					<h6>{{v.brand}}</h6>
					<h6>{{v.title}}</h6>
					<p>{{v.price}}</p>
					<p class="mes">{{v.msg}}</p>
				</li>
			</ul>
		</div>
	<router-view></router-view>
	</main>
</template>
<script>
	export default {
		name:'buy',
		data(){
			return{
				// num:0
				list:''
			}
		},
		mounted(){
			this.$http.get('./data/my.json')
			.then((response)=>{
			this.list=response.data.pros
			})
			.catch(function (error) {
			console.log(error);
			})
			.then(function () {
			// always executed
			}); 
		},
		methods:{
			// add(){
			// 	this.$store.commit('add',2)
			// }
		}
	}
</script>

<style>

</style>

<style scoped>
	main{
		background-color: #f9f9f9;
		overflow: hidden;
	}
	.buytop{
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
		text-align: center;
		font-weight: bold;
		margin-left: -30px;
	}
	.topright{
		float: right;
		font-weight: bold;
		font-size: 25px;
	}
	.buyone{
		width: 100%;
		font-size: 14px;
		background: #fff;
		text-align: center;
		margin-top: 40px;
		padding-bottom: 40px;
		border-bottom: 1px solid #eee;
	}
	.buyone img{
		width: 60%;
	}
	.like{
		width:96%;
		margin:8px auto;
		padding:0px 10px;
		background-color: #fff;
	}
	.like li{
		width:46%;
		float:left;
		margin:4px 4px;
	}
	.like li img{
		width:100%;
	}
	.like h6{
		margin:10px;
		text-align: left;
	}
	.like h5{
		margin:10px;
		padding-top:15px;
		text-align: left;
		background: #fff;
		font-weight: bold;
		font-size: 15px;
	}
	.like p{
		margin-left:10px;
	}
	.like .mes{
		font-size:12px;
		margin:10px;
		color:#8b572a;
	}
</style>