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
    <am-slides :selected.sync="selected1">
      <am-slides-item name="1">
        <div class="slides-item">slide 1</div>
      </am-slides-item>
      <am-slides-item name="2">
        <div class="slides-item">slide 2</div>
      </am-slides-item>
      <am-slides-item name="3">
        <div class="slides-item">slide 3</div>
      </am-slides-item>
    </am-slides>
    <am-slides :selected.sync="selected2" :auto-play="false">
      <am-slides-item name="11">
        <div class="slides-item">slide 1</div>
      </am-slides-item>
      <am-slides-item name="12">
        <div class="slides-item">slide 2</div>
      </am-slides-item>
      <am-slides-item name="13">
        <div class="slides-item">slide 3</div>
      </am-slides-item>
    </am-slides>
    <am-slides :selected.sync="selected3" dots-style="button">
      <am-slides-item name="111">
        <div class="slides-item">slide 1</div>
      </am-slides-item>
      <am-slides-item name="122">
        <div class="slides-item">slide 2</div>
      </am-slides-item>
      <am-slides-item name="133">
        <div class="slides-item">slide 3</div>
      </am-slides-item>
    </am-slides>
  </div>
</template>
```

```js{4}
export default {
  data() {
    return {
      selected1: '',
      selected2: '',
      selected3: '',
    }
  }
}
```

### API

| 参数          |     说明     |    类型 | 默认值 | 可选值 |
| ------------- | :----------: | ------: | -----: | -----: |
| selected      |  默认切换值  |  String |     —— |     —— |
| autoPlay      | 是否自动切换 | Boolean |   true |  false |
| dotsStyle | 下标样式 |  String |   circle |     button |
| autoPlayDelay | 自动切换频率 |  Number |   2000 |     —— |

### Events

| 事件名称        |       说明       |               回调参数 |
| --------------- | :--------------: | ---------------------: |
| update:selected | 点击指示器时触发 | 目前激活的幻灯片的索引 |
