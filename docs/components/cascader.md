---
title: 'Cascader 级联选择'
sidebarDepth: 2
---

<ClientOnly>
  <cascader-demo-1/>
</ClientOnly>

```vue{4}
<template>
  <div class="box">
    <am-cascader
      :source.sync="source"
      :load-data="loadData"
      :selected.sync="selected"
      popover-height="200px"
    ></am-cascader>
  </div>
</template>
```

```js{4}
// 格式如下
const db = [
  { id: 1, name: '北京', parent_id: 0 },
  { id: 2, name: '天津', parent_id: 0 },
  { id: 3, name: '上海', parent_id: 0 },
  { id: 5, name: '河北', parent_id: 0 },
  { id: 36, name: '东城', parent_id: 1 },
  { id: 51, name: '平谷', parent_id: 1 },
  { id: 52, name: '密云', parent_id: 1 },
  { id: 54, name: '和平', parent_id: 2 },
  { id: 55, name: '河东', parent_id: 2 },
  { id: 56, name: '河西', parent_id: 2 },
  { id: 70, name: '黄浦', parent_id: 3 },
  { id: 71, name: '徐汇', parent_id: 3 },
  { id: 76, name: '虹口', parent_id: 3 },
  { id: 127, name: '秦皇岛', parent_id: 5 },
  { id: 128, name: '邯郸', parent_id: 5 },
  { id: 577, name: '邯山', parent_id: 128 },
  { id: 578, name: '丛台', parent_id: 128 },
  { id: 579, name: '复兴', parent_id: 128 },
  ...
]

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

### API

| 参数          |       说明       |     类型 | 默认值 | 可选值 |
| ------------- | :--------------: | -------: | -----: | -----: |
| selected      |    指定选中项    |    Array |     [] |      - |
| source        |      数据源      |    Array |     [] |      - |
| popoverHeight |   浮层预设高度   |   String |      - |      - |
| loadData      | 用于动态加载选项 | Function |      - |      - |

::: tip
loadData 是动态加载数据时需要设置的，若数据时静态的只需要设置 source 即可
:::
