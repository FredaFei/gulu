---
title: 'Cascader'
sidebarDepth: 2
---

<ClientOnly>
  <cascader-demo-1/>
</ClientOnly>

``` vue{4}
<template>
  <div class="box">
    <g-cascader :source.sync="source" :load-data="loadData" :selected.sync="selected" popover-height="200px"></g-cascader>
  </div>
</template>
```
``` js{4}
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
    GCascader: Cascader,
    GCascaderItem: CascaderItem
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
```

``` css{4}
.box {
  padding: 20px;
  z-index: 100;
  position: relative;
}
```
### API

| 参数           | 说明           | 类型      |默认值        |          可选值|
| ------------- |:--------------:| --------:|------------:|--------------:|
| selected         | 指定选中项  | Array   | []         | -             |
| source  | 数据源    | Array   | []       | -     |
| popoverHeight       | 浮层预设高度   | String  | -      | -         |
| loadData       | 用于动态加载选项   | Function  | -      | -         |

::: tip
loadData是动态加载数据时需要设置的，若数据时静态的只需要设置source即可
:::