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
    },
    autoPlay: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.updateChildren()
    this.autoPlay && this.playAutomaticlly()
  },
  updated() {
    this.updateChildren()
  },
  methods: {
    playAutomaticlly() {
      let names = this.$children.map(vm => vm.name)
      let index = names.indexOf(this.getSelected())
      let run = () => {
        let newIndex = index - 1
        if (newIndex === names.length) {
          newIndex = 0
        }
        if (newIndex === -1) { newIndex = names.length - 1 }
        this.$emit('update:selected', names[newIndex])
        setTimeout(run, 2000)
      }
      setTimeout(run, 2000)
    },
    getSelected() {
      let first = this.$children[0]
      return this.selected || first.name
    },
    updateChildren() {
      let selected = this.getSelected()
      this.$children.forEach((vm) => {
        vm.selected = selected
        const names = this.$children.map(vm => vm.name)
        let newIndex = names.indexOf(selected)
        let oldIndex = names.indexOf(vm.name)
        vm.reverse = newIndex>oldIndex ? false : true
        console.log(vm.reverse)
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
    overflow: hidden;
  }
}
</style>
