---
title: 'Input 输入框'
sidebarDepth: 2
---

### 效果预览

<ClientOnly>
  <input-demo-1/>
</ClientOnly>

### 使用方式

```vue{4}
<template>
  <div class="example-box">
    <div class="box">
      <h4>基础用法</h4>
      <am-input v-model="v1"></am-input>
    </div>
    <div class="box">
      <h4>禁用状态</h4>
      <div class="row">
        <am-input v-model="v2" disabled></am-input>
        <am-input v-model="v3" readonly></am-input>
      </div>
    </div>
    <div class="box">
      <h4>可清空</h4>
      <am-input v-model="v4" clearable></am-input>
    </div>
    <div class="box">
      <h4>带icon</h4>
      <div class="row">
        <am-input
          v-model="v5"
          prefix="date"
          placeholder="请选择日期"
        ></am-input>
        <am-input
          v-model="v6"
          suffix="date"
          placeholder="请选择日期"
        ></am-input>
      </div>
    </div>
    <div class="box">
      <h4>文本作用域</h4>
      <div class="row">
        <am-input v-model="v7" type="textarea"></am-input>
        <am-input v-model="v8" type="textarea" :rows="4"></am-input>
      </div>
    </div>
    <div class="box">
      <h4>手动处理 value 变更</h4>
      <am-input :value="v9" @input="onInput"></am-input>
    </div>
  </div>
</template>
```

```js{4}
export default {
  data() {
    return {
      v1: '',
      v2: '张三',
      v3: '只读',
      v4: '',
      v5: '',
      v6: '',
      v7: '',
      v8: '超长留言。。。',
      v9: '123'
    }
  },
  methods: {
    onInput(value) {
      this.v8 = value
    }
  }
}
```

### API

| 参数            |                  说明                  |           类型 |     默认值 |   可选值 |
| --------------- | :------------------------------------: | -------------: | ---------: | -------: |
| value / v-model |                 绑定值                 | String/ Number |         —— |       —— |
| readonly        |              是否只读状态              |        Boolean |      false |     true |
| disabled        |              是否禁用状态              |        Boolean |      false |     true |
| clearable       |               是否可清空               |        Boolean |      false |     true |
| placeholder     |             输入框占位文本             |         String | 请输入内容 |       —— |
| type            |                  类型                  |         String |       text | textarea |
| prefix          |             输入框头部图标             |         String |         —— |       —— |
| suffix          |             输入框尾部图标             |         String |         —— |       —— |
| rows            | 输入框行数，只对 type 为 textarea 有效 |         Number |          2 |       —— |

### Events

| 事件名称 |                    说明                     |                      回调参数 |
| -------- | :-----------------------------------------: | ----------------------------: |
| input    |             在 Input 输入时触发             |                (value: string | number) |
| change   |            在 Input 值改变时触发            | (event: Event)/(value: string | number) |
| focus    |           在 Input 获得焦点时触发           |                (event: Event) |
| blur     |           在 Input 失去焦点时触发           |                (event: Event) |
| clear    | 在点击由 clearable 属性生成的清空按钮时触发 |                            —— |

::: tip
prefix/suffix/clearable 只对 type="text" 有效
:::
