<template>
  <div class="am-tabs-item" :data-name="name" @click="onClick" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "amTabsItem",
  inject: ["eventBus", "direction"],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      active: false
    };
  },
  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled,
        vertical: this.direction == "vertical"
      };
    }
  },
  created() {
    this.eventBus &&
      this.eventBus.$on("update:selected", name => {
        this.active = name === this.name;
      });
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return false;
      }
      this.eventBus && this.eventBus.$emit("update:selected", this.name, this);
      this.$emit("click", this);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "var";
$darkblue: #1890ff;
.am-tabs-item {
  padding: 12px 16px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 100%;
  box-sizing: border-box;
  cursor: pointer;
  transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover {
    color: $blue;
  }
  & + .am-tabs-item {
    margin-left: 10px;
  }
  &.vertical + .am-tabs-item {
    margin-top: 10px;
    margin-left: 0;
  }
  &.active {
    color: $darkblue;
    font-weight: 700;
  }
  &.disabled {
    color: #ccc;
  }
}
</style>
