<template>
  <v-container fluid id="sponsor">
    <v-layout row wrap>

      <v-flex md6 xs12 id="jumbotron">
        <h2 class="content__smalltitle">Come Join Us</h2>
        <h1>Become Our Sponsor</h1>
        <p>Computer Science Leaders Scholarship Program - An Opportunity Enabler for the New Generation through Computer Science (CS)</p>
        <ul>
          <li>Influence the next generation</li>
          <li>Get the first access to Top tech Talents in Indonesia!</li>
          <li>Play an active role in shaping one of Southeast Asia's largest economies</li>
        </ul>
      </v-flex>

      <v-flex md6 xs12 id="form">
        <h1>Application Form</h1>
        <p>Please fill in the form below to request the proposal:</p>
        <div id="form__input">
          <v-text-field
            v-model="name"
            label="Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="position"
            label="Position"
            required
          ></v-text-field>
          <v-text-field
            v-model="company"
            label="Company"
            required
          ></v-text-field>
          <v-text-field
            v-model="phone"
            label="Phone"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            label="Email"
            required
          ></v-text-field>
          <v-btn
            id="sponsor__submit"
            v-on:click="submit"
          >
            Submit
          </v-btn>
        </div>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Sponsor',
  data() {
    return {
      name: '',
      position: '',
      company: '',
      phone: '',
      email: '',
    }
  },
  methods: {
    submit() {
      let url = 'http://127.0.0.1:8888/sponsor_app/';
      axios.post(url, {
        name: this.name,
        position: this.position,
        company: this.company,
        phone: this.phone,
        email: this.email
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
      this.position = "";
      this.company = "";
      this.phone = "";
      this.email = "";
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/css/contents.scss';

#sponsor {
  padding: 0;

  #jumbotron, #form {
    min-height: 100vh;
    padding: 20vh 10vw;

    h1 {
      font-size: 2.5vw;
      margin-bottom: 3vh;
    }
    p {
      font-size: 1vw;
    }
  }

  #jumbotron {
    ul {
      margin-top: 3vh;
      li {
        margin-bottom: 1.5vh;
        font-size: 1vw;
      }
    }
  }

  #form {
    background-color: $blue;
    color: white;
    
    #form__input {
      padding: 2rem;
      background-color: white;
    }
    button {
      background-color: $blue;
      color: white;
      margin: 0;
    }
  }
}

@media screen and (max-width: 768px) {
  #sponsor {

    #jumbotron, #form {
      min-height: 30vh;

      h1 {
        font-size: 3.5vh;
      }
      p {
        font-size: 2vh;
      }
    }

    #jumbotron {
      padding-bottom: 10vh;
      ul {
        li {
          font-size: 2vh;
        }
      }
    }

    #form {
      padding-top: 10vh;
    }
  }
}
</style>
