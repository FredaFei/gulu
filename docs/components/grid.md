---
title: 'Grid 栅格'
sidebarDepth: 2
---

### 效果预览

<ClientOnly>
  <grid-demo-1/>
</ClientOnly>

### 使用方式

```vue{4}
<template>
  <div class="example-box">
    <div style="paddinam-top: 16px;">
      <h3>24格网格 预览</h3>
      <am-row class="demoRow">
        <am-col span="8">
          <div class="demoCol">col-8</div>
        </am-col>
        <am-col span="8">
          <div class="demoCol">col-8</div>
        </am-col>
        <am-col span="8">
          <div class="demoCol">col-8</div>
        </am-col>
      </am-row>
      <am-row class="demoRow">
        <am-col span="6">
          <div class="demoCol">col-6</div>
        </am-col>
        <am-col span="6">
          <div class="demoCol">col-6</div>
        </am-col>
        <am-col span="6">
          <div class="demoCol">col-6</div>
        </am-col>
        <am-col span="6">
          <div class="demoCol">col-6</div>
        </am-col>
      </am-row>
      <am-row class="demoRow">
        <am-col span="4">
          <div class="demoCol">col-4</div>
        </am-col>
        <am-col span="4">
          <div class="demoCol">col-4</div>
        </am-col>
        <am-col span="4">
          <div class="demoCol">col-4</div>
        </am-col>
        <am-col span="4">
          <div class="demoCol">col-4</div>
        </am-col>
        <am-col span="4">
          <div class="demoCol">col-4</div>
        </am-col>
        <am-col span="4">
          <div class="demoCol">col-4</div>
        </am-col>
      </am-row>
      <am-row class="demoRow">
        <am-col span="2">
          <div class="demoCol">col-2</div>
        </am-col>
        <am-col span="2">
          <div class="demoCol">col-2</div>
        </am-col>
        <am-col span="2">
          <div class="demoCol">col-2</div>
        </am-col>
        <am-col span="2">
          <div class="demoCol">col-2</div>
        </am-col>
        <am-col span="2">
          <div class="demoCol">col-2</div>
        </am-col>
        <am-col span="2">
          <div class="demoCol">col-2</div>
        </am-col>
        <am-col span="2">
          <div class="demoCol">col-2</div>
        </am-col>
        <am-col span="2">
          <div class="demoCol">col-2</div>
        </am-col>
        <am-col span="2">
          <div class="demoCol">col-2</div>
        </am-col>
        <am-col span="2">
          <div class="demoCol">col-2</div>
        </am-col>
        <am-col span="2">
          <div class="demoCol">col-2</div>
        </am-col>
        <am-col span="2">
          <div class="demoCol">col-2</div>
        </am-col>
      </am-row>
    </div>
    <div style="paddinam-top: 16px;">
      <h3>设置gutter 预览</h3>
      <am-row class="demoRow" gutter="10">
        <am-col span="8">
          <div class="demoCol">col-8</div>
        </am-col>
        <am-col span="8">
          <div class="demoCol">col-8</div>
        </am-col>
        <am-col span="8">
          <div class="demoCol">col-8</div>
        </am-col>
      </am-row>
      <am-row class="demoRow" gutter="10">
        <am-col span="6">
          <div class="demoCol">col-6</div>
        </am-col>
        <am-col span="6">
          <div class="demoCol">col-6</div>
        </am-col>
        <am-col span="6">
          <div class="demoCol">col-6</div>
        </am-col>
        <am-col span="6">
          <div class="demoCol">col-6</div>
        </am-col>
      </am-row>
      <am-row class="demoRow" gutter="10">
        <am-col span="12">
          <div class="demoCol">col-12</div>
        </am-col>
        <am-col span="12">
          <div class="demoCol">col-12</div>
        </am-col>
      </am-row>
      <am-row class="demoRow" gutter="10">
        <am-col span="4">
          <div class="demoCol">col-4</div>
        </am-col>
        <am-col span="4">
          <div class="demoCol">col-4</div>
        </am-col>
        <am-col span="4">
          <div class="demoCol">col-4</div>
        </am-col>
        <am-col span="4">
          <div class="demoCol">col-4</div>
        </am-col>
        <am-col span="4">
          <div class="demoCol">col-4</div>
        </am-col>
        <am-col span="4">
          <div class="demoCol">col-4</div>
        </am-col>
      </am-row>
    </div>
    <div style="paddinam-top: 16px;">
      <h3>设置offset 预览</h3>
      <am-row class="demoRow" gutter="10">
        <am-col span="8">
          <div class="demoCol">col-8</div>
        </am-col>
        <am-col span="8" offset="8">
          <div class="demoCol">col-8</div>
        </am-col>
      </am-row>
      <am-row class="demoRow" gutter="10">
        <am-col span="6" offset="6">
          <div class="demoCol">col-6</div>
        </am-col>
        <am-col span="6" offset="6">
          <div class="demoCol">col-6</div>
        </am-col>
      </am-row>
      <am-row class="demoRow" gutter="10">
        <am-col span="4">
          <div class="demoCol">col-4</div>
        </am-col>
        <am-col span="4" offset="4">
          <div class="demoCol">col-4</div>
        </am-col>
        <am-col span="4" offset="8">
          <div class="demoCol">col-4</div>
        </am-col>
      </am-row>
      <am-row class="demoRow" gutter="10">
        <am-col span="2">
          <div class="demoCol">col-2</div>
        </am-col>
        <am-col span="2" offset="2">
          <div class="demoCol">col-2</div>
        </am-col>
        <am-col span="2">
          <div class="demoCol">col-2</div>
        </am-col>
        <am-col span="2" offset="2">
          <div class="demoCol">col-2</div>
        </am-col>
        <am-col span="2">
          <div class="demoCol">col-2</div>
        </am-col>
        <am-col span="2" offset="2">
          <div class="demoCol">col-2</div>
        </am-col>
        <am-col span="2">
          <div class="demoCol">col-2</div>
        </am-col>
        <am-col span="2" offset="2">
          <div class="demoCol">col-2</div>
        </am-col>
      </am-row>
    </div>
  </div>
</template>

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
