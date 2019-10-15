<template id='payment'>
	<main>
		<div class="buytop">
			<router-link to='/home'><span class="iconfont icon-toleft topleft"></span></router-link>
			<span class="topmiddle">购物袋</span>
			<span class="topright">编辑</span>
		</div>
		<div class="buyone">
			<ul>
				<li v-for="(v,i) in list1">
					<div class="payleft">
						<span class="iconfont icon-weixuanzhongyuanquan circle"></span><img :src="v.img1">
					</div>
					<div class="payright">
						<p>{{v.brand1}}</p>
						<p>{{v.title1}}</p>
						<p>颜色：{{v.color}}</p>
						<div class="paybottom">
							<span>￥{{v.cost1}}</span>
							<span class="number1">
								<button @click="reduce(i)">-</button>{{v.num}}<button @click="increase(i)">+</button>
							</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="bottom">
			<div class="bottomleft"><span class="iconfont icon-weixuanzhongyuanquan circle"></span><p>全选</p></div>
			<div class="bottomright">￥{{allcost}}<span>去结算({{allnum}})</span></div>
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
		name:'payment',
		data(){
			return{
				list:'',
				list1:'',
				allcost:0,
				allnum:0
			}
		},
		mounted(){
			this.$http.get('./data/my.json')
			.then((response)=>{
			this.list=response.data.pros,
			this.list1=response.data.pros1
			})
			.catch(function (error) {
			console.log(error);
			})
			.then(function () {
			// always executed
			}); 
		},
		methods:{
			reduce(i){
				this.list1[i].num--
			},
			increase(i){
				this.list1[i].num++
			}
		}
	}
</script>


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
	}
	.topright{
		float: right;
		font-size: 15px;
	}
	.buyone{
		width: 100%;
		font-size: 14px;
		background: #fff;
		margin-top: 40px;
		border-bottom: 1px solid #eee;
		overflow: hidden;
	}
	
	.buyone li{
		overflow: hidden;
		padding:20px 0px;
		border-bottom: 1px solid #ccc;
	}
	.buyone img{
		width: 70%;
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
	.payleft{
		float: left;
		width: 40%;
		position: relative;
	}
	.payleft span{
		font-weight: bold;
		font-size: 20px;
		position: absolute;
		top:50%;
		left: 10px;
		margin-top:-10px;
	}
	.payleft img{
		margin-left: 30px;
	}
	.payright{
		float: right;
		width: 60%;
		font-size: 13px;
		margin-top:10px;
		padding-right: 15px;
		box-sizing: border-box;
	}
	.payright .paybottom{
		margin-top: 20px;
	}
	.paybottom .number1{
		float: right;
		border: 1px solid #ccc;
	}
	.paybottom .number1 button{
		background: #fff;
		border: none;
		outline: none;
		margin:5px 10px;
	}
	.bottom{
		width: 100%;
		height: 50px;
		position: fixed;
		bottom: 0px;
		left: 0px;
		background: #fff;
	}
	.bottomleft{
		width: 10%;
		float: left;
		text-align: center;
		margin-top:5px;
	}
	.bottomleft span{
		font-size: 20px;
		font-weight: bold;
	}
	.bottomleft p{
		font-size: 13px;
	}
	.bottomright{
		float: right;
		line-height: 50px;
	}
	.bottomright span{
		background: #ccc;
		padding:15px 30px;
		margin-left: 20px;
	}
</style>