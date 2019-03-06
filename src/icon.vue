<template>
  <svg class="am-icon" @click="$emit('click',$event)">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import "./svg.js";
export default {
  name: "amIcon",
  props: {
    name: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.am-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.1em;
  fill: currentColor;
  overflow: hidden;
}
</style>
