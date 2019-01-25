<template>
  <v-container fluid grid-list-md id="main">
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
        <!-- <h1>Latest News</h1> -->
      </v-flex>
      <v-layout row wrap id="content">
        <v-flex xs12>
          <v-layout row wrap>
            <v-flex md7 xs12>
              <h1 class="content__title">About CSLeaders</h1>
              <p><b>Computer Science Leaders Scholarship (CS Leaders)</b> was first launched in 2015, The scholarship aims to create a better future generation for Indonesia, create new leaders in the field of computer science and to improve people’s lives through Computer Science education.&nbsp;
                <a href="/about"> >> Read more</a>
              </p>
            </v-flex>
            <v-flex md5 xs12>
              <img src="./../../assets/squads.jpg" alt="">
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 id="home__scholarship">
          <h1 class="content__title">Scholarship Program</h1>
          <p>A four-year scholarship and leadership development program for computer science undergraduate at University of Indonesia (UI) and Bandung Institute of Technology (ITB).&nbsp;
            <a href="/program">>> Read more</a>
          </p>
          <v-layout row wrap>
            <v-flex xs4>
              <p><b>Full-term Tuition Fee (up to 4 years)</b></p>
            </v-flex>
            <v-flex xs4>
              <p><b>Full Living Costs (for 1st year)</b></p>
            </v-flex>
            <v-flex xs4>
              <p><b>Book Allowance & Research Fund</b></p>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12>
          <h1 class="content__title">How to Join</h1>
          <v-layout row wrap>
            <v-flex md6 xs12>
              <h1 class="content__subtitle">Syarat dan Ketentuan</h1>
              <ul>
                <li>Mahasiswa/i baru, angkatan 2017 berstatus akademik aktif Program Sarjana Ilmu Komputer (STEI untuk mahasiswa ITB) ditunjukkan dengan melampirkan fotokopi Kartu Tanda Mahasiswa (KTM)</li>
                <li>Memiliki pengalaman berorganisasi di cantumkan dalam CV (CV lengkap dengan informasi biodata, tempat dan tanggal lahir, nomor telepon rumah/HP, alamat tinggal dan email)</li>
                <li>Ijazah dan transkip nilai SLTA atau yang sederajat; (Nilai Ujian Nasional minimal rata-rata 7,5)</li>
                <li>Mencantumkan sertifikat kejuaraan/prestasi minimal tingkat kabupaten/kota untuk maksimal 5 tahun terakhir</li>
                <li>Membuat essay tentang hasrat terhadap teknologi informasi sebanyak 1 (satu) halaman ukuran A4, berbahasa Inggris.</li>
                <li>Bukan perokok aktif dibuktikan dengan surat pernyataan bukan perokok aktif</li>
              </ul>
            </v-flex>
            <v-flex md6 xs12>
              <h1 class="content__subtitle">Dokumen Lainya</h1>
              <ul>
                <li>Pas Foto ukuran 4×6</li>
                <li>Scan KTP / KTM* (jika belum memiliki KTP)</li>
              </ul>
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
/* To be separated later */
.content__title {
  font-size: 1.8vw;
  color: rgb(6, 88, 196);
  padding-bottom: 20px;
}

.content__subtitle {
  font-size: 1.4vw;
  padding-bottom: 10px;
}

img {
  width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  font-weight: bold;
  color: red;
}
/* -------- */

#main {
  padding: 0;
}

h1 {
  margin: 0;
}

#jumbotron {
  text-align: center;
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

#content {
  margin: 0 20vw;
  > .flex {
    margin: 7vh 0;
  }
  p, li {
    font-size: 1vw;
    line-height: 1.7vw;
  }
  li {
    margin-bottom: 15px;
  }
}

#home__scholarship {
  text-align: center;
}

@media screen and (max-width: 768px) {
  /* To be separated later */
  .content__title {
    font-size: 4vh;
  }

  .content__subtitle {
    font-size: 3vh;
  }
  /* -------- */

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

  #content {
    margin: 0 10vw;
    > .flex {
      margin: 5vh 0;
    }
    p, li {
      font-size: 2vh;
      line-height: 2.7vh;
    }
  }
}
</style>
