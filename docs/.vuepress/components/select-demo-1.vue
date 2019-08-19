<template>
  <div>
    <p><strong>基础用法</strong></p>
    <am-select :selected.sync="selected">
      <am-option v-for="o in options" :key="o.value" :value="o.value">{{o.label}}</am-option>
    </am-select>
    <p><strong>禁用状态</strong></p>
  </div>
</template>
<script>
import Select from "../../../src/select/index";
import Option from "../../../src/select/option";
export default {
  components: {
    AmSelect: Select,
    AmOption: Option
  },
  data() {
    return {
      selected: '',
      options: [
        { value: "A", label: "Apple" },
        { value: "B", label: "Banana" },
        { value: "C", label: "Cherry" },
        { value: "G", label: "Grape" },
        { value: "P", label: "Peach" }
      ]
    };
  },
  methods: {
  },
};
</script>
