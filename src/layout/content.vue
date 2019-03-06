<template>
  <main>
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: "amContent"
};
</script>

<style lang="scss" scoped>
main {
  flex-grow: 1;
}
</style>
