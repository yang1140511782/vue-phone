<template>
	<div class="film-list-warp"> 
		<gotop></gotop>
		<div class="film-list-nav">
			<div class="film-playing" @click="change1">正在热映</div>
			<div class="film-coming" @click="change2">即将上映</div>
		</div>
		<div class="film-list">
			<!-- playing正在热映的电影 -->
			<ul v-infinite-scroll="loadMore"
				infinite-scroll-disabled="loading"
				infinite-scroll-distance="20">
				<li v-for="(item, index) in playing" :key="index" @click="detail(item.id)">
					<div class="film-item">
						<div class="img">
							<img :src="item.cover.origin">
						</div>
						<div class="film-item-desc">
							<div class="film-item-grade">{{item.grade}}</div>
							<div class="film-item-name">{{item.name}}</div>
							<div class="film-item-intro">{{item.intro}}</div>
							<div class="film-item-counts">
								<span class="film-item-watchCount">{{item.watchCount}}人购票</span>
								<span class="film-item-count">{{item.cinemaCount}}家影院上映</span>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Vue from "vue"
import { InfiniteScroll } from 'mint-ui';
import { Toast } from 'mint-ui';
import gotop from "@/components/common/gotop";
Vue.use(InfiniteScroll);
	export default {
		data(){
			return {
				playing : [],
				coming : [],
				type : "now-playing",
				pages : 1,
				curIndex : 0,
				loading : false,
				hasMore : true, //记录还有没有信息

			}
		},
		components : {
			gotop
		},
		created(){
			this.loadMore();
		},
		watch : {
			type(){
				this.loadMore();		
			}
		},
		methods : {
			change1(){
				this.type = "now-playing";
				this.playing = [];
				this.pages = 1;
			},
			change2(){
				this.type = "coming-soon";
				this.playing = []
				this.pages = 1;
			},
			loadMore(){
				if(!this.hasMore)
					return;
				var temer = Toast({
				  message: 'loading',
				  iconClass: 'fa fa-spinner',
				  duration: -1
				});
				this.loading = true;
				this.$http.get("/index/v4/api/film/" + this.type, {
					params : {
						page : this.pages,
						count : 7
					}
				}).then((res)=>{
					this.playing = this.playing.concat(res.data.data.films);
					//如果当前页数等于总页数为true，取非为flase
					this.hasMore = Boolean(!(res.data.data.page.current === res.data.data.page.total));
					//如果hasMore为true加1页
					this.pages += this.hasMore ? 1 : 0;
					this.loading = false;
					temer.close();
				})
			},
			detail(id){
				this.$router.push({name : "Detail", params : {id : id}})
			}
		}
	}
</script>

<style lang="scss">
@import "@/style/common.scss";

.film-list-warp{
	padding-left: 15/$scss+rem;
    padding-right: 15/$scss+rem;
    background-color: #f9f9f9;
    width: 100%;
    position: absolute;
    min-height: 100%;

    .film-list-nav{
    	height: 46/$scss+rem;
	    margin: 0 auto;
	    border-bottom: solid #fe6e00 1/$scss+rem;

	    .film-playing,.film-coming{
	    	color: #fe6e00;
    		border-bottom: solid;
    		float: left;
		    width: 50%;
		    height: 100%;
		    text-align: center;
		    font-size: 16/$scss+rem;
		    line-height: 46/$scss+rem;
		    cursor: pointer;
	    }
    }

    .film-list{

    	ul{
    		margin: 0;
		    padding: 0;
		    list-style: none;
			
		    .film-item{
		    	width: 100%;
			    padding: 20/$scss+rem 0;
			    border-bottom: dashed 1/$scss+rem #c9c9c9;
			    cursor: pointer;

			    .img{
			    	width: 60/$scss+rem;
			    	height: 82.56/$scss+rem;
				    float: left;
				    overflow: hidden;

				    img{
				    	width: 100%;
				    	height: 100%;
				    }
			    }

			    .film-item-desc{
		    	    padding-left: 15/$scss+rem;
				    display: inline-block;
				    width: 75%;

				    .film-item-grade{
				    	float: right;
					    font-size: 16/$scss+rem;
					    line-height: 32/$scss+rem;
					    color: #fc7103;
				    }

				    .film-item-name{
				    	font-size: 16/$scss+rem;
					    line-height: 32/$scss+rem;
					    color: #000;
					    overflow: hidden;
					    text-overflow: ellipsis;
					    white-space: nowrap;
				    }

				    .film-item-intro{
					    line-height: 32/$scss+rem;
					    color: #000;
					    overflow: hidden;
					    text-overflow: ellipsis;
					    white-space: nowrap;
					    font-size: 12/$scss+rem;

				    }
					
					.film-item-counts{
					    line-height: 32/$scss+rem;
					    color: #000;
					    overflow: hidden;
					    text-overflow: ellipsis;
					    white-space: nowrap;
					    font-size: 12/$scss+rem;
						
						span{
							color: #8aa2bf;
						}
					}
			    }
		    }
    	}
    }
}
</style>