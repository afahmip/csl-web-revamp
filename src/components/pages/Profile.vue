<template>
  <v-container fluid id="profile">
    <v-layout row wrap>
      <v-flex xs12 id="title">
        <h2 class="content__smalltitle">About Us</h2>
        <h1>Profile Detail</h1>
      </v-flex>
      <v-flex xs12 id="data">
        <v-layout row wrap>
          <v-flex md5 id="photo">
            <!-- <img src="./../../assets/Niko Radityo.jpg"/> -->
            <img :src="profile.photo" alt="">
          </v-flex>
          <v-flex md7 id="text">
            <!-- <h1>Niko Radityo</h1>
            <h2>Chairman of Foundation</h2>
            <p>Niko is currently the Associate Director of Fortune PR, a PR and marketing firm based in Indonesia, with vast portfolio of global technology clients such as Oracle, Linkedin, Lenovo, and many others. Prior to his current role he was Managing Editor and Technical Editor for several tech publications, including Macworld Indonesia, GameStation magazine and Gadget, as well as Business Development for WayangForce, Indonesia's first digital reader application. Niko is a Computer Science engineering grad from Universitas Parahyangan, with a strong passion of humanizing technology.</p> -->
            <h1>{{profile.name}}</h1>
            <h2>{{profile.position}}</h2>
            <p>{{profile.desc}}</p>
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
        name: 'Test',
        position: 'Test Position',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        linkedin: '',
        photo: 'https://eadb.org/wp-content/uploads/2015/08/profile-placeholder.jpg',
      }
    }
  },
  beforeMount() {
    let url = 'to_be_replaced';
    axios.get(url)
    .then(response => {
      this.profile = response.data.result;
    })
    .catch(error => {
      console.log(error);
    })
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
</style>
