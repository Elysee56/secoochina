<template id="sign">
	<main>
		<div class="signtop">
			<router-link to='/classify'><span class="iconfont icon-fanhuijiantou topleft"></span></router-link>
			<span class="topmiddle">
				<router-link to='/classify'><p>分类</p></router-link>
				<router-link to='/sign'><p class="choose">品牌</p></router-link>
			</span>
			<router-link to='/home'><span class="iconfont icon-home_light topright"></span></router-link>
		</div>
		<div class="signlist">
			<ul>
				<li class="deputy A"><p>A</p></li>
				<li v-for="(v,i) in list1">
					<span>{{v.msg1}}</span><span class="listright">{{v.msg2}}</span>
				</li>
				<li class="deputy B"><p>B</p></li>
				<li v-for="(v,i) in list2">
					<span>{{v.msg1}}</span><span class="listright">{{v.msg2}}</span>
				</li>
				<li class="deputy C"><p>C</p></li>
				<li v-for="(v,i) in list3">
					<span>{{v.msg1}}</span><span class="listright">{{v.msg2}}</span>
				</li>
				<li class="deputy D"><p>D</p></li>
				<li v-for="(v,i) in list4">
					<span>{{v.msg1}}</span><span class="listright">{{v.msg2}}</span>
				</li>
				<li class="deputy E"><p>E</p></li>
				<li v-for="(v,i) in list5">
					<span>{{v.msg1}}</span><span class="listright">{{v.msg2}}</span>
				</li>
				<li class="deputy F"><p>F</p></li>
				<li v-for="(v,i) in list6">
					<span>{{v.msg1}}</span><span class="listright">{{v.msg2}}</span>
				</li>
				<li class="deputy G"><p>G</p></li>
				<li v-for="(v,i) in list7">
					<span>{{v.msg1}}</span><span class="listright">{{v.msg2}}</span>
				</li>
				<li class="deputy H"><p>H</p></li>
				<li v-for="(v,i) in list8">
					<span>{{v.msg1}}</span><span class="listright">{{v.msg2}}</span>
				</li>
				<li class="deputy I"><p>I</p></li>
				<li v-for="(v,i) in list9">
					<span>{{v.msg1}}</span><span class="listright">{{v.msg2}}</span>
				</li>
				<li class="deputy J"><p>J</p></li>
				<li v-for="(v,i) in list10">
					<span>{{v.msg1}}</span><span class="listright">{{v.msg2}}</span>
				</li>
				<li class="deputy K"><p>K</p></li>
				<li v-for="(v,i) in list11">
					<span>{{v.msg1}}</span><span class="listright">{{v.msg2}}</span>
				</li>
				<li class="deputy L"><p>L</p></li>
				<li v-for="(v,i) in list12">
					<span>{{v.msg1}}</span><span class="listright">{{v.msg2}}</span>
				</li>
				<li class="deputy M"><p>M</p></li>
				<li v-for="(v,i) in list13">
					<span>{{v.msg1}}</span><span class="listright">{{v.msg2}}</span>
				</li>
				<li class="deputy N"><p>N</p></li>
				<li v-for="(v,i) in list14">
					<span>{{v.msg1}}</span><span class="listright">{{v.msg2}}</span>
				</li>
				<li class="deputy O"><p>O</p></li>
				<li v-for="(v,i) in list15">
					<span>{{v.msg1}}</span><span class="listright">{{v.msg2}}</span>
				</li>
				<li class="deputy P"><p>P</p></li>
				<li v-for="(v,i) in list16">
					<span>{{v.msg1}}</span><span class="listright">{{v.msg2}}</span>
				</li>
				<li class="deputy Q"><p>Q</p></li>
				<li v-for="(v,i) in list17">
					<span>{{v.msg1}}</span><span class="listright">{{v.msg2}}</span>
				</li>
				<li class="deputy R"><p>R</p></li>
				<li v-for="(v,i) in list18">
					<span>{{v.msg1}}</span><span class="listright">{{v.msg2}}</span>
				</li>
				<li class="deputy S"><p>S</p></li>
				<li v-for="(v,i) in list19">
					<span>{{v.msg1}}</span><span class="listright">{{v.msg2}}</span>
				</li>
				<li class="deputy T"><p>T</p></li>
				<li v-for="(v,i) in list20">
					<span>{{v.msg1}}</span><span class="listright">{{v.msg2}}</span>
				</li>
				<li class="deputy U"><p>U</p></li>
				<li v-for="(v,i) in list21">
					<span>{{v.msg1}}</span><span class="listright">{{v.msg2}}</span>
				</li>
				<li class="deputy V"><p>V</p></li>
				<li v-for="(v,i) in list22">
					<span>{{v.msg1}}</span><span class="listright">{{v.msg2}}</span>
				</li>
				<li class="deputy W"><p>W</p></li>
				<li v-for="(v,i) in list23">
					<span>{{v.msg1}}</span><span class="listright">{{v.msg2}}</span>
				</li>
				<li class="deputy X"><p>X</p></li>
				<li v-for="(v,i) in list24">
					<span>{{v.msg1}}</span><span class="listright">{{v.msg2}}</span>
				</li>
				<li class="deputy Y"><p>Y</p></li>
				<li v-for="(v,i) in list25">
					<span>{{v.msg1}}</span><span class="listright">{{v.msg2}}</span>
				</li>
				<li class="deputy Z"><p>Z</p></li>
				<li v-for="(v,i) in list26">
					<span>{{v.msg1}}</span><span class="listright">{{v.msg2}}</span>
				</li>
				<li class="deputy sup"><p>#</p></li>
				<li v-for="(v,i) in list27">
					<span>{{v.msg1}}</span><span class="listright">{{v.msg2}}</span>
				</li>
			</ul>
		</div>
		<aside class="aside">
			<ul>
				<li>A</li>
				<li>B</li>
				<li>C</li>
				<li>D</li>
				<li>E</li>
				<li>F</li>
				<li>G</li>
				<li>H</li>
				<li>I</li>
				<li>J</li>
				<li>K</li>
				<li>L</li>
				<li>M</li>
				<li>N</li>
				<li>O</li>
				<li>P</li>
				<li>Q</li>
				<li>R</li>
				<li>S</li>
				<li>T</li>
				<li>U</li>
				<li>V</li>
				<li>W</li>
				<li>X</li>
				<li>Y</li>
				<li>Z</li>
				<li>#</li>
				<li><span class="iconfont icon-dingbu" ></span></li>
			</ul>
		</aside>
		<router-view></router-view>
	</main>
