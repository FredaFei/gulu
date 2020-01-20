---
title: 'Button 按钮'
sidebarDepth: 2
---

### 效果预览

<ClientOnly>
  <button-demo-1/>
</ClientOnly>

### 使用方式

```vue{4}
<template>
  <div class="example-box">
    <p><strong>基础用法</strong></p>
    <am-button>默认</am-button>
    <am-button icon="settings">icon 默认左边</am-button>
    <am-button icon="right" icon-position="right">icon 右边</am-button>
    <am-button loading>加载中</am-button>
    <am-button disabled>默认样式</am-button>
    <p><strong>按钮组</strong></p>
    <am-button-group>
      <am-button icon="left">prev</am-button>
      <am-button loading>加载中</am-button>
      <am-button icon="right" icon-position="right">next</am-button>
    </am-button-group>
  </div>
</template>
```

### API

| 参数         |        说明        |     类型 | 默认值 | 可选值 |
| ------------ | :----------------: | -------: | -----: | -----: |
| icon         | 设置按钮的图标类型 |   String |     —— |     —— |
| iconPosition | 设置图标的摆放位置 |   String |   left |  right |
| loading      |  设置按钮载入状态  |  Boolean |  false |   true |
| click        |  点击按钮时的回调  | Function |     —— |     —— |

### Events

| 事件名称 |      说明      | 回调参数 |
| -------- | :------------: | -------: |
| click    | 点击按钮时触发 |       —— |

::: tip
icon 和 loading 只能任选其一，不能同时设置
:::
