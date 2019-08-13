<template>
  <transition name="fade">
    <div class="am-mask am-message-wrapper" :style="{'z-index': zIndex}" v-if="visible">
      <div class="am-message-content">
        <div class="am-message-head" v-if="title!==''">{{title}}</div>
        <div class="am-message-body">
          <div v-if="enableHtml" v-html="$slots.default[0]"></div>
          <slot v-else></slot>
        </div>
        <div class="am-message-foot">
          <div class="am-message-btn" @click="onClose" v-if="cancelButton.text">{{cancelButton.text}}</div>
          <div class="am-message-btn" @click="onConfirm" v-if="confirmButton.text">
            {{confirmButton.text}}
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "amDialog",
  props: {
    title: {
      type: String,
      default: "标题"
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    cancelButton: {
      type: Object,
      default: () => {
        return {
          text: "取消",
          callback: undefined
        };
      }
    },
    confirmButton: {
      type: Object,
      default: () => {
        return {
          text: "确定",
          callback: undefined
        };
      }
    },
    zIndex: {
      type: [String, Number],
      default: 100
    }
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    callback(name) {
      if (this[name] && typeof this[name].callback === "function") {
        this[name].callback(this); // this === message
      }
    },
    close() {
      this.visible = false;
    },
    onClose() {
      this.callback("cancelButton");
      this.close();
    },
    onConfirm() {
      this.callback("confirmButton");
      this.close();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "var";
.am-message {
  &-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    min-width: 30%;
    background: $mask-bg;
    border-radius: $border-radius;
    background: #ffffff;
    box-shadow: 0 1px 3px 0 $box-shadow;
    z-index: 100;
  }
  &-head {
    padding: 0 0.5em;
    @include sc(18px, $color);
    font-weight: 700;
    line-height: $button-height;
  }
  &-body {
    padding: 0.5em;
    min-height: 100px;
  }
  &-foot {
    display: flex;
    border-top: 1px solid $border-color;
  }
  &-btn {
    flex: 1;
    text-align: center;
    padding: 12px 0;
    &:last-child {
      color: $blue;
    }
  }
  &-btn + &-btn {
    border-left: 1px solid $border-color;
  }
}
</style>
