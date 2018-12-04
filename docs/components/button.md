---
title: 'Button'
sidebarDepth: 2
---

<ClientOnly>
  <button-demo-1/>
</ClientOnly>

``` vue{4}
<template>
  <div>
    <g-button>默认</g-button>
    <g-button icon="settings">icon 默认左边</g-button>
    <g-button icon="right" icon-position="right">icon 右边</g-button>
    <g-button loading>加载中</g-button>
    <g-button disabled>默认样式</g-button>
    <p><strong>ButtonGroup</strong></p>
    <g-button-group>
      <g-button icon="left">prev</g-button>
      <g-button loading>加载中</g-button>
      <g-button icon="right" icon-position="right">next</g-button>
    </g-button-group>
  </div>
</template>
```
``` js{4}
import Button from '../../../src/button'
import ButtonGroup from '../../../src/buttonGroup'
export default {
  components: {
    GButton: Button,
    GButtonGroup: ButtonGroup
  }
}
```
### API

| 参数           | 说明           | 类型      |默认值        |          可选值|
| ------------- |:--------------:| --------:|------------:|--------------:|
| icon          | 设置按钮的图标类型  | String   | -          | -             |
| iconPosition  | 设置图标的摆放位置    | String   | left       | right      |
| loading       | 设置按钮载入状态   | Boolean  | false      | true          |
| click         | 点击按钮时的回调   | Function | -          | -

::: tip
icon和loading只能任选其一，不能同时设置
:::