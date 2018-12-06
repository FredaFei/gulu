<template>
  <div class="g-sub-nav">
    <span class="g-sub-nav-title">
      <slot name="title"></slot>
    </span>
    <div class="g-sub-nav-popover">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gulusubNav'
}
</script>

<style lang="scss" scoped>
.g-sub-nav {
  &-title {
    padding: 10px;
    display: inline-block;
    vertical-align: top;
    background: blue;
  }
  &-popover {
    border: 1px solid red;
    position: absolute;
    top: 100%;
    left: 0;
    white-space: nowrap;
  }
}
</style>
