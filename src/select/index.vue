<template>
  <div class="am-select-wrapper" :class="classes" v-click-outside="close">
    <div class="am-select" :class="{visible}" @click="onClick">
      <am-input :value="selected" clearable @clear="onClear" :placeholder="placeholder" suffix="right" type="text"></am-input>
    </div>
    <am-collapse-transition>
      <div class="am-select-options" v-show="visible">
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
  components: { AmInput, AmIcon, AmCollapseTransition },
  directives: { ClickOutside },
  props: {
    selected: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "请选择"
    }
  },
  data() {
    return {
      visible: true,
      items: []
    };
  },
  provide() {
    return { root: this, selected: this.selected };
  },
  computed: {
    classes() {
      return {
        "am-select-disabled": this.disabled
      };
    }
  },
  mounted() {
    this.updateItems();
    this.listenToChildren();
  },
  updated() {
    this.updateChildren();
  },
  methods: {
    updateItems() {
      this.items = this.$children[1].$children.filter(
        vm => vm.$options.name === "amOption"
      );
    },
    updateChildren() {
      console.log("update");
      this.items.forEach(vm => {
        if (this.selected === vm.value) {
          vm.active = true;
        } else {
          vm.active = false;
        }
      });
    },
    listenToChildren() {
      console.log("listen");
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
    onClick() {
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
  /deep/ .am-input-wrapper .suffix {
    transition: transform 0.2s;
    transform: translateY(-50%) rotate(90deg);
  }
  &.visible {
    /deep/ .am-input-wrapper .suffix {
      transform: translateY(-50%) rotate(-90deg);
    }
  }
  &-wrapper {
    display: inline-flex;
    flex-direction: column;
    position: relative;
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
    transition: all 0.25s;
  }
}
</style>
