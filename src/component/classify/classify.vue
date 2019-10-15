<template id="classify">
	<main>
		<div class="classifytop">
			<router-link to='/home'><span class="iconfont icon-fanhuijiantou topleft"></span></router-link>
			<span class="topmiddle">
				<p class="choose">分类</p>
				<router-link to='/sign'><p>品牌</p></router-link>
			</span>
			<router-link to='/home'><span class="iconfont icon-home_light topright"></span></router-link>
		</div>
		<div class="classifycontent">
			<ul>
				<li v-for="(v,i) in list">
					<p>{{v.title}}</p>
					<span>{{v.msg1}}</span>
					<span>{{v.msg2}}</span>
					<span>{{v.msg3}}</span>
					<span>{{v.msg4}}</span>
					<span>{{v.msg5}}</span>
					<span>{{v.msg6}}</span>
					<span>{{v.msg7}}</span>
					<span>{{v.msg8}}</span>
					<span>{{v.msg9}}</span>
					<span>{{v.msg10}}</span>
					<span>{{v.msg11}}</span>
					<span>{{v.msg12}}</span>
				</li>
			</ul>
		</div>
		<router-view></router-view>
	</main>
</template>
<script>
	export default {
		name:'classify',
		data(){
			return{
				list:''
			}
		},
		mounted(){
	        this.$http.get('./data/classify.json')
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
	
</style>

<style scoped>
	.classifytop{
		width:100%;
		height: 45px;
		padding:0px 15px;
		line-height: 45px;
		background: #fff;
		text-align: center;
		box-sizing: border-box;
		position: fixed;
		top: 0px;
		left: 0px;
		z-index: 2;
		border-bottom: 1px solid #999;
	}
	.topleft{
		float: left;
		font-size: 25px;
	}
	.topmiddle .choose{
		background:#474747;
		color:#fff;
		border: 1px solid #474747;
	}
	.topmiddle p{
		display: inline-block;
		line-height: 25px;
		font-size: 12px;
		width: 38%;
		border: 1px solid #eee;
	}
	.topright{
		float: right;
		font-size: 25px;
	}
	.classifycontent{
		width:100%;
		padding-top:25px;
		text-align: center;
		box-sizing: border-box;
	}
	.classifycontent p{
		width: 100%;
		font-size: 14px;
		color: #333;
		background: #eaeaea;
		padding:10px 0px;
		margin:20px 0px;
	}
	.classifycontent span{
		width: 24%;
		font-size: 12px;
		padding:10px 0px;
		color: #666;
		display: inline-block;
	}
</style>