<template>
	<div>
		
	</div>
</template>

<script>
	export default {
		created(){
			this.$http.get("/sc/api/ad/list").then((res)=>{
				
			})		
		}
	}
</script>

<style lang="scss">
	
</style>