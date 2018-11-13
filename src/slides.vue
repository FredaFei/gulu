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
      type: String,
      default: ''
    }
  },
  mounted() {
    console.log(this.$children)
    this.$children[0].visible = true
    this.updateChildren()
  },
  updated(){
    this.updateChildren()
  },
  methods: {
    updateChildren(){
      this.$children.forEach((vm)=>{
        console.log(vm)
        vm.selected = this.selected
        console.log(vm.selected)
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
