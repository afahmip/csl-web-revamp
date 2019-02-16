<template>
  <v-container fluid id="about-us">
    
    <v-flex id="about">
      <v-layout row wrap id="about-jumbotron">
        <v-flex lg5 md5 sm5 xs12>
          <v-layout row wrap id="jumbo-image">
            <v-flex md12 class="about__img">
              <img src="./../../assets/about-1.jpg" alt="">
            </v-flex>
            <v-flex md12 class="about__img">
              <img src="./../../assets/about-2.jpg" alt="">
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex lg7 md7 sm7 xs12 class="content">
          <h1>About Us</h1>
          <p>'I am member of a team, and I rely on the team. I defer to it and sacrifice for it, because the team, not the individual, is the ultimate champion.' - Mia Hamm</p>
        </v-flex>
      </v-layout>
    </v-flex>

    <v-flex id=initiator>
      <v-layout row wrap>
        <v-flex md5 sm5 xs12 id="initiator-profile">
          <div id="initiator-photo">
            <img src="./../../assets/Peng T. Ong.jpg"/>
          </div>
          <div id="initiator-blue">
            <h3>Peng T. Ong</h3>
            <h4>Program Initiator</h4>
          </div>
        </v-flex>
        <v-flex md7 sm7 xs12 id="initiator-wrapper">
          <div class="message">
            <h4 class="blue-font">Message from The Initiator</h4>
            <p class="text">Since the program first launched in 2015, The Computer Science Leaders Scholarship (CSLS) Program remains grounded in our mission to drive forward the country by improving the quality and quantity of talented individuals in Computer Science field. <br>
            <br> In the past ten years, technology focus companies have been main source of disruptive factor that change our daily life even change countries. In the software and computing industry, capital is no longer the main focus, but skill and the ability to create ideas and products that can act as a solution to the daily problems are the key to be success. <br>
            <br> This is why we committed to support the government by improving the quality and quantity of talented individuals in Computer Science field of study that will be able to develop the ICT industry in the country. <br>
            <br> “the main goal of Computer Science Leaders Scholarship Program is to build the local tech ecosystem, and the best way to do that is by keeping the nation’s talent inside the country” <br> </p>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>

    <v-flex id="journey">
      <v-layout row wrap>
        <v-flex md8 sm12 id="journey-wrapper">
          <h1 class="content__smalltitle">About Us</h1>
          <h1 class="content__title">About Our Journey</h1>
          <p class="text"><b>Computer Science Leaders Scholarship (CS Leaders)</b> was first launched in 2015, The scholarship aims to create a better future generation for Indonesia, create new leaders in the field of computer science and to improve people’s lives through Computer Science education. <br>
          <br>It also aims to provide the <b>top talented candidates with job opportunities</b> where they would be able to innovate, lead, and create positive results, as well as to help to grow the local industry with supply of top talents. <br>
          <br><b>CS Leaders</b> is a program initiated and operated by a non-profit foundation: <b>Nithya Bhaskara Widya</b>, which was established as a legal entity in 2014. A four-year scholarship and leadership development program for computer science undergraduate at <b>University of Indonesia (UI)</b> and <b>Bandung Institute of Technology (ITB)</b>. <br>
          <br><b>We focus on Computer Science</b> this because Indonesia requires computer science skills to drive forward the country’s financial condition to be able to improve the welfare of the people, and <b>Computer Science is one of the 14 subsectors</b> that has been a focus of the government in their effort of growing the Indonesian economic. <br> </p>
        </v-flex>
        <v-flex md4 sm12 id="journey-img__placeholder">
          <v-layout row wrap>
            <v-flex lg12 class="journey-img">
              <img src="./../../assets/journey-1.jpg"/>
            </v-flex>
            <v-flex lg12 class="journey-img">
              <img src="./../../assets/journey-2.jpg"/>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>

    <v-flex id="mission">
      <v-layout row>
        <div>
          <h1 class="content__smalltitle">About Us</h1>
          <h1 class="content__title">Our Mission</h1>
        </div>
      </v-layout>
      <v-layout row wrap>
        <v-flex class="mission-div" xs12 sm12 md6 lg6>
          <div class="mission-img">
            <img src="./../../assets/mission-1.jpg">
          </div>
          <div class="mission-text">
            <h4>To Society &amp; Country </h4> 
            <p>We aim to drive forward the country by improving the quality and quantity of talented individuals in Computer Science field of study that will be able to develop the ICT Industry. <br></p>
          </div>
        </v-flex>
        <v-flex class="mission-div" xs12 sm12 md6 lg6>
          <div class="mission-img">
            <img src="./../../assets/mission-2.jpg">
          </div>
          <div class="mission-text">
            <h4>For Partners &amp; Industry </h4>
            <p>Help the tech industry grow through top talent acquisitions to enable businesses create new innovations that can help solve various problems that people face every day <br></p>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>

    <v-flex id="team">
      <v-flex id="team-title">
        <h1 class="content__smalltitle">The Team Behind CS Leaders</h1>
        <h1 class="content__title">Our Board of Members</h1>
      </v-flex>
      <!-- <v-flex class="member-holder"> -->
      <div v-masonry transition-duration="0.3s" item-selector=".member-holder" id="gallery__masonry">
        <div v-masonry-tile class="member-holder" :key="index" v-for="(profile, index) in profiles">
          <div class="member-photo">
            <img :src="profile.image"/>
          </div>
          <div class="member-blue">
            <router-link :to="profile.route">
              <h4 class="member-name">{{profile.name}}</h4>
            </router-link>
            <p class="text member-position">{{profile.position}}</p>
          </div>
        </div>
      </div>
      <!-- </v-flex> -->
      <!-- <v-flex class="member-holder">
        <v-flex
          xs10 offset-xs1 sm4 offset-sm1 md2
          v-for="profile in profiles"
          :key="profile.name"
          :offset-md2="profile.key%3===0"
          :offset-md1="profile.key%3!==0"
        >
          <div class="member-photo">
            <img :src="profile.image"/>
          </div>
          <div class="member-blue">
            <router-link :to="profile.route">
              <h4 class="member-name">{{profile.name}}</h4>
            </router-link>
            <p class="text member-position">{{profile.position}}</p>
          </div>
        </v-flex>
      </v-flex> -->
    </v-flex>

  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'About',
  data() {
    return {
      profiles: [],
    }
  },
  beforeMount() {
    let { profiles } = this.$store.state;
    let names = Object.keys(profiles);
    let data = Object.values(profiles);

    data.forEach((d, i) => {
      let profile = d;
      profile["route"] = `profile/${names[i]}`;
      profile["key"] = i;
      this.profiles.push(profile);
    });
  },
}
</script>

