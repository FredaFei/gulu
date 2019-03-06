<template>
  <div>
    <h3>代码演示(单个选中)</h3>
    <am-collapse :selected.sync="selectedTab2" single>
      <am-collapse-item title="title_1" name="1">content_1</am-collapse-item>
      <am-collapse-item title="title_2" name="2">content_2</am-collapse-item>
      <am-collapse-item title="title_3" name="3">content_3</am-collapse-item>
      <am-collapse-item title="title_4" name="4">content_4</am-collapse-item>
    </am-collapse>
    <h3>使用方式</h3>
  </div>
</template>

<script>
import Collapse from '../../../src/collapse/collapse'
import CollapseItem from '../../../src/collapse/collapseItem'
export default {
  components: {
    AmCollapse: Collapse,
    AmCollapseItem: CollapseItem
  },
  data(){
    return {
      selectedTab2: ['3']
    }
  }
}
</script>

