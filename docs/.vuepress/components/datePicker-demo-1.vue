<template>
  <div class="example-box">
    <p><strong>基础用法</strong></p>
    <am-date-picker v-model="x1"></am-date-picker>
    <p><strong>日期待选择状态</strong></p>
    <am-date-picker v-model="x2"></am-date-picker>
    <p><strong>禁用状态</strong></p>
    <am-date-picker v-model="x3" disabled></am-date-picker>
    <p><strong>手动更新日期</strong></p>
    <am-date-picker :value="x4" @input="onDateInput"></am-date-picker>
  </div>
</template>
<script>
import { AmDatePicker } from "../../../src/index";
export default {
  components: {
    AmDatePicker
  },
  data() {
    return {
      x1: new Date(),
      x2: "",
      x3: new Date(),
      x4: '',
    };
  },
  methods: {
    onDateInput(value) {
      this.x4 = value
    }
  }
};
</script>
