---
title: 'Collapse'
sidebarDepth: 2
---

<ClientOnly>
  <collapse-demo-1/>
  <collapse-demo-2/>
</ClientOnly>

``` vue{4}
<template>
  <div class="box">
    <g-slides :selected.sync="selected">
      <g-slides-item name="1">
        <div class="slides-item">slide 1</div>
      </g-slides-item>
      <g-slides-item name="2">
        <div class="slides-item">slide 2</div>
      </g-slides-item>
      <g-slides-item name="3">
        <div class="slides-item">slide 3</div>
      </g-slides-item>
    </g-slides>
  </div>
</template>
```
``` js{4}
import Slides from '../../../src/slides/slides'
import SlidesItem from '../../../src/slides/slidesItem'
export default {
  components: {
    GSlides: Slides,
    GSlidesItem: SlidesItem
  },
  data(){
    return {
      selected: ''
    }
  }
}
```

``` css{4}
.box{
  padding: 20px;
}
.slides-item {
  width: 100%;
  height: 150px;
  background: #dddddd;
}
```
### API

| 参数           | 说明           | 类型      |默认值        |          可选值|
| ------------- |:--------------:| --------:|------------:|--------------:|
| selected         | 默认切换值  | String   | -          | -             |
| autoPlay  | 是否自动切换    | Boolean   | true       | false     |
| autoPlayDelay       | 自动切换频率   | Number  | 2000      | -         |

