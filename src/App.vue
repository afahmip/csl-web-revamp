<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import VueRouter from 'vue-router';
import Home from './components/pages/Home.vue';

const routes = [
  {path: '/', component: Home},
]

const router =  new VueRouter({
  routes,
  mode: 'history',
});

export default {
  name: 'app',
  router,
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
