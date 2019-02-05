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
  name: 'ButtonSquare',
  props: ['text', 'color', 'hover', 'big', 'medium', 'small'],
  computed: {
    style() {
      let border = `border-color: ${this.color}`;
      let color = 'color:' + (this.hovering ? this.hover : this.color);
      let background = 'background-color:' + (this.hovering ? this.color : 'rgba(0, 0, 0, 0)');
      return `${border};${color};${background}`;
    },
    setClass() {
      let size = this.big ? 'btn-big' : (this.medium ? 'btn-med' : 'btn-sm');
      return `btn-square ${size}`;
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
.btn-square {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 1rem;
  padding: 0 45px;
  margin-bottom: 20px;
  border-style: solid;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  transition-duration: 0.4s;

  &.btn-big {
    border-width: 0.4rem;
    p {
      font-size: 1.5vw;
      font-weight: bold;
      margin: 4vh 5vw;
    }
  }

  &.btn-med {
    border-width: 0.2rem;
    p {
      font-size: 1vw;
      font-weight: bold;
      margin: 2vh auto;
    }
  }

  &.btn-sm {
    border-width: 0.2rem;
    p {
      font-size: 0.8vw;
      font-weight: bold;
      margin: 1vh auto;
    }
  }
}

@media screen and (max-width: 768px) {
  .btn-square.btn-big {
    p {
      font-size: 3vh;
      margin: 4vh 6vw;
    }
  }

  .btn-square.btn-med {
    p {
      font-size: 2vh;
      margin: 3vh auto;
    }
  }

  .btn-square.btn-sm {
    p {
      font-size: 1.5vh;
      margin: 1.5vh auto;
    }
  }
}
</style>
