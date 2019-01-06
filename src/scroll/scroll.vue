<template>
  <div class="g-scroll-wrapper">
    <div class="g-scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "gScroll"
};
</script>

<style lang="scss" scoped>
.g-scroll {
  &-wrapper {
    border: 1px solid red;
  }
  &-content {
    border: 1px solid blue;
    overflow: auto;
  }
}
</style>
