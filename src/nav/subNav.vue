<template>
  <div class="g-sub-nav" :class="{active}" v-click-outside="close">
    <span class="g-sub-nav-label" @click="onClick">
      <span class="g-sub-nav-title">
        <slot name="title"></slot>
      </span>
      <span class="g-sub-nav-icon" :class="{visible}">
        <g-icon name="right"></g-icon>
      </span>
    </span>
    <div class="g-sub-nav-popover" v-show="visible">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ClickOutside from '../clickOutside'
import GIcon from '../icon'
export default {
  name: 'gulusubNav',
  inject: ['root'],
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
@import "var";
.g-sub-nav {
  position: relative;
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
    box-shadow: 0 0 3px rgba(0, 0, 0, .4);
    border-radius: $border-radius;
    background: white;
  }
}

.g-sub-nav .g-sub-nav {
  .g-sub-nav-popover {
    top: 0;
    left: 100%;
    margin-left: 8px;
  }
  .g-sub-nav-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .g-sub-nav-icon {
      transition: transform 250ms;
      display: inline-flex; margin-left: 1em;
      svg {fill: $light-color;}
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
</style>
