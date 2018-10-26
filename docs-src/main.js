import Vue from 'vue'
import App from './App.vue'

import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

import VImgzoomer from './../packages/index'

Vue.directive('hljs', el => {
  let blocks = el.querySelectorAll('pre')
  Array.prototype.forEach.call(blocks, hljs.highlightBlock)
})

Vue.use(VImgzoomer)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
