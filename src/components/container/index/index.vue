<template>
	<div>
		<div>
      		<swiper />
		</div>
		<films v-for="(item, index) in list" :info="item.info" :key="index"></films>
	</div>
</template>

<script>
import films from "@/components/container/index/films"
import swiper from "@/components/container/index/swiper"
	export default {
		data(){
			return {
				list : [
					{id : 1,
					 info : {url : "now-playing", type : "hot", title : "热映", count : 5}
					},
					{id : 2,
					 info : {url : "coming-soon", type : "coming", title : "即将上映", count : 3}
					}
				]
			}
		},
		components : {
			films,swiper
		}
	}
</script>

<style lang="scss">
/* @import "@/style/reset.scss";
@import "@/style/common.scss"; */

img{
	width: 100%;
}
</style>