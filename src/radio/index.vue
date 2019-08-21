<template>
  <div class="am-radio-wrapper" :class="classes" @click="onClick">
    <div class="am-radio">
      <input type="radio" v-bind="attrs">
    </div>
    <label class="am-radio-label">
      <slot></slot>
    </label>
  </div>
</template>
<script>
  export default {
    name: "amRadio",
    model: {
      prop: "model",
      event: "change"
    },
    props: {
      value: {
        type: [String, Number, Boolean]
      },
      model: {
        type: [String, Number, Boolean]
      },
      name: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      attrs() {
        const attrs = {
          name: this.name,
          disabled: this.disabled
        };
        return attrs;
      },
      isSelected() {
        return this.model === this.value;
      },
      classes() {
        return {
          "am-radio-disabled": this.disabled,
          "am-radio-checked": this.isSelected
        };
      }
    },
    methods: {
      onClick() {
        if (this.disabled) {
          return false;
        }
        this.$emit("change", this.value);
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "var";
  .am-radio {
    width: 14px;
    height: 14px;
    background-color: #fff;
    border-radius: 50%;
    transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
    background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
    border: 1px solid $border-color;
    box-sizing: border-box;
    position: relative;
    z-index: 1;
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 4px;
      height: 4px;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background: transparent;
      transition: background 0.15s ease-in 0.05s;
    }
    &-wrapper {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      &.am-radio-checked {
        .am-radio {
          background-color: $blue;
          border-color: $blue;
        }
        &:not(.am-radio-disabled) {
          .am-radio {
            &:after {
              background: #fff;
            }
          }
        }
      }
      &.am-radio-disabled {
        cursor: not-allowed;
        .am-radio {
          border-color: rgba($border-color, 0.6);
          background: $border-active-bg;
        }
        &.am-radio-checked {
          .am-radio {
            &:after {
              background: $light-color;
            }
          }
        }
      }
    }
    input[type="radio"] {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      border: 0;
      margin: 0;
      padding: 0;
      cursor: pointer;
      &:disabled {
        cursor: not-allowed;
      }
    }
    &-wrapper:not(.am-radio-disabled) {
      .am-radio-label {
        cursor: pointer;
      }
    }
    &-label {
      padding: 0 0.5em;
      cursor: not-allowed;
    }
  }
</style>
