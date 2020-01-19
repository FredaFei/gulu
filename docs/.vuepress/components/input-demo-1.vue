<template>
  <div class="example-box">
    <p><strong>基础用法</strong></p>
    <am-input v-model="v1"></am-input>
    <p><strong>禁用状态</strong></p>
    <div class="row">
      <am-input v-model="v2" disabled></am-input>
      <am-input v-model="v3" readonly></am-input>
    </div>
    <p><strong>可清空</strong></p>
    <am-input v-model="v4" clearable></am-input>
    <p><strong>带icon</strong></p>
    <div class="row">
      <am-input v-model="v5" prefix="date" placeholder="请选择日期"></am-input>
      <am-input v-model="v6" suffix="date" placeholder="请选择日期"></am-input>
    </div>
    <p><strong>文本作用域</strong></p>
    <div class="row">
      <am-input v-model="v7" type="textarea"></am-input>
      <am-input v-model="v8" type="textarea" :rows="4"></am-input>
    </div>
    <p><strong>手动处理 value 变更</strong></p>
    <am-input :value="v9" @input="onInput"></am-input>
  </div>
</template>
<script>
import { AmInput } from "../../../src/index";
export default {
  components: {
    AmInput
  },
  data() {
    return {
      v1: "",
      v2: "张三",
      v3: "只读",
      v4: "",
      v5: "",
      v6: "",
      v7: "",
      v8: "超长留言。。。",
      v9: "123"
    };
  },
  methods: {
    onInput(value) {
      this.v8 = value;
    }
  }
};
</script>
<style scoped>
.box {
  margin-bottom: 14px;
}
.row {
  display: flex;
  align-items: flex-start;
}
.row > div + div {
  margin-left: 20px;
}
.box > .am-input-wrapper,
.row > .am-input-wrapper {
  width: 200px;
}
</style>

