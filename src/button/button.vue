<template>
  <button class="am-button" :class="{[`icon-${iconPosition}`]:true,'icon-disabled':disabled}" :disabled="disabled" @click="$emit('click')">
    <am-icon class="icon" v-if="icon&&!loading" :name="icon"></am-icon>
    <am-icon class="icon loading" v-if="loading" name="loading"></am-icon>
    <div class="am-button-content">
      <slot />
    </div>
  </button>
</template>
<script>
import AmIcon from "../icon";
export default {
  name: "amButton",
  components: {
    AmIcon
  },
  props: {
    icon: {
      type: String,
      default: ""
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss" scoped>
@import "var";
.am-button {
  font-size: $button-fontSize;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  & + .am-button {
    margin-left: 0.5em;
  }
  & > .loading {
    @include spin;
  }
  > .am-button-content {
    line-height: 1em;
  }
  &.icon-left {
    > .icon {
      order: 1;
      margin-right: 0.1em;
    }
    > .am-button-content {
      order: 2;
    }
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.1em;
    }
    > .am-button-content {
      order: 1;
    }
  }
  &.icon-disabled {
    cursor: not-allowed;
  }
  &:not(.icon-disabled):hover {
    border-color: $border-color-hover;
  }

  &:active {
    background-color: $border-active-bg;
  }

  &:focus {
    outline: none;
  }
}
</style>
