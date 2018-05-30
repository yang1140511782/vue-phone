<template>
	<div>
		
		<filmItem v-for="(item, index) in films" :key="index" :type="info.type" :film="item"></filmItem>
		<div class="more-button">更多{{this.info.title}}电影</div>
	</div>
</template>

<script>
import filmItem from "@/components/container/index/filmItem";
	export default {
		props : ["info"],
		data(){
			return {
				films : []
			}
		},
		created(){
			this.$http.get("http://localhost:8080/index/v4/api/film/" + this.info.url, {
				__t : Date.now(),
				page : 1,
				count : this.info.count
			}).then((res)=>{
				this.films = res.data.data.films
				console.log(this.films.premiereAt)
			})
		},
		components : {
			filmItem
		}
	}
</script>

<style lang="scss">
@import "@/style/common.scss";
	.more-button {
	    width: 160/$scss+rem;
	    height: 30/$scss+rem;
	    border: 1/$scss+rem solid #aaa;
	    border-radius: 15/$scss+rem;
	    margin: 10/$scss+rem auto 30/$scss+rem;
	    text-align: center;
	    line-height: 30/$scss+rem;
	    font-size: 12/$scss+rem;
	    color: #616161;
	    cursor: pointer;
	}
</style>