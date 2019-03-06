<template>
  <div class="am-tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "amTabsBody",
  inject: ["eventBus"]
};
</script>

<style lang="scss" scoped>
.am-tabs-body {
}
</style>
