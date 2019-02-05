<template>
  <v-container fluid id="gallery">
    <v-layout row wrap>
      <v-flex xs12>
        <div>
          <h2 class="content__smalltitle">Our Activities</h2>
          <h1>CSLeaders Gallery</h1>
        </div>
        <div v-masonry transition-duration="0.3s" item-selector=".item" id="gallery__masonry">
          <div v-masonry-tile class="item" :key="index" v-for="(item, index) in blocks">
            <img :src="item.src" alt="">
            <!-- <p>{{item}}</p> -->
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      blocks: [],
    };
  },
  created() {
    for(let i=0; i<=12; i++)
      this.blocks.push(
        {
          src: require(`./../../assets/gallery/${i}.jpg`)
        }
      );
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/css/contents.scss';

#gallery {
  padding: 20vh 10vw;
  min-height: 100vh;

  h1 {
    font-size: 3.5vw;
  }
  #gallery__masonry {
    margin-top: 2rem;
    .item {
      width: 25vw;
      margin-right: 1vw;
      margin-bottom: 1vw;
      transition-duration: 0.4s;
      &:hover {
        z-index: 9999;
        width: 30vw;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #gallery {
    padding: 20vh 10vw;
    h1 {
      font-size: 4.5vh;
    }
    #gallery__masonry {
      margin-top: 2rem;
      .item {
        width: 37vw;
        margin-right: 1.2vw;
        margin-bottom: 1.2vw;
      }
    }
  }
}
</style>
