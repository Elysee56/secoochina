<template>
	<main id="home">
		<router-link to='/search'>
			<div class="sear">
				<form action="">
					<span class="iconfont icon-sousuo1 homeicon"></span>
					<input type="text" placeholder="iPhone 11新品|现货发售">
				</form>
			</div>
		</router-link>
      	<swiper :options="swiperOption1">
		    <swiper-slide><router-link to="/mk"><img src='../../assets/images1/banner01.jpg'><p class="bantext">MK经典托特包 | 799元限量抢</p></router-link></swiper-slide>
		    <swiper-slide><img src='../../assets/images1/banner02.webp'><p class="bantext">寺库排行榜 | 购物权威指南</p></swiper-slide>
		    <swiper-slide><img src='../../assets/images1/banner03.webp'></swiper-slide>
		    <swiper-slide><img src='../../assets/images1/banner04.webp'><p class="bantext">纪梵希 | 19秋冬新款 5折起</p></swiper-slide>
		    <swiper-slide><img src='../../assets/images1/banner05.webp'></swiper-slide>
		    <swiper-slide><img src='../../assets/images1/banner06.webp'><p class="bantext">秋冬新品 | 低至1999元</p></swiper-slide>
		    <div class="swiper-pagination" slot="pagination"></div>
      	</swiper>
      	<div class="midnav">
      		<ul>
      			<li class="block"><p>热门大牌</p><p class="engtext">Popular Brands</p></li>
      			<li class="line"><span></span></li>	
      			<li class="block"><p>免息分期</p><p class="engtext">Interest Free</p></li>
      			<li class="line"><span></span></li>
      			<li class="block"><p>今日折扣</p><p class="engtext">Today's Special</p></li>
      		</ul>
      		<ul>
      			<li class="block"><p>新品到货</p><p class="engtext">New Arrival</p></li>
      			<li class="line"><span></span></li>	
      			<li class="block"><p>中古二手</p><p class="engtext">Vintage</p></li>
      			<li class="line"><span></span></li>
      			<li class="block"><p>欧洲直邮</p><p class="engtext">Europe Shopping</p></li>
      		</ul>
      	</div>
      	<div class="one">
      		<ul>
      			<li><img src='../../assets/images1/one01.gif'></li>
      			<li><img src='../../assets/images1/one02.webp'></li>
      		</ul>
      	</div>
      	<div class="two">
	      	<swiper :options="swiperOption2" class="htwo">
		        <swiper-slide><p>HOT SALE 秋季男装单品</p><img src='../../assets/images1/one03.webp'></swiper-slide>
		        <swiper-slide><p>HOT SALE 秋季女装单品</p><img src='../../assets/images1/one04.webp'></swiper-slide>
		        <div class="swiper-pagination" slot="pagination"></div>
		    </swiper>
      	</div>
      	<div class="three">
      		<ul>
      			<li v-for="(v,i) in list">
					<img :src="v.images">
				</li>
      		</ul>
      	</div>
      	<div class="four">
      		<ul>
      			<li v-for="(v,i) in list1">
      				<h4>{{v.title}}</h4>
					<p>{{v.msg}}</p>
					<img :src="v.images1">
				</li>
      		</ul>
      	</div>
      	<div class="like">
			<h5>猜你喜欢</h5>
			<ul>
				<li v-for="(v,i) in list2">
					<img :src="v.img">
					<h6><b>{{v.brand}}</b></h6>
					<h6>{{v.title}}</h6>
					<p>{{v.price}}</p>
					<p class="del"><del>{{v.cost}}</del></p>
					<p class="mes">{{v.msg}}</p>
				</li>
			</ul>
		</div>
		<div class="homenav">
			<ul>
				<li class="active" @click="backTop()">
					<router-link to='/home' v-show="show"><span class="iconfont icon-shouye"></span><br>首页</router-link>
					<router-link to='/home' v-show="top"><span class="iconfont icon-dingbu"></span><br>返回顶部</router-link>
				</li>
				<li><router-link to='/brand'><span class="iconfont icon-lipinka"></span><br>品牌</router-link></li>
				<li><router-link to='/classify'><span class="iconfont icon-mulu"></span><br>分类</router-link></li>
				<li><router-link to='/buy'><span class="iconfont icon-gouwu"></span><br>购物袋</router-link></li>
				<li><router-link to='/my'><span class="iconfont icon-xiaolian"></span><br>我的</router-link></li>
			</ul>
		</div>
		<router-view></router-view>
	</main>
