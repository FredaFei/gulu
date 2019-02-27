<template>
  <div>
    <h3>代码演示</h3>
    <div class="box">
      <h4>基础用法</h4>
      <g-input v-model="v1"></g-input>
    </div>
    <div class="box">
      <h4>禁用状态</h4>
      <div class="row">
        <g-input v-model="v2" disabled></g-input>
        <g-input v-model="v3" readonly></g-input>
      </div>
    </div>
    <div class="box">
      <h4>可清空</h4>
      <g-input v-model="v4" clearable></g-input>
    </div>
    <div class="box">
      <h4>带icon</h4>
      <div class="row">
        <g-input v-model="v5" prefix="date" placeholder="请选择日期"></g-input>
        <g-input v-model="v6" suffix="date" placeholder="请选择日期"></g-input>
      </div>
    </div>
    <div class="box">
      <h4>文本作用域</h4>
      <div class="row">
        <g-input v-model="v7" type="textarea"></g-input>
        <g-input v-model="v8" type="textarea" :rows="4"></g-input>
      </div>
    </div>
    <div class="box">
      <h4>手动处理 value 变更</h4>
      <g-input :value="v9" @input="onInput"></g-input>
    </div>
  </div>
</template>
<script>
import GInput from "../../../src/input/input";
export default {
  components: {
    GInput
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
<style>
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
.box > .g-input-wrapper,
.row > .g-input-wrapper {
  width: 200px;
}
</style>

