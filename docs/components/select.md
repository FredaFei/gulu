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
    <am-select :selected.sync="selected1">
      <am-option v-for="o in options1" :key="o.value" :value="o.value">{{o.label}}</am-option>
    </am-select>
    <p><strong>禁用状态</strong></p>
    <p>整体禁用</p>
    <am-select :selected.sync="selected2" disabled>
      <am-option v-for="o in options2" :key="o.value" :value="o.value">{{o.label}}</am-option>
    </am-select>
    <p>有选项禁用</p>
    <am-select :selected.sync="selected3">
      <am-option v-for="o in options3" :key="o.value" :value="o.value" :disabled="o.disabled">{{o.label}}</am-option>
    </am-select>
    <p><strong>可清空选中</strong></p>
    <am-select :selected.sync="selected4" clearable>
      <am-option v-for="o in options4" :key="o.value" :value="o.value" :disabled="o.disabled">{{o.label}}</am-option>
    </am-select>
  </div>
</template>
```

```js{4}
...
data() {
  return {
    selected1: '',
    options1: [
      { value: "A", label: "Apple" },
      { value: "B", label: "Banana" },
      { value: "C", label: "Cherry" },
      { value: "G", label: "Grape" },
      { value: "P", label: "Peach" }
    ],
    selected2: 'G',
    options2: [
      { value: "G", label: "Grape" },
      { value: "P", label: "Peach" },
      { value: "A", label: "Apple" },
      { value: "B", label: "Banana" },
      { value: "C", label: "Cherry" },
    ],
    selected3: '',
    options3: [
      { value: "G", label: "Grape" },
      { value: "P", label: "Peach" },
      { value: "A", label: "Apple",disabled: true },
    ],
    selected4: '',
    options4: [
      { value: "G", label: "Grape" },
      { value: "P", label: "Peach" },
      { value: "A", label: "Apple" },
    ]
  };
},
...
```

### API

#### select

| 参数     |      说明      |                    类型 | 默认值 | 可选值 |
| -------- | :------------: | ----------------------: | -----: | -----: |
| selected    |     当前选中的值     | String |     —— |     —— |
| disabled |    是否禁用    |                 Boolean |  false |   true |
| clearable    |     是否可以清空     |  Boolean |     false |     true |
| placeholder    |     输入框占位文本     |  String |     请选择 |     —— |
| zIndex     | 设置 CSS 层级 |         String/Number |    10 |     —— |

### Events

| 事件名称 |          说明          |              回调参数 |
| -------- | :--------------------: | --------------------: |
| update:selected   | 选中值变化时触发的事件 | 选中的值 |

#### option

| 参数     |      说明      |             类型 | 默认值 | 可选值 |
| -------- | :------------: | ---------------: | -----: | -----: |
| value    |     选项的值     | String |     —— |     —— |
| disabled |    	是否禁用该选项    |     Boolean |  false |   true |