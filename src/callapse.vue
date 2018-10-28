<template>
  <div class="callapse-wrapper">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'guluCallapse'
}
</script>

<style lang="scss" scoped>
    .callapse-wrapper{
        border: 1px solid rgba(204, 204, 204, 1);
        border-radius: 4px;
    }
</style>
