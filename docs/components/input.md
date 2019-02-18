---
title: 'Input 输入框'
sidebarDepth: 2
---

<ClientOnly>
  <input-demo-1/>
</ClientOnly>

```vue{4}
<template>
  <div>
    <div class="row">
      <g-input value="张三"></g-input>
      <g-input value="只读" readonly></g-input>
      <g-input value="disabled" disabled></g-input>
    </div>
    <div class="row">
      <g-input
        value="12345"
        icon-type="error"
        message="密码长度需超过6位"
      ></g-input>
    </div>
    <div class="row">
      <g-input
        value="12345"
        icon-type="info"
        message="密码安全等级一般"
      ></g-input>
    </div>
  </div>
</template>
```

```js{4}
import Input from '../../../src/input/input'
export default {
  components: {
    GInput: Input
  }
}
```

```css
.row {
  margin-bottom: 14px;
}
```

### API

| 参数     |             说明             |     类型 | 默认值 | 可选值 |
| -------- | :--------------------------: | -------: | -----: | -----: |
| value    |          输入框内容          |   String |      - |      - |
| readonly |         是否只读状态         |  Boolean |  false |   true |
| disabled |         是否禁用状态         |  Boolean |  false |   true |
| iconType | 设置验证时提示信息的图标类型 |   String |      - |      - |
| message  |    输入框验证时的提示信息    |   String |      - |      - |
| input    |      输入框输入时的回调      |   String |      - |      - |
| change   |    输入框内容变化时的回调    | Function |      - |      - |
| focus    |      输入框聚焦时的回调      | Function |      - |      - |
| blur     |    输入框失去焦点时的回调    | Function |      - |      - |

::: tip
icon 和 loading 只能任选其一，不能同时设置
:::
