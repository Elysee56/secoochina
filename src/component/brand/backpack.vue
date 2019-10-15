<template id="backpack">
	<main>
		<ul class="baglist">
			<li v-for="(v,i) in list3">
				<img :src="v.img">
				<h6>Michael Kors</h6>
				<h6>{{v.title}}</h6>
				<p>{{v.price}}</p>
				<p class="mes">{{v.msg}}</p>
			</li>
		</ul>
	</main>
</template>

<script>
	export default{
		name:'backpack',
		data(){
			return{
				list3:''
			}
		},
		mounted(){
			this.$http.get('./data/mk.json')
			.then((response)=>{
			this.list3=response.data.pros3
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

<style scoped>
	.baglist{
		width:96%;
		margin:8px auto;
		padding:0px 10px;
	}
	.baglist li{
		width:46%;
		float:left;
		margin:4px 4px;
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
</style>
