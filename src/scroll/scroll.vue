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
    let translateY = 0;
    parent.addEventListener("wheel", e => {
      // console.log(e);
      if (e.deltaY > 0) {
        translateY -= 10;
        child.style.transform = `translateY(${translateY}px)`;
      } else if (e.deltaY < 0) {
        translateY += 10;
        child.style.transform = `translateY(${translateY}px)`;
      } else if ((e.deltaY = 0)) {
        console.log("stay");
      }
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
    transition: transform 0.2s;
    border: 5px solid blue;
  }
}
</style>
