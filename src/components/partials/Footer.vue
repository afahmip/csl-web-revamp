<template>
  <v-container fluid grid-list-md  id="footer">
    <v-layout row wrap>
      <v-flex xs12 md4 lg4 id="footer__content">
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
      <v-flex xs12 md8 lg8 id="footer__map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2914326832447!2d106.8112654!3d-6.225252200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f151248c8305%3A0x8b5ad35e1dfb9038!2sThe+Capital+Residence!5e0!3m2!1sid!2sid!4v1513579885026" frameborder="0"></iframe>
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

@media screen and (max-width: 1025px) {
  #csl-logo {
    img {
      width: 70%;
    }
  }
  #csl-addr {
    p {
      font-size: 1.3vw;
      line-height: 2.3vw;
    }
  }
}

@media screen and (max-width: 768px) {
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
