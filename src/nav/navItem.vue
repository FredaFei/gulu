<template>
  <div class="g-nav-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'guluNavItem',
  inject: ['root'],
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
  created(){
    this.root.addItem(this)
  },
  methods: {
    onClick() {
      this.$emit('add:selected', this.name)
    }
  }
}
</script>

<style lang="scss" scoped>
.g-nav-item {
  padding: 10px;
  position: relative;
  &.selected {
    background: red;
  }

}
</style>
