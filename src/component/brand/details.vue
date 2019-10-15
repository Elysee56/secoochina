<template id="details">
	<main>
		<div class="detailstop">
			<router-link to='/mk'><span class="iconfont icon-fanhuijiantou topleft"></span></router-link>
			<ul class="topmiddle">
				<li @click="add(0)" :class="{topnum:0==num}">商品</li>
				<li @click="add(1)" :class="{topnum:1==num}">评论</li>
				<li @click="add(2)" :class="{topnum:2==num}">详情</li>
				<li @click="add(3)" :class="{topnum:3==num}">推荐</li>
			</ul>
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
		<div class="content">
			<div class="oneimg"><img src="../../assets/images1/details01.jpg" alt="" /></div>
			<h5>{{cost}}</h5>
			<p class="de0">{{brand}}</p>
			<p class="de1">{{msg1}}</p>
			<p class="de2">{{msg2}}</p>
			<p class="de3">{{msg3}}</p>
			<ul class="de4">
				<li><span class="de4left">库支票分期</span><img src="../../assets/images1/icon-right.png" alt=""><span class="de4right">月供{{price}}期</span></li>
				<li><span class="de4left">到店自提</span><img src="../../assets/images1/icon-right.png" alt=""><span class="de4right">查看店铺地址</span></li>
			</ul>
			<div class="color">
				<span>颜色</span><button>{{color1}}</button><button>{{color2}}</button>
			</div>
			<div class="information">
				<h5>商品信息</h5>
				<p>商品编号<span class="pronumber">{{info1}}</span></p>
				<p>产地<span>{{info2}}</span></p>
				<p>尺寸<span>{{info3}}</span></p>
				<p>材质<span>{{info4}}</span></p>
			</div>
			<div class="evaluate">
				<h5>用户评价<img src="../../assets/images1/icon-right.png" alt=""><span>综合评分5.0</span></h5>
				<ul>
					<li>
						<p>abc ★★★★★</p>
						<p>使用感不错，很喜欢这种质感</p>
						<p>2019.10.01</p>
					</li>
					<li>
						<p>def ★★★★★</p>
						<p>看起来很精致漂亮呀</p>
						<p>2019.09.28</p>
					</li>
				</ul>
			</div>
			<div class="detail">
				<h5>商品详情</h5>
				<ul>
					<li><img src="../../assets/images1/details01.jpg" alt="" /></li>
					<li><img src="../../assets/images1/details02.jpg" alt="" /></li>
					<li><img src="../../assets/images1/details03.jpg" alt="" /></li>
					<li><img src="../../assets/images1/details04.jpg" alt="" /></li>
					<li><img src="../../assets/images1/details05.jpg" alt="" /></li>
					<li><img src="../../assets/images1/details06.jpg" alt="" /></li>
					<li><img src="../../assets/images1/details07.jpg" alt="" /></li>
					<li><img src="../../assets/images1/details08.jpg" alt="" /></li>
					<li><img src="../../assets/images1/details09.jpg" alt="" /></li>
					<li><img src="../../assets/images1/details10.jpg" alt="" /></li>
					<img src="../../assets/images1/details00.png" alt="" />
				</ul>
			</div>
			<div class="recommend">
				<h5>-精品推荐-</h5>
				<ul class="baglist">
					<li v-for="(v,i) in list1">
						<img :src="v.img">
						<h6>Michael Kors</h6>
						<h6>{{v.title}}</h6>
						<p>{{v.price}}</p>
						<p class="mes">{{v.msg}}</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="footer">
			<ul>
				<li class="foo1"><span class="iconfont icon-xiaolian"></span><br>客服</li>
				<li class="foo2"><router-link to='/buy'><span class="iconfont icon-goods_light"></span><br>购物袋</router-link></li>
				<li class="foo3">加入购物袋</li>
				<li class="foo4"><router-link to='/payment'>立即购买</router-link></li>
			</ul>
			<!--<transition name="slideup">
				<div class="bottomhide" v-show="bottomshow">
					<div><img src="../../assets/images1/details01.jpg" alt="" /><span>{{cost}}</span><span>×</span></div>
					<div><p>颜色</p></div>
				</div>
			</transition>-->
		</div>
	</main>
</template>

