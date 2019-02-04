import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import 'vuetify/dist/vuetify.min.css'
import { VueMasonryPlugin } from 'vue-masonry'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(VueMasonryPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app')
