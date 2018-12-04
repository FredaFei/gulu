---
title: 'Tabs'
sidebarDepth: 2
---

<ClientOnly>
  <tabs-demo-1/>
</ClientOnly>

``` vue{4}
<template>
  <div>
    <g-tabs :selected.sync="selectedTabs" @update:selected="selectedFn">
      <g-tabs-header>
        <g-tabs-item name="sport">
          <g-icon name="settings"></g-icon>
          sport
        </g-tabs-item>
        <g-tabs-item name="music">music</g-tabs-item>
        <g-tabs-item name="moving">moving</g-tabs-item>
      </g-tabs-header>
      <g-tabs-body>
        <g-tabs-pane name="sport">sport content</g-tabs-pane>
        <g-tabs-pane name="music">music content</g-tabs-pane>
        <g-tabs-pane name="moving">moving content</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
</template>
```
``` js{4}
import Icon from '../../../src/icon'
import Tabs from '../../../src/tabs/tabs'
import TabsHeader from '../../../src/tabs/tabsHeader'
import TabsItem from '../../../src/tabs/tabsItem'
import TabsBody from '../../../src/tabs/tabsBody'
import TabsPane from '../../../src/tabs/tabsPane'
export default {
  components: {
    'GIcon': Icon,
    'GTabs': Tabs,
    'GTabsHeader': TabsHeader,
    'GTabsItem': TabsItem,
    'GTabsBody': TabsBody,
    'GTabsPane': TabsPane
  },
  data(){
    return {
      selectedTabs: 'sport',
    }
  },
  methods: {
    selectedFn() {
      console.log('tabs')
    }
  }
}
```
``` css
.row{
  margin-bottom: 14px;
}
```
### API

| 参数           | 说明           | 类型      |默认值        |          可选值|
| ------------- |:--------------:| --------:|------------:|--------------:|
| selected       | 选中的  | String/Number   | -          | -             |
| readonly       | 是否只读状态    | Boolean   | false       | true      |
| disabled       | 是否禁用状态   | Boolean  | false      | true          |
| iconType       | 设置验证时提示信息的图标类型   |String      | -       | - |
| message        | 输入框验证时的提示信息   | String | -          | - |
| input        | 输入框输入时的回调   | String | -          | - |
| change        | 输入框内容变化时的回调   | Function | -          | - |
| focus        | 输入框聚焦时的回调   | Function | -          | - |
| blur        | 输入框失去焦点时的回调   | Function | -          | - |
