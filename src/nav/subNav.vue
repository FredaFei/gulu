<template>
  <div class="am-sub-nav" :class="{active, vertical}" v-click-outside="close" :data-name="name">
    <span class="am-sub-nav-label" @click="onClick">
      <span class="am-sub-nav-title">
        <slot name="title"></slot>
      </span>
      <span class="am-sub-nav-icon" :class="{visible,vertical}">
        <am-icon name="right"></am-icon>
      </span>
    </span>
    <template v-if="vertical">
      <transition name="fade" @enter="enter" @after-enter="afterEnter" @leave="leave" @after-leave="afterLeave">
        <div class="am-sub-nav-popover" v-show="visible" :class="{vertical}">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-else>
      <div class="am-sub-nav-popover" v-show="visible" :class="{vertical}">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script>
import ClickOutside from "../clickOutside";
import AmIcon from "../icon";
export default {
  name: "amSubNav",
  inject: ["root", "vertical"],
  directives: { ClickOutside },
  components: { AmIcon },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      visible: false
    };
  },
  computed: {
    active() {
      return this.root.namePath.indexOf(this.name) >= 0 ? true : false;
    }
  },
  methods: {
    enter(el, done) {
      el.style.height = `auto`;
      let { height } = el.getBoundingClientRect();
      el.style.height = 0;
      el.getBoundingClientRect();
      el.style.height = `${height}px`;
      el.addEventListener("transitionend", () => {
        done();
      });
    },
    afterEnter(el) {
      el.style.height = `auto`;
    },
    leave(el, done) {
      let { height } = el.getBoundingClientRect();
      el.style.height = `${height}px`;
      el.getBoundingClientRect();
      el.style.height = 0;
      el.addEventListener("transitionend", () => {
        done();
      });
    },
    afterLeave(el) {
      el.style.height = `auto`;
    },
    onClick() {
      this.visible = !this.visible;
    },
    close() {
      this.visible = false;
    },
    updateNamePath() {
      this.root.namePath.unshift(this.name);
      if (this.$parent.updateNamePath) {
        this.$parent.updateNamePath();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "var";
.am-sub-nav {
  position: relative;
  &:not(.vertical) {
    &.active {
      &:after {
        content: "";
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

.am-sub-nav {
  & .am-sub-nav,
  &.vertical {
    .am-sub-nav-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .am-sub-nav-icon {
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
.am-sub-nav .am-sub-nav {
  &.active {
    &:after {
      display: none;
    }
  }
  .am-sub-nav-popover {
    top: 0;
    left: 100%;
    margin-left: 8px;
  }
}
</style>