</template>
<script>
	export default {
		name:'sign',
		data(){
			return{
				list1:'',
				list2:'',
				list3:'',
				list4:'',
				list5:'',
				list6:'',
				list7:'',
				list8:'',
				list9:'',
				list10:'',
				list11:'',
				list12:'',
				list13:'',
				list14:'',
				list15:'',
				list16:'',
				list17:'',
				list18:'',
				list19:'',
				list20:'',
				list21:'',
				list22:'',
				list23:'',
				list24:'',
				list25:'',
				list26:'',
				list27:''
			}
		},
		mounted(){
	        this.$http.get('./data/sign.json')
			.then((response)=>{
				this.list1=response.data.pros1,
				this.list2=response.data.pros2,
				this.list3=response.data.pros3,
				this.list4=response.data.pros4,
				this.list5=response.data.pros5,
				this.list6=response.data.pros6,
				this.list7=response.data.pros7,
				this.list8=response.data.pros8,
				this.list9=response.data.pros9,
				this.list10=response.data.pros10,
				this.list11=response.data.pros11,
				this.list12=response.data.pros12,
				this.list13=response.data.pros13,
				this.list14=response.data.pros14,
				this.list15=response.data.pros15,
				this.list16=response.data.pros16,
				this.list17=response.data.pros17,
				this.list18=response.data.pros18,
				this.list19=response.data.pros19,
				this.list20=response.data.pros20,
				this.list21=response.data.pros21,
				this.list22=response.data.pros22,
				this.list23=response.data.pros23,
				this.list24=response.data.pros24,
				this.list25=response.data.pros25,
				this.list26=response.data.pros26,
				this.list27=response.data.pros27
			})
			.catch(function (error) {
				console.log(error);
			})
			.then(function () {
				// always executed
			}); 
			
			$(function(){
				$('.aside ul li').eq(27).click(function(){
            		$('html,body').animate({'scrollTop':0}, 500)
            	})
				$('.aside ul li').eq(0).click(function(){
				    var h=$('.A').offset().top-45;
				    $('html,body').animate({'scrollTop':h},500)
				});
				$('.aside ul li').eq(1).click(function(){
				    var h=$('.B').offset().top-45;
				    $('html,body').animate({'scrollTop':h},500)
				});
				$('.aside ul li').eq(2).click(function(){
				    var h=$('.C').offset().top-45;
				    $('html,body').animate({'scrollTop':h},500)
				});
				$('.aside ul li').eq(3).click(function(){
				    var h=$('.D').offset().top-45;
				    $('html,body').animate({'scrollTop':h},500)
				});
				$('.aside ul li').eq(4).click(function(){
				    var h=$('.E').offset().top-45;
				    $('html,body').animate({'scrollTop':h},500)
				});
				$('.aside ul li').eq(5).click(function(){
				    var h=$('.F').offset().top-45;
				    $('html,body').animate({'scrollTop':h},500)
				});
				$('.aside ul li').eq(6).click(function(){
				    var h=$('.G').offset().top-45;
				    $('html,body').animate({'scrollTop':h},500)
				});
				$('.aside ul li').eq(7).click(function(){
				    var h=$('.H').offset().top-45;
				    $('html,body').animate({'scrollTop':h},500)
				});
				$('.aside ul li').eq(8).click(function(){
				    var h=$('.I').offset().top-45;
				    $('html,body').animate({'scrollTop':h},500)
				});
				$('.aside ul li').eq(9).click(function(){
				    var h=$('.J').offset().top-45;
				    $('html,body').animate({'scrollTop':h},500)
				});
				$('.aside ul li').eq(10).click(function(){
				    var h=$('.K').offset().top-45;
				    $('html,body').animate({'scrollTop':h},500)
				});
				$('.aside ul li').eq(11).click(function(){
				    var h=$('.L').offset().top-45;
				    $('html,body').animate({'scrollTop':h},500)
				});
				$('.aside ul li').eq(12).click(function(){
				    var h=$('.M').offset().top-45;
				    $('html,body').animate({'scrollTop':h},500)
				});
				$('.aside ul li').eq(13).click(function(){
				    var h=$('.N').offset().top-45;
				    $('html,body').animate({'scrollTop':h},500)
				});
				$('.aside ul li').eq(14).click(function(){
				    var h=$('.O').offset().top-45;
				    $('html,body').animate({'scrollTop':h},500)
				});
				$('.aside ul li').eq(15).click(function(){
				    var h=$('.P').offset().top-45;
				    $('html,body').animate({'scrollTop':h},500)
				});
				$('.aside ul li').eq(16).click(function(){
				    var h=$('.Q').offset().top-45;
				    $('html,body').animate({'scrollTop':h},500)
				});
				$('.aside ul li').eq(17).click(function(){
				    var h=$('.R').offset().top-45;
				    $('html,body').animate({'scrollTop':h},500)
				});
				$('.aside ul li').eq(18).click(function(){
				    var h=$('.S').offset().top-45;
				    $('html,body').animate({'scrollTop':h},500)
				});
				$('.aside ul li').eq(19).click(function(){
				    var h=$('.T').offset().top-45;
				    $('html,body').animate({'scrollTop':h},500)
				});
				$('.aside ul li').eq(20).click(function(){
				    var h=$('.U').offset().top-45;
				    $('html,body').animate({'scrollTop':h},500)
				});
				$('.aside ul li').eq(21).click(function(){
				    var h=$('.V').offset().top-45;
				    $('html,body').animate({'scrollTop':h},500)
				});
				$('.aside ul li').eq(22).click(function(){
				    var h=$('.W').offset().top-45;
				    $('html,body').animate({'scrollTop':h},500)
				});
				$('.aside ul li').eq(23).click(function(){
				    var h=$('.X').offset().top-45;
				    $('html,body').animate({'scrollTop':h},500)
				});
				$('.aside ul li').eq(24).click(function(){
				    var h=$('.Y').offset().top-45;
				    $('html,body').animate({'scrollTop':h},500)
				});
				$('.aside ul li').eq(25).click(function(){
				    var h=$('.Z').offset().top-45;
				    $('html,body').animate({'scrollTop':h},500)
				});
				$('.aside ul li').eq(26).click(function(){
				    var h=$('.sup').offset().top-45;
				    $('html,body').animate({'scrollTop':h},500)
				});
			})
		}
	}
</script>

<style>
</style>

<style scoped>
	.signtop{
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
	.topmiddle{
		width: 100%;
	}
	.topmiddle p{
		display: inline-block;
		line-height: 25px;
		font-size: 12px;
		width: 38%;
		border: 1px solid #eee;
		box-sizing: border-box;
	}
	.topright{
		float: right;
		font-size: 25px;
	}
	.aside{
		width: 5%;
		height: 100%;
		font-size: 12px;
		text-align: center;
		position: fixed;
		top:45px;
		right:0px;
		background: #474747;
		color: #fff;
	}
	.aside li{
		margin:5px 0px;
	}
	.signlist{
		width: 100%;
		margin-top: 45px;
		box-sizing: border-box;
	}
	.signlist li{
		width: 100%;
		line-height: 35px;
		font-size: 12px;
		color: #777;
		padding-left: 10px;
		padding-right: 25px;
		box-sizing: border-box;
		border-bottom:1px solid #ccc;
	}
	.signlist .deputy{
		background: #eee;
		font-size: 15px;
		font-weight: bold;
		line-height: 30px;
		border-bottom: none;
	}
	.listright{
		float: right;
	}
</style>