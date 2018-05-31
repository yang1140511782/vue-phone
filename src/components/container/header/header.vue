<template>
	<div class="header">
		<div>
			<span class="fa fa-bars bar" @click="change"></span>
			<span class="title">{{title}}</span>
			<span class="fa fa-user-o user" @click="login"></span>
			<span class="city" @click="getCity">成都<i class="fa fa-sort-desc"></i></span>
		</div>
		<!-- 点击显示的地域信息 -->
		<city />
	</div>
</template>

<script>
import city from "@/components/container/header/city";
	export default {
		props : ["flag", "change"],
		data(){
			return {
				title : '卖座电影'
			}
		},
		components : {
			city
		},
		mounted(){
			this.$router.beforeEach((to, from, next)=>{
				switch (to.name) {
					case "Detail":
						this.title = "影片详情"
						break;
					case "index":
						this.title = "卖座电影"
						break;
					case "film":
						this.title = "卖座电影"
						break;
					case "my":
						this.title = "我的"
						break;
					case "shopping":
						this.title = "卖座商城"
						break;
					case "card":
						this.title = "查询/绑定/激活卖座卡"
						break;
				}
				next()
			})
			this.$bus.on("filmTitle", (title)=>{
				this.title = title
			})
		},
		methods : {
			login(){
				this.$router.push({path : "/login"})
			},
			//获取地域信息
			getCity(){
				this.$http.get("/index/v4/api/city", {
					params : {
						__t : Date.now()
					}
				}).then((res)=>{
					console.log(res.data.data.cities);
				})
			}
		}
	}
</script>

<style lang="scss">
@import "@/style/reset.scss";
@import "@/style/common.scss";
	.header{
		background: #282828;
	    position: fixed;
	    z-index: 40;
	    top: 0 ;
	    right: 0;
	    left: 0;
	    bottom: 0;
	    width: auto;
	    height: 50/$scss + rem;
	    line-height: 50/$scss + rem;
    	overflow: hidden;

		.bar{
			width: 50/$scss+rem;
			height: 50/$scss+rem;
			text-align: center;
			line-height: 50/$scss+rem;
			color:#999;
			display: inline-block;
			font-size: 16/$scss + rem;
			float:left;
		}

		.title{
			color : white;
			font-size: 14/$scss + rem
		}

		.user{
			color : #999;
			float: right;
    		font-size: 16/$scss+rem;
    		text-align: center;
    		display: inline-block;
    		line-height: 50/$scss+rem;
    		margin-right: 20/$scss+rem;
		}

		.city{
			color : #999;
			float: right;
    		font-size: 16/$scss+rem;
    		text-align: center;
    		display: inline-block;
    		line-height: 50/$scss+rem;
    		margin-right: 40/$scss+rem;
		}
	}
</style>