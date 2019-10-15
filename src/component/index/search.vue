<template>
	<main id="search">	
		<div class="sear">
			<form action="">
				<span class="iconfont icon-sousuo1 homeicon"></span>
				<input type="text" placeholder="iPhone 11新品|现货发售">
				<router-link to="/home"><span class='cancel'>取消</span>	</router-link>
			</form>
		</div>
		<div class="top">
			<h5>热销推荐</h5>
			<ul>
				<li class="orange"><a href="#">时装周冲刺</a></li>
				<li class="orange"><a href="#">秋季尖货榜单</a></li>
				<li><a href="#">Givenchy</a></li>
				<li><a href="#">Burberry</a></li>
				<li><a href="#">Prada</a></li>
				<li><a href="#">Balenciaga</a></li>
				<li><a href="#">iPhone</a></li>
				<li><a href="#">GUCCI</a></li>
			</ul>
		</div>
		<hr>
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
	</main>
</template>
<script>
	export default {
		name:'search',
		data(){
			return{
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
		}
	}
</script>

<style>
	main{
		overflow: hidden;
	}
	.cancel{
		width:30px;
		font-size:15px;
		line-height:35px;
		float:right;
		padding:0px 10px;
		background-color:#fff;
	}
	.top{
		width:100%;
		padding:0px 15px;
		margin-top:65px;
		box-sizing:border-box;
	}
	h5{
		font-size:15px;
		margin:15px 5px;
	}
	.top ul{
		height:130px;
	}
	.top li{
		font-size: 13px;
		float:left;
		width:30.5%;
		height: 30px;
		line-height:30px;
		background-color:#f8f8f8;
		text-align:center;
		margin:4px 4px;
	}
	.top .orange{
		width:46.5%;
		background-color:#fff;
		border:1px solid orange;
	}
	hr{
		height:10px;
		background-color:#f8f8f8;
		border:none;
	}
	.like{
		width:96%;
		margin:8px auto;
		padding:0px 10px;
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

<style scoped>
	
</style>