<template>
  <div>
    <div class="box">
      <h4>基础用法</h4>
      <g-date-picker v-model="x1"></g-date-picker>
    </div>
    <div class="box">
      <h4>日期待选择状态</h4>
      <g-date-picker v-model="x2"></g-date-picker>
    </div>
    <div class="box">
      <h4>禁用状态</h4>
      <g-date-picker v-model="x3" disabled></g-date-picker>
    </div>
  </div>
</template>
<script>
import GDatePicker from "../../../src/datePicker/datePicker";
export default {
  components: {
    GDatePicker
  },
  data() {
    return {
      x1: new Date(),
      x2: "",
      x3: new Date()
    };
  }
};
</script>
<style>
.box {
  margin-bottom: 14px;
}
</style>
