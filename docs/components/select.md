---
title: 'Select 下拉框'
sidebarDepth: 2
---

### 效果预览

<ClientOnly>
  <select-demo-1/>
</ClientOnly>

### 使用方式

```vue{4}
<template>
  <div>
    <p><strong>基础用法</strong></p>
    <am-radio v-model="checked1" value="A">Apple</am-radio>
    <am-radio v-model="checked1" value="B">Banana</am-radio>
    <p><strong>禁用状态</strong></p>
    <am-radio v-model="checked2" value="A" disabled>Apple</am-radio>
    <am-radio value="B" disabled>Banana</am-radio>
  </div>
</template>
```

```js{4}
...
data() {
  return {
    checked1: "A",
    checked2: "A",
    checked3: "A",
  };
}
...
```

### API

| 参数     |      说明      |                    类型 | 默认值 | 可选值 |
| -------- | :------------: | ----------------------: | -----: | -----: |
| value    |     绑定值     | String, Number, Boolean |     —— |     —— |
| model    |     绑定值     | String, Number, Boolean |     —— |     —— |
| disabled |    是否禁用    |                 Boolean |  false |   true |
| name     | 原生 name 属性 |                  String |     —— |     —— |

### Events

| 事件名称 |          说明          |              回调参数 |
| -------- | :--------------------: | --------------------: |
| change   | 绑定值变化时触发的事件 | 选中的 Radio value 值 |
