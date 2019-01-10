<template>
  <div class="g-scroll-wrapper" ref="scrollParent" @wheel="onWheel" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
    <div class="g-scroll-content" ref="scrollChild" :style="{transform: `translateY(${contentY}px)`}">
      <slot></slot>
    </div>
    <div class="g-scroll-track" v-show="scrollBarVisible">
      <div class="g-scroll-bar" ref="scrollBar" @mousedown="onMouseDownScrollBar" @selectstart="onSelecteStartScrollBar">
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
      scrollBarVisible: false,
      contentY: 0,
      scrollBarY: 0,
      scrollBarY: undefined,
      startPosition: undefined,
      endPosition: undefined,
      isScrolling: false
    };
  },
  computed: {
    childHeight() {
      return this.$refs.scrollChild.getBoundingClientRect().height;
    },
    parentHeight() {
      return this.$refs.scrollParent.getBoundingClientRect().height;
    },
    maxScrollHeight() {
      return this.parentHeight - this.barHeight;
    }
  },
  mounted() {
    document.addEventListener("mousemove", e => this.onMouseMoveScrollBar(e));
    document.addEventListener("mouseup", e => this.onMouseUpScrollBar(e));
    this.updateScrollBar();
  },
  methods: {
    calculateContentYFromDeltaY(delta) {
      let contentY = this.contentY;
      if (delta > 20) {
        contentY -= 20 * 3;
      } else if (delta < -20) {
        contentY -= -20 * 3;
      } else if (delta === 0) {
        contentY -= delta;
      }
      return contentY;
    },
    calculateContentYMax() {
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
      let maxHeight =
        this.childHeight -
        this.parentHeight +
        (paddingTop + paddingBottom + borderTopWidth + borderBottomWidth);
      return maxHeight;
    },
    onWheel(e) {
      this.updateContentY(e.deltaY, () => e.preventDefault());
      this.updateScrollBar();
    },
    updateContentY(deltaY, callback) {
      this.contentY = this.calculateContentYFromDeltaY(deltaY);
      let maxHeight = this.calculateContentYMax();
      if (this.contentY > 0) {
        this.contentY = 0;
      } else if (this.contentY < -maxHeight) {
        this.contentY = -maxHeight;
      } else {
        callback && callback();
      }
    },
    calculateScrollBarY(delta) {
      let newValue = parseInt(this.scrollBarY) + delta.y;
      if (newValue < 0) {
        newValue = 0;
      } else if (newValue > this.maxScrollHeight) {
        newValue = this.maxScrollHeight;
      }
      return newValue;
    },
    onMouseDownScrollBar(e) {
      this.isScrolling = true;
      this.startPosition = { x: e.screenX, y: e.screenY };
    },
    onMouseMoveScrollBar(e) {
      console.log("Move");
      if (!this.isScrolling) {
        return;
      }
      this.endPosition = { x: e.screenX, y: e.screenY };
      let delta = {
        x: this.endPosition.x - this.startPosition.x,
        y: this.endPosition.y - this.startPosition.y
      };
      this.scrollBarY = this.calculateScrollBarY(delta);
      this.contentY = -(this.childHeight * this.scrollBarY) / this.parentHeight;
      this.startPosition = this.endPosition;
      this.$refs.scrollBar.style.transform = `translateY(${this.scrollBarY}px)`;
    },
    onMouseUpScrollBar(e) {
      this.isScrolling = false;
    },
    onSelecteStartScrollBar(e) {
      e.preventDefault();
    },
    updateScrollBar() {
      let { parentHeight, childHeight, contentY } = this;
      this.barHeight = (parentHeight * parentHeight) / childHeight;
      this.scrollBarY = -(parentHeight * contentY) / childHeight;
      this.$refs.scrollBar.style.height = this.barHeight + "px";
      this.$refs.scrollBar.style.transform = `translateY(${this.scrollBarY}px)`;
    },
    onMouseEnter() {
      this.scrollBarVisible = true;
    },
    onMouseLeave() {
      this.scrollBarVisible = false;
    },
    onTouchStart(e) {
      console.log(e);
      if (e.touches.length > 1) {
        return;
      }
      this.startTouch = e.touches[0];
    },
    onTouchMove(e) {
      console.log(e);
    },
    onTouchEnd(e) {
      // console.log(e);
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
