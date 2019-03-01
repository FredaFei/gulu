---
title: 'Tabs 标签页'
sidebarDepth: 2
---

### 效果预览

<ClientOnly>
<tabs-demo-1/>
</ClientOnly>

### 使用方式

```vue{4}
<template>
  <div>
    <div class="box">
      <h4>Tabs 默认定位</h4>
      <g-tabs :selected.sync="selectedTabs1">
        <g-tabs-header>
          <g-tabs-item name="finance">财经</g-tabs-item>
          <g-tabs-item name="sport">体育</g-tabs-item>
          <g-tabs-item name="comic">娱乐</g-tabs-item>
        </g-tabs-header>
        <g-tabs-body>
          <g-tabs-pane name="finance">财经 content</g-tabs-pane>
          <g-tabs-pane name="sport">体育 content</g-tabs-pane>
          <g-tabs-pane name="comic">娱乐 content</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
    </div>
    <div class="box">
      <h4>Tabs 垂直定位</h4>
      <g-tabs :selected.sync="selectedTabs2" direction="vertical">
        <g-tabs-header>
          <g-tabs-item name="finance">财经</g-tabs-item>
          <g-tabs-item name="sport">体育</g-tabs-item>
          <g-tabs-item name="comic">娱乐</g-tabs-item>
        </g-tabs-header>
        <g-tabs-body>
          <g-tabs-pane name="finance">财经 content</g-tabs-pane>
          <g-tabs-pane name="sport">体育 content</g-tabs-pane>
          <g-tabs-pane name="comic">娱乐 content</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
    </div>
    <div class="box">
      <h4>自定义tabs</h4>
      <g-tabs :selected.sync="selectedTabs3">
        <g-tabs-header>
          <g-tabs-item name="finance"
            >财经 <g-icon name="thumbs-up"></g-icon>
          </g-tabs-item>
          <g-tabs-item name="sport">体育</g-tabs-item>
          <g-tabs-item name="comic">娱乐</g-tabs-item>
          <g-button slot="actions">更多</g-button>
        </g-tabs-header>
        <g-tabs-body>
          <g-tabs-pane name="finance">财经 content</g-tabs-pane>
          <g-tabs-pane name="sport">体育 content</g-tabs-pane>
          <g-tabs-pane name="comic">娱乐 content</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
    </div>
    <div class="box">
      <h4>禁用状态</h4>
      <g-tabs :selected.sync="selectedTabs4" direction="vertical">
        <g-tabs-header>
          <g-tabs-item name="finance">财经</g-tabs-item>
          <g-tabs-item name="sport" disabled>体育</g-tabs-item>
          <g-tabs-item name="comic">娱乐</g-tabs-item>
        </g-tabs-header>
        <g-tabs-body>
          <g-tabs-pane name="finance">财经 content</g-tabs-pane>
          <g-tabs-pane name="sport">体育 content</g-tabs-pane>
          <g-tabs-pane name="comic">娱乐 content</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
    </div>
  </div>
</template>
```

```js{4}
import Icon from '../../../src/icon'
import Tabs from '../../../src/tabs/tabs'
import TabsHeader from '../../../src/tabs/tabsHeader'
import TabsItem from '../../../src/tabs/tabsItem'
import TabsBody from '../../../src/tabs/tabsBody'
import TabsPane from '../../../src/tabs/tabsPane'
export default {
  components: {
    GIcon: Icon,
    GTabs: Tabs,
    GTabsHeader: TabsHeader,
    GTabsItem: TabsItem,
    GTabsBody: TabsBody,
    GTabsPane: TabsPane
  },
  data() {
    return {
      selectedTabs: 'sport'
    }
  },
  methods: {
    selectedFn() {
      console.log('tabs')
    }
  }
}
```

```css
.row {
  margin-bottom: 14px;
}
```

### Tabs.API

| 参数      |           说明            |          类型 |     默认值 |   可选值 |
| --------- | :-----------------------: | ------------: | ---------: | -------: |
| selected  | 绑定值，选中选项卡的 name | String/Number |         —— |       —— |
| direction |       tabs 展示位置       |        String | horizontal | vertical |
| disabled  |       是否禁用状态        |       Boolean |      false |     true |

### TabsHeader.API

| 参数    |             说明             | 类型 | 默认值 | 可选值 |
| ------- | :--------------------------: | ---: | -----: | -----: |
| actions | 用户自定义选项卡外的插槽别名 |   —— |     —— |     —— |

### TabsItem.API

| 参数     |     说明     |    类型 | 默认值 | 可选值 |
| -------- | :----------: | ------: | -----: | -----: |
| name     |  选项卡别名  |  String |     —— |     —— |
| disabled | 是否禁用状态 | Boolean |  false |   true |

### Events

| 事件名称 |      说明      | 回调参数 |
| -------- | :------------: | -------: |
| click    | 点击按钮时触发 |       —— |
