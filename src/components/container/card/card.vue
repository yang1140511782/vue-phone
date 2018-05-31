<template>
	<div class="container">
		<div class="card-form">
			<ul class="tab">
				<li :class="flag1 ? 'cur' : ''"  @click="mz">卖座卡</li>
				<li :class="flag ? 'cur' : ''" @click="dz">电子卖座卡</li>
			</ul>
			<div class="mzk" v-if="flag1">
				<div class="form-group">
					<input type="text" v-model="username" placeholder="请输入卡号"><br>
				</div>
				<div class="form-group">
					<input type="password" v-model="password" placeholder="请输入密码">	
				</div>
			</div>
			<div class="dz" v-if="flag">
				<div class="form-group">
					<input type="text" v-model="username" placeholder="请输入电子卖座卡号"><br>
				</div>
			</div>
			<button>查询</button>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				username : "",
				password : "",
				flag : false,
				flag1 : true,
			}
		},
		methods : {
			mz(){
				this.flag = false;
				this.flag1 = true;
			},
			dz(){
				this.flag = true;
				this.flag1 = false;
			}
		}
	}
</script>

<style lang="scss">
$scss : 25;	
.container{
	padding: 0 31/$scss+rem 0 31/$scss+rem;
	
	.tab{
		height: 45px;
	    background-color: #fff;
	    height: 45px;
	    line-height: 45px;
	    text-align: center;
	    font-size: 15px;
	    color: #ccc;

	    li{
	    	text-align: center;
		    font-size: 16px;
		    line-height: 45px;
		    box-shadow: 0 -1px #ff7100 inset;
		    transition: all 0.2s ease;
		    -webkit-transition: all 0.2s ease;
		    width: 50%;
		    display: inline-block;
		    padding-right: 5px;
		    padding-left: 5px;
		    float: left;
		    color : #999;
	    }

	    .cur{
	    	color : #ff7100;
	    	box-shadow: 0 -4px #ff7100 inset;
	    }
	}
	.form-group{
		margin: 30/$scss+rem 0 0;
    	position: relative;
    	text-align: center;

    	input{
    		display: block;
		    width: 100%;
		    height: 34/$scss+rem;
		    padding: 6/$scss+rem 12/$scss+rem;
		    font-size: 14/$scss+rem;
		    line-height: 1.42857143;
		    color: #555;
    	}
	}

	button{
		width: 163/$scss+rem;
	    background-color: #fe8233;
	    color: #fff;
	    border: none;
	    border-radius: 36/$scss+rem;
	    margin-top: 45/$scss+rem;
	    padding: 8/$scss+rem 12/$scss+rem;
	    font-size: 15/$scss+rem;
	    outline: none;
	    display: block;
	    margin-right: auto;
	    margin-left: auto;
    }
}
</style>