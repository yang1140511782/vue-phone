<template>
	<div class="header">
		<span class="fa fa-bars bar" @click="change"></span>
		<span class="title">{{title}}</span>
	</div>
</template>

<script>
	export default {
		props : ["flag", "change"],
		data(){
			return {
				title : '卖座电影'
			}
		},
		mounted(){
			this.$router.beforeEach((to, from, next)=>{
				switch (to.name) {
					case "Detail":
						this.title = "影片详情"
						break;
					case "index":
						this.title = "卖座电影"
				}
				next()
			})
			
			this.$bus.on("filmTitle", (title)=>{
				this.title = title
			})
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
			color:white;
			display: inline-block;
			font-size: 16/$scss + rem;
			float:left;
			margin-top: 17/$scss + rem; 
			margin-left: 18/$scss + rem; 
			margin-right: 18/$scss + rem; 

		}

		.title{
			color : white;
			font-size: 14/$scss + rem
		}
	}
</style>