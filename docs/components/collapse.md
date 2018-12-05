---
title: 'Collapse'
sidebarDepth: 2
---

<ClientOnly>
  <collapse-demo-1/>
  <collapse-demo-2/>
</ClientOnly>

``` vue{4}
<template>
  <div class="box">
    <g-collapse :selected.sync="selectedTab1">
      <g-collapse-item title="title_1" name="1">content_1</g-collapse-item>
      <g-collapse-item title="title_2" name="2">content_2</g-collapse-item>
      <g-collapse-item title="title_3" name="3">content_3</g-collapse-item>
      <g-collapse-item title="title_4" name="4">content_4</g-collapse-item>
    </g-collapse>
    <g-collapse :selected.sync="selectedTab2" single>
      <g-collapse-item title="title_1" name="1">content_1</g-collapse-item>
      <g-collapse-item title="title_2" name="2">content_2</g-collapse-item>
      <g-collapse-item title="title_3" name="3">content_3</g-collapse-item>
      <g-collapse-item title="title_4" name="4">content_4</g-collapse-item>
    </g-collapse>
  </div>
</template>
```
``` js{4}
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
```
### API

| 参数           | 说明           | 类型      |默认值        |          可选值|
| ------------- |:--------------:| --------:|------------:|--------------:|
| selected         | 默认展示的面板  | Array   | -          | -             |
| single  | 是否仅展示一个面板    | Boolean   | false        | true     |
