<template>
  <div>
    <p><strong>基础用法</strong></p>
    <am-radio v-model="checked1" value="A">Apple</am-radio>
    <am-radio v-model="checked1" value="B">Banana</am-radio>
    <p><strong>禁用状态</strong></p>
    <am-radio v-model="checked2" value="A" disabled>Apple</am-radio>
    <am-radio value="B" disabled>Banana</am-radio>
  </div>
</template>
<script>
import Radio from "../../../src/radio/index";
export default {
  components: {
    AmRadio: Radio
  },
  data() {
    return {
      checked1: "A",
      checked2: "A",
    };
  }
};
</script>