</template>
<script>
	export default {
		name:'home',
    	data(){
	      	return{
	      		list:'',
	      		list1:'',
	      		list2:'',
	      		show:true,
	      		top:false,
	        	swiperOption1: {
		          	spaceBetween: 30,
		          	centeredSlides: true,
		          	autoplay: {
			            delay: 2500,
			            disableOnInteraction: false
		          	},
		          	pagination: {
			            el: '.swiper-pagination',
			            clickable: true
		          	},
		          	navigation: {
			            nextEl: '.swiper-button-next',
			            prevEl: '.swiper-button-prev'
		          	}
	        	},
	        	swiperOption2: {
		          	effect: 'coverflow',
		          	grabCursor: true,
		          	centeredSlides: true,
		          	slidesPerView: 'auto',
		          	coverflowEffect: {
			            rotate: 50,
			            stretch: 0,
			            depth: 100,
			            modifier: 1,
			            slideShadows : true
		          	},
		          	pagination: {
		            	el: '.swiper-pagination'
		          	}
		        },
	        	
	      	}
	    },
		mounted(){
			
	        this.$http.get('./data/home.json')
			.then((response)=>{
				this.list=response.data.pros,
				this.list1=response.data.pros1,
				this.list2=response.data.pros2
			})
			.catch(function (error) {
				console.log(error);
			})
			.then(function () {
				// always executed
			}); 
			window.addEventListener("scroll", this.handleScroll, true);
	  },
	  methods:{
	  	handleScroll() {
       		let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
       		scrolltop > 500 ? (this.show = false) : (this.show = true);
      		scrolltop > 500 ? (this.top = true) : (this.top = false);
    	},
		backTop() {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        }
	  }
	   
	}
</script>

<style>
	#home{
		overflow:hidden;
	}
	.sear{
		width:100%;
		font-size:20px;
		padding:10px 15px;
		box-sizing:border-box;
		background-color:#fff;
		position:fixed;
		top:0px;
		left:0px;
		z-index:2;
	}
	.sear span{
		margin-left: 10px;
		
	}
	.sear form{
		background-color:#f5f5f5;
	}
	.sear input{
		border:none;
		font-size:15px;
		background-color:#f5f5f5;
		line-height:30px;
		margin:0px 8px;
		outline:none;
	}
	.sear .homeicon{
		font-size:18px;
	}
	.homenav{
		width:100%;
		height:56px;
		background-color:#fff;
		position:fixed;
		left:0px;
		bottom:0px;
		text-align:center;
		z-index:2;
	}
	.homenav li{
		width:20%;
		float:left;
		font-size:12px;
		margin:3px 0px;
	}
	.homenav span{
		font-size:28px;
	}
	.homenav .active span{
		color:#f8a120;
	}
	.homenav .active a{
		color:#f8a120;
	}
	.swiper-wrapper{
		height:0px;
		padding-bottom:86.66%;
		margin-top:52px;
	}
	.swiper-wrapper img{
		width:100%;
	}
	.swiper-pagination-bullet-active{
		background-color:#fff;
	}
	.swiper-pagination-bullet{
		background:#fff;
	}
	.bantext{
		width:100%;
		position:relative;
		top:-55px;
		left:0px;
		z-index:1;
		text-align:center;
		color:#fff;
		font-size:20px;
	}
	.midnav{
		width:100%;
	}
	.midnav ul{
		width:100%;
		margin:20px 0px;
		overflow:hidden;
	}
	.midnav li{
		float:left;
		font-size:15px;
		text-align:center;
		padding:0px 5px;
	}
	.block{
		width:28%;
	}
	.line{
		width:1%;
	}
	.line span{
		width:1px;
		height:35px;
		margin:0px 5px;
		background:#ccc;
		display:inline-block;
		transform:rotate(25deg);
	}
	.engtext{
		font-size:12px;
		color:#999;
	}
	.one{
		width:100%;
		background:#f5f5f5;
		padding:5px 0px;
	}
	.one li{
		margin:5px 0px;
	}
	.one img{
		width:100%;
	}
	.two{
		width:100%;
		margin-top:-40px;
	}
	.two img{
		width:100%;
	}
	.two p{
		font-size:20px;
		margin:10px 0px;
	}
	.htwo{
		height: 300px;
	}
	.three{
		width:100%;
	}
	.three img{
		width:100%;
	}
	.four{
		width:100%;
		text-align: center;
		padding:20px 0px;
	}
	.four img{
		width:92%;
	}
	.four h4{
		font-weight: bold;
		font-size: 18px;
		margin:5px 15px;
		margin-top: 20px;;
		text-align: left;
	}
	.four p{
		font-size: 13px;
		margin:5px 15px;
		text-align: left;
	}
	.like{
		width:96%;
		margin:8px auto;
		padding:0px 10px;
		margin-bottom: 60px;
	}
	.like ul{
		width: 100%;
		overflow: hidden;
	}
	.like li{
		width:46%;
		float:left;
		margin:4px 4px;
	}
	.like li img{
		width:100%;
	}
	.like h5{
		font-size: 18px;
		font-weight: bold;
	}
	.like h6{
		margin:10px;
	}
	.like p{
		margin-left:10px;
	}
	.like .del{
		font-size: 13px;
		color: #aaa;
	}
	.like .mes{
		font-size:12px;
		margin:10px;
		color:#8b572a;
	}
</style>

<style scoped>
	.swiper-slide {
	    width: 80%;
	}
	.swiper-slide:nth-child(2n) {
	    width: 80%;
	}
</style>