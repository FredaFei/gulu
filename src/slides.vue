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
  props: {
    selected: {
      type: String
    }
  },
  mounted() {
    this.updateChildren()
  },
  updated() {
    this.updateChildren()
  },
  methods: {
    updateChildren() {
      let first = this.$children[0]
      let selected = this.selected || first.name
      this.$children.forEach((vm) => {
        vm.selected = selected
      })
    }
  }
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
