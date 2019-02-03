<template>
  <v-container fluid id="main">
    <v-layout row wrap>
      <v-flex xs12 id="jumbotron">
        <div id="jumbotron__content">
          <transition name="fade">
            <h1>Computer Science Leaders<br>Scholarship Program</h1>
          </transition>
          <p>A four-year scholarship and leadership development program for computer science undergraduate.</p>
          <div id="btn-place">
            <a href="programs">
              <button-square
                text="About Program"
                color="#000"
                hover="#fff"
                medium="true"
              />
            </a>
            <a href="apply">
              <button-square
                text="Apply Now!"
                color="#000"
                hover="#fff"
                medium="true"
              />
            </a>
          </div>
        </div>
        <v-layout row wrap>
          <v-flex md4 sm12 id="jumbotron__img">
            <img src="./../../assets/camp.jpg" alt="">
          </v-flex>
        </v-layout>
      </v-flex>
      <!-- <v-flex xs12 id="news">
        <h1>Latest News</h1>
      </v-flex> -->
      <v-layout row wrap id="content">

        <v-flex xs12>
          <v-layout row wrap>
            <v-flex md7 xs12 class="text" id="content__about">
              <h2 class="content__smalltitle">Our Story</h2>
              <h1 class="content__title">About CSLeaders</h1>
              <p><b>Computer Science Leaders Scholarship (CS Leaders)</b> was first launched in 2015, The scholarship aims to create a better future generation for Indonesia, create new leaders in the field of computer science and to improve people’s lives through Computer Science education.
              </p>
            </v-flex>
            <v-flex md5 xs12>
              <div id="img__about">
                <img src="./../../assets/women.jpg" alt="">
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
        
        <v-flex xs12 id="content__scholarship">
          <v-flex xs12 class="text">
            <h2 class="content__smalltitle">Our Program</h2>
            <h1 class="content__title">Scholarship Program</h1>
            <p>A four-year scholarship and leadership development program for computer science undergraduate at University of Indonesia (UI) and Bandung Institute of Technology (ITB).</p>
          </v-flex>
          <v-flex xs12>
            <v-layout row wrap>
              <v-flex md4 xs12 class="scholarship-item">
                <h1>1.</h1>
                <h2>Full-Term Tuition Fee</h2>
                <p>Up to 4 years</p>
              </v-flex>
              <v-flex md4 xs12 class="scholarship-item">
                <h1>2.</h1>
                <h2>Full Living Costs</h2>
                <p>For 1st year</p>
              </v-flex>
              <v-flex md4 xs12 class="scholarship-item">
                <h1>3.</h1>
                <h2>Book Allowance & Research Fund</h2>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-flex>

        <v-flex xs12 id="content__join">
          <v-layout row wrap>
            <v-flex md7 xs12 class="text">
              <h1>Let's Join & Be Part of Us!</h1>
              <a href="apply">
                <button-square
                  text="Apply Now!"
                  color="rgb(6, 88, 196)"
                  hover="#fff"
                  big="true"
                />
              </a>
            </v-flex>
            <v-flex md5 xs12 id="click-here">
              <a href="/apply#info">
                <p>For application<br>information:</p>
                <h1>Click Here</h1>
              </a>
            </v-flex>
          </v-layout>
        </v-flex>

      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import ButtonSquare from './../partials/ButtonSquare.vue';

export default {
  name: 'Home',
  components: {
    ButtonSquare,
  },

}
</script>

<style lang="scss" scoped>
@import 'src/assets/css/contents.scss';

#main {
  padding: 0;
}

h1 {
  margin: 0;
}

#jumbotron {
  text-align: left;
  height: 100vh;
  h1 {
    padding-top: 30vh;
    padding-bottom: 2vh;
    font-size: 3.5vw;
    color: black;
  }
  p {
    padding-bottom: 4vh;
    font-size: 1.5vw;
    color: black;
  }
  #jumbotron__content {
    z-index: 1;
    position: absolute;
    padding: 0 15vw 0 40vw;
  }
  #jumbotron__img {
    height: 100vh;
    overflow: hidden;
    
    img {
      filter: brightness(60%);
      height: 100%;
      width: auto;
      margin: 0 -18vw;
    }
  }
}

#btn-place {
  a {
    margin-right: 2.2vw;
  }
}

#news {
  background-color: white;
}

#content {
  p, li {
    font-size: 1vw;
    line-height: 1.7vw;
  }
  li {
    margin-bottom: 15px;
  }
  
  #content__about {
    padding: 0 10vw 0 20vw;
  }
  #img__about {
    height: 100%;
    overflow: hidden;
    img {
      filter: brightness(60%);
      height: 100%;
      // width: auto;
    }
  }
  #content__scholarship {
    padding: 0 20vw 10vh 20vw;
    background-color: #ECF7FD;

    .scholarship-item {
      padding: 2vw;
      background-color: white;
      margin-bottom: 3vh;
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
        font-size: 1vw;
      }
    }
  }
  #content__join {
    padding: 0 0 0 20vw;

    h1 {
      font-size: 2vw;
      margin-bottom: 3rem;
    }
    button {
      margin-bottom: 5vh;
    }
    #click-here {
      background-color: #012EA3;
      position: relative;
      a {
        position: absolute;
        padding: 4vw;
        height: 100%;
        width: 100%;
        color: white;
      }
      p {
        font-size: 1vw;
      }
      h1 {
        font-size: 3vw;
      }
    }
  }
}

#home__scholarship {
  text-align: center;
}

@media screen and (max-width: 768px) {
  #jumbotron {
    #jumbotron__content {
      padding: 0;
      text-align: center;
      padding-right: 10vw;
      padding-left: 10vw;
      
      h1 {
        font-size: 4.3vh;
        color: white;
      }
      p {
        font-size: 2.5vh;
        color: white;
      }
      .btn-square {
        border: 2px solid white !important;
        color: white !important;
      }
      .btn-square:hover {
        color: black !important;
        background-color: white !important;
      }
    }
  }

  #btn-place {
    display: flex;
    flex-direction: column;
  }

  #content {
    margin: 0;
    > .flex {
      padding: 0;
    }
    p, li {
      font-size: 2vh;
      line-height: 2.7vh;
    }
    #content__about {
      padding: 0 12vw;
    }
    #content__scholarship {
      padding: 0 12vw 10vh 12vw;
      .scholarship-item {
        margin-bottom: 3vh;
        padding: 2rem;
        h1 {
          font-size: 6vh;
        }
        h2 {
          font-size: 3vh;
        }
        p {
          font-size: 2.5vh;
        }
      }
    }
    #content__join {
      padding: 0;
      .text {
        padding: 0 12vw;
      }
      h1 {
        font-size: 5vh;
      }
      #click-here {
        padding: 5vh 12vw;
        position: static;
        a {
          position: static;
        }
        p {
          font-size: 3vh;
          line-height: 3.5vh;
        }
        h1 {
          font-size: 6vh;
        }
      }
    }
  }
}
</style>
