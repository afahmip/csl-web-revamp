<template>
  <v-container fluid grid-list-md id="about-us">
    <v-flex id="about">
      <v-layout id="about-sec1">
          <v-flex xl4 lg4 md4 sm12 class="p0">
            <div id="about-1"/>
          </v-flex>
          <v-flex xl8 lg8 md8 sm12 class="content">
            <h1>About Us</h1>
            <p>'I am member of a team, and I rely on the team. I defer to it and sacrifice for it, because the team, not the individual, is the ultimate champion.' - Mia Hamm</p>
          </v-flex>
      </v-layout>
      <v-layout id="about-sec2" row wrap>
        <v-flex xl4 lg4 md4 sm12 xs12 class="p0">
          <div id="about-2"/>
        </v-flex>
        <v-flex xl8 lg8 md8 sm12 xs12 class="w25" id="about-2-blue">
        </v-flex>
      </v-layout>
    </v-flex>

    <v-flex id=initiator>
      <v-layout row wrap>
        <v-flex md5 sm12 xs12 id="initiator-profile">
            <div id="initiator-photo">
              <img src="./../../assets/Peng T. Ong.jpg"/>
            </div>
            <div id="initiator-blue">
              <h3>Peng T. Ong</h3>
              <h4>Program Initiator</h4>
            </div>
        </v-flex>
        <v-flex md7 sm12 xs12 id="initiator-wrapper">
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
        <v-flex md8 sm8 xs12 id="journey-wrapper">
          <div class="message">
            <h4 class="blue-font">About Our Journey</h4>
            <p class="text"><b>Computer Science Leaders Scholarship (CS Leaders)</b> was first launched in 2015, The scholarship aims to create a better future generation for Indonesia, create new leaders in the field of computer science and to improve people’s lives through Computer Science education. <br>
            <br>It also aims to provide the <b>top talented candidates with job opportunities</b> where they would be able to innovate, lead, and create positive results, as well as to help to grow the local industry with supply of top talents. <br>
            <br><b>CS Leaders</b> is a program initiated and operated by a non-profit foundation: <b>Nithya Bhaskara Widya</b>, which was established as a legal entity in 2014. A four-year scholarship and leadership development program for computer science undergraduate at <b>University of Indonesia (UI)</b> and <b>Bandung Institute of Technology (ITB)</b>. <br>
            <br><b>We focus on Computer Science</b> this because Indonesia requires computer science skills to drive forward the country’s financial condition to be able to improve the welfare of the people, and <b>Computer Science is one of the 14 subsectors</b> that has been a focus of the government in their effort of growing the Indonesian economic. <br> </p>
          </div> 
        </v-flex>
        <v-flex md4 sm4>
          <img xs6 src="./../../assets/journey-1.jpg" class="journey-img"/>
          <img xs6 src="./../../assets/journey-2.jpg" class="journey-img"/>
        </v-flex>
    </v-flex>

    <v-flex id="mission">
      <v-layout row>
        <div class="message">
          <h4 class="blue-font">Our Mission</h4>
        </div>
      </v-layout>
      <v-flex id="mission-1" xs12 sm6 md6 lg6>
        <img src="./../../assets/mission-1.jpg">
        <div class="mission-text">
          <h4>To Society &amp; Country </h4> 
          <h5>We aim to drive forward the country by improving the quality and quantity of talented individuals in Computer Science field of study that will be able to develop the ICT Industry. <br></h5>
        </div>
      </v-flex>
      <v-flex id="mission-2" xs12 sm6 md6 lg6>
        <img src="./../../assets/mission-2.jpg">
        <div class="mission-text">
          <h4>For Partners &amp; Industry </h4>
          <h5>Help the tech industry grow through top talent acquisitions to enable businesses create new innovations that can help solve various problems that people face every day <br></h5>
        </div>
      </v-flex>
    </v-flex>

    <v-flex id="team">

      <v-layout row>
        <div class="message">
          <h4 class="blue-font">The Team Behind CSLeaders</h4>
          <h2>Our Board of Members</h2>
        </div>
      </v-layout>

      <v-flex class="member-holder">
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
            <a :href="profile.route">
              <h4>{{profile.name}}</h4>
            </a>
            <p class="text">{{profile.position}}</p>
          </div>
        </v-flex>
      </v-flex>

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

.p0 {
  padding: 0px !important;
}

.blue-font {
  color: $blue;
}

.flex {
  display: inline-block;
  vertical-align: top;
}

h1 {
  font-size: 3.5vw;
  color: black;
  padding-bottom: 2vh;
}

h2 {
  font-size: 3vw;
  color: black;
  padding-bottom: 2vh;
}

h3 {
  font-size: 2.5vw;
  padding-bottom: 2vh;
}

h4 {
  font-size: 1.5vw;
  padding-bottom: 2vh;
}

h5 {
  font-size: 1.2vw;
  padding-bottom: 2vh;
}

