<template>
  <v-container fluid id="apply">
    <v-layout row wrap>

      <v-flex xs12 id="info">
        <h2 class="content__smalltitle">Apply Now</h2>
        <h1>How to Apply</h1>
        <v-layout row wrap>
          <v-flex md6 xs12 class="content__list">
            <h1 class="list-title">Syarat & Ketentuan</h1>
            <ul>
              <li>Mahasiswa/i baru, angkatan 2017 berstatus akademik aktif Program Sarjana Ilmu Komputer (STEI untuk mahasiswa ITB) ditunjukkan dengan melampirkan fotokopi Kartu Tanda Mahasiswa (KTM)</li>
              <li>Memiliki pengalaman berorganisasi di cantumkan dalam CV (CV lengkap dengan informasi biodata, tempat dan tanggal lahir, nomor telepon rumah/HP, alamat tinggal dan email)</li>
              <li>Ijazah dan transkip nilai SLTA atau yang sederajat; (Nilai Ujian Nasional minimal rata-rata 7,5)</li>
              <li>Mencantumkan sertifikat kejuaraan/prestasi minimal tingkat kabupaten/kota untuk maksimal 5 tahun terakhir</li>
              <li>Membuat essay tentang hasrat terhadap teknologi informasi sebanyak 1 (satu) halaman ukuran A4, berbahasa Inggris.</li>
              <li>Bukan perokok aktif dibuktikan dengan surat pernyataan bukan perokok aktif</li>
            </ul>
          </v-flex>
          <v-flex md6 xs12 class="content__list">
            <h1 class="list-title">Dokumen Pendukung Lainnya</h1>
            <ul>
              <li>Pas Foto ukuran 4×6</li>
              <li>Scan KTP / KTM* (jika belum memiliki KTP)</li>
            </ul>
            <br>
            <i>*bagi mahasiswa yang saat ini belum memiliki KTM dan KTP, Mohon cantumkan Biodata lengkap di dalam CV</i>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex xs12 id="form">
        <v-flex xs12 class="text">
          <h2 class="content__smalltitle">Apply Now</h2>
          <h1 class="content__title">Application Form</h1>
          <p>Registration will be open June each year, to get notify, please fill in the form below:</p>
        </v-flex>
        <v-flex xs12 id="form__apply">
          <v-text-field
            v-model="name"
            label="Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            label="Email"
            required
          ></v-text-field>
          <v-text-field
            v-model="address"
            label="Address"
            required
          ></v-text-field>
          <v-text-field
            v-model="university"
            label="University"
            required
          ></v-text-field>
          <v-btn v-on:click="submit">
            Submit
          </v-btn>
        </v-flex>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Apply',
  data() {
    return {
      name: '',
      email: '',
      address: '',
      university: '',
    }
  },
  methods: {
    submit() {
      let url = 'http://127.0.0.1:8888/scholar_app/';
      axios.post(url, {
        name: this.name,
        email: this.email,
        address: this.address,
        university: this.university,
      })
      .then(response => {
        if(response.status === 200)
          this.clearForm();
      })
      .catch(error => {
        console.log(error);
      })
    },
    clearForm() {
      this.name = "";
      this.email = "";
      this.address = "";
      this.university = "";
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/css/contents.scss';

#apply {
  padding: 0;
  
  #info {
    min-height: 100vh;
    padding: 20vh 10vw;

    h1 {
      font-size: 2.5vw;
    }
    .content__list {
      padding-right: 5vw;
      font-size: 1vw;
      
      .list-title {
        font-size: 1.5vw;
        margin-top: 4vh;
      }
      ul {
        margin-top: 3vh;
        li {
          margin-bottom: 1.5vh;
        }
      }
    }
  }

  #form {
    padding: 0 20vw 10vh 20vw;
    background-color: #ECF7FD;

    p {
      font-size: 1vw;
    }

    #form__apply {
      padding: 2rem;
      background-color: white;

      button {
        background-color: $blue;
        color: white;
        margin: 0;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #apply {

    #info {
      h1 {
        font-size: 4vh;
      }
      .content__list {
        padding-right: 1vw;
        font-size: 2vh;
        
        .list-title {
          font-size: 2.7vh;
        }
      }
    }

    #form {
      padding: 0 10vw 10vh 10vw;

      p {
        font-size: 2vh;
      }

      #form__apply {
        padding: 2rem;
        background-color: white;

        button {
          background-color: $blue;
          color: white;
          margin: 0;
        }
      }
    }
  }
}

</style>
