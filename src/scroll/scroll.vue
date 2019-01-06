<template>
  <div class="g-scroll-wrapper" ref="scrollParent">
    <div class="g-scroll-content" ref="scrollChild">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "gScroll",
  mounted() {
    let parent = this.$refs.scrollParent;
    let child = this.$refs.scrollChild;
    let {
      paddingTop,
      paddingBottom,
      borderTopWidth,
      borderBottomWidth
    } = window.getComputedStyle(this.$refs.scrollParent);
    paddingTop = parseInt(paddingTop);
    paddingBottom = parseInt(paddingBottom);
    borderTopWidth = parseInt(borderTopWidth);
    borderBottomWidth = parseInt(borderBottomWidth);
    let translateY = 0;
    let { height: parentHeight } = parent.getBoundingClientRect();
    let { height: childHeight } = child.getBoundingClientRect();
    let maxHeight =
      childHeight -
      parentHeight +
      (paddingTop + paddingBottom + borderTopWidth + borderBottomWidth);
    parent.addEventListener("wheel", e => {
      if (e.deltaY > 20) {
        translateY -= 20 * 3;
      } else if (e.deltaY < -20) {
        translateY -= -20 * 3;
      } else if (e.deltaY === 0) {
        translateY -= e.deltaY;
      }
      if (translateY > 0) {
        translateY = 0;
      } else if (translateY < -maxHeight) {
        translateY = -maxHeight;
      }
      child.style.transform = `translateY(${translateY}px)`;
    });
    parent.addEventListener("touchmove", e => {
      console.log(e);
    });
  }
};
</script>

<style lang="scss" scoped>
.g-scroll {
  &-wrapper {
    overflow: hidden;
    box-sizing: border-box;
    border: 5px solid red;
  }
  &-content {
    transition: transform 0.1s ease;
    border: 5px solid blue;
  }
}
</style>
