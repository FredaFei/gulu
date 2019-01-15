<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true,'icon-disabled':disabled}" :disabled="disabled" @click="$emit('click')">
    <g-icon class="icon" v-if="icon&&!loading" :name="icon"></g-icon>
    <g-icon class="icon loading" v-if="loading" name="loading"></g-icon>
    <div class="g-button-content">
      <slot />
    </div>
  </button>
</template>
<script>
import GIcon from "../icon";
export default {
  name: "guluButton",
  components: {
    GIcon
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
.g-button {
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
  & + .g-button {
    margin-left: 0.5em;
  }
  & > .loading {
    @include spin;
  }
  > .g-button-content {
    line-height: 1em;
  }
  &.icon-left {
    > .icon {
      order: 1;
      margin-right: 0.1em;
    }
    > .g-button-content {
      order: 2;
    }
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.1em;
    }
    > .g-button-content {
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