<style lang="scss" scoped>
@import 'src/assets/css/contents.scss';

#about-us {
  padding: 0px !important;
  margin-bottom: 100px;
}

.blue-font {
  color: $blue;
}

.text {
  font-size: 1vw;
  margin: 0px !important;
}

#about {
  padding-top: 10vh;
  height: 100vh;
  #about-jumbotron {
    height: 100%;
    overflow: hidden;
    #jumbo-image {
      height: 100%;
      .about__img {
        overflow: hidden;
        padding: 0 !important;
        img {
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
      }
    }
    .content {
      padding: 20vh 15vw 5vw 5vw;
      p {
        font-size: 1.5vw;
      }
      h1 {
        font-size: 3vw;
        margin-bottom: 1rem;
      }
    }
  }
}

#initiator {
  padding: 10vh 20vw;
  #initiator-profile {
    color: white;
    padding: 0;
  }
  #initiator-photo {
    height: 70%;
    overflow: hidden;
    img {
      height: 100%;
    }
  }
  #initiator-blue {
    padding: 3vw;
    height: 30%;
    background-color: $blue;
    h3 {
      font-size: 2vw;
      margin-bottom: 0.5rem;
    }
    h4 {
      font-size: 1.2vw;
      font-weight: normal;
    }
  }
  #initiator-wrapper {
    background-color: #ECF7FD;
    h4 {
      font-size: 1.5vw;
      margin-bottom: 1rem;
    }
  }
}

.message {
  padding: 3vw;
  font-size: 1vw;
}

#journey {
  padding-top: 10vh;
  #journey-wrapper {
    padding: 5vh 5vw 15vh 20vw;
    height: auto;
  }
  #journey-img__placeholder {
    height: 100%;
    .journey-img {
      padding: 0 !important;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}

#mission {
  background-color: #e2e2e2;
  padding: 10vh 15vw;
  .mission-div {
    padding-right: 5vw;
    padding-top: 2vh;
    .mission-img {
      height: 50%;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .mission-text {
      padding: 2rem;
      background-color: white;
      p {
        margin-top: 1rem;
        font-size: 1vw;
      }
    }
  }
}

#team {
  padding: 10vh 15vw;
  .member-holder {
    color: white;
    margin: 3vh 5vw 3vh 0;
    width: 15vw;
    a {
      text-decoration: none;
      color: white;
    }
  }

  .member-photo {
    height: 30%;
    overflow: hidden;
    margin: 0 !important;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .member-blue {
    padding: 2vw;
    height: 50%;
    width: 100%;
    background-color: #08065a;

    .member-name {
      font-size: 1.2vw;
      margin-bottom: 0.5rem;
    }
    .member-position {
      font-size: 0.8vw;
    }
  }
}

