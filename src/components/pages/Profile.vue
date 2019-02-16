<template>
  <v-container fluid id="profile">
    <v-layout row wrap>
      <v-flex xs12 id="title">
        <h2 class="content__smalltitle">About Us</h2>
        <h1>Profile Detail</h1>
      </v-flex>
      <v-flex xs12 id="data">
        <v-layout row wrap>
          <v-flex md5 sm5 xs12 id="photo">
            <img :src="profile.image" alt="">
          </v-flex>
          <v-flex md7 sm7 xs12 id="text">
            <h1>{{profile.name}}</h1>
            <h2>{{profile.position}}</h2>
            <p>{{profile.description}}</p>
            <br>
            <a :href="profile.linkedin">
              <button-square
                text="LinkedIn Profile"
                color="rgb(6, 88, 196)"
                hover="#fff"
                small="true"
              />
            </a>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
import ButtonSquare from './../partials/ButtonSquare.vue';

export default {
  name: 'Profile',
  components: {
    ButtonSquare,
  },
  data() {
    return {
      profile: {
        name: '',
        position: '',
        description: '',
        linkedin: '',
        image: 'https://eadb.org/wp-content/uploads/2015/08/profile-placeholder.jpg',
      }
    }
  },
  beforeMount() {
    let name = this.$route.params.name;
    let profile = this.$store.state.profiles;
    this.profile = profile[name];
  },
}
</script>

<style lang="scss" scoped>
@import 'src/assets/css/contents.scss';

#profile {
  padding: 13vh 15vw;
  min-height: 100vh;

  #title {
    margin-bottom: 5vh;
    h1 {
      font-size: 2.5vw;
    }
  }

  #data {
    background-color: #ECF7FD;
    margin-bottom: 10vh;
    #photo {
      overflow: hidden;
      img {
        height: 100%;
        width: auto;
      }
    }

    #text {
      padding: 3vw;
      h1 {
        color: $blue;
        font-size: 2vw;
        margin-bottom: 1vh;
      }
      h2 {
        font-size: 1.3vw;
        margin-bottom: 3.5vh;
      }
      p {
        font-size: 1vw;
        line-height: 1.5vw;
      }
    }
  }
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  #profile {
    padding: 15vh 10vw;
    #title {
      h1 {
        font-size: 3.5vh;
      }
    }
    #data {
      #text {
        padding: 3vh;
        h1 {
          font-size: 2.5vh;
          margin-bottom: 1vh;
        }
        h2 {
          font-size: 1.5vh;
          margin-bottom: 2.5vh;
        }
        p {
          font-size: 1.5vw;
          line-height: 2vh;
        }
      }
    }
  }
}

@media screen and (max-width: 767px) and (orientation: portrait) {
  #profile {
    padding: 15vh 10vw;

    #title {
      h1 {
        font-size: 3.5vh;
      }
    }

    #data {
      margin-bottom: 10vh;
      #photo {
        overflow: hidden;
        img {
          width: 100%;
          height: auto;
        }
      }

      #text {
        padding: 3vh;
        h1 {
          font-size: 3.5vh;
          margin-bottom: 1vh;
        }
        h2 {
          font-size: 2.5vh;
          margin-bottom: 2.5vh;
        }
        p {
          font-size: 2vh;
          line-height: 3vh;
        }
      }
    }
  }
}

@media screen and (max-width: 767px) and (orientation: landscape) {
  #profile {
    padding: 15vh 10vw;

    #title {
      h1 {
        font-size: 3.5vh;
      }
    }

    #data {
      margin-bottom: 10vh;
      #photo {
        flex-basis: 42%;
        max-width: 42%;
        overflow: hidden;
        img {
          width: 100%;
          height: auto;
        }
      }

      #text {
        flex-basis: 58%;
        max-width: 58%;
        padding: 5vh;
        h1 {
          font-size: 3.5vh;
          margin-bottom: 1vh;
        }
        h2 {
          font-size: 2.5vh;
          margin-bottom: 2.5vh;
        }
        p {
          font-size: 2vh;
          line-height: 3vh;
        }
      }
    }
  }
}

</style>
