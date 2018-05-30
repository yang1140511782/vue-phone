// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import VueBus from 'vue-bus'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import "@/common/directive"
Vue.use(MintUI);
Vue.use(VueBus);
Vue.config.productionTip = false
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
