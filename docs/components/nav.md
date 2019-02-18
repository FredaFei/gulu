---
title: 'Nav 导航菜单'
sidebarDepth: 2
---

<ClientOnly>
  <nav-demo-1/>
</ClientOnly>

```vue{4}
<template>
  <div>
    <h4>垂直菜单</h4>
    <g-nav
      :selected.sync="selected"
      @update:selected="clickFn"
      vertical
      style="width:200px; margin-bottom:50px"
    >
      <g-nav-item name="music">
        <div>nav 1</div>
      </g-nav-item>
      <g-sub-nav name="book">
        <template slot="title"
          >nav 2</template
        >
        <g-nav-item name="faction">小说</g-nav-item>
        <g-nav-item name="comic">动漫</g-nav-item>
        <g-sub-nav name="classis">
          <template slot="title"
            >杂志期刊</template
          >
          <g-nav-item name="technology">科技</g-nav-item>
          <g-nav-item name="fashion">时尚</g-nav-item>
          <g-sub-nav name="social">
            <template slot="title"
              >社会</template
            >
            <g-nav-item name="11">社会 1</g-nav-item>
            <g-nav-item name="22">社会 2</g-nav-item>
            <g-nav-item name="33">社会 3</g-nav-item>
          </g-sub-nav>
        </g-sub-nav>
      </g-sub-nav>
      <g-nav-item name="sport">
        <div>nav 3</div>
      </g-nav-item>
    </g-nav>
    <h4>水平的顶部导航菜单</h4>
    <g-nav :selected.sync="selected" style="width:260px;">
      <g-nav-item name="music">
        <div>nav 1</div>
      </g-nav-item>
      <g-sub-nav name="book">
        <template slot="title"
          >nav 2</template
        >
        <g-nav-item name="faction">小说</g-nav-item>
        <g-nav-item name="comic">动漫</g-nav-item>
        <g-sub-nav name="classis">
          <template slot="title"
            >杂志期刊</template
          >
          <g-nav-item name="technology">科技</g-nav-item>
          <g-nav-item name="fashion">时尚</g-nav-item>
          <g-sub-nav name="social">
            <template slot="title"
              >社会</template
            >
            <g-nav-item name="11">社会 1</g-nav-item>
            <g-nav-item name="22">社会 2</g-nav-item>
            <g-nav-item name="33">社会 3</g-nav-item>
          </g-sub-nav>
        </g-sub-nav>
      </g-sub-nav>
      <g-nav-item name="sport">
        <div>nav 3</div>
      </g-nav-item>
    </g-nav>
  </div>
</template>
```

```js{4}
import Nav from '../../../src/nav/nav'
import SubNav from '../../../src/nav/subNav'
import NavItem from '../../../src/nav/navItem'
export default {
  components: {
    GNav: Nav,
    GSubNav: SubNav,
    GNavItem: NavItem
  },
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
