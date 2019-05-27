<template>
  <div class="am-input-wrapper" @mouseenter="hovering=true" @mouseleave="hovering=false" ref="gInput">
    <template v-if="type=='textarea'">
      <textarea :rows="rows" :value="nativeValue" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" ref="textarea" @input="onInput" @focus="onFocus" @change="onChange" @blur="onBlur"></textarea>
    </template>
    <template v-else>
      <am-icon class="icon prefix" :name="prefix" v-if="prefix"></am-icon>
      <input type="text" class="inputbox" :value="nativeValue" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" ref="input" @input="onInput" @keyup.enter="onKeyup" @focus="onFocus" @change="onChange" @blur="onBlur">
      <am-icon class="icon suffix" :name="suffix" v-if="suffix"></am-icon>
      <am-icon class="icon suffix clear" name="delete" v-if="visibleClear" @click.stop="onClear"></am-icon>
    </template>
  </div>
</template>

<script>
import AmIcon from "../icon";
export default {
  name: "amInput",
  components: {
    AmIcon
  },
  props: {
    value: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    prefix: {
      type: String,
      default: ""
    },
    suffix: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text",
      validator(val) {
        return ["text", "textarea"].indexOf(val) > -1;
      }
    },
    rows: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      focused: false,
      hovering: false
    };
  },
  computed: {
    visibleClear() {
      return (
        this.clearable &&
        !this.disabled &&
        !this.readonly &&
        !!this.nativeValue &&
        (this.hovering || this.focused)
      );
    },
    nativeValue() {
      return !this.value ? "" : this.value;
    }
  },
  methods: {
    setRawValue(value) {
      this.$refs.input.value = value;
    },
    onInput(event) {
      this.focused = true;
      this.$emit("input", event.target.value);
    },
    onKeyup(event) {
      this.focused = false;
      this.$emit("keyup-enter", event);
    },
    onChange(event) {
      this.focused = true;
      this.$emit("change", event);
    },
    onBlur(event) {
      this.focused = false;
      this.$emit("blur", event);
    },
    onFocus(event) {
      this.focused = true;
      this.$emit("focus", event);
    },
    onClear() {
      this.$emit("input", "");
      this.$emit("change", "");
      this.$emit("clear");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "var";
.am-input-wrapper {
  display: inline-flex;
  align-items: center;
  font-size: $input-font-size;
  width: 100%;
  position: relative;
  .prefix,
  .suffix {
    position: absolute;
    top: 50%;
    z-index: 2;
    color: #bbb;
    fill: #bbb;
    line-height: 0;
    transform: translateY(-50%);
  }
  .prefix {
    left: 0.8em;
  }
  .suffix {
    right: 0.3em;
  }
  > .inputbox:not(:first-child) {
    padding-left: 30px;
  }
  > .inputbox:not(:last-child) {
    padding-right: 22px;
  }
  > textarea,
  > .inputbox {
    width: 100%;
    padding: 2px 8px;
    line-height: 28px;
    font-size: inherit;
    border: 1px solid $input-border-color;
    border-radius: $border-radius;
    &:hover {
      border-color: $input-border-color-hover;
    }
    &:focus {
      outline: none;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
    }
    &[disabled],
    &[readonly] {
      color: #bbb;
      background: #fff;
      border-color: #bbb;
      cursor: not-allowed;
    }
  }
  > textarea {
    height: auto;
    line-height: 1.5;
  }
}
</style>
