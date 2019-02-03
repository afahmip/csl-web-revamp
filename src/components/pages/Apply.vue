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

      <v-flex xs12>

      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Apply'
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
  }
}

</style>
