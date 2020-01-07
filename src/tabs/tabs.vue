<template>
  <div class="am-tabs-content" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from "vue";

  export default {
    name: "amTabs",
    props: {
      selected: {
        type: [String, Number],
        required: true
      },
      direction: {
        type: String,
        default: "horizontal",
        validator(val) {
          return ["horizontal", "vertical"].indexOf(val) > -1;
        }
      },
      lineWidthOrHeight: {
        type: [String, Number]
      }
    },
    data() {
      return {
        eventBus: new Vue()
      };
    },
    provide() {
      return {
        eventBus: this.eventBus,
        direction: this.direction,
        lineWidthOrHeight: this.lineWidthOrHeight
      };
    },
    computed: {
      classes() {
        return this.direction;
      }
    },
    mounted() {
      this.checkChildren();
      this.selectedTabs();
    },
    methods: {
      checkChildren() {
        if (this.$children.length === 0) {
          console &&
          console.warn &&
          console.warn(
            "tabs的子组件应该是tabs-header和tabs-body,但是你没有写子组件"
          );
        }
      },
      selectedTabs() {
        this.$children.forEach(vm => {
          if (vm.$options.name === "amTabsHeader") {
            vm.$children.forEach(childVm => {
              if (
                childVm.$options.name === "amTabsItem" &&
                childVm.name === this.selected
              ) {
                this.eventBus &&
                this.eventBus.$emit("update:selected", this.selected, childVm);
              }
            });
          }
        });
      }
    }
  };
</script>

<style lang="scss">
  .am-tabs-content {
    position: relative;
    &.vertical {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }
  }
</style>
