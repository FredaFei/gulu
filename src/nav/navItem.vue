<template>
  <div class="g-nav-item" :class="{selected,vertical}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'guluNavItem',
  inject: ['root', 'vertical'],
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
  cursor: default;
  &:not(.vertical) {
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
    &:hover{
      color: $color;
    }
  }
  &.vertical {
    &.selected {
      color: $blue;
    }
  }
}


.g-sub-nav {
  .g-nav-item:not(.vertical) {
    &.selected {
      color: $color;
      background: $gray;
      &:after {
        display: none;
      }
    }
  }
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
