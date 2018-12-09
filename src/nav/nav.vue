<template>
  <div class="g-nav-wrapper" :class="{vertical}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'guluNav',
  props: {
    selected: {
      type: String,
      required: true
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  provide() { return { root: this, vertical: this.vertical } },
  data() {
    return {
      items: [],
      namePath: []
    }
  },
  mounted() {
    this.updateChildren()
    this.listenToChildren()
  },
  updated() {
    this.updateChildren()
  },
  computed: {
  },
  methods: {
    addItem(vm) {
      this.items.push(vm)
    },
    updateChildren() {
      this.items.forEach(vm => {
        if (this.selected === vm.name) {
          vm.selected = true
        } else {
          vm.selected = false
        }
      })
    },
    listenToChildren() {
      this.items.forEach(vm => {
        vm.$on('update:selected', name => {
          this.$emit('update:selected', name)
        })
      })
    },
  }
}
</script>

<style lang="scss" scoped>
@import "var";
.g-nav-wrapper {
  display: flex;
  color: $color;
  cursor: default;
  user-select: none;
  border-bottom: 1px solid $gray;
  &.vertical{
    flex-direction: column;
    border: 1px solid $gray;
  }
}
</style>
