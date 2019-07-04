<template>
  <div class="box">
    <h3>代码演示</h3>
    <am-cascader :source.sync="source" :load-data="loadData" :selected.sync="selected" popover-height="200px"></am-cascader>
    <h3>使用方式</h3>
  </div>
</template>

<script>
import Cascader from '../../../src/cascader/cascader'
import CascaderItem from '../../../src/cascader/cascaderItem'
import db from '../../../tests/fixtures/db'
function ajax(parentId = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = db.filter(item => item.parent_id === parentId)
      result.forEach(node => {
        if (db.filter(item => item.parent_id === node.id).length > 0) {
          node.isLeaf = false
        } else {
          node.isLeaf = true
        }
      })
      resolve(result)
    }, 1500)
  })
}
export default {
  components: {
    AmCascader: Cascader,
    AmCascaderItem: CascaderItem
  },
  data() {
    return {
      source: [],
      selected: []
    }
  },
  created() {
    ajax(0).then(result => {
      this.source = result
    })
  },
  methods: {
    loadData({ id }, updateSource) {
      ajax(id).then(result => {
        updateSource(result)
      })
    }
  }
}
</script>

<style scoped>
.box {
  padding: 20px;
  z-index: 100;
  position: relative;
}
</style>
