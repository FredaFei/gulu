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
        if (index === names.length) {
          index = 0
        }
        this.$emit('update:selected', names[index + 1])
        index++
        console.log(index)
        setTimeout(run, 2000)
      }
      setTimeout(run, 2000)
    },
    getSelected() {
      let first = this.$children[0]
      return this.selected || first.name
    },
    updateChildren() {
      let first = this.$children[0]
      let selected = this.getSelected()
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
