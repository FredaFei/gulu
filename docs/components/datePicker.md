---
title: 'datePicker 日期选择器'
sidebarDepth: 2
---

### 效果预览

<ClientOnly>
  <datePicker-demo-1/>
</ClientOnly>

### 使用方式

```vue{4}
<template>
  <div>
    <div class="box">
      <h4>基础用法</h4>
      <am-date-picker v-model="x1"></am-date-picker>
    </div>
    <div class="box">
      <h4>日期待选择状态</h4>
      <am-date-picker v-model="x2"></am-date-picker>
    </div>
    <div class="box">
      <h4>禁用状态</h4>
      <am-date-picker v-model="x3" disabled></am-date-picker>
    </div>
  </div>
</template>
```

```js{4}
export default {
  data() {
    return {
      x1: new Date(),
      x2: '',
      x3: new Date()
    }
  }
}
```

### API

| 参数            |      说明      |           类型 |     默认值 | 可选值 |
| --------------- | :------------: | -------------: | ---------: | -----: |
| value / v-model |     绑定值     | String/ Number |         —— |     —— |
| readonly        |  是否只读状态  |        Boolean |      false |   true |
| disabled        |  是否禁用状态  |        Boolean |      false |   true |
| placeholder     | 输入框占位文本 |         String | 请选择日期 |     —— |
