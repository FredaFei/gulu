<template>
  <div class="gulu-collapse-wrapper">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "guluCollapse",
  props: {
    selected: {
      type: Array,
      default: () => [],
      required: true
    },
    single: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    let copySelected = JSON.parse(JSON.stringify(this.selected));
    this.eventBus.$emit("update:selected", copySelected);
    this.listenToAddSelected(copySelected);
    this.listenToRemoveSelected(copySelected);
  },
  methods: {
    listenToAddSelected(copySelected) {
      this.eventBus.$on("update:addSelected", name => {
        if (this.single) {
          copySelected = [name];
        } else {
          copySelected.push(name);
        }
        this.eventBus.$emit("update:selected", copySelected);
        this.$emit("update:selected", copySelected);
      });
    },
    listenToRemoveSelected(copySelected) {
      this.eventBus.$on("update:removeSelected", name => {
        let index = copySelected.indexOf(name);
        copySelected.splice(index, 1);
        this.eventBus.$emit("update:selected", copySelected);
        this.$emit("update:selected", copySelected);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "var";
.gulu-collapse-wrapper {
  border-top: 1px solid $border-color;
}
</style>
