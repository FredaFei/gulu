<template>
  <div class="g-tabs-item" :data-name="name" @click="onClick" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "guluTabsItem",
  inject: ["eventBus", "direction"],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String | Number,
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
$blue: #1890ff;
.g-tabs-item {
  padding: 12px 16px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 100%;
  box-sizing: border-box;
  &.vertical {
    // flex-direction: column;
  }
  &.active {
    color: $blue;
    font-weight: 700;
  }
  &.disabled {
    color: #ccc;
  }
}
</style>
