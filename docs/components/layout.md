---
title: 'Layout 布局'
sidebarDepth: 2
---

<ClientOnly>
  <layout-demo-1/>
</ClientOnly>

```vue{4}
<template>
  <div class="box">
    <div style="padding-top: 16px;">
      <h3>24格网格 预览</h3>
      <g-row class="demoRow">
        <g-col span="8">
          <div class="demoCol">8</div>
        </g-col>
        <g-col span="8">
          <div class="demoCol">8</div>
        </g-col>
        <g-col span="8">
          <div class="demoCol">8</div>
        </g-col>
      </g-row>
      <g-row class="demoRow">
        <g-col span="6">
          <div class="demoCol">6</div>
        </g-col>
        <g-col span="6">
          <div class="demoCol">6</div>
        </g-col>
        <g-col span="6">
          <div class="demoCol">6</div>
        </g-col>
        <g-col span="6">
          <div class="demoCol">6</div>
        </g-col>
      </g-row>
      <g-row class="demoRow">
        <g-col span="4">
          <div class="demoCol">4</div>
        </g-col>
        <g-col span="4">
          <div class="demoCol">4</div>
        </g-col>
        <g-col span="4">
          <div class="demoCol">4</div>
        </g-col>
        <g-col span="4">
          <div class="demoCol">4</div>
        </g-col>
        <g-col span="4">
          <div class="demoCol">4</div>
        </g-col>
        <g-col span="4">
          <div class="demoCol">4</div>
        </g-col>
      </g-row>
      <g-row class="demoRow">
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
      </g-row>
    </div>
    <div style="padding-top: 16px;">
      <h3>设置gutter 预览</h3>
      <g-row class="demoRow" gutter="10">
        <g-col span="8">
          <div class="demoCol">8</div>
        </g-col>
        <g-col span="8">
          <div class="demoCol">8</div>
        </g-col>
        <g-col span="8">
          <div class="demoCol">8</div>
        </g-col>
      </g-row>
      <g-row class="demoRow" gutter="10">
        <g-col span="6">
          <div class="demoCol">6</div>
        </g-col>
        <g-col span="6">
          <div class="demoCol">6</div>
        </g-col>
        <g-col span="6">
          <div class="demoCol">6</div>
        </g-col>
        <g-col span="6">
          <div class="demoCol">6</div>
        </g-col>
      </g-row>
      <g-row class="demoRow" gutter="10">
        <g-col span="12"><div class="demoCol">12</div></g-col>
        <g-col span="12"><div class="demoCol">12</div></g-col>
      </g-row>
      <g-row class="demoRow" gutter="10">
        <g-col span="4"><div class="demoCol">4</div></g-col>
        <g-col span="4"><div class="demoCol">4</div></g-col>
        <g-col span="4"><div class="demoCol">4</div></g-col>
        <g-col span="4"><div class="demoCol">4</div></g-col>
        <g-col span="4"><div class="demoCol">4</div></g-col>
        <g-col span="4"><div class="demoCol">4</div></g-col>
      </g-row>
    </div>
    <div style="padding-top: 16px;">
      <h3>设置offset 预览</h3>
      <g-row class="demoRow" gutter="10">
        <g-col span="8">
          <div class="demoCol">8</div>
        </g-col>
        <g-col span="8" offset="8">
          <div class="demoCol">8</div>
        </g-col>
      </g-row>
      <g-row class="demoRow" gutter="10">
        <g-col span="6" offset="6">
          <div class="demoCol">6</div>
        </g-col>
        <g-col span="6" offset="6">
          <div class="demoCol">6</div>
        </g-col>
      </g-row>
      <g-row class="demoRow" gutter="10">
        <g-col span="4">
          <div class="demoCol">4</div>
        </g-col>
        <g-col span="4" offset="4">
          <div class="demoCol">4</div>
        </g-col>
        <g-col span="4" offset="8">
          <div class="demoCol">4</div>
        </g-col>
      </g-row>
      <g-row class="demoRow" gutter="10">
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2" offset="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2" offset="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2" offset="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2" offset="2">
          <div class="demoCol">2</div>
        </g-col>
      </g-row>
    </div>
  </div>
</template>
```

```js{4}
import Col from '../../../src/grid/gCol'
import Row from '../../../src/grid/gRow'
export default {
  components: {
    GCol: Col,
    GRow: Row
  }
}
```

```css{4}
.box {
  padding: 20px;
  z-index: 100;
  position: relative;
}
```

### API

#### Row

| 参数   |           说明            |          类型 | 默认值 |       可选值 |
| ------ | :-----------------------: | ------------: | -----: | -----------: |
| gutter |         栅格间隔          | String/Number |      - |            - |
| align  | flex 布局下的水平对齐方式 |        String |   left | center/right |

#### Col

| 参数     |                   说明                    |          类型 | 默认值 | 可选值 |
| -------- | :---------------------------------------: | ------------: | -----: | -----: |
| span     | 栅格占位格数，为 0 时相当于 display: none | String/Number |      - |      - |
| offset   |  栅格左侧的间隔格数，间隔内不可以有栅格   | String/Number |      - |      - |
| phone    |            <576px，响应式栅格             |        Object |      - |      - |
| ipad     |            ≥576px，响应式栅格             |        Object |      - |      - |
| narrowPc |            ≥769px，响应式栅格             |        Object |      - |      - |
| pc       |            ≥993px，响应式栅格             |        Object |      - |      - |