.text {
  font-size: 1vw;
  margin: 0px !important;
}

.content {
  height: 100%;
  padding-top: 10vh  !important;
  vertical-align: middle;
  padding-left: 5vw !important;
  padding-right: 15vw !important;
  padding-bottom: 5vw !important;
}

.content p {
  font-size: 1.5vw;
}

#about {
  padding-top: 10vh;
  height: 100vh;
}

#about-1 {
  background: url('./../../assets/about-1.jpg') no-repeat center;
  background-size: 100% auto;
  height: 100%;
}

#about-sec2 {
  height: 40%;
}

#about-2 {
  background: url('./../../assets/about-2.jpg') no-repeat center;
  background-size: 100% auto; 
  height: 100%;
}

#about-2-blue {
  height: 100%;
  background-color: #08065a;
  background-size: 100% auto;
  background-position: 50% 90%;
}

#initiator {
  padding-left: 20vw;
  padding-right: 20vw;
  padding-top: 15vh;
  width: 120vw;
  height: 100%;
}

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
  padding: 2vw;
  height: 30%;
  background-color: $blue;
}

#initiator-wrapper {
  background-color: #ECF7FD;
}

.message {
  padding: 3vw;
  font-size: 1vw;
}

#journey {
  padding-top: 10vh;
}

#journey-wrapper {
  display: inline-block;
  padding-left: 20vw;
  padding-right: 5vw;
  height: auto;
}

#mission {
  background-color: #e2e2e2;
  width: 100%;
  padding-bottom: 10vh;
}

#mission .message, #team .message {
  padding-left: 5vw !important;
  padding-bottom: 0 !important;
  margin-bottom: 1vw;
}

#mission-1, #mission-2 {
  width: 100%;
  height: auto;
  max-height: 35vh;
  // max-width: 767px;
  background-size: 100% auto;
  // padding-right: 2.5vw !important;
  color: white;
  position: relative;
  text-align: center;
  padding: 5vw;
  padding-top: 0;
}

@media (min-width: 1264px) {
    
  #mission-1 {
    padding-right: 2.5vw;
  }

  #mission-2 {
    padding-left: 2.5vw;
  }

}

#mission-1 img, #mission-2 img {
  filter: brightness(60%);
  width: 100%;
  max-height: 30vh;
  object-fit: cover;
}

#team {
  padding-top: 10vh;
}

.member-holder {
  color: white;
  padding-bottom: 4vw;

  a {
    text-decoration: none;
    color: white;
  }
}

.member-holder div {
  display: inline-block;
  margin-bottom: 1vh;
}

.member-photo {
  height: 30vh;
  width: 100%;
  overflow: hidden;
  margin: 0 !important;
}

.member-photo img {
  position: relative;
  width: 100%;
  height: auto;
  top: -1.5rem;
}

@media (min-width: 600px) and (max-width: 960px) {
  .member-photo {
    height: 25vh;
  }

  .member-photo img {
    top: -1rem;
  }
}


@media (max-width: 599px) {
  .member-photo {
    height: 60vw;
  }
}

.member-blue {
  padding: 1.5vw;
  height: calc(5vw + 5vh);
  width: 100%;
  background-color: #08065a;
}

@media (min-width: 768px) {
  .mission-text {
    position: absolute;
    top: 15%;
    bottom: 25%;
    left: 25%;
    right: 25%;
  }
}

@media (max-width: 767px) {
  #about {
    height: 70vh;
  }
  h1 {
    font-size: 3.5vh;
    color: black;
    padding-bottom: 2vh;
  }

  h2 {
    font-size: 3vh;
    color: black;
    padding-bottom: 2vh;
  }

  h3 {
    font-size: 2.5vh;
    padding-bottom: 2vh;
  }

  h4 {
    font-size: 1.5vh;
    padding-bottom: 2vh;
  }

  h5 {
    font-size: 1.2vh;
    padding-bottom: 2vh;
  }

  .content p {
    font-size: 1.5vh;
  } 
  .content {
    height: 100%;
    padding-top: 5vh  !important;
    vertical-align: middle;
    padding-left: 10vw !important;
    padding-right: 10vw !important;
    padding-bottom: 5vw !important;
  }
  #initiator {
    padding-left: 10vw;
    padding-right: 10vw;
    padding-top: 5vh;
    width: 120vw;
    height: 100%;  
  }
  #journey {
    padding-top: 5vh;
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
  .mission-text {
    position: absolute;
    top: 10%;
    bottom: 25%;
    left: 25%;
    right: 25%;
  }
  #mission-1 > img, #mission-2 > img {
    max-height: 20vh;
  }
  #mission {
    background-color: #e2e2e2;
    width: 100%;
    padding-bottom: 2vh;
    padding-top: 2vh;
  }
  .text {
    font-size: 1.5vh;
  }
  #about-2-blue {
    display: none;
  }
}
</style>

