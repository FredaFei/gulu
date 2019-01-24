<template>
  <div class="g-date-picker-wrapper">
    <div class="g-date-picker-input">
      <g-input></g-input>
    </div>
    <div class="g-date-picker-pop">
      <g-popover></g-popover>
    </div>
  </div>
</template>

<script>
import GPopover from "../popover/popover";
import GIcon from "../icon";
import GInput from "../input/input";
export default {
  name: "guluDatePicker",
  components: {
    GPopover,
    GIcon,
    GInput
  },
  props: {}
};
</script>

<style lang="scss" scoped>
</style>
