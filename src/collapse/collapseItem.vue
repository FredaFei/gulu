<template>
  <div class="gulu-collapse-item">
    <div class="gulu-collapse-item-name" :data-name="name" :class="{'active': open}" @click="onToggle">
      <g-icon name="right" :class="['g-icon-animation',{'active': open}]" v-if="visibleIcon"></g-icon>
      <slot name="title">{{title}}</slot>
    </div>
    <g-collapse-transition>
      <div class="gulu-collapse-item-content" v-show="open">
        <div class="gulu-collapse-item-inner">
          <slot></slot>
        </div>
      </div>
    </g-collapse-transition>
  </div>
</template>

<script>
import GCollapseTransition from "../collapseTransition";
import GIcon from "../icon";
export default {
  name: "guluCollapseItem",
  inject: ["eventBus"],
  components: { GIcon, GCollapseTransition },
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
      open: false,
      dataset: {}
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
.gulu-collapse-item {
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
    .g-icon-animation {
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
