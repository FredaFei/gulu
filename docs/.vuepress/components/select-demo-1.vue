<template>
  <div class="example-box">
    <p><strong>基础用法</strong></p>
    <am-select :selected.sync="selected1">
      <am-option v-for="o in options1" :key="o.value" :value="o.value">{{o.label}}</am-option>
    </am-select>
    <p><strong>禁用状态</strong></p>
    <p>整体禁用</p>
    <am-select :selected.sync="selected2" disabled>
      <am-option v-for="o in options2" :key="o.value" :value="o.value">{{o.label}}</am-option>
    </am-select>
    <p>有选项禁用</p>
    <am-select :selected.sync="selected3">
      <am-option v-for="o in options3" :key="o.value" :value="o.value" :disabled="o.disabled">{{o.label}}</am-option>
    </am-select>
    <p><strong>可清空选中</strong></p>
    <am-select :selected.sync="selected4" clearable>
      <am-option v-for="o in options4" :key="o.value" :value="o.value" :disabled="o.disabled">{{o.label}}</am-option>
    </am-select>
  </div>
</template>
<script>
import { AmSelect, AmOption } from "../../../src/index";
export default {
  components: {
    AmSelect,
    AmOption
  },
  data() {
    return {
      selected1: '',
      options1: [
        { value: "A", label: "Apple" },
        { value: "B", label: "Banana" },
        { value: "C", label: "Cherry" },
        { value: "G", label: "Grape" },
        { value: "P", label: "Peach" }
      ],
      selected2: 'G',
      options2: [
        { value: "G", label: "Grape" },
        { value: "P", label: "Peach" },
        { value: "A", label: "Apple" },
        { value: "B", label: "Banana" },
        { value: "C", label: "Cherry" },
      ],
      selected3: '',
      options3: [
        { value: "G", label: "Grape" },
        { value: "P", label: "Peach" },
        { value: "A", label: "Apple", disabled: true },
      ],
      selected4: '',
      options4: [
        { value: "G", label: "Grape" },
        { value: "P", label: "Peach" },
        { value: "A", label: "Apple" },
      ]
    };
  },
  mounted() {
    console.log(this.$children);
  }
};
</script>
