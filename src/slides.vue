<template>
  <div class="g-slides-wrapper">
    <div class="g-slides-window" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
      <slot></slot>
    </div>
    <div class="g-slides-dots">
      <span class="arrow" @click="onClickPrev">
        <g-icon name="left"></g-icon>
      </span>
      <span v-for="n in childrenLength" :key="n" :class="{active: selectedIndex===n-1}" @click="select(n-1)">{{n}}</span>
      <span class="arrow" @click="onClickNext">
        <g-icon name="right"></g-icon>
      </span>
    </div>
  </div>
</template>

<script>
import GIcon from './icon'
export default {
  name: 'guluSlide',
  components: { GIcon },
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
      childrenLength: 0,
      lastSelectedIndex: undefined,
      timerId: undefined
    }
  },
  computed: {
    selectedIndex() {
      let index = this.names.indexOf(this.selected)
      return index === -1 ? 0 : index
    },
    names() {
      return this.items.map(vm => vm.name)
    },
    items() {
      return this.$children.filter(vm => vm.$options.name === 'guluSlideItem')
    }
  },
  mounted() {
    this.updateChildren()
    this.autoPlay && this.playAutomatically()
    this.childrenLength = this.items.length
  },
  updated() {
    this.updateChildren()
  },
  methods: {
    playAutomatically() {
      if (this.timerId) { return false }
      let run = () => {
        let index = this.names.indexOf(this.getSelected())
        let newIndex = index + 1
        if (newIndex === this.childrenLength) {
          newIndex = 0
        }
        if (newIndex === -1) { newIndex = this.childrenLength + 1 }
        this.select(newIndex)
        this.timerId = setTimeout(run, 3000)
      }
      this.timerId = setTimeout(run, 3000)
    },
    onClickPrev() {
      this.select(this.selectedIndex - 1)
    },
    onClickNext() {
      this.select(this.selectedIndex + 1)
    },
    onMouseEnter() {
      this.pause()
    },
    onMouseLeave() {
      this.playAutomatically()
    },
    pause() {
      window.clearTimeout(this.timerId)
      this.timerId = undefined
    },
    select(index) {
      this.lastSelectedIndex = this.selectedIndex
      this.$emit('update:selected', this.names[index])
    },
    getSelected() {
      let first = this.$children[0]
      return this.selected || first.name
    },
    updateChildren() {
      let selected = this.getSelected()
      this.items.forEach((vm) => {
        let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
        if (this.timerId) {
          if (this.lastSelectedIndex === this.childrenLength - 1 && this.selectedIndex === 0) {
            reverse = false
          }
          if (this.lastSelectedIndex === 0 && this.selectedIndex === this.childrenLength - 1) {
            vm.reverse = true
          }
        }
        vm.reverse = reverse
        this.$nextTick(() => {
          vm.selected = selected
        })
        // console.log(vm.reverse)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.g-slides {
  &-wrapper {}
  &-window {
    position: relative;
    overflow: hidden;
  }
  &-dots {
    display: flex;
    justify-content: center;
    span {
      width: 20px;
      line-height: 20px;
      margin-top: 8px;
      margin-left: 8px;
      font-size: 12px;
      text-align: center;
      border-radius: 50%;
      background: #ddd;
      cursor: pointer;
      &.active {
        background: #000;
        color: #fff;
      }
    }
  }
}
</style>
