<template>
  <div class="g-sub-nav" :class="{active, vertical}" v-click-outside="close">
    <span class="g-sub-nav-label" @click="onClick">
      <span class="g-sub-nav-title">
        <slot name="title"></slot>
      </span>
      <span class="g-sub-nav-icon" :class="{visible,vertical}">
        <g-icon name="right"></g-icon>
      </span>
    </span>
    <template v-if="vertical">
      <transition name="fade" @enter="enter" @after-enter="afterEnter" @leave="leave" @after-leave="afterLeave">
        <div class="g-sub-nav-popover" v-show="visible" :class="{vertical}">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-else>
      <div class="g-sub-nav-popover" v-show="visible" :class="{vertical}">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script>
import ClickOutside from '../clickOutside'
import GIcon from '../icon'
export default {
  name: 'gulusubNav',
  inject: ['root', 'vertical'],
  directives: { ClickOutside },
  components: { GIcon },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      visible: false
    }
  },
  computed: {
    active() {
      return this.root.namePath.indexOf(this.name) >= 0 ? true : false
    }
  },
  methods: {
    enter(el, done) {
      el.style.height = `auto`
      let { height } = el.getBoundingClientRect()
      el.style.height = 0
      el.getBoundingClientRect()
      el.style.height = `${height}px`
      el.addEventListener('transitionend', () => {
        done()
      })
    },
    afterEnter(el) {
      el.style.height = `auto`
    },
    leave(el, done) {
      let { height } = el.getBoundingClientRect()
      el.style.height = `${height}px`
      el.getBoundingClientRect()
      el.style.height = 0
      el.addEventListener('transitionend', () => {
        done()
      })
    },
    afterLeave(el) {
      el.style.height = `auto`
    },
    onClick() {
      this.visible = !this.visible
    },
    close() {
      this.visible = false
    },
    updateNamePath() {
      this.root.namePath.unshift(this.name)
      if (this.$parent.updateNamePath) {
        this.$parent.updateNamePath()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'var';
.g-sub-nav {
  position: relative;
  &:not(.vertical) {
    &.active {
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-bottom: 2px solid $blue;
      }
    }
  }
  &-label {
    padding: 10px 20px;
    display: block;
  }
  &-icon {
    display: none;
  }
  &-popover {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 4px;
    min-width: 8em;
    font-size: $font-size;
    color: $light-color;
    white-space: nowrap;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    border-radius: $border-radius;
    background: white;
    z-index: 5;
    transition: height 0.25s;
    &.vertical {
      position: static;
      box-shadow: none;
      border-radius: 0;
      overflow: hidden;
    }
  }
}

.g-sub-nav {
  & .g-sub-nav,
  &.vertical{
    .g-sub-nav-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .g-sub-nav-icon {
      transition: transform 250ms;
      display: inline-flex;
      margin-left: 1em;
      &.vertical {
        transform: rotate(90deg);
        &.visible {
          transform: rotate(270deg);
        }
      }
      &.visible {
        transform: rotate(180deg);
      }
    }
  }
}
.g-sub-nav .g-sub-nav {
  &.active {
    &:after {
      display: none;
    }
  }
  .g-sub-nav-popover {
    top: 0;
    left: 100%;
    margin-left: 8px;
  }
}
</style>
