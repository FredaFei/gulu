<template>
  <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: "guluCollapseTransition",
  data() {
    return {
      dataset: {}
    };
  },
  methods: {
    beforeEnter(el) {
      this.dataset.oldPaddingTop = el.style.paddingTop;
      this.dataset.oldPaddingBottom = el.style.paddingBottom;
      el.style.height = "0";
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
    },
    enter(el, done) {
      this.dataset.oldOverflow = el.style.overflow;
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + "px";
        el.style.paddingTop = this.dataset.oldPaddingTop;
        el.style.paddingBottom = this.dataset.oldPaddingBottom;
      } else {
        el.style.height = "";
        el.style.paddingTop = this.dataset.oldPaddingTop;
        el.style.paddingBottom = this.dataset.oldPaddingBottom;
      }
      el.style.overflow = "hidden";
      el.addEventListener("transitionend", () => {
        done();
      });
    },

    afterEnter(el) {
      el.style.height = "";
      el.style.overflow = this.dataset.oldOverflow;
    },

    beforeLeave(el) {
      if (!this.dataset) this.dataset = {};
      this.dataset.oldPaddingTop = el.style.paddingTop;
      this.dataset.oldPaddingBottom = el.style.paddingBottom;
      this.dataset.oldOverflow = el.style.overflow;

      el.style.height = el.scrollHeight + "px";
      el.style.overflow = "hidden";
    },

    leave(el, done) {
      if (el.scrollHeight !== 0) {
        el.style.height = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      }
      el.addEventListener("transitionend", () => {
        done();
      });
    },

    afterLeave(el) {
      el.style.height = "";
      el.style.overflow = this.dataset.oldOverflow;
      el.style.paddingTop = this.dataset.oldPaddingTop;
      el.style.paddingBottom = this.dataset.oldPaddingBottom;
    }
  }
};
</script>
