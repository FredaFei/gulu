<template>
  <div class="example-box">
    <p><strong>基础用法</strong></p>
    <am-radio v-model="checked1" value="A">Apple</am-radio>
    <am-radio v-model="checked1" value="B">Banana</am-radio>
    <p><strong>禁用状态</strong></p>
    <am-radio v-model="checked2" value="A" disabled>Apple</am-radio>
    <am-radio value="B" disabled>Banana</am-radio>
  </div>
</template>
<script>
import { AmRadio } from "../../../src/index";
export default {
  components: {
    AmRadio
  },
  data() {
    return {
      checked1: "A",
      checked2: "A",
    };
  }
};
</script>
