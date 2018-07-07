import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import './sigma'

Vue.use(Vuetify, {
  theme: {
    primary: '#f53844'
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
