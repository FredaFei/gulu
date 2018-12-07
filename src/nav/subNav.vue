<template>
  <div class="g-sub-nav">
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
  data() {
    return {
      visible: false
    }
  },
  methods: {
    onClick() {
      this.visible = !this.visible
    }
  }
}
</script>

<style lang="scss" scoped>
.g-sub-nav {
  position: relative;
  &-title {
    padding: 10px;
    display: inline-block;
    vertical-align: top;
  }
  &-popover {
    border: 1px solid red;
    position: absolute;
    top: 100%;
    left: 0;
    white-space: nowrap;
  }
}

.g-sub-nav .g-sub-nav{
  .g-sub-nav-popover {
    top: 0;
    left: 100%;
  }
}
</style>
