import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import VCharts from 'v-charts'
Vue.use(VCharts)

import i18n from './lang/index'//多语言
import 'font-awesome/css/font-awesome.min.css'//引入font-awesome

import './css/reset.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios);
Vue.prototype.$axios = axios

Vue.config.productionTip = false

// new Vue({
// 	store,
// 	router,
// 	i18n,
// 	render:h=>h(App)
//   	// render: h => h(App)
// }).$mount('#app')

new Vue({
	router,
	store,
	i18n,
	render: h => h(App)
  }).$mount('#app')