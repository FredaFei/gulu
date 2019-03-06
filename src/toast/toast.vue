<template>
  <div class="am-toast-wrapper" :class="`position-${position}`" :style="{'z-index': zIndex}">
    <div class="am-toast-inner">
      <div class="am-toast-content" :class="toastClass">
        <div v-if="enableHtml" v-html="$slots.default[0]"></div>
        <slot v-else></slot>
      </div>
      <span class="am-toast-close" v-if="closeButton&&!autoClose" @click="onClose">{{closeButton.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "amTaost",
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: 3,
      validator(val) {
        return val === false || typeof val === "number";
      }
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: "关闭",
          callback: undefined
        };
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "middle",
      validator(val) {
        return ["top", "middle", "bottom"].includes(val);
      }
    },
    zIndex: {
      type: [String, Number],
      default: 1
    }
  },
  computed: {
    toastClass() {
      return [{ border: !this.autoClose }];
    }
  },
  mounted() {
    this.execAutoClose();
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoClose * 1000);
      }
    },
    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    onClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this); // this === toast
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$toast-bg: rgba(0, 0, 0, 0.75);
$box-shadow: rgba(0, 0, 0, 0.5);
$border-color: #666;
$animation: 0.2s linear;
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

.am-toast {
  &-wrapper {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    &.position-top {
      top: 0;
      border-radius: 0 0 4px 4px;
      .am-toast-inner {
        animation: slide-down $animation;
      }
    }
    &.position-middle {
      top: 50%;
      transform: translate(-50%, -50%);
      .am-toast-inner {
        animation: fade-in $animation;
      }
    }
    &.position-bottom {
      bottom: 0;
      border-radius: 4px 4px 0 0;
      .am-toast-inner {
        animation: slide-up $animation;
      }
    }
  }

  &-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    color: #fff;
    font-size: 14px;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 1px 3px 0 $box-shadow;
    .am-toast-content {
      flex: 1;
      padding: 12px 0;
      &.border {
        paddinam-right: 16px;
        border-right: 1px solid $border-color;
      }
    }
    .am-toast-close {
      flex-shrink: 0;
      margin-left: 16px;
      cursor: pointer;
    }
  }
}
</style>
