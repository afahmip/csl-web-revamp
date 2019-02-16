<template>
  <div id="navbar">
    <v-toolbar fixed clipped-left>
      <v-toolbar-title>
        <router-link to="/">
          <img src="./../../assets/csl-navbar.png" alt="">
        </router-link>
      </v-toolbar-title>
      
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="item in links"
          :key="item.icon"
          :to="item.link"
          flat
        >{{ item.title }}</v-btn>
      </v-toolbar-items>

      <v-toolbar-side-icon  @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>

    </v-toolbar>

    <v-navigation-drawer
      temporary
      v-model="drawer"
      disable-resize-watcher
      fixed
      id = "drawer"
    >
      <v-list-tile
        v-for="link in links"
        :key="link.title"
        :to="link.link"
      >
        <v-list-tile-content>
          <v-list-tile-title>{{ link.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      drawer: null,
      links: [
        {
          title: 'About Us',
          link: '/about-us',
        },
        {
          title: 'Our Programs',
          link: '/programs',
        },
        {
          title: 'Apply Now',
          link: '/apply',
        },
        {
          title: 'Meet Our Scholars',
          link: '/scholars',
        },
        {
          title: 'Sponsor',
          link: '/sponsor',
        },
        {
          title: 'Gallery',
          link: '/gallery',
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#navbar {
  z-index: 9999;

  nav {
    background-color: white;
    box-shadow: none;

    img {
      object-fit: cover;
      height: 30px;
    }
  }

  aside {
    padding: 1rem;
    
    >div {
      padding: 1rem;
    }
  }
}

a {
  text-decoration: none;
}
</style>
