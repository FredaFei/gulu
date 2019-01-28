<template>
  <div class="g-date-picker-wrapper">
    <g-popover position="bottom">
    <g-input></g-input>
      <template slot="popover">
        <div class="g-date-picker-pop">
          <div class="g-date-picker-pop-nav">
            <g-icon name="double-left"></g-icon>
            <g-icon name="left"></g-icon>
            <span @click="onClickYear">2018年</span>
            <span @click="onClickMonth">10月</span>
            <g-icon name="double-right"></g-icon>
            <g-icon name="right"></g-icon>
          </div>
          <div class="g-date-picker-pop-panes">
            <div class="g-date-picker-pop-content" v-if="mode==='years'">年</div>
            <div class="g-date-picker-pop-content" v-else-if="mode==='months'">月</div>
            <div class="g-date-picker-pop-content" v-else>日</div>
          </div>
          <div class="g-date-picker-pop-actions"></div>
        </div>
      </template>
    </g-popover>
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
  props: {},
  data() {
    return {
      mode: "years"
    };
  },
  methods: {
    onClickYear() {},
    onClickMonth() {}
    // onClickMonth(){},
  }
};
</script>

<style lang="scss" scoped>
</style>
