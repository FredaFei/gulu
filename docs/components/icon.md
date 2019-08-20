---
title: 'Icon 图标'
sidebarDepth: 2
---

### 效果预览

<ClientOnly>
  <icon-demo-1/>
</ClientOnly>

### 使用方式

```vue{4}
<template>
  <div>
    <p><strong>基础用法</strong></p>
    <am-icon name="left"></am-icon>
    <am-icon name="right"></am-icon>
    <am-icon name="settings"></am-icon>
    <am-icon name="date"></am-icon>
    <am-icon name="loading"></am-icon>
    <am-icon name="error"></am-icon>
    <am-icon name="warning"></am-icon>
    <am-icon name="success"></am-icon>
    <am-icon name="info"></am-icon>
    <am-icon name="desc"></am-icon>
    <am-icon name="asc"></am-icon>
    <am-icon name="ellipsis"></am-icon>
    <am-icon name="upload"></am-icon>
    <am-icon name="double-left"></am-icon>
    <am-icon name="double-right"></am-icon>
    <am-icon name="thumbs-up"></am-icon>
  </div>
</template>
```

### API

| 参数         |        说明        |     类型 | 默认值 | 可选值 |
| ------------ | :----------------: | -------: | -----: | -----: |
| name         | 设置图标名 |   String |     —— |     —— |

### Events

| 事件名称 |      说明      | 回调参数 |
| -------- | :------------: | -------: |
| click    | 点击按钮时触发 |       —— |
