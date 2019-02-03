<template>
  <v-container fluid id="scholars">
    <v-layout row wrap>
      <v-flex xs12 id="scholars__jumbotron">
        <v-layout row wrap>
          <v-flex md6 sm12 id="content">
            <div>
              <h2 class="content__smalltitle">Meet Our Scholars</h2>
              <h1 class="content__title">CS Leaders<br>Scholars</h1>
              <p>Some of the best computer science students in Indonesia, from University of Indonesia and Bandung Institute of Technology.</p>
            </div>
            <div>
              <button-arrow
                text="Know More"
                color="rgb(6, 88, 196)"
                hover="rgb(5, 112, 251)"
                big="true"
              />
            </div>
          </v-flex>
          <v-flex md6 sm12 id="photo">
            <img src="./../../assets/scholars.jpg" alt="">
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ButtonArrow from './../partials/ButtonArrow.vue';

export default {
  name: 'Scholars',
  components: {
    ButtonArrow,
  },
}
</script>

<style lang="scss" scoped>
@import 'src/assets/css/contents.scss';

#scholars {
  padding: 0;
}

#scholars__jumbotron {
  height: 100vh;
  padding: 0;
  #content {
    padding: 0 5vw 0 10vw;
    position: relative;
    h1 {
      font-size: 3.5vw;
    }
    h2 {
      padding-top: 30vh;
    }
    p {
      font-size: 1.5vw;
    }
    div:last-child {
      button {
        bottom: 0;
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }
  #photo {
    height: 100vh;
    overflow: hidden;
    img {
      height: 100%;
      width: auto;
    }
  }
}

@media screen and (max-width: 768px) {
  #scholars__jumbotron {
    #content {
      height: 70vh;
      h1 {
        font-size: 6vh;
      }
      h2 {
        padding-top: 20vh;
      }
      p {
        font-size: 2vh;
        padding-right: 10vw;
      }
    }
    #photo {
      height: 30vh;
      img {
        width: 100%;
        height: auto;
        overflow: hidden;
      }
    }
  }
}
</style>
