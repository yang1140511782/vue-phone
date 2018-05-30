<template>
	<form @submit.prevent>
		<div class="form-group">
			<input type="text" v-model="username" placeholder="请输入账号"><br>
		</div>
		<div class="form-group">
			<input type="password" v-model="password" placeholder="请输入密码">	
		</div>
		<button @click="tj">登录</button>
	</form>
</template>

<script>
	export default{
		data(){
			return {
				username : "",
				password : ""
			}
		},
		methods : {
			tj(){
				if(this.username === "yang" && this.password === "123"){
					sessionStorage.setItem("username", "yang")
					this.$router.push({path : "/my"})
				}
			}
		}
	}	
</script>

<style lang="scss">
@import "@/style/common.scss";
form{
	padding: 0 31/$scss+rem 0 31/$scss+rem;

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