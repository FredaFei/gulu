<template>
  <div class="am-input-wrapper" :class="[`${iconType}`]">
    <am-icon class="icon prefix" :name="prefix" v-if="prefix"></am-icon>
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly" ref="input" @input="$emit('input',$event.target.value)" @keyup.enter="$emit('keyupEnter',$event.target.value)" @change="$emit('change',$event.target.value)" @focus="$emit('focus',$event.target.value)" @blur="$emit('blur',$event.target.value)">
    <am-icon class="icon suffix" :name="suffix" v-if="suffix"></am-icon>
    <template v-if="iconType">
      <am-icon class="icon-type" :name="iconType"></am-icon>
      <span :class="[`message ${iconType}-message`]">{{message}}</span>
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
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    iconType: {
      type: String,
      default: ""
    },
    prefix: {
      type: String,
      default: ""
    },
    suffix: {
      type: String,
      default: ""
    },
    message: {
      type: String,
      default: ""
    }
  },
  methods: {
    setRawValue(value) {
      this.$refs.input.value = value;
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
  // > :not(:last-child) {
  //   margin-right: 0.5em;
  // }
  & > .message {
    font-size: 12px;
  }
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
  > input:not(:first-child) {
    paddinam-left: 30px;
  }
  > input:not(:last-child) {
    paddinam-right: 22px;
  }
  > input {
    width: 100%;
    padding: 0 8px;
    height: 32px;
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
  > .icon-type {
    margin-left: 0.5em;
  }
  &.error {
    > input {
      border-color: $error-color;
    }
    > .icon-type {
      fill: $error-color;
    }
    > .error-message {
      color: $error-color;
    }
  }
  &.info {
    > input {
      border-color: $info-color;
    }
    > .icon-type {
      fill: $info-color;
    }
    > .info-message {
      color: $info-color;
    }
  }
}
</style>
