<template>
  <button
    :class="setClass"
    :style="style"
    @mouseover="mouseOver()"
    @mouseout="mouseOver()"
  >
    <p>{{text}}</p>
  </button>
</template>

<script>
export default {
  name: 'ButtonArrow',
  props: ['text', 'position', 'color', 'hover', 'big', 'medium', 'small'],
  computed: {
    style() {
      let background = 'background-color:' + (this.hovering ? this.hover : this.color);
      return `${background}`;
    },
    setClass() {
      let size = this.big ? 'btn-big' : (this.medium ? 'btn-med' : 'btn-sm');
      return `btn-arrow ${size}`;
    }
  },
  data() {
    return {
      hovering: false,
    };
  },
  methods: {
    mouseOver() {
      this.hovering = !this.hovering;
    },
  }
}
</script>

<style lang="scss" scoped>
.btn-arrow {
  // color: rgb(5, 112, 251);
  color: white;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 1rem;
  padding: 20px 20px;
  border: 0;
  cursor: pointer;
  transition-duration: 0.4s;
}

.btn-arrow.btn-big {
  border-width: 0.5rem;
  p {
    font-size: 2vw;
    font-weight: bold;
    margin: 4vh 6vw;
  }
}

.btn-arrow.btn-med {
  border-width: 0.2rem;
  p {
    font-size: 1vw;
    font-weight: bold;
    margin: 2vh auto;
  }
}

@media screen and (max-width: 768px) {
  .btn-arrow {
    + .btn-big {
      p {
        font-size: 3vh;
        margin: 4vh 6vw;
      }
    }

    + .btn-med {
      p {
        font-size: 2vh;
        margin: 3vh auto;
      }
    }
  }
}
</style>
