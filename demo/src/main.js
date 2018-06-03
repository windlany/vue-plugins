import Vue from 'vue'
import App from './App.vue'

import scroll from "./components/vue-scroll";
Vue.use(scroll);

new Vue({
  el: '#app',
  render: h => h(App)
})
