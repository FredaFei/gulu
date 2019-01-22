<template>
  <div class="gulu-collapse-item" :data-name="name">
    <div class="gulu-collapse-item-name" @click="onToggle">
      <g-icon name="right" :class="['g-icon-animation',{'vertical': open}]"></g-icon>
      <slot name="title">{{title}}</slot>
    </div>
    <transition name="slide">
      <div class="gulu-collapse-item-content" v-show="open">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import GIcon from "../icon";
export default {
  name: "guluCollapseItem",
  inject: ["eventBus"],
  components: { GIcon },
  props: {
    title: {
      type: String
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: false
    };
  },
  created() {
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

.slide-enter-active,
.slide-leave-active {
  opacity: 1;
  transition: all 0.25s;
  // height: 27px;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  // transform: translateY(-100%);
  // height: 0;
}

.gulu-collapse-item {
  & + .gulu-collapse-item {
    border-top: 1px solid blue;
  }
  &-name {
    font-size: $font-size;
    color: $color;
    cursor: pointer;
    .g-icon-animation {
      transition: transform 0.25s;
    }
    .vertical {
      transform: rotate(90deg);
    }
  }
  &-content {
    padding: 4px 0;
    overflow: hidden;
  }
}
</style>
