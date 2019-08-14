<template>
  <div class="am-checkbox-wrapper" :class="classes" @click="onToggle">
    <div class="am-checkbox">
      <input type="checkbox" v-bind="attrs">
    </div>
    <label class="am-checkbox-label">
      <slot></slot>
    </label>
  </div>
</template>
<script>
export default {
  name: "amCheckbox",
  model: {
    prop: "model",
    event: "change"
  },
  props: {
    value: {
      type: [String, Number, Boolean]
    },
    model: {
      type: [String, Number, Boolean, Array]
    },
    name: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    trueValue: {
      type: Boolean,
      default: true
    },
    falseValue: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    attrs() {
      const attrs = {
        name: this.name,
        disabled: this.disabled,
        required: this.required,
        "true-value": this.trueValue,
        "false-value": this.falseValue
      };
      if (this.$options.propsData.hasOwnProperty("value")) {
        if (this.value === null || typeof this.value !== "object") {
          attrs.value =
            this.value === null || this.value === undefined
              ? ""
              : String(this.value);
        }
      }
      return attrs;
    },
    isSelected() {
      if (this.isModelArray) {
        return this.model.includes(this.value);
      }
      if (this.hasValue) {
        return this.model === this.value;
      }
      return this.model === this.trueValue;
    },
    isModelArray() {
      return Array.isArray(this.model);
    },
    hasValue() {
      return this.$options.propsData.hasOwnProperty("value");
    },
    classes() {
      return {
        "am-checkbox-disabled": this.disabled,
        "am-checkbox-checked": this.isSelected,
        "am-checkbox-indeterminate": this.indeterminate
      };
    }
  },
  methods: {
    onMultilCheck() {
      const newModel = [...this.model];
      if (!this.isSelected) {
        newModel.push(this.value);
      } else {
        const index = newModel.indexOf(this.value);
        index >= 0 && newModel.splice(index, 1);
      }
      this.$emit("change", newModel);
    },
    onSingleCheck() {
      this.$emit("change", this.isSelected ? null : this.value);
    },
    onSimpleCheck() {
      this.$emit("change", this.isSelected ? this.falseValue : this.trueValue);
    },
    onToggle() {
      if (this.disabled) {
        return false;
      }
      if (this.isModelArray) {
        this.onMultilCheck();
      } else if (this.hasValue) {
        this.onSingleCheck();
      } else {
        this.onSimpleCheck();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "var";
.am-checkbox {
  border: 1px solid $border-color;
  border-radius: 2px;
  box-sizing: border-box;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
    background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
  position: relative;
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    top: 1px;
    left: 4px;
    width: 3px;
    height: 6px;
    box-sizing: content-box;
    border: 1px solid #fff;
    border-left: 0;
    border-top: 0;
    transform: rotate(45deg) scaleY(0);
    transition: transform 0.15s ease-in 0.05s;
    transform-origin: center;
  }
  &-wrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &.am-checkbox-checked {
      .am-checkbox {
        background-color: $blue;
        border-color: $blue;
        &:after {
          transform: rotate(45deg) scaleY(1);
        }
      }
    }
    &.am-checkbox-indeterminate {
      .am-checkbox {
        background-color: $blue;
        border-color: $blue;
        &:after {
          content: "";
          position: absolute;
          top: 4px;
          left: 0;
          right: 0;
          width: 100%;
          height: 2px;
          transform: scale(0.5);
          background-color: #fff;
        }
      }
    }

    &.am-checkbox-disabled {
      cursor: not-allowed;
      .am-checkbox {
        border-color: rgba($border-color, 0.6);
        background: $border-active-bg;
        &:after {
          border-color: $color;
        }
      }
    }
  }
  input[type="checkbox"] {
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
  &-wrapper:not(.am-checkbox-disabled) {
    .am-checkbox-label {
      cursor: pointer;
    }
  }
  &-label {
    padding: 0 0.5em;
    cursor: not-allowed;
  }
}
</style>
