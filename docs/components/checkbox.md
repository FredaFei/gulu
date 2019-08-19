---
title: 'Checkbox 复选框'
sidebarDepth: 2
---

### 效果预览

<ClientOnly>
  <checkbox-demo-1/>
</ClientOnly>

### 使用方式

```vue{4}
<template>
  <div>
    <p><strong>基础用法</strong>（支持多种类型）</p>
    <p>支持多种类型</p>
    <am-checkbox v-model="checked1">Boolean</am-checkbox>
    <am-checkbox v-model="checked1" value="Apple">String</am-checkbox>
    <am-checkbox v-model="checked1" :value="2">Number</am-checkbox>
    <am-checkbox v-model="array" value="A1">Array A1</am-checkbox>
    <am-checkbox v-model="array" value="A2">Array A2</am-checkbox>
    <div>当前选中：{{ checked1 }} {{ array }}</div>
    <p><strong>禁用状态</strong></p>
    <am-checkbox v-model="checked2" disabled>A</am-checkbox>
    <am-checkbox v-model="checked3" disabled>B</am-checkbox>
    <p><strong>全选状态</strong></p>
    <div>
      <am-checkbox v-model="allChecked" :indeterminate="indeterminate"
        >全选</am-checkbox
      >
    </div>
    <am-checkbox v-model="checkedNames" :value="i" v-for="i in options">{{
      i
    }}</am-checkbox>
    <div>当前选中：{{ checkedNames }}</div>
    <p><strong>change 事件</strong></p>
    <am-checkbox v-model="checked4" @change="onChange">A</am-checkbox>
  </div>
</template>
```

```js{4}
  data() {
    return {
      checked1: true,
      checked2: true,
      checked3: false,
      array: [],
      checkedNames: [],
      options: [1, 2, 3, 4, 5]
    };
  },
  computed: {
    allChecked: {
      get() {
        return this.checkedNames.length === this.options.length;
      },
      set(value) {
        this.checkedNames = value ? this.options : [];
      }
    },
    indeterminate() {
      return (
        this.checkedNames.length > 0 &&
        this.checkedNames.length < this.options.length
      );
    }
  },
  methods: {
    onChange(v){
      console.log(v)
    }
  },
```

### API

| 参数          |      说明      |                           类型 | 默认值 | 可选值 |
| ------------- | :------------: | -----------------------------: | -----: | -----: |
| v-model       |     绑定值     | String, Number, Boolean, Array |     —— |     —— |
| value         |   复选框的值   |        String, Number, Boolean |     —— |     —— |
| indeterminate |  设置半选状态  |                        Boolean |  false |   true |
| disabled      |    是否禁用    |                        Boolean |  false |   true |
| name          | 原生 name 属性 |                         String |     —— |     —— |

### Events

| 事件名称 |           说明           |   回调参数 |
| -------- | :----------------------: | ---------: |
| change   | 当绑定值变化时触发的事件 | 更新后的值 |