<script>
	export default {
		name:'details',
		data(){
			return{
				show:false,
				list1:'',
				cost:'',
				brand:'',
				msg1:'',
				msg2:'',
				msg3:'',
				price:'',
				color1:'',
				color2:'',
				info1:'',
				info2:'',
				info3:'',
				info4:'',
				num:0
				
			}
			
		},
		mounted(){
			this.$http.get('./data/mk.json')
			.then((response)=>{
			this.list1=response.data.pros1
			})
			.catch(function (error) {
			console.log(error);
			})
			.then(function () {
			// always executed
			}); 
			
			$(function(){
				$('.topmiddle li').eq(0).click(function(){
				    var h=$('.oneimg').offset().top-40;
				    $('html,body').animate({'scrollTop':h},500)
				});
				$('.topmiddle li').eq(1).click(function(){
				    var h=$('.evaluate').offset().top-40;
				    $('html,body').animate({'scrollTop':h},500)
				});
				$('.topmiddle li').eq(2).click(function(){
				    var h=$('.detail').offset().top-40;
				    $('html,body').animate({'scrollTop':h},500)
				});
				$('.topmiddle li').eq(3).click(function(){
				    var h=$('.recommend').offset().top-40;
				    $('html,body').animate({'scrollTop':h},500)
				})
			});
			
			if(this.$route.params.id==0){
				this.cost='￥1208',
				this.brand='MICHAEL KORS',
				this.msg1='MICHAEL KORS 2019春夏包袋 女包 小号风琴包手提包30S9LM9M6T',
				this.msg2='十一国庆假期期间，订单发货有部分延迟',
				this.msg3='大陆货源 17点前下单，预计72小时内送达',
				this.price='￥101.85×12',
				this.color1='黑色',
				this.color2='海军蓝',
				this.info1='29820213',
				this.info2='印度尼西亚',
				this.info3='包体最长为22cm',
				this.info4='皮质'
			}else if(this.$route.params.id==1){
				this.cost='￥4600',
				this.brand='MICHAEL KORS',
				this.msg1='MICHAEL KORS 2019春夏包袋 女包 小号风琴包手提包30F8GM9T3T',
				this.msg2='十一国庆假期期间，订单发货有部分延迟',
				this.msg3='大陆货源 17点前下单，预计72小时内送达',
				this.price='￥383.33×12',
				this.color1='黑色',
				this.color2='亮红色',
				this.info1='29820017',
				this.info2='越南',
				this.info3='长*高*深 约32cm*14cm*26cm',
				this.info4='皮质'
			}
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
		background-color: #f7f7f7;
	}
	.detailstop{
		width:100%;
		height: 40px;
		padding:0px 15px;
		line-height: 40px;
		background: #f7f7f7;
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
		text-align: center;
	}
	.topmiddle li{
		float: left;
		width:21%;
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
	.content{
		width: 100%;
		background: #fff;
	}
	.content h5{
		font-weight: bold;
		font-size: 22px;
		margin:10px 0px;
		padding:0px 15px;
		box-sizing: border-box;
	}
	.content .oneimg{
		width: 100%;
		margin-top:40px;
		border-bottom: 1px solid #ccc;
	}
	.oneimg img{
		width: 100%;
	}
	.de0,.de1,.de2,.de3,.color{
		padding:0px 15px;
		box-sizing: border-box;
	}
	.content .de0{
		font-weight: bold;
		font-size: 20px;
		color: #bea48a;
		margin:5px 0px;
	}
	.content .de1{
		font-weight: bold;
		font-size: 18px;
		color: #000;
		margin:5px 0px;
	}
	.content .de2{
		font-size: 15px;
		color: #999;
		margin:5px 0px;
	}
	.content .de3{
		font-size: 12px;
		color: #000;
		margin-top:15px;
	}
	.content .de4{
		width:100%;
		margin:10px 0px;
		border-top: 1px solid #ccc;
	}
	.content .de4 li{
		line-height: 40px;
		border-bottom: 1px solid #ccc;
		padding:0px 15px;
		box-sizing: border-box;
	}
	.de4left{
		font-weight: bold;
	}
	.de4right{
		float: right;
		font-size: 15px;
		margin-right: 10px;
	}
	.de4 img{
		width: 8px;
		float: right;
		padding:12px 0px;
		box-sizing: border-box;
	}
	.color{
		font-weight: bold;
		padding:10px 15px;
		border-bottom: 1px solid #ccc;
	}
	.color span{
		margin-right: 40px;
	}
	.color button{
		width: 20%;
		line-height: 24px;
		margin:0px 10px;
		background-color: #fff;
		outline: none;
		border:1px solid #000;
	}
	.information{
		padding:15px 0px;
	}
	.information p{
		padding: 5px 15px;
	}
	.information span{
		margin-left: 50px;
	}
	.information .pronumber{
		margin-left: 20px;
	}
	.evaluate h5{
		padding:20px 15px;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
	}
	.evaluate img{
		float: right;
		width: 8px;
		padding-top: 7px;
	}
	.evaluate p{
		padding:5px 15px;
		color: #333;
		font-size: 14px;
	}
	.evaluate span{
		float: right;
		font-weight: normal;
		font-size: 15px;
		line-height: 30px;
		margin-right: 10px;
	}
	.evaluate li{
		padding:15px 0px;
		border-bottom: 1px solid #ccc;
	}
	.detail img{
		width: 100%;
	}
	.detail li{
		padding:0px 20px;
	}
	.recommend{
		background: #fff;
	}
	.recommend h5{
		text-align: center;
		font-weight: normal;
		font-size: 18px;
		margin:0px;
		padding:15px;
		background: #f7f7f7;
	}
	.baglist{
		width:100%;
		background-color: #fff;
		box-sizing: border-box;
		margin-bottom: 50px;
	}
	.baglist{
		overflow: hidden;
	}
	.baglist li{
		width:50%;
		float:left;
		border-right: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		background-color: #fff;
		box-sizing: border-box;
	}
	.baglist li img{
		width:100%;
	}
	.baglist h6{
		margin:10px;
	}
	.baglist p{
		margin-left:10px;
	}
	.baglist .mes{
		font-size:12px;
		margin:10px;
		color:#8b572a;
	}
	.footer{
		width: 100%;
		height: 50px;
		position: fixed;
		bottom: 0px;
		left: 0px;
		background-color: #fff;
	}
	.footer li{
		float: left;
		padding:5px;
		box-sizing: border-box;
	}
	.foo1{
		border-right: 1px solid #ccc;
	}
	.foo1,.foo2{
		width: 20%;
		font-size: 12px;
		text-align: center;
	}
	.foo1 span,.foo2 span{
		font-size: 23px;
	}
	.foo3,.foo4{
		width: 30%;
		line-height: 40px;
		text-align: center;
	}
	.foo3{
		background: #111;
		color: #fff;
	}
	.foo4{
		background: #f8a120;
		color: #fff;
	}
	.topnum{
		color: #f8a120;
	}
</style>
