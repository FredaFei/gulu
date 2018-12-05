<template>
  <div>
    <h3>代码演示(多个选中)</h3>
    <g-collapse :selected.sync="selectedTab1">
      <g-collapse-item title="title_1" name="1">content_1</g-collapse-item>
      <g-collapse-item title="title_2" name="2">content_2</g-collapse-item>
      <g-collapse-item title="title_3" name="3">content_3</g-collapse-item>
      <g-collapse-item title="title_4" name="4">content_4</g-collapse-item>
    </g-collapse>
  </div>
</template>

<script>
import Collapse from '../../../src/collapse/collapse'
import CollapseItem from '../../../src/collapse/collapseItem'
export default {
  components: {
    GCollapse: Collapse,
    GCollapseItem: CollapseItem
  },
  data(){
    return {
      selectedTab1: ['1', '3'],
    }
  }
}
</script>
