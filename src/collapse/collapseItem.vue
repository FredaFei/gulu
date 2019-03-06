<template>
  <div class="am-collapse-item">
    <div class="am-collapse-item-name" :data-name="name" :class="{'active': open}" @click="onToggle">
      <am-icon name="right" :class="['am-icon-animation',{'active': open}]" v-if="visibleIcon"></am-icon>
      <slot name="title">{{title}}</slot>
    </div>
    <am-collapse-transition>
      <div class="am-collapse-item-content" v-show="open">
        <div class="am-collapse-item-inner">
          <slot></slot>
        </div>
      </div>
    </am-collapse-transition>
  </div>
</template>

<script>
import AmCollapseTransition from "../collapseTransition";
import AmIcon from "../icon";
export default {
  name: "amCollapseItem",
  inject: ["eventBus"],
  components: { AmIcon, AmCollapseTransition },
  props: {
    title: {
      type: String
    },
    name: {
      type: String,
      required: true
    },
    visibleIcon: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      open: false
    };
  },
  created() {
    this.eventBus &&
      this.eventBus.$on("update:selected", selected => {
        this.open = selected.indexOf(this.name) >= 0 ? true : false;
      });
  },
  methods: {
    onToggle() {
      if (this.open) {
        this.eventBus &&
          this.eventBus.$emit("update:removeSelected", this.name);
      } else {
        this.eventBus && this.eventBus.$emit("update:addSelected", this.name);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "var";
.am-collapse-item {
  &-name {
    font-size: $font-size;
    color: $color;
    line-height: 40px;
    cursor: pointer;
    border-bottom: 1px solid $border-color;
    transition: border-bottom-color 0.25s;
    &.active {
      border-bottom-color: transparent;
    }
    .am-icon-animation {
      margin-right: 0.3em;
      transition: transform 0.25s;
    }
    .active {
      transform: rotate(90deg);
    }
  }
  &-content {
    transition: all 0.25s;
    background-color: #fff;
    overflow: hidden;
    box-sizing: border-box;
    border-bottom: 1px solid $border-color;
  }
  &-inner {
    padding: 4px 0;
    font-size: 15px;
  }
}
</style>
