<template>
  <div>
    <div class="box">
      <h4>基础用法</h4>
      <am-date-picker v-model="x1"></am-date-picker>
    </div>
    <div class="box">
      <h4>日期待选择状态</h4>
      <am-date-picker v-model="x2"></am-date-picker>
    </div>
    <div class="box">
      <h4>禁用状态</h4>
      <am-date-picker v-model="x3" disabled></am-date-picker>
    </div>
    <div class="box">
      <h4>手动更新日期</h4>
      <am-date-picker :value="x4" @input="onDateInput"></am-date-picker>
    </div>
  </div>
</template>
<script>
import AmDatePicker from "../../../src/datePicker/index";
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
  methods:{
    onDateInput(value){
      this.x4 = value
    }
  }
};
</script>
<style scoped>
.box {
  margin-bottom: 14px;
}
</style>
