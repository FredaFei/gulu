<template>
  <div :class="['g-tabs-header',{'vertical':direction=='vertical'}]" ref="tabsHead">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="action-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>

</template>

<script>
export default {
  name: "guluTabsHeader",
  inject: ["eventBus", "direction"],
  mounted() {
    this.eventBus &&
      this.eventBus.$on("update:selected", (name, vm) => {
        this.calculateLineStyle(vm);
      });
  },
  methods: {
    calculateLineStyle(vm) {
      // 当选中状态样式导致元素宽度变化时，会出现下划线的宽度与当前选中的tabItem宽度不一致
      this.$nextTick(() => {
        let {
          left: left1,
          top: top1
        } = this.$refs.tabsHead.getBoundingClientRect();
        let {
          width,
          left: left2,
          height,
          top: top2
        } = vm.$el.getBoundingClientRect();
        if (this.direction === "horizontal") {
          this.$refs.line.style.width = `${width}px`;
          this.$refs.line.style.left = `${left2 - left1}px`;
        } else {
          this.$refs.line.style.height = `${height}px`;
          this.$refs.line.style.top = `${top2 - top1}px`;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.g-tabs-header {
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-shrink: 0;
  border-bottom: 1px solid #ddd;
  > .line {
    position: absolute;
    bottom: -1px;
    border-bottom: 2px solid #1890ff;
    box-sizing: border-box;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  > .action-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
  &.vertical {
    flex-direction: column;
    border-right: 1px solid #ddd;
    border-bottom: none;
    > .line {
      right: -1px;
      border-right: 2px solid #1890ff;
    }
  }
}
</style>
