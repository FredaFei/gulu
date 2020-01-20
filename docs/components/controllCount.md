---
title: 'ControllCount 数量'
sidebarDepth: 2
---

### 效果预览

<ClientOnly>
  <controllCount-demo-1/>
</ClientOnly>

### 使用方式

```vue{4}
<template>
  <div class="example-box">
    <p><strong>基础用法</strong></p>
    <am-controll-count :count.sync="count"></am-controll-count>
</template>
```
```js
  ...
  data() {
    return {
      count: 2
    }
  }
  ...
```
```css
  .am-controll-count {
    width: 140px;
  }
```

### API

| 参数         |        说明        |     类型 | 默认值 | 可选值 |
| ------------ | :----------------: | -------: | -----: | -----: |
| count         | 当前数量 |   Number |     1 |     —— |
| maxCount | 最大数量 |   Number |   10   |   ——  |

### Events

| 事件名称 |      说明      | 回调参数 |
| -------- | :------------: | -------: |
| update:count    | 点击按钮时触发 |   count当前数量 |

