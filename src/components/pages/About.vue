<template>
  <v-container fluid grid-list-md id="about-us">
    <v-flex id="about">
      <v-layout row>
          <v-flex md4 id="about-1">
            <div />
          </v-flex>
          <v-flex md8 class="content">
            <h1>About Us</h1>
            <p>'I am member of a team, and I rely on the team. I defer to it and sacrifice for it, because the team, not the individual, is the ultimate champion.' - Mia Hamm</p>
          </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex md4 id="about-2">
          <div />
        </v-flex>
        <v-flex md8 id="about-2-blue">
        </v-flex>
      </v-layout>
    </v-flex>

    <v-flex id="initiator">
      <v-layout row>
        <v-flex md5 id="initiator-profile">
            <div id="initiator-photo" />
            <div id="initiator-blue">
              <h3>Peng T. Ong</h3>
              <h4>Program Initiator</h4>
            </div>
        </v-flex>
        <v-flex md7 id="initiator-wrapper">
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
      <v-layout row>
        <v-flex md8 id="journey-wrapper">
          <div class="message">
            <h4 class="blue-font">About Our Journey</h4>
            <p class="text"><b>Computer Science Leaders Scholarship (CS Leaders)</b> was first launched in 2015, The scholarship aims to create a better future generation for Indonesia, create new leaders in the field of computer science and to improve people’s lives through Computer Science education. <br>
            <br>It also aims to provide the <b>top talented candidates with job opportunities</b> where they would be able to innovate, lead, and create positive results, as well as to help to grow the local industry with supply of top talents. <br>
            <br><b>CS Leaders</b> is a program initiated and operated by a non-profit foundation: <b>Nithya Bhaskara Widya</b>, which was established as a legal entity in 2014. A four-year scholarship and leadership development program for computer science undergraduate at <b>University of Indonesia (UI)</b> and <b>Bandung Institute of Technology (ITB)</b>. <br>
            <br><b>We focus on Computer Science</b> this because Indonesia requires computer science skills to drive forward the country’s financial condition to be able to improve the welfare of the people, and <b>Computer Science is one of the 14 subsectors</b> that has been a focus of the government in their effort of growing the Indonesian economic. <br> </p>
          </div> 
        </v-flex>
        <v-flex md4>
          <div id="journey-1" />
          <div id="journey-2" />
        </v-flex>
      </v-layout>
    </v-flex>

    <v-flex id="mission">
      <v-layout row>
        <div class="message">
          <h4 class="blue-font">Our Mission</h4>
        </div>
      </v-layout>
      <v-layout row>
        <v-flex md6 class="placeholder-1">
          <img id="mission-1" src="./../../assets/mission-1.jpg">
          <div class="mission-text-1">
            <h4>To Society &amp; Country </h4> 
            <h5>We aim to drive forward the country by improving the quality and quantity of talented individuals in Computer Science field of study that will be able to develop the ICT Industry. <br></h5>
          </div>
        </v-flex>
        <v-flex md6 class="placeholder-2">
          <img id="mission-2" src="./../../assets/mission-2.jpg">
          <div class="mission-text-2">
            <h4>For Partners &amp; Industry </h4>
            <h5>Help the tech industry grow through top talent acquisitions to enable businesses create new innovations that can help solve various problems that people face every day <br></h5>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>

    <v-flex id="team">
      <v-layout row>
        <div class="message">
          <h4 class="blue-font">The Team Behind CSLeaders</h4>
          <h2>Our Board of Members</h2>
        </div>
      </v-layout>
      <v-layout row class="member-holder">
        <v-flex md2 offset-md2>
          <img class="member-photo" src="./../../assets/Peng T. Ong.jpg"/>
          <div class="member-blue">
            <h4>Peng T. Ong</h4>
            <p class="text">Program Initiator</p>
          </div>
        </v-flex>
        <v-flex md2 offset-md1>
          <img class="member-photo" src="./../../assets/Andy Hidayat.jpg"/>
          <div class="member-blue">
            <h4>Andy Hidayat</h4>
            <p class="text">Counselor of Foundation</p>
          </div>
        </v-flex>
        <v-flex md2 offset-md1>
          <img class="member-photo" src="./../../assets/Ali Rahman.jpg"/>
          <div class="member-blue">
            <h4>Ali Rahman</h4>
            <p class="text">Program Director</p>
          </div>
        </v-flex>
      </v-layout>
      <v-layout row class="member-holder">
        <v-flex md2 offset-md2>
          <img class="member-photo" src="./../../assets/Niko Radityo.jpg"/>
          <div class="member-blue">
            <h4>Niko Radityo</h4>
            <p class="text">Chairman of Foundation</p>
          </div>
        </v-flex>
        <v-flex md2 offset-md1>
          <img class="member-photo" src="./../../assets/Robbi Baskoro.jpg"/>
          <div class="member-blue">
            <h4>Robbi Baskoro</h4>
            <p class="text">Secretary of Foundation</p>
          </div>
        </v-flex>
        <v-flex md2 offset-md1>
          <img class="member-photo" src="./../../assets/Ratna Dewi.jpg"/>
          <div class="member-blue">
            <h4>Ratna Dewi</h4>
            <p class="text">Treasurer of Foundation</p>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>

  </v-container>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
