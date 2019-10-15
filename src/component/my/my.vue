<template id="my">
	<main>
		<div class="mytop">
			<router-link to='/home'><span class="iconfont icon-fanhuijiantou topleft"></span></router-link>
			<span class="topmiddle">我的寺库</span>
			<router-link to='/home'><span class="iconfont icon-home_light topright"></span></router-link>
		</div>
		<div class="mylist">
			<ul class="list1">
				<li><router-link to="/login"><span class="people"></span><p>账户<span class="arrow"></span></p></router-link></li>
				<li><span class="oredr"></span><p>订单<span class="arrow"></span></p></li>
				<li><span class="coupon"></span><p class="listborder">红包、优惠券<span class="arrow"></span></p></li>
			</ul>
			<ul class="list2">
				<li><img src="../../assets/images1/myicon04.png" alt="" /><p>我的竞拍<span class="arrow"></span></p></li>
				<li><img src="../../assets/images1/myicon03.png" alt="" /><p class="listborder">我的拍卖券<span class="arrow"></span></p></li>
			</ul>
			<ul class="list3">
				<li><span class="logo"></span><p>关于寺库<span class="arrow"></span></p></li>
				<li><span class="logo"></span><p>营业执照<span class="arrow"></span></p></li>
				<li><span class="logo"></span><p>管理制度<span class="arrow"></span></p></li>
				<li><img src="../../assets/images1/myicon02.png" alt="" /><p>在线客服<span class="arrow"></span></p></li>
				<li><span class="call"></span><p>客服热线&nbsp;:&nbsp;<span class="number">400 875 6789</span><span class="arrow"></span></p></li>
				<li><img src="../../assets/images1/myicon01.png" alt="" /><p class="listborder">海外站购买说明<span class="arrow"></span></p></li>
			</ul>
		</div>
		<div class="myfooter">
			<ul>
				<li><router-link to='/home'><span class="iconfont icon-shouye1"></span><p>首页</p></router-link></li>
				<li><router-link to="/buy"><span class="iconfont icon-shopping"></span><p>购物袋</p></router-link></li>
				<li><router-link to="/my"><span class="iconfont icon-account"></span><p>我的寺库</p></router-link></li>
			</ul>
			<p class="mytext">北京寺库商贸有限公司 联系电话：400 875 6789</p>
			<p class="mytext">地址：北京市东城区朝阳门内大街银河SOHO C座15层</p>
		</div>
	<router-view></router-view>
	</main>
</template>
<script>
	export default {
		name:'my'
	}
</script>

<style>

</style>

<style scoped>
	#my{
		background-color: #f9f9f9;
	}
	.mytop{
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
	.mylist{
		width: 100%;
		background: #f9f9f9;
		padding-top:40px;
		box-sizing: border-box;
	}
	.mylist ul{
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		background: #fff;
		margin:20px 0px;
	}
	.mylist li{
		width: 100%;
		font-size: 16px;
		padding:0px 15px;
		padding-right: 0px;
		line-height: 35px;
		box-sizing: border-box;
	}
	.mylist img{
		width: 31px;
		margin-top: 7px;
	}
	.mylist p{
		float: right;
		width: 88%;
		padding-bottom: 4px;
		line-height: 42px;
		border-bottom:1px solid #bbb;
	}
	.people,.oredr,.coupon,.logo,.call,.arrow{
		width: 31px;
		height: 31px;
		background-image: url('../../assets/images1/myicon.png');
		background-size: 140px 210px;
		display: inline-block;
		margin-top: 7px;
	}
	.people{
		background-position: -73px 208px;
	}
	.oredr{
		background-position: -73px 173px;
	}
	.coupon{
		background-position: -108px 208px;
	}
	.logo{
		background-position: -73px 103px;
	}
	.call{
		background-position: -73px 68px;
	}
	.arrow{
		background-position: -38px 139px;
		float: right;
	}
	.mylist .listborder{
		border-bottom:none;
	}
	.myfooter{
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		border-top: 1px solid #aaa;
		background-color:#f9f9f9 ;
	}
	.myfooter li{
		float: left;
		width: 32%;
		text-align: center;
		margin:2px;
		padding: 10px 0px;
		border: 1px solid #aaa;
		color: #999;
		box-sizing: border-box;
		background-color: #fff;
	}
	.myfooter span{
		font-size: 32px;
	}
	.myfooter p{
		font-size: 12px;
	}
	.myfooter .mytext{
		text-align: center;
		font-size: 13px;
		color: #333;
	}
</style>