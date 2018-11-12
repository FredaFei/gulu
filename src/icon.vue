<template>
  <svg class="g-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'guluIcon',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.g-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
