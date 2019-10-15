<template id="register">
	<main>
		<form action="" class="inform">
			<input type="text" placeholder="手机号/邮箱"><br>
			<input type="password" placeholder="密码" class="pass"><br>
			<input type="submit" value="注册" class="signin">
			<div class="account">
				<span>短信验证登录</span>
				<span>注册不了？</span>
			</div>
			<div class="other">
				<ul>
					<li><img src="../../assets/images1/weixinicon.png" alt=""><br>微信登录</li>
					<li><img src="../../assets/images1/qqicon.png" alt=""><br>QQ登录</li>
					<li><img src="../../assets/images1/baiduicon.png" alt=""><br>百度登录</li>
				</ul>
			</div>
		</form>
	</main>
</template>

<script>
	export default {
		name:'register',
		data(){
			return{
				msg:'register'
			}
		}
	}
</script>

<style scoped>
	.inform{
		width: 100%;
		padding: 0px 15px;
		box-sizing: border-box;
	}
	.inform input{
		width: 100%;
		line-height: 40px;
		margin: 7px 0px;
		border: none;
		border-bottom: 1px solid #ccc;
		outline: none;
		font-size: 18px;
	}
	.inform .pass{
		width: 100%;
	}
	.signin{
		border-radius: 6px;
		background: #333;
		color: #fff;
	}
	.account{
		width: 100%;
		font-size: 15px;
		margin:6px 0px;
		overflow: hidden;
	}
	.account span:nth-child(1){
		float: left;
		color: #f8a120;
	}
	.account span:nth-child(2){
		float: right;
	}
	.other{
		width: 100%;
		overflow: hidden;
		margin:30px 0px;
	}
	.other li{
		float: left;
		width: 33.33%;
	}
	.other img{
		width: 22%;
		margin: 5px 0px;
	}
</style>
