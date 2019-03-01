<template>
  <div class="g-tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "guluTabsBody",
  inject: ["eventBus"]
};
</script>

<style lang="scss" scoped>
.g-tabs-body {
}
</style>
