<template>
	<div>
		<div v-if="type === 'hot'" class="film_hot">
			<div class="pic" @click="detail(film.id)">
				<img :src="film.cover.origin">
				<div class="row">
					<p>{{film.name}}</p>
					<span>{{film.cinemaCount}}家影院上映</span>
					<span>{{film.grade}}</span>
					<span>{{film.watchCount}}人购票</span>
				</div>
			</div>
		</div>
		<div v-if="type === 'coming'" class="film_coming">
			<div class="pic" @click="detail(film.id)">
				<img :src="film.cover.origin">
				<div class="row">
					<span>{{film.name}}</span>
					<span>{{sj}}</span>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		props : ["type", "film"],
		data(){
			return {
				sj : ""
			}
		},
		created(){
			let MS = this.film.premiereAt;
			let date = new Date(MS)
			let sj = (date.getMonth() + 1) + '月' + date.getDate() + "日"
			this.sj = sj;
		},
		methods : {
			detail(id){
				this.$router.push({name : "Detail", params : {id : id}})
			}
		}
	}
</script>

<style lang="scss">
@import "@/style/reset.scss";
@import "@/style/common.scss";
.film_hot,.film_coming{
	padding-top: 18/$scss + rem;
	padding-left:0;

	.pic{
		margin: 0 17px 17/$scss+rem 17/$scss+rem;
	    background-color: #f9f9f9;
	    -webkit-box-shadow: 0.5/$scss+rem 0.5/$scss+rem 1/$scss+rem #a8a8a8;
	    -moz-box-shadow: 0.5/$scss+rem 0.5/$scss+rem 1/$scss+rem #a8a8a8;
	    box-shadow: 0.5/$scss+rem 0.5/$scss+rem 1/$scss+rem #a8a8a8;
	    cursor: pointer;

	    .row{
	    	margin-right: -15/scss + rem;
	    	font-size: 12/$scss + rem;
	    	color : #9a9a9a;
			span{
	    		margin-left: 10/$scss + rem;
			}
	    	span{
	    		margin-left: 10/$scss + rem;
	    	}

	    	span:nth-child(3){
	    		color: #f78360;
			    display: inline-block;
			    float: right;
			    margin-right: 15/$scss + rem;
			    margin-top: -12/$scss + rem;
			    font-size: 20/$scss + rem;
	    	}
	    }
	}
}
.line{
	position: relative;
    margin-top: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid #a8a8a8;

    .upcoming{
    	width: 65px;
	    height: 20px;
	    margin: 0 auto;
	    margin-bottom: -10px;
	    border-radius: 5px;
	    font-size: 10px;
	    line-height: 20px;
	    text-align: center;
	    color: #eee;
	    background-color: #a7a7a7;
    }
}
</style>