<template>
  <div id="navbar">
    <v-toolbar color="primary" dark fixed app flat>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <router-link
          v-for="link in links"
          :key="link.title"
          :to="link.link"
        >
          <v-btn flat>
            {{link.title}}
          </v-btn>
        </router-link>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      links: [
        {
          title: 'About Us',
          link: '/about-us',
          children: []
        },
        {
          title: 'Our Programs',
          link: '/programs',
          children: []
        },
        {
          title: 'Meet Our Scholars',
          link: '/scholars',
          children: [
            {
              title: 'CSLeaders Scholars',
              link: '/csl-scholars',
              children: []
            },
            {
              title: 'Scholars Profile',
              link: '/scholars-profile',
              children: []
            }
          ]
        },
        {
          title: 'Gallery',
          link: '/gallery',
          children: []
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#navbar {
  z-index: 999;
}

a {
  text-decoration: none;
}
</style>
