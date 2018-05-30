<template>
	<div class="home-view">
		<!-- 用户信息 -->
		<div class="home-header">
			<header>
				<img src="/static/img/maizuomoren66.jpg">
				<div class="header-detail">
					<p>手机用户4654</p>
					<p>id：22621653165</p>
					<p @click="dis">退出</p>
				</div>
			</header>
		</div>
		<!-- 竖向导航 -->
		<div class="home-nav">
			<!-- 影票订单 -->
			<div class="menu-wrapper">
				<div class="menu">
					<i class="fa fa-shopping-bag"></i>
					<span>影票订单</span>
					<div class="pull-right">
						<span>0张</span>
						<i class="fa fa-angle-right"></i>
					</div>
				</div>
			</div>
			<!-- 影票待支付订单 -->
			<div class="menu-wrapper">
				<div class="menu">
					<i class="fa fa-shopping-bag"></i>
					<span>影票待支付的订单</span>
					<div class="pull-right">
						<span>0张</span>
						<i class="fa fa-angle-right"></i>
					</div>
				</div>
			</div>
			<!-- 商城订单 -->
			<div class="menu-wrapper">
				<div class="menu">
					<i class="fa fa-shopping-bag"></i>
					<span>商城订单</span>
					<i class="fa fa-angle-right"></i>
				</div>
			</div>
			<!-- 我的现金卷 -->
			<div class="menu-wrapper">
				<div class="menu">
					<i class="fa fa-shopping-bag"></i>
					<span>我的现金卷</span>
					<div class="pull-right">
						<span>0张</span>
						<i class="fa fa-angle-right"></i>
					</div>
				</div>
			</div>
			<!-- 账户余额 -->
			<div class="menu-wrapper">
				<div class="menu">
					<i class="fa fa-shopping-bag"></i>
					<span>账户余额</span>
					<div class="pull-right">
						<span>0张</span>
						<i class="fa fa-angle-right"></i>
					</div>
				</div>
			</div>
			<!-- 我的卖座卡 -->
			<div class="menu-wrapper">
				<div class="menu">
					<i class="fa fa-shopping-bag"></i>
					<span>我的卖座卡</span>
					<div class="pull-right">
						<span>0张</span>
						<i class="fa fa-angle-right"></i>
					</div>
				</div>
			</div>
			<!-- 设置 -->
			<div class="menu-wrapper">
				<div class="menu">
					<i class="fa fa-shopping-bag"></i>
					<span>设置</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods : {
			dis(){
				sessionStorage.clear();
				this.$router.push({path : "/login"})
			}
		}
	}

</script>

<style lang="scss">
$scss : 25;

.home-view{
	position: absolute;
    height: 100%;
    width: 100%;
    background: #ccc;

    .home-header{
    	background-color: #303030;
   	 	color: #fff;
   	 	width: 100%;
   	 	height: 152/$scss+rem;

   	 	header{
   	 		padding: 36/$scss+rem 12/$scss+rem 24/$scss+rem 10%;
   	 		font-size :12/$scss+rem;

   	 		img{
   	 			width: 92/$scss+rem;
			    height: 92/$scss+rem;
			    border-radius: 50%;
			    margin-right: 14/$scss+rem;
			    float: left;
   	 		}

   	 		.header-detail{
   	 			float: left;
    			margin-top: 16/$scss+rem;
				
				p{
					line-height: 20/$scss+rem;
				}

    			p:nth-child(3){
    				color : orange;
    			};
   	 		}
   	 	}
    }

    .home-nav{
    	padding: 0;
    	width: 100%;

    	.menu-wrapper{
    		width: 100%;
		    margin: 14/$scss+rem 0;
		    height: 59/$scss+rem;
		    line-height: 59/$scss+rem;
		    background-color: #fff;
		    cursor: pointer;
		    font-size: 12/$scss+rem;
		    color: #222;
			
			.menu{
				margin: 0 12/$scss+rem;

				i{
		    	color:orange;
			    }

			    span{
			    	margin-left: 9/$scss+rem;
				    line-height: 35/$scss+rem;
				    vertical-align: inherit;
			    }

			    .pull-right{
     				float: right !important;

     				i{
     					font-size: 16/$scss+rem;
     				}
			    }
			}
		    
    	}
    }
}
</style>