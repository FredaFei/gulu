<template>
  <div class="am-tabs-pane" :class="classes" v-if="active" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "amTabsPane",
  inject: ["eventBus"],
  props: {
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
        active: this.active
      };
    }
  },
  created() {
    this.eventBus &&
      this.eventBus.$on("update:selected", name => {
        this.active = name === this.name;
      });
  }
};
</script>

<style lang="scss" scoped>
.am-tabs-pane {
  padding: 4px 8px;
}
</style>
