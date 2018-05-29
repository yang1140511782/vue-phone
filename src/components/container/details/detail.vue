<template>
	<div class="container">
		<img :src="detail.cover.origin">
		<div class="detail">
			<div class="film-word1">影片简介</div>
			<div class="film-word2">
				<span>导演：</span>
				<span>{{detail.director}}</span>
			</div>
			<div class="film-word2">
				<span>主演：</span>
				<span>{{name}}</span>
			</div>
			<div class="film-word2">
				<span>类型：</span>
				<span>{{detail.category}}</span>
			</div>
			<div class="film-word2">
				<span>上映日期：</span>
				<span>{{detail.premiereAt}}</span>
			</div>
			<div class="film-word3">
				{{detail.synopsis}}
			</div>			
		</div>
		<div class="open">
			<button class="open-btn">立即购票</button>
		</div>
	</div>
</template>

<script>
	export default{
		props : ["id"],
		data(){
			return{
				detail : {
					cover : {}
				},
				name : ""
			}
		},
		created(){
			this.$http.get("http://localhost:8080/index/v4/api/film/" + this.id, {
				params : {
					__t : Date.now()
				}
			}).then((res)=>{
				this.detail = res.data.data.film;
				let data = this.detail.premiereAt;
				this.$bus.emit("filmTitle", this.detail.name)
				this.detail.actors.forEach((n)=>{
					this.name += n.name;
				})
			});
		}
	}
</script>

<style lang="scss">
@import "@/style/reset.scss";
@import "@/style/common.scss";	

.detail{
	color : #333;
	font-size : 10/$scss+rem;
	
	.film-word1{
		margin: 16/$scss+rem auto;
	    border-left: 16/$scss+rem solid RGB(228, 200, 156);
	    font-size: 16/$scss+rem;
	    padding-left: 4/$scss+rem;
	}
	.film-word2{
		height: 18/$scss+rem;
	    overflow: hidden;
	    margin-bottom: 10/$scss+rem;
	    padding-left: 20/$scss+rem;
	}
	.film-word3{
		text-overflow: ellipsis;
	    margin-bottom: 80/$scss+rem;
	    padding-left: 20/$scss+rem;
	    padding-right: 20/$scss+rem;
	}
}
.open{
	position: fixed;
    left: 0;
    bottom: 20/$scss+rem;
    width: 100%;
    text-align: center;

    .open-btn{
    	font-size: 14/$scss+rem;
	    min-width: 156/$scss+rem;
	    height: 36/$scss+rem;
	    line-height: 36/$scss+rem;
	    border: none;
	    background-color: #fe8233;
	    padding: 0;
	    margin: 0;
	    border-radius: 18/$scss+rem;
	    color: #fff;
	    -webkit-transition: 0.5s ease;
    }
}
</style>