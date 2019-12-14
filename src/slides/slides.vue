<template>
  <div class="am-slides-wrapper" ref="slidesWrapper">
    <div class="am-slides-window" ref="slidesWindow" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @touchstart="onTouchStart" @touchend="onTouchEnd">
      <slot></slot>
    </div>
    <div :class="['am-slides-dots',dotsClass]">
      <template v-if="dotsStyle === 'button'">
        <span :class="dotsClass">{{selectedIndex+1}}/{{childrenLength}}</span>
      </template>
      <template v-if="dotsStyle === 'circle'">
        <span class="arrow prev" @click="onClickPrev">
          <am-icon name="left"></am-icon>
        </span>
          <span v-for="n in childrenLength" :key="n" :data-index="n-1" :class="[dotsClass,{active: selectedIndex===n-1}]"
                @click="select(n-1)">{{n}}</span>
          <span class="arrow next" @click="onClickNext">
          <am-icon name="right"></am-icon>
        </span>
      </template>
    </div>
  </div>
</template>

<script>
  import AmIcon from "../icon";

  export default {
    name: "amSlides",
    components: {AmIcon},
    props: {
      selected: {
        type: String
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      autoPlayDelay: {
        type: Number,
        default: 2000
      },
      dotsStyle: {
        type: String,
        default: 'circle',
        validator(val) {
          return ["circle", "button"].includes(val);
        }
      }
    },
    data() {
      return {
        childrenLength: 0,
        lastSelectedIndex: undefined,
        timerId: undefined,
        items: []
      };
    },
    computed: {
      selectedIndex() {
        let index = this.names.indexOf(this.selected);
        return index === -1 ? 0 : index;
      },
      names() {
        return this.items.map(vm => vm.name);
      },
      dotsClass() {
        return this.dotsStyle
      }
    },
    mounted() {
      this.updateItems();
      this.updateChildren();
      this.autoPlay && this.playAutomatically();
    },
    updated() {
      this.updateChildren();
    },
    destroyed() {
      this.pause();
    },
    methods: {
      updateItems() {
        this.items = this.$children.filter(
          vm => vm.$options.name === "amSlidesItem"
        );
      },
      playAutomatically() {
        if (this.timerId) {
          return false;
        }
        let run = () => {
          let index = this.names.indexOf(this.getSelected());
          let newIndex = index + 1;
          this.select(newIndex);
          this.timerId = setTimeout(run, this.autoPlayDelay);
        };
        this.timerId = setTimeout(run, this.autoPlayDelay);
      },
      onClickPrev() {
        this.select(this.selectedIndex - 1);
      },
      onClickNext() {
        this.select(this.selectedIndex + 1);
      },
      onMouseEnter() {
        this.pause();
      },
      onMouseLeave() {
        this.autoPlay && this.playAutomatically();
      },
      onTouchStart(e) {
        this.pause();
        if (e.touches.length > 1) {
          return;
        }
        this.startTouch = e.touches[0];
      },
      onTouchEnd(e) {
        let endTouch = e.changedTouches[0];
        let { clientX: x1, clientY: y1 } = this.startTouch;
        let { clientX: x2, clientY: y2 } = endTouch;
        let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        let deltaY = Math.abs(y2 - y1);
        let rate = distance / deltaY;
        if (rate > 2) {
          if (x2 > x1) {
            this.select(this.selectedIndex - 1);
          } else {
            this.select(this.selectedIndex + 1);
          }
        }
        this.$nextTick(() => {
          this.playAutomatically();
        });
      },
      pause() {
        window.clearTimeout(this.timerId);
        this.timerId = undefined;
      },
      select(newIndex) {
        this.lastSelectedIndex = this.selectedIndex;
        if (newIndex === -1) {
          newIndex = this.names.length - 1;
        }
        if (newIndex === this.names.length) {
          newIndex = 0;
        }
        this.$emit("update:selected", this.names[newIndex]);
      },
      getSelected() {
        let first = this.$children[0];
        return this.selected || first.name;
      },
      updateChildren() {
        let selected = this.getSelected();
        this.childrenLength = this.items.length;
        this.items.forEach(vm => {
          let reverse =
            this.selectedIndex > this.lastSelectedIndex ? false : true;
          if (this.timerId) {
            if (
              this.lastSelectedIndex === this.childrenLength - 1 &&
              this.selectedIndex === 0
            ) {
              reverse = false;
            }
            if (
              this.lastSelectedIndex === 0 &&
              this.selectedIndex === this.childrenLength - 1
            ) {
              vm.reverse = true;
            }
          }
          vm.reverse = reverse;
          this.$nextTick(() => {
            vm.selected = selected;
          });
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .am-slides {
    &-wrapper {
      position: relative;
    }
    &-window {
      position: relative;
      overflow: hidden;
    }
    &-dots {
      display: flex;
      justify-content: center;
      position: absolute;
      right: 0;
      left: 0;
      bottom: 4%;
      &.button {
        justify-content: flex-end;
      }
      span {
        font-size: 12px;
        text-align: center;
        background: #ddd;
        cursor: pointer;
        &.button {
          margin-right: 10px;
          min-width: 40px;
          padding: 4px 2px;
          color: #ffffff;
          text-align: center;
          opacity: 0.4;
          background: #000000;
          border-radius: 12px;
        }
        &.circle,&.arrow {
          width: 20px;
          height: 20px;
          line-height: 20px;
          margin-left: 8px;
          margin-right: 8px;
          border-radius: 50%;
        }
        &.active {
          &.circle {
            background: #000;
            color: #fff;
          }
          &.button {
            background: #fff;
          }
        }
      }
    }
  }
</style>
