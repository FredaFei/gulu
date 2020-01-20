---
title: 'Nav 导航菜单'
sidebarDepth: 2
---

### 效果预览

<ClientOnly>
  <nav-demo-1/>
</ClientOnly>

### 使用方式

```vue{4}
<template>
  <div class="example-box">
    <p><strong>垂直菜单，可内嵌子菜单</strong></p>
    <am-nav :selected.sync="selected" @update:selected="clickFn" vertical style="width:200px; margin-bottom:50px">
      <am-nav-item name="music">
        <div>nav 1</div>
      </am-nav-item>
      <am-sub-nav name="book">
        <template slot="title">nav 2</template>
        <am-nav-item name="faction">小说</am-nav-item>
        <am-nav-item name="comic">动漫</am-nav-item>
        <am-sub-nav name="classis">
          <template slot="title">杂志期刊</template>
          <am-nav-item name="technology">科技</am-nav-item>
          <am-nav-item name="fashion">时尚</am-nav-item>
          <am-sub-nav name="social">
            <template slot="title">社会</template>
            <am-nav-item name="11">社会 1</am-nav-item>
            <am-nav-item name="22">社会 2</am-nav-item>
            <am-nav-item name="33">社会 3</am-nav-item>
          </am-sub-nav>
        </am-sub-nav>
      </am-sub-nav>
      <am-nav-item name="sport">
        <div>nav 3</div>
      </am-nav-item>
    </am-nav>
    <p><strong>水平的顶部导航菜单</strong></p>
    <am-nav :selected.sync="selected" style="width:260px;">
      <am-nav-item name="music">
        <div>nav 1</div>
      </am-nav-item>
      <am-sub-nav name="book">
        <template slot="title">nav 2</template>
        <am-nav-item name="faction">小说</am-nav-item>
        <am-nav-item name="comic">动漫</am-nav-item>
        <am-sub-nav name="classis">
          <template slot="title">杂志期刊</template>
          <am-nav-item name="technology">科技</am-nav-item>
          <am-nav-item name="fashion">时尚</am-nav-item>
          <am-sub-nav name="social">
            <template slot="title">社会</template>
            <am-nav-item name="11">社会 1</am-nav-item>
            <am-nav-item name="22">社会 2</am-nav-item>
            <am-nav-item name="33">社会 3</am-nav-item>
          </am-sub-nav>
        </am-sub-nav>
      </am-sub-nav>
      <am-nav-item name="sport">
        <div>nav 3</div>
      </am-nav-item>
    </am-nav>
  </div>
</template>
```

```js{4}
export default {
  data() {
    return {
      selected: 'sport'
    }
  },
  watch: {
    selected(newValue) {
      if (newValue === 'sport') {
        alert(newValue)
      }
    }
  },
  methods: {
    clickFn(name) {
      if (name === 'music') {
        alert(name)
      }
    }
  }
}
```

### API

#### nav

| 参数                       |               说明               |     类型 | 默认值 | 可选值 |
| -------------------------- | :------------------------------: | -------: | -----: | -----: |
| selected                   | 选中的菜单项的 name 值，必需字段 |   String |      - |      - |
| vertical                   |      菜单类型，是否支持垂直      |  Boolean |  false |   true |
| @update:selected="clickFn" |         点击菜单时的回调         | Function |      - |      - |

#### subNav

| 参数 |           说明           |   类型 | 默认值 | 可选值 |
| ---- | :----------------------: | -----: | -----: | -----: |
| name | 嵌套子菜单名字，必需字段 | String |      - |      - |

#### navItem

| 参数 |         说明         |   类型 | 默认值 | 可选值 |
| ---- | :------------------: | -----: | -----: | -----: |
| name | 子菜单名字，必需字段 | String |      - |      - |

::: tip
点击菜单时，会触发 selected 字段值的更新，可在此时做相应的逻辑处理
:::
