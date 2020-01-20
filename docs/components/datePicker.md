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
  <div class="example-box">
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
    <div class="box">
      <h4>手动更新日期</h4>
      <am-date-picker :value="x4" @input="onDateInput"></am-date-picker>
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
      x3: new Date(),
      x4: '',
    }
  },
  methods:{
    onDateInput(value){
      this.x4 = value
    }
  }
}
```

### API

| 参数            |      说明      |           类型 |     默认值 | 可选值 |
| --------------- | :------------: | -------------: | ---------: | -----: |
| value / v-model |     绑定值     | Date/String |         —— |     —— |
| readonly        |  是否只读状态  |        Boolean |      false |   true |
| disabled        |  是否禁用状态  |        Boolean |      false |   true |
| placeholder     | 输入框占位文本 |         String | 请选择日期 |     —— |
| zIndex      |    设置 CSS 层级    |  String/Number |      10 |         —— |

### Event

| 参数        |           说明           |    类型 | 默认值 | 可选值 |
| ----------- | :----------------------: | ------: | -----: | -----: |
| input | 用户确认选定的值时触发 | Date/String |   —— |      —— |

::: tip
日期的格式默认为yyyy-MM-dd，暂不支持其他格式
:::
