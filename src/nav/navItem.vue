<template>
  <div class="g-nav-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'guluNavItem',
  inject: ['root','vertical'],
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: false
    }
  },
  created() {
    this.root.addItem(this)
  },
  methods: {
    onClick() {
      this.root.namePath = []
      this.$parent.updateNamePath && this.$parent.updateNamePath()
      this.$emit('add:selected', this.name)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "var";
.g-nav-item {
  padding: 10px 20px;
  position: relative;
  &.selected {
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

.g-sub-nav {
  .g-nav-item {
    &.selected {
      color: $color;
      background: $gray;
      &:after {
        display: none;
      }
    }
  }
}
</style>
