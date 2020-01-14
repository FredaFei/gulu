---
title: 'Table 表单'
sidebarDepth: 2
---

### 效果预览

<ClientOnly>
<table-demo-1/>
</ClientOnly>

### 使用方式


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
