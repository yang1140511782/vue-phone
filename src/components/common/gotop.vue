<template>
	<div v-gd="show">
		<div v-if="show.flag" class="btn" v-gotop>顶部</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				show :{
					flag : false
				}
			}
		}
	}
</script>

<style lang="scss">
@import "@/style/common.scss";
	.btn {
		width: 50/$scss+rem;
		height: 50/$scss+rem;
		border-radius: 50%;
		background:#ccc;
		position: fixed;
		bottom: 0.5rem;
		right : 0.5rem;
		font-size: 15/$scss+rem;
		text-align: center;
		line-height:50/$scss+rem;
		opacity: 0.8;
	}
</style>