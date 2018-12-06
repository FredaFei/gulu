<template>
  <div class="g-nav-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'guluNav',
  props: {
    selected: {
      type: Array,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    console.log(this.names)
    this.names.forEach(vm => {
      if (this.selected.indexOf(vm.name) >= 0) {
        vm.selected = true
      } else {
        vm.selected = false
      }
    })
    this.names.forEach(vm => {
      vm.$on('add:selected', name => {
        if (this.multiple) {
          if (this.selected.indexOf(vm.name) < 0) {
            let copy = JSON.parse(JSON.stringify(this.selected))
            copy.push(name)
            this.$emit('update:selected', copy)
            console.log(copy)
          }
        } else {
          this.$emit('update:selected', [name])
        }
      })
    })
  },
  updated() {
    this.names.forEach(vm => {
      if (this.selected.indexOf(vm.name) >= 0) {
        vm.selected = true
      } else {
        vm.selected = false
      }
    })
    this.names.forEach(vm => {
      vm.$on('add:selected', name => {
        if (this.multiple) {
          if (this.selected.indexOf(vm.name) < 0) {
            let copy = JSON.parse(JSON.stringify(this.selected))
            copy.push(name)
            this.$emit('update:selected', copy)
            console.log(copy)
          }
        } else {
          this.$emit('update:selected', [name])
        }
      })
    })
  },
  computed: {
    names() {
      return this.$children.filter(vm => vm.$options.name === 'guluNavItem')
    }
  }
}
</script>

<style lang="scss" scoped>
.g-nav-wrapper {
  border: 1px solid;
  display: flex;
}
</style>
