<template>
	<div class="swiper-container">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide" v-for="item in slide"><img :src="item.cover.origin"></div>
	    </div>
	</div>
</template>

<script>
import Vue from "vue";
import Swiper from "swiper";
	export default {
		data() {
	      	return {
		      		slide : [],
		        }
   	 	},
   	 	updated(){
   	 		new Swiper(".swiper-container", {
   				loop: true,
   				autoplay : true,
   				delay : 2000
   	 		})
   	 	},
		created(){
			this.$http.get("/index/v4/api/film/now-playing", {
				__t : Date.now(),
				page : 1,
				count : 5
			}).then((res)=>{
				this.slide = res.data.data.films
			});
		}
	}
</script>

<style lang="scss">
@import "@/style/reset.scss";
@import "@/style/common.scss";
.swiper-container {
    width: 100%;
    height: 232/$scss + rem;
    position:relative;
}  
</style>