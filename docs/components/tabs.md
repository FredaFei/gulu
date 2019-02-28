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
  <div></div>
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

### API

| 参数     |             说明             |          类型 | 默认值 | 可选值 |
| -------- | :--------------------------: | ------------: | -----: | -----: |
| selected |            选中的            | String/Number |      - |      - |
| readonly |         是否只读状态         |       Boolean |  false |   true |
| disabled |         是否禁用状态         |       Boolean |  false |   true |
| iconType | 设置验证时提示信息的图标类型 |        String |      - |      - |
| message  |    输入框验证时的提示信息    |        String |      - |      - |
| input    |      输入框输入时的回调      |        String |      - |      - |
| change   |    输入框内容变化时的回调    |      Function |      - |      - |
| focus    |      输入框聚焦时的回调      |      Function |      - |      - |
| blur     |    输入框失去焦点时的回调    |      Function |      - |      - |

### Events

| 事件名称 |      说明      | 回调参数 |
| -------- | :------------: | -------: |
| click    | 点击按钮时触发 |       —— |

::: tip
icon 和 loading 只能任选其一，不能同时设置
:::
