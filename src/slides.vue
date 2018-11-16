<template>
  <div class="g-slides-wrapper">
    <div class="g-slides-window">
      <slot></slot>
    </div>
    <div class="g-slides-dots">
      <span v-for="n in childrenLength" :key="n" :class="{active: selectedIndex===n-1}" @click="select(n-1)">{{n}}</span>
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
  data() {
    return {
      childrenLength: 0
    }
  },
  computed: {
    selectedIndex() {
      return this.names.indexOf(this.selected)
    },
    names() {
      return this.$children.map(vm => vm.name)
    }
  },
  mounted() {
    this.childrenLength = this.$children.length
    this.updateChildren()
    this.autoPlay && this.playAutomatically()
  },
  updated() {
    this.updateChildren()
  },
  methods: {
    playAutomatically() {
      let index = this.names.indexOf(this.getSelected())
      let run = () => {
        let newIndex = index - 1
        if (newIndex === this.childrenLength) {
          newIndex = 0
        }
        if (newIndex === -1) { newIndex = this.childrenLength - 1 }
        this.select(newIndex)
        setTimeout(run, 3000)
      }
      setTimeout(run, 3000)
    },
    select(index) {
      this.$emit('update:selected', this.names[index])
    },
    getSelected() {
      let first = this.$children[0]
      return this.selected || first.name
    },
    updateChildren() {
      let selected = this.getSelected()
      this.$children.forEach((vm) => {
        vm.selected = selected
        let newIndex = this.names.indexOf(selected)
        let oldIndex = this.names.indexOf(vm.name)
        vm.reverse = newIndex > oldIndex ? false : true
        // console.log(vm.reverse)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.g-slides {
  &-wrapper {
    border: 1px solid blue;
  }
  &-window {
    position: relative;
    overflow: hidden;
  }
  &-dots {
    display: flex;
    justify-content: center;
    span {
      width: 16px;
      line-height: 16px;
      font-size: 12px;
      text-align: center;
      border-radius: 50%;
      background: #ccc;
      &+span {
        margin-left: .4em;
      }
      &.active {
        background: red;
      }
    }
  }
}
</style>