.mission-text {
  h4 {
    font-size: 1.5vw;
  }
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {

  #about {
    height: 50vh;
    .content {
      padding-top: 10vh !important;
    }
  }

  #journey {
    padding-top: 0;
    #journey-wrapper {
      padding: 10vh 10vw;
      height: auto;
    }
    .journey-img {
      width: 100%;
      height: 30vh;
    }
  }
}

@media (width: 1024px) and (orientation: portrait) {
  #about {
    height: 50vh;
  }
  #initiator {
    padding: 5vh 15vw;
  }
  #journey {
    padding-top: 0;
    #journey-wrapper {
      padding-bottom: 10vh;
    }
  }
}

@media screen and (max-width: 767px) and (orientation: portrait) {
  #about {
    padding-top: 10vh;
    height: 100vh;
    #about-jumbotron {
      flex-direction: column-reverse;
      >div {
        flex-basis: 0;
      }
      #jumbo-image {
        height: 30%;
        >div:last-child {
          display: none;
        }
      }
      .content {
        margin-bottom: 5vh;
        padding: 0 10vw 5vw 10vw !important;
        h1 {
          font-size: 4.3vh;
        }
        p {
          font-size: 2vh;
          line-height: 3vh;
        }
      }
    }
  }

  #initiator {
    padding: 5vh 10vw 10vh 10vw;
    width: 120vw;
    #initiator-profile {
      color: white;
      padding: 0;
    }
    #initiator-photo {
      height: 70%;
      overflow: hidden;
      img {
        height: 100%;
      }
    }
    #initiator-blue {
      padding: 5vh 8vw 0 8vw;
      h3 {
        font-size: 4vh;
        margin-bottom: 0.5rem;
      }
      h4 {
        font-size: 2.5vh;
        font-weight: normal;
      }
    }
    #initiator-wrapper {
      padding: 3vh 5vw;
      h4 {
        font-size: 1.5vw;
        margin-bottom: 1rem;
      }
    }
  }

  #journey {
    padding-top: 0;
    >div:last-child > img:last-child {
      display: none;
    }
    #journey-wrapper {
      padding-left: 10vw;
      padding-right: 10vw;
    }
  }

  #journey-wrapper {
    padding: 5vh 10vw;
  }

  #team {
    padding-left: 10vw;
    padding-right: 10vw;
    .member-holder {
      width: 75vw;
    }
    .member-blue {
      height: auto;
      padding: 2rem;
      .member-name {
        font-size: 2.5vh;
      }
      .member-position {
        font-size: 1.5vh;
      }
    }
  }
}

@media screen and (max-width: 1024px) and (orientation: landscape) {
  #about-jumbotron {
    >div:first-child {
      flex-basis: 48%;
      max-width: 48%;
    }
    >div:last-child {
      flex-basis: 52%;
      max-width: 52%;
    }
  }
  #initiator >div {
    >div:first-child {
      flex-basis: 48%;
      max-width: 48%;
    }
    >div:last-child {
      flex-basis: 52%;
      max-width: 52%;
    }
  }
  #journey >div {
    >div:first-child {
      flex-basis: 66%;
      max-width: 66%;
    }
    >div:last-child {
      flex-basis: 34%;
      max-width: 34%;
    }
  }
  #mission {
    .mission-div {
      flex-basis: 50%;
      max-width: 50%;
    }
  }
}

@media screen and (max-width: 767px) and (orientation: portrait) {
  
  .member-photo {
    height: 60vw;
  }

  p {
    // font-size: 1.3rem !important;
  }

  .message {
    h4 {
      font-size: 2.5vh !important;
    }
  }

  .journey-img {
    display: inline-block;
    width: 100%;
    height: 30vh;
  }
  #journey-wrapper {
    display: inline-block;
    padding-left: 10vw;
    padding-right: 10vw;
    height: auto;
    padding-bottom: 5vw;
  }
  #mission {
    background-color: #e2e2e2;
    width: 100%;
    padding: 5vh 10vw;
    .mission-text {
      p {
        margin-top: 1rem;
        font-size: 1.5vh !important;
      }
    }
  }
  .text {
    font-size: 1.5vh;
  }
  .mission-text {
    h4 {
      font-size: 2.3vh;
    }
    // p {
    //   font-size: 2vh;
    // }
  }

}
</style>
