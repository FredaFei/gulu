<template>
  <div class="g-slides-wrapper">
    <div class="g-slides-window">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'guluSlide',
  mounted() {
    console.log(this.$children)
    this.$children[0].visible = true
    setTimeout(() => {
      this.$children[0].visible = false
      this.$children[1].visible = true
    }, 2000);
  },
}
</script>

<style lang="scss" scoped>
.g-slides {
  &-wrapper {
    display: inline-block;
    border: 1px solid blue;
  }
  &-window {
    position: relative;
  }
}
</style>