@import 'src/assets/css/contents.scss';

#about-us {
  margin-top: 100px;
  padding: 0px !important;
  margin-bottom: 100px;
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

.blue-font {
  color: #08065a;
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
}

.content p {
  font-size: 1.5vw;
}

#about-1 {
  filter: brightness(60%);
  width: 100%;
  height: 40vh;
  max-width: 767px;
  background: url('./../../assets/about-1.jpg') no-repeat center;
  background-size: 100% auto;
}

#about-2 {
  filter: brightness(60%);
  width: 100%;
  height: 30vh;
  max-width: 767px;
  background: url('./../../assets/about-2.jpg') no-repeat center;
  background-size: 100% auto;
}

#about-2-blue {
  height: 30vh;
  background-color: #08065a;
}

#initiator {
  padding-top: 10vh;
  padding-left: 20vw;
  padding-right: 20vw;
}

#initiator-profile {
  color: white;
}

#initiator-photo {
  height: 50vh;
  width: 100%;
  background: url('./../../assets/Peng T. Ong.jpg') no-repeat center;
  background-size: 100% auto;
}

#initiator-blue {
  padding: 2vw;
  height: 20vh;
  background-color: #08065a;
}

#initiator-wrapper {
  height: 70vh;
  background-color: #bfe6e7;
}

.message {
  padding: 2.5vw;
  font-size: 1vw;
}

#journey {
  padding-top: 10vh;
}

#journey-wrapper {
  height: auto;
  padding-left: 20vw;
  padding-right: 5vw;
}

#journey-1 {
  width: 100%;
  height: 40vh;
  max-width: 767px;
  background: url('./../../assets/journey-1.jpg') no-repeat center;
  background-size: 100% auto;
}

#journey-2 {
  width: 100%;
  height: 40vh;
  max-width: 767px;
  background: url('./../../assets/journey-2.jpg') no-repeat center;
  background-size: 100% auto;
}

#mission {
  background-color: #e2e2e2;
}

#mission .message, #team .message {
  padding-left: 5vw !important;
  padding-bottom: 0 !important;
}

.placeholder-1 {
  padding-bottom: 10vh !important;
  padding-left: 10vw !important;
  padding-right: 2.5w !important;
  color: white;
  position: relative;
  text-align: center;
}

.placeholder-2 {
  padding-bottom: 10vh !important;
  padding-left: 2.5vw !important;
  padding-right: 10vw !important;
  color: white;
  position: relative;
  text-align: center;
}

#mission-1 {
  filter: brightness(60%);
  width: 100%;
  height: 35vh;
  max-width: 767px;
  background-size: 100% auto;
}

#mission-2 {
  filter: brightness(60%);
  width: 100%;
  height: 35vh;
  max-width: 767px;
  background-size: 100% auto;
}

.mission-text-1 {
  position: absolute;
  top: 40%;
  left: 42.5%;
  transform: translate(-20%, -50%);
}

.mission-text-2 {
  position: absolute;
  top: 40%;
  left: 42.5%;
  transform: translate(-50%, -50%);
}

#team {
  padding-top: 10vh;
}

.member-holder {
  color: white;
  padding-bottom: 4vw;
}

.member-photo {
  height: 30vh;
  width: 100%;
}

.member-blue {
  padding: 1.5vw;
  height: 15vh;
  background-color: #08065a;
}

</style>