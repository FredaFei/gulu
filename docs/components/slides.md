---
title: 'Slides 轮播'
sidebarDepth: 2
---

### 效果预览

<ClientOnly>
<slides-demo-1/>
</ClientOnly>

### 使用方式

```vue{4}
<template>
  <div>
    <g-slides :selected.sync="selected1">
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
    <g-slides :selected.sync="selected2" :auto-play="false">
      <g-slides-item name="11">
        <div class="slides-item">slide 1</div>
      </g-slides-item>
      <g-slides-item name="12">
        <div class="slides-item">slide 2</div>
      </g-slides-item>
      <g-slides-item name="13">
        <div class="slides-item">slide 3</div>
      </g-slides-item>
    </g-slides>
  </div>
</template>
```

```js{4}
import GSlides from '../../../src/slides/slides'
import GSlidesItem from '../../../src/slides/slidesItem'
export default {
  components: {
    GSlides,
    GSlidesItem
  },
  data() {
    return {
      selected1: '',
      selected2: ''
    }
  }
}
```

```css{4}
.slides-item {
  width: 100%;
  height: 150px;
  background: #99a9bf;
}
```

### API

| 参数          |     说明     |    类型 | 默认值 | 可选值 |
| ------------- | :----------: | ------: | -----: | -----: |
| selected      |  默认切换值  |  String |      - |      - |
| autoPlay      | 是否自动切换 | Boolean |   true |  false |
| autoPlayDelay | 自动切换频率 |  Number |   2000 |      - |

### Events

| 事件名称        |       说明       |               回调参数 |
| --------------- | :--------------: | ---------------------: |
| update:selected | 点击指示器时触发 | 目前激活的幻灯片的索引 |
