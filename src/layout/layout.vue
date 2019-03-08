<template>
  <div class="am-layout-content" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "amLayout",
  data() {
    return {
      layoutClass: {
        hasSider: false
      }
    };
  },
  mounted() {
    this.$children.forEach(item => {
      if (item.$options.name === "amAside") {
        this.layoutClass.hasSider = true;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.am-layout-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  &.hasSider {
    flex-direction: row;
  }
}
</style>
