<template>
  <div class="am-select-wrapper" :class="classes" v-click-outside="close">
    <div class="am-select" :class="{visible}" @click="onSelectClick" @mouseenter="inputHovering = true"
         @mouseleave="inputHovering = false">
      <am-input :value="selected" readonly :disabled="disabled" autocomplete="off"
                :placeholder="placeholder" suffix="right"></am-input>
      <am-icon class="icon clear am-select-clear" name="delete" v-if="visibleClear" @click.stop="onClear"></am-icon>
    </div>
    <am-collapse-transition>
      <div class="am-select-options" v-show="visible" :style="{zIndex}">
        <slot></slot>
      </div>
    </am-collapse-transition>
  </div>
</template>
<script>
  import AmInput from "../input/input";
  import AmIcon from "../icon";
  import AmCollapseTransition from "../collapseTransition";
  import ClickOutside from "../clickOutside";

  export default {
    name: "amSelect",
    components: {AmInput, AmIcon, AmCollapseTransition},
    directives: {ClickOutside},
    props: {
      selected: {
        type: String,
        default: ""
      },
      disabled: {
        type: Boolean,
        default: false
      },
      clearable: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: "请选择"
      },
      zIndex: {
        type: [String, Number],
        default: 10
      }
    },
    data() {
      return {
        visible: false,
        items: [],
        inputHovering: false
      };
    },
    provide() {
      return {root: this, selected: this.selected};
    },
    computed: {
      classes() {
        return {
          "am-select-disabled": this.disabled
        };
      },
      visibleClear() {
        return this.clearable && !this.disabled && this.inputHovering && this.selected;
      }
    },
    mounted() {
      // this.updateItems()
      this.updateChildren();
      this.listenToChildren();
    },
    updated() {
      this.updateChildren();
    },
    methods: {
      addItem(vm) {
        this.items.push(vm);
      },
      updateItems() {
        this.items = this.$children[1].$children.filter(
          vm => vm.$options.name === "amOption"
        )
      },
      updateChildren: function () {
        this.items.forEach(vm => {
          vm.active = this.selected === vm.value ? true : false;
        });
      },
      listenToChildren() {
        this.items.forEach(vm => {
          vm.$on("update:selected", name => {
            this.onUpdateSelected(name);
          });
        });
      },
      onUpdateSelected(value) {
        this.$emit("update:selected", value);
        this.close();
      },
      onClear() {
        this.onUpdateSelected("");
      },
      onSelectClick() {
        if (this.disabled) {return false}
        this.visible = !this.visible;
      },
      close() {
        this.visible = false;
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "var";
  .am-select {
    position: relative;
    &.visible {
      /deep/ .am-input-wrapper {
        .suffix {
          transform: translateY(-50%) rotate(-90deg);
        }
      }
    }
    &-clear {
      position: absolute;
      top: 50%;
      right: 0.3em;
      z-index: 2;
      color: #bbb;
      fill: #bbb;
      line-height: 0;
      transform: translateY(-50%);
    }
    &-wrapper {
      display: inline-flex;
      flex-direction: column;
      position: relative;
      &:not(.am-select-disabled) {
        /deep/ .am-input-wrapper {
          > .inputbox {
            &:focus {
              outline: none;
              box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
            }
            &[readonly] {
              color: inherit;
              border-color: $input-border-color;
              cursor: auto;
            }
          }
        }
      }
      /deep/ .am-input-wrapper {
        .suffix {
          transition: transform 0.2s;
          transform: translateY(-50%) rotate(90deg);
        }
      }
    }
    &-options {
      position: absolute;
      left: 0;
      right: 0;
      top: 100%;
      max-height: 300px;
      overflow: auto;
      box-sizing: border-box;
      background-color: #fff;
      border-radius: $border-radius;
      border: 1px solid rgba($border-color, 0.3);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      transition: all 0.2s;
    }
  }
</style>
