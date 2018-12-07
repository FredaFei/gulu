<template>
  <div class="g-sub-nav" :class="{active}">
    <span class="g-sub-nav-title" @click="onClick">
      <slot name="title"></slot>
    </span>
    <div class="g-sub-nav-popover" v-show="visible">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gulusubNav',
  inject: ['root'],
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
      border: 2px solid $blue;
    }
  }
  &-title {
    padding: 10px 20px;
    display: block;
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
}
</style>
