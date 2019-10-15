<template id="loginin">
	<main>
		<form action="" class="inform">
			<input type="text" placeholder="手机号"><br>
			<input type="text" placeholder="验证码" class="pass"><button>获取验证码</button><br>
			<input type="submit" value="登录" class="signin">
			<div class="account">
				<span>账号密码登录</span>
				<span>收不到验证码？</span>
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
		name:'loginin',
		data(){
			return{
				msg:'loginin'
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
		width: 64%;
	}
	.inform button{
		width: 33%;
		border: none;
		background: #333;
		color: #fff;
		border-radius: 6px;
		line-height: 40px;
		margin-left: 10px;
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
