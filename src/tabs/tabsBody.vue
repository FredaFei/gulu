<template>
  <div :class="['g-tabs-body',{'vertical':direction=='vertical'}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "guluTabsBody",
  inject: ["eventBus", "direction"]
};
</script>

<style lang="scss" scoped>
.g-tabs-body {
}
</style>
