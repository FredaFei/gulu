<template>
  <div class="g-dialog-wrapper" :style="{'z-index': zIndex}" v-if="visible">
    <transition name="mask">
      <div class="g-dialog-mask"></div>
    </transition>
    <transition name="fade-in">
      <div class="g-dialog-content">
        <div class="g-dialog-head" v-if="title!==''">{{title}}</div>
        <div class="g-dialog-body">
          <slot></slot>
        </div>
        <div class="g-dialog-foot" v-if="cancelButton||confirmButton">
          <div class="g-dialog-btn" @click="onClose" v-if="cancelButton.text">{{cancelButton.text}}</div>
          <div class="g-dialog-btn confirm" @click="onConfirm" v-if="confirmButton.text">{{confirmButton.text}}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "CDialog",
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      },
      cancelButton: {
        type: Object,
        default: () => {
          return {
            text: '',
            callback: undefined
          };
        }
      },
      confirmButton: {
        type: Object,
        default: () => {
          return {
            text: '确定',
            callback: undefined
          };
        }
      },
      zIndex: {
        type: Number,
        default: 10
      }
    },
    methods: {
      callback(name) {
        if (this[name] && typeof this[name].callback === "function") {
          this[name].callback(this); // this === dialog
        }
      },
      close() {
        this.$emit('update:visible', false)
      },
      onClose() {
        this.callback('cancelButton')
        this.close()
      },
      onConfirm() {
        this.callback('confirmButton')
        this.close()
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/_var.scss";
  $dialog-bg: rgba(0, 0, 0, 0.75);
  $box-shadow: rgba(0, 0, 0, 0.5);
  $border-color: #E0E0E0;
  $animation: 0.2s linear;
  .g-dialog {
    &-mask {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, .6);
      z-index: 99;
    }
    &-content {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      min-width: 300px;
      min-height: 120px;
      background: $dialog-bg;
      border-radius: 4px;
      background: #ffffff;
      box-shadow: 0 1px 3px 0 $box-shadow;
      z-index: 100;
    }
    &-foot {
      display: flex;
      border-top: 1px solid $border-color;
    }
    &-btn {
      flex: 1;
      text-align: center;
      font-size: 16px;
      color: #444;
      padding: 12px 0;
      &.confirm {
        color: #c91b1c;
      }
    }
    &-btn + &-btn {
      border-left: 1px solid #E0E0E0;
    }
  }
</style>
