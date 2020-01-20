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
  <div class="example-box">
    <p><strong>默认定位</strong></p>
    <am-tabs :selected.sync="selectedTabs1">
      <am-tabs-header>
        <am-tabs-item name="finance">财经</am-tabs-item>
        <am-tabs-item name="sport">体育</am-tabs-item>
        <am-tabs-item name="comic">娱乐</am-tabs-item>
      </am-tabs-header>
      <am-tabs-body>
        <am-tabs-pane name="finance">财经 content</am-tabs-pane>
        <am-tabs-pane name="sport">体育 content</am-tabs-pane>
        <am-tabs-pane name="comic">娱乐 content</am-tabs-pane>
      </am-tabs-body>
    </am-tabs>
    <p><strong>垂直定位</strong></p>
    <am-tabs :selected.sync="selectedTabs2" direction="vertical">
      <am-tabs-header>
        <am-tabs-item name="finance">财经</am-tabs-item>
        <am-tabs-item name="sport">体育</am-tabs-item>
        <am-tabs-item name="comic">娱乐</am-tabs-item>
      </am-tabs-header>
      <am-tabs-body>
        <am-tabs-pane name="finance">财经 content</am-tabs-pane>
        <am-tabs-pane name="sport">体育 content</am-tabs-pane>
        <am-tabs-pane name="comic">娱乐 content</am-tabs-pane>
      </am-tabs-body>
    </am-tabs>
    <p><strong>自定义下标线高度</strong></p>
    <am-tabs :selected.sync="selectedTabs2" direction="vertical" lineWidthOrHeight="26">
      <am-tabs-header>
        <am-tabs-item name="finance">财经</am-tabs-item>
        <am-tabs-item name="sport">体育</am-tabs-item>
        <am-tabs-item name="comic">娱乐</am-tabs-item>
      </am-tabs-header>
      <am-tabs-body>
        <am-tabs-pane name="finance">财经 content</am-tabs-pane>
        <am-tabs-pane name="sport">体育 content</am-tabs-pane>
        <am-tabs-pane name="comic">娱乐 content</am-tabs-pane>
      </am-tabs-body>
    </am-tabs>
    <p><strong>自定义tabs</strong></p>
    <am-tabs :selected.sync="selectedTabs3">
      <am-tabs-header>
        <am-tabs-item name="finance">财经 <am-icon name="thumbs-up"></am-icon>
        </am-tabs-item>
        <am-tabs-item name="sport">体育</am-tabs-item>
        <am-tabs-item name="comic">娱乐</am-tabs-item>
        <am-button slot="actions">更多</am-button>
      </am-tabs-header>
      <am-tabs-body>
        <am-tabs-pane name="finance">财经 content</am-tabs-pane>
        <am-tabs-pane name="sport">体育 content</am-tabs-pane>
        <am-tabs-pane name="comic">娱乐 content</am-tabs-pane>
      </am-tabs-body>
    </am-tabs>
    <p><strong>禁用状态</strong></p>
    <am-tabs :selected.sync="selectedTabs4" direction="vertical">
      <am-tabs-header>
        <am-tabs-item name="finance">财经</am-tabs-item>
        <am-tabs-item name="sport" disabled>体育</am-tabs-item>
        <am-tabs-item name="comic">娱乐</am-tabs-item>
      </am-tabs-header>
      <am-tabs-body>
        <am-tabs-pane name="finance">财经 content</am-tabs-pane>
        <am-tabs-pane name="sport">体育 content</am-tabs-pane>
        <am-tabs-pane name="comic">娱乐 content</am-tabs-pane>
      </am-tabs-body>
    </am-tabs>
  </div>
</template>
```

```js{4}
export default {
  data() {
    return {
      selectedTabs1: "finance",
      selectedTabs2: "comic",
      selectedTabs3: "sport",
      selectedTabs4: "comic",
      selectedTabs5: "comic",
    }
  }
}
```

### Tabs.API

| 参数      |           说明            |          类型 |     默认值 |   可选值 |
| --------- | :-----------------------: | ------------: | ---------: | -------: |
| selected  | 绑定值，选中选项卡的 name | String/Number |         —— |       —— |
| direction |       tabs 展示位置       |        String | horizontal | vertical |
| lineWidthOrHeight |       tabs 选中时下线条宽/高   |   String/Number |  —— |  —— |
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

### TabsItem.Events

| 事件名称 |      说明      | 回调参数 |
| -------- | :------------: | -------: |
| click    | 点击按钮时触发 |       —— |
