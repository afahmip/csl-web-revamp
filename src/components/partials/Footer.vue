<template>
  <v-container fluid grid-list-md  id="footer">
    <v-layout row wrap>
      <v-flex xs12 sm4 md4 lg4 id="footer__content">
        <v-layout row wrap>
          <v-flex md12 sm12 id="csl-logo">
            <img src="./../../assets/cslogo-white.png" alt="">
          </v-flex>
          <v-flex md12 sm12 id="csl-addr">
            <p>
              <b>The Capital Residence</b><br>
              Office Tower, 7th floor - SCBD Lot 24<br>
              Jl. Jenderal Sudirman Kav. 52-53<br>
              South Jakarta, Indonesia 12190<br>
              Phone: +6221-515-2771
            </p>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 sm8 md8 lg8 id="footer__map">
        <iframe :src="this.$store.state.mapsUrl" frameborder="0"></iframe>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
#footer {
  margin: 0;
  padding: 9vh 17vw;
  background-color: rgb(39, 39, 39);
}

#footer__content {
  p {
    line-height: 1.7vw;
    font-size: 0.9vw;
    color: rgb(190, 190, 190);
  }

  img {
    width: 50%;
    margin-bottom: 2rem;
  }
}

#footer__map {
  iframe {
    width: 100%;
    height: 100%;
  }
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  #footer {
    padding: 8vh 0 8vh 10vw;
  }

  #csl-logo {
    img {
      width: 70%;
    }
  }
  #csl-addr {
    p {
      font-size: 1.5vw;
      line-height: 2.5vw;
    }
  }
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (max-width: 767px) {
  #footer {
    padding: 9vh 10vw;
  }

  #footer__content {
    flex-basis: 34%;
    max-width: 34%;
    #csl-addr {
      p {
        line-height: 2.5vw;
        font-size: 1.5vw;
        color: rgb(190, 190, 190);
      }
    }

    img {
      width: 80%;
      margin-bottom: 2rem;
    }
  }

  #footer__map {
    flex-basis: 66%;
    max-width: 66%;
  }
}

@media screen and (max-width: 767px) {
  #footer {
    padding: 9vh 10vw;
  }

  #footer__content {
    p {
      font-size: 2vh;
      line-height: 3vh;
    }
  }

  #footer__map {
    iframe {
      height: 16rem;
    }
  }
}
</style>
