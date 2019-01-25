<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 id="jumbotron">
        <h1>Computer Science Leaders<br>Scholarship Program</h1>
        <p>A four-year scholarship and leadership development program for computer science undergraduate.</p>
        <div id="btn-place">
          <a href="https://www.google.com">
            <button-square
              text="About Program"
              color="#fff"
              hover="#000"
            />
          </a>
          <a href="">
            <button-square
              text="Apply Now!"
              color="#fff"
              hover="#000"
            />
          </a>
        </div>
      </v-flex>
      <v-flex xs12 id="news">
        <h1>Latest News</h1>
      </v-flex>
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
h1 {
  margin: 0;
}

#jumbotron {
  height: 115vh;
  background:
    linear-gradient(
      rgba(4, 145, 184, 0.7), 
      rgba(10, 195, 246, 0.7),
    ),
    url('./../../assets/jumbotron.jpg');
  h1 {
    padding-top: 25vh;
    padding-bottom: 2vh;
    font-size: 4vw;
    color: white;
  }
  p {
    padding: 0 30vw;
    padding-bottom: 4vh;
    font-size: 1.5vw;
    color: white;
  }
}

#btn-place {
  a {
    margin: 0 2.2vw;
  }
}

#news {
  background-color: white;
  
}

@media screen and (max-width: 768px) {
  #jumbotron {
    height: 80vh;
    background-size: cover;
    h1 {
      padding: 20vh 10vw 2vh 10vw;
      font-size: 4vh;
    }
    p {
      padding: 0 15vw;
      font-size: 2vh;
    }
  }

  #btn-place {
    display: flex;
    flex-direction: column;
  }
}
</style>
