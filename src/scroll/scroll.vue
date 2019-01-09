<template>
  <div class="g-scroll-wrapper" ref="scrollParent" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div class="g-scroll-content" ref="scrollChild">
      <slot></slot>
    </div>
    <div class="g-scroll-track" v-show="scrollBarVisible">
      <div class="g-scroll-bar" ref="scrollBar">
        <div class="g-scroll-bar-inner"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gScroll",
  data() {
    return {
      scrollBarVisible: false
    };
  },
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
      } else {
        e.preventDefault();
      }
      child.style.transform = `translateY(${translateY}px)`;
      this.updateScrollBar(parentHeight, childHeight, translateY);
    });
    this.updateScrollBar(parentHeight, childHeight, translateY);
    parent.addEventListener("touchmove", e => {
      console.log(e);
    });
  },
  methods: {
    updateScrollBar(parentHeight, childHeight, translateY) {
      let barHeight = (parentHeight * parentHeight) / childHeight;
      let scrollBar = this.$refs.scrollBar;
      scrollBar.style.height = barHeight + "px";
      let y = (translateY * parentHeight) / childHeight;
      scrollBar.style.transform = `translateY(${-y}px)`;
    },
    onMouseEnter() {
      this.scrollBarVisible = true;
    },
    onMouseLeave() {
      this.scrollBarVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.g-scroll {
  &-wrapper {
    overflow: hidden;
    box-sizing: border-box;
    border: 1px solid red;
    position: relative;
  }
  &-content {
    transition: transform 0.1s ease;
    border: 1px solid blue;
  }
  &-track {
    position: absolute;
    top: 0;
    right: 0;
    width: 14px;
    height: 100%;
    border-left: 1px solid #e8e7e8;
    background: #fafafa;
    opacity: 0.9;
  }
  &-bar {
    position: absolute;
    top: -1px;
    left: 50%;
    margin-left: -4px;
    padding: 4px 0;
    width: 8px;
    height: 40px;
    &-inner {
      height: 100%;
      border-radius: 4px;
      background: #cacaca;
      &:hover {
        background: #7d7d7d;
      }
    }
  }
}
</style>
