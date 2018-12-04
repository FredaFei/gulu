<template>
  <div class="box">
    <h3>代码演示</h3>
    <g-cascader :source.sync="source" :selected.sync="selected" popover-height="200px"></g-cascader>
    <h3>使用方式</h3>
  </div>
</template>

<script>
import Cascader from '../../../src/cascader/cascader'
import CascaderItem from '../../../src/cascader/cascaderItem'
export default {
  components: {
    GCascader: Cascader,
    GCascaderItem: CascaderItem
  },
  data(){
    return {
      selected: ''
    }
  }
}
</script>

<style>
.box{
  padding: 20px;
}
.slides-item {
  width: 100%;
  height: 150px;
  background: #dddddd;
}
</style>
