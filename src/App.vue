<template>
  <div id="app">
    <Navbar/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import VueRouter from 'vue-router';
import Home from './components/pages/Home.vue';
import Scholars from './components/pages/Scholars.vue';
import About from './components/pages/About.vue';
import Footer from './components/partials/Footer.vue';
import Navbar from './components/partials/Navbar.vue';

const routes = [
  {path: '/', component: Home},
  {path: '/scholars', component: Scholars},
  {path: '/about-us', component: About},
]

const router =  new VueRouter({
  routes,
  mode: 'history',
});

export default {
  name: 'app',
  router,
  components: {
    Home,
    About,
    Footer,
    Navbar,
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
