import Vue from 'vue'
import plugin from './index.js'
import App from './App.vue'
Vue.use(plugin)
new Vue({
  el: '#app',
  render: h => h(App)
})
