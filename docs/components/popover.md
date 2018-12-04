---
title: 'Popover'
sidebarDepth: 2
---

<ClientOnly>
  <popover-demo-1/>
</ClientOnly>

``` vue{4}
<template>
  <div>
    <g-popover position="left">
      <template slot="popover">
        <div class="pop-body">
          <div class="title">标题</div>
          <div class="info">
            <p>这里是内容</p>
            <p>这里是内容</p>
          </div>
        </div>
      </template>
      <span class="box" @click="selectedFn">left</span>
    </g-popover>
    <g-popover position="left" trigger="hover">
      <template slot="popover">
        <div class="pop-body">
          <div class="title">标题</div>
          <div class="info">
            <p>这里是内容</p>
            <p>这里是内容</p>
          </div>
        </div>
      </template>
      <span class="box">left</span>
    </g-popover>
  </div>
</template>
```
``` js{4}
import Popover from '../../../src/popover/popover'
export default {
  components: {
    'GPopover': Popover
  },
  methods: {
    selectedFn() {
      console.log('popover')
    }
  }
}
```
``` css
.box{
  display: inline-block;
  padding: 10px 16px;
  font-size: 16px;
  color: #333333;
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.pop-body{
  width: 200px;
  .title{
    padding: 8px 0;
    font-size: 18px;
    color: #333333;
    font-weight: 700;
    border-bottom: 1px solid #ddd;
  }
  p{
    line-height: normal;
  }
}
```
### API

| 参数           | 说明           | 类型      |默认值        |          可选值|
| ------------- |:--------------:| --------:|------------:|--------------:|
| position      | 卡片内容的位置  | String   | top          | right/bottom/left |
| trigger       | 卡片内容触发方式    | String   | click       | hover      |
