import Vue from "vue";

Vue.directive("gd", (el, binding)=>{
	window.addEventListener("scroll", ()=>{
		if(document.documentElement.scrollTop > 100){
			binding.value.flag = true;
		}else{
			binding.value.flag = false;
		}
	})
})

Vue.directive("gotop", (el, binding)=>{
	el.onclick = ()=>{
		document.documentElement.scrollTop = 0;
	}
})
