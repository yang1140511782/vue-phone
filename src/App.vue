<template>
  <div id="app">
      <myhead :flag="flag" :change="change"/>
      <nav1 :flag="flag" :change="change"/>
      <router-view></router-view>
  </div>
</template>

<script>
import myhead from "@/components/container/header/header";
import nav1 from "@/components/container/header/nav";
import Vue from 'vue';
import VueBus from 'vue-bus';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);
Vue.use(VueBus);
export default {
  name: 'App',
  data(){
    return {
      flag : false
    }
  },
  methods : {
    change(){
      this.flag = !this.flag
    }
  },
  components : {
    myhead,nav1,
  }
}
</script>

<style lang="scss">
@import "@/style/reset.scss";
@import "@/style/common.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 50/$scss + rem !important;
  overflow: hidden;
}
</style>
