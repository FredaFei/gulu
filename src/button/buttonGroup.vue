<template>
  <div class="am-button-group">
    <slot />
  </div>
</template>

<script>
export default {
  name: "amButtonGroup",
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== "button") {
        console.warn(
          `am-button-group  组件的子元素应该全是 am-button, 但你写的是 ${name}`
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "var";
.am-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .am-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
