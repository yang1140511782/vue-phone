<template>
	<div>
		<transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
		<ul class="nav" v-show="flag">
			<li v-for="item in list" @click="change">
				<router-link :to="item.path">
				{{item.name}}
				</router-link>
			</li>
		</ul>
      </transition>
		<div class="zhezhao" v-if="flag">
			
		</div>
	</div>
</template>

<script>
	export default {
		props : ["flag", "change"],
		data(){
			return {
				list : [
					{id : 1, path : "/index", name : "首页"},
					{id : 2, path : "/film", name : "影片"},
					{id : 3, path : "/cinema", name : "影院"},
					{id : 4, path : "/store", name : "商城"},
					{id : 5, path : "/my", name : "我的"},
					{id : 6, path : "/mzk", name : "卖座卡"}
				]
			}
			
		}
	}
</script>

<style lang="scss">
@import "@/style/reset.scss";
@import "@/style/common.scss";
	.nav{
		border-top: 1/$scss+rem solid #222;
	    box-shadow: 0 1/$scss+rem 1/$scss+rem #363636 inset;
	    background: #282828;
	    position: fixed;
	    display: block;
	    top: 50/$scss + rem;
	    right: 110/$scss + rem;
	    bottom: 0;
	    left: 0;
	    z-index: 40;

	    li{
	    	width: 100%;
	    	height :50/$scss + rem;
	    	line-height: 50/$scss + rem;
    		font-size: 14/$scss + rem;
    		margin-left: 16/$scss + rem;

    		a{
	    		color: #9a9a9a;
    		}
	    }
	}
	.zhezhao{
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 30;
		background: rgba(0,0,0,0.5);
		top:0;
		left:0;
	}
</style>