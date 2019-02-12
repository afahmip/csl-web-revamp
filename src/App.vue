<template>
  <div id="app">
    <Navbar/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import axios from 'axios';
import VueRouter from 'vue-router';
import Home from './components/pages/Home.vue';
import Scholars from './components/pages/Scholars.vue';
import Programs from './components/pages/Programs.vue';
import About from './components/pages/About.vue';
import Apply from './components/pages/Apply.vue';
import Sponsor from './components/pages/Sponsor.vue';
import Gallery from './components/pages/Gallery.vue';
import Footer from './components/partials/Footer.vue';
import Navbar from './components/partials/Navbar.vue';
import Profile from './components/pages/Profile.vue';
import { mapGetters, mapState } from 'vuex';


const routes = [
  {path: '/', component: Home},
  {path: '/scholars', component: Scholars},
  {path: '/about-us', component: About},
  {path: '/programs', component: Programs},
  {path: '/apply', component: Apply},
  {path: '/gallery', component: Gallery},
  {path: '/sponsor', component: Sponsor},
  {path: '/profile/:name', component: Profile},
]

const router =  new VueRouter({
  routes,
  mode: 'history',
});

export default {
  name: 'app',
  router,
  components: {
    Footer,
    Navbar,
  },
  beforeMount() {
    let url = `${this.$store.state.backendUrl}/board/all`;
    
    axios.get(url)
    .then(response => {
      let profiles = response.data.result;
      let results = {};

      profiles.forEach(p => {
        let route = p.name.toLocaleLowerCase().split(/[\s.]+/).join("-");
        results[route] = p;
      });
      this.$store.commit('setProfiles', results);
    })
    .catch(error => {
      console.log(error);
    })
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
