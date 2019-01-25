<template>
  <button
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
  props: ['text', 'color', 'hover'],
  computed: {
    style() {
      let border = `border: 2px solid ${this.color}`;
      let color = 'color:' + (this.hovering ? this.hover : this.color);
      let background = 'background-color:' + (this.hovering ? this.color : 'rgba(0, 0, 0, 0)');
      return `${border};${color};${background}`;
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
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 1rem;
  padding: 0 45px;
  margin-bottom: 20px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  transition-duration: 0.4s;

  p {
    font-size: 1.1vw;
    margin: 2vh auto;
  }
}

@media screen and (max-width: 768px) {
  button {
    p {
      font-size: 1.8vh;
    }
  }
}
</style>
