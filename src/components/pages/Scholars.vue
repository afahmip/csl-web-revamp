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

      <v-flex xs12 id="hall-of-fame">
        <v-flex xs12 class="text">
          <h2 class="content__smalltitle">Our Scholars</h2>
          <h1 class="content__title">Hall Of Fame</h1>
        </v-flex>
        <v-flex xs12>
          <v-layout row wrap>
            <v-flex xs12 class="hall-item">
              <v-layout row wrap>
                <v-flex sm4 class="program-photo">
                  <img src="./../../assets/hall/turfa.jpg" alt="">
                </v-flex>
                <v-flex sm8 class="program-content">
                  <h2>Turfa Auliarachman won the 3rd place ICPC 2017!</h2>
                  <p>ICPC (International Collegiate Programming Contest) is a competitive programming competition held by UGM. It’s part of UGM Vocomfest event, which is held annually. We are happy to inform that Turfa Auliarachman won the 3rd place in the competition. We hope that our scholars will be encouraged to achieve even more. Congratulation Turfa!</p>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs12 class="hall-item">
              <v-layout row wrap>
                <v-flex sm4 class="program-photo">
                  <!-- <img src="./../../assets/women.jpg" alt=""> -->
                </v-flex>
                <v-flex sm8 class="program-content">
                  <h2>Fahmi and the team from UI won 2nd place in Google Games Southeast Asia 2017</h2>
                  <p>Google Games is a fun mission-based event as teams from different schools go head to head in mind-twisting activities like solving coding problems and puzzle competitions.</p>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs12 class="hall-item">
              <v-layout row wrap>
                <v-flex sm4 class="program-photo">
                  <!-- <img src="./../../assets/hall/Valentina.png" alt=""> -->
                </v-flex>
                <v-flex sm8 class="program-content">
                  <h2>Valentina Kania won the 1st place in Google Games Southeast Asia 2017</h2>
                  <p>Valentina Kania (Awardee 2015) and her team-mates from UI won the 1st place in Side Mission Category</p>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs12 class="hall-item">
              <v-layout row wrap>
                <v-flex sm4 class="program-photo">
                  <img src="./../../assets/hall/annisa.jpg" alt="">
                </v-flex>
                <v-flex sm8 class="program-content">
                  <h2>Annisa Nurul Azhar Participated in "Mobile App Development Competition" 2017</h2>
                  <p>Annisa Nurul Azhar (Awardee 2015) with her team from ITB participated in "Mobile App Development Competition" held by Telkom University and got into top 8 rank in this competition.</p>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-flex>

      <v-flex
        xs12
        id="modal"
        v-if="alert"
        @click="handleModal(-1)"
      >
        <v-alert
          :value="alert"
          transition="scale-transition"
        >
          <div id="modal__content">
            <v-layout row wrap id="wrap">
              <v-flex md5 sm12 id="modal__image">
                <img :src="modal.image" alt="">
              </v-flex>
              <v-flex md7 sm12 id="modal__data">
                <h1>{{modal.name}}</h1>
                <h2>{{modal.university}}</h2>
                <h3>Batch {{modal.batch}}</h3>
                <p>{{modal.description}}</p>
                <div id="modal__btn">
                  <a :href="modal.cv">
                    <button-square
                      text="Download CV"
                      color="rgb(6, 88, 196)"
                      hover="#fff"
                      small="true"
                    />
                  </a>
                  <a :href="modal.linkedin">
                    <button-square
                      text="LinkedIn"
                      color="rgb(6, 88, 196)"
                      hover="#fff"
                      small="true"
                    />
                  </a>
                </div>              
              </v-flex>
            </v-layout>
          </div>
        </v-alert>
      </v-flex>

      <v-flex xs12 id="scholar-list">
        <v-flex xs12 class="text">
          <h2 class="content__smalltitle">Our Scholars</h2>
          <h1 class="content__title">List of Scholars</h1>
        </v-flex>
        <v-flex xs12>
          <div v-masonry transition-duration="0.3s" item-selector=".item" id="gallery__masonry">
            <div v-masonry-tile class="item" :key="index" v-for="(item, index) in scholars">
              <div @click="handleModal(index)">
                <div class="image">
                  <img :src="item.image" alt="">
                </div>
                <div class="data">
                  <h1>{{item.name}}</h1>
                  <h2>{{item.university}}</h2>
                  <p>Batch {{item.batch}}</p>
                </div>
              </div>
            </div>
          </div>
        </v-flex>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
import ButtonArrow from './../partials/ButtonArrow.vue';
import ButtonSquare from './../partials/ButtonSquare.vue';

