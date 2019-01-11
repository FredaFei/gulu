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
      touchScrollY: 0,
      startPosition: undefined,
      endPosition: undefined,
      touchStartPosition: undefined,
      touchEndPosition: undefined,
      childHeight: undefined,
      isScrolling: false
    };
  },
  computed: {
    parentHeight() {
      return this.$refs.scrollParent.getBoundingClientRect().height;
    },
    maxScrollHeight() {
      return this.parentHeight - this.barHeight;
    }
  },
  mounted() {
    this.childHeight = this.$refs.scrollChild.getBoundingClientRect().height;
    this.listenToDocument();
    this.listenToRemoteResources();
    this.listenToDomChange();
    this.updateScrollBar();
  },
  beforeDestroy() {
    document.removeEventListener("mousemove", this.onMouseEvent);
    document.removeEventListener("mouseup", this.onMouseEvent);
  },
  methods: {
    listenToRemoteResources() {
      let tags = this.$refs.scrollParent.querySelectorAll("img,video,audio");
      Array.from(tags).map(tag => {
        if (tag.hasAttribute("data-gulu-listened")) {
          return;
        }
        tag.setAttribute("data-gulu-listened", "yes");
        tag.addEventListener("load", () => {
          this.childHeight = this.$refs.scrollChild.getBoundingClientRect().height;
          this.updateScrollBar();
        });
      });
    },
    listenToDomChange() {
      const targetNode = this.$refs.scrollChild;
      const config = { attributes: true, childList: true, subtree: true };
      const callback = () => {
        this.listenToRemoteResources();
      };
      const observer = new MutationObserver(callback);
      observer.observe(targetNode, config);
    },
    listenToDocument() {
      document.addEventListener("mousemove", this.onMouseEvent);
      document.addEventListener("mouseup", this.onMouseEvent);
    },
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
    onMouseEvent(e) {
      if (e.type === "mousemove") {
        this.onMouseMoveScrollBar(e);
      } else if (e.type === "mouseup") {
        this.onMouseUpScrollBar(e);
      }
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
    calculateScrollY(name, delta) {
      let newValue = parseInt(this[name]) + delta.y;
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
      if (!this.isScrolling) {
        return;
      }
      this.endPosition = { x: e.screenX, y: e.screenY };
      let delta = {
        x: this.endPosition.x - this.startPosition.x,
        y: this.endPosition.y - this.startPosition.y
      };
      this.scrollBarY = this.calculateScrollY("scrollBarY", delta);
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
      e.preventDefault();
      if (e.touches.length > 1) {
        return;
      }
      this.touchStartPosition = {
        x: e.touches[0].pageX,
        y: e.touches[0].pageY
      };
    },
    onTouchMove(e) {
      this.touchEndPosition = { x: e.touches[0].pageX, y: e.touches[0].pageY };
      // 滚动
      let delta = {
        x: this.touchStartPosition.x - this.touchEndPosition.x,
        y: this.touchStartPosition.y - this.touchEndPosition.y
      };
      this.touchScrollY = this.calculateScrollY("touchScrollY", delta);
      this.contentY =
        -(this.childHeight * this.touchScrollY) / this.parentHeight;
      this.touchStartPosition = this.touchEndPosition;
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
    -webkit-overflow-scrolling: touch;
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    transition-duration: 0.1s;
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
