<template>
  <div
    <h3>代码演示</h3>
    <g-collapse :selected.sync="selectedTab2" single>
      <g-collapse-item title="title_1" name="1">content_1</g-collapse-item>
      <g-collapse-item title="title_2" name="2">content_2</g-collapse-item>
      <g-collapse-item title="title_3" name="3">content_3</g-collapse-item>
      <g-collapse-item title="title_4" name="4">content_4</g-collapse-item>
    </g-collapse>
    <h3>使用方式</h3>
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
      selectedTab2: ['3']
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