export default {
  name: 'Scholars',
  components: {
    ButtonArrow,
    ButtonSquare,
  },
  data() {
    return {
      scholars: [],
      alert: false,
      modal: {
        name: '',
        description: '',
        university: '',
        cv: '',
        linkedin: '',
        image: '',
      }
    };
  },
  beforeMount() {
    let url = `${this.$store.state.backendUrl}/scholar/all`;
    axios.get(url)
    .then(response => {
      this.scholars = response.data.result;
    })
    .catch(error => {
      console.log(error);
    })
  },
  methods: {
    handleModal(key) {
      this.alert = !this.alert;
      if(this.alert) {
        let profile = this.scholars[key];
        this.modal = {
          name: profile.name,
          description: profile.description,
          cv: profile.cv,
          university: profile.university,
          linkedin: profile.linkedin,
          image: profile.image
        };
        document.documentElement.style.overflow = 'hidden';
      } else {
        this.modal = {
          name: '',
          description: '',
          cv: '',
          university: '',
          linkedin: '',
          image: ''
        };
        document.documentElement.style.overflow = 'auto';
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'src/assets/css/contents.scss';

html, body {
  height: 100%;
}
#modal {
  background-color: rgba(0,0,0,0.3);
  height: 100vh;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-content: center;

  #modal__content {
    height: 60vh;
    width: 70vw;
    background-color: white;
    #wrap {
      height: 100%;
      #modal__data {
        padding: 4vw;
        h1 {
          color: $blue;
          font-size: 2vw;
          margin-bottom: 1.5vh;
        }
        h2 {
          color: rgb(54, 54, 54);
          font-size: 1.3vw;
        }
        h3 {
          color: rgb(54, 54, 54);
          font-size: 1.3vw;
          margin-bottom: 3vh;
        }
        p {
          font-size: 0.8vw;
          color: black;
        }
        #modal__btn {
          display: flex;
          flex-direction: column;
        }
      }
      #modal__image {
        overflow: hidden;
        img {
          height: 100%;
          width: auto;
        }
      }
    }
  }
}

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

#hall-of-fame {
  padding: 0 20vw 10vh 20vw;
  background-color: #ECF7FD;
  
  p {
    font-size: 1vw;
  }

  .hall-item {
    padding: 0;
    background-color: white;
    margin-bottom: 1vh;
    h1 {
      font-size: 6vw;
      color: $blue;
    }
    h2 {
      font-weight: bold;
      font-size: 1.5vw;
      margin-bottom: 1rem;
    }
    p {
      font-size: 0.9vw;
      line-height: 1.3vw;
    }
    .program-photo {
      padding: 0;
      justify-content: center;
      overflow: hidden;
      img {
        object-fit: cover;
        height: 100%;
        max-width: 100%;
      }
    }
    .program-content {
      padding: 2vw;
    }
  }
}

#scholar-list {
  padding: 0 20vw 10vh 20vw;
  p {
    font-size: 1vw;
  }
  .item {
    cursor: pointer;
    width: 13vw;
    height: 40vh;
    margin-right: 0.5vw;
    margin-bottom: 1.5rem;
    .image {
      overflow: hidden;
    }
    .data {
      padding: 1.5vw 1vw;
      h1 {
        font-size: 1.2vw;
        color: $blue;
      }
      h2, p {
        font-size: 0.9vw;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #modal {
    #modal__content {
      min-height: 80vh;
      width: 90vw;
      #wrap {
        height: 100%;
        #modal__data {
          padding: 4vw;
          h1 {
            font-size: 3vh;
            margin-bottom: 1vh;
          }
          h2 {
            font-size: 2vh;
          }
          h3 {
            font-size: 2vh;
            margin-bottom: 2vh;
          }
          p {
            font-size: 1.5vh;
          }
          #modal__btn {
            display: flex;
            flex-direction: column;
          }
        }
        #modal__image {
          overflow: hidden;
          height: 40%;
          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }
  #hall-of-fame {
    padding: 0 10vw 10vh 10vw;
    
    p {
      font-size: 1vw;
    }

    .hall-item {
      padding: 0;
      background-color: white;
      h2 {
        font-size: 3vh;
        margin-bottom: 1rem;
      }
      p {
        font-size: 2vh;
        line-height: 3vh;
      }
      .program-photo {
        padding: 0;
        justify-content: center;
        overflow: hidden;
        img {
          object-fit: cover;
          height: 100%;
          max-width: 100%;
        }
      }
      .program-content {
        padding: 2vh;
      }
    }
  }
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
  #scholar-list {
    padding: 0 10vw 10vh 10vw;
    .item {
      height: 33vh;
      width: 38vw;
      .data {
        h1 {
          font-size: 2vh;
        }
        h2, p {
          font-size: 2vh;
        }
      }
    }
  }
}
</style>
