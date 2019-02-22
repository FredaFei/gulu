---
title: 'Popover 气泡卡片'
sidebarDepth: 2
---

<ClientOnly>
  <popover-demo-1/>
</ClientOnly>

### 使用方式

```vue{4}
<template>
  <div>
    <g-popover position="left" z-index="1000">
      <template slot="popover">
        <div class="pop-body">
          <div class="title">标题</div>
          <div class="info">
            <p>这里是内容</p>
            <p>这里是内容</p>
          </div>
        </div>
      </template>
      <g-button>left</g-button>
    </g-popover>
    <g-popover position="top" z-index="1000">
      <template slot="popover">
        <div class="pop-body">
          <div class="title">标题</div>
          <div class="info">
            <p>这里是内容</p>
            <p>这里是内容</p>
          </div>
        </div>
      </template>
      <g-button>top</g-button>
    </g-popover>

    <g-popover position="right" z-index="1000">
      <template slot="popover">
        this is a content
      </template>
      <g-button>right</g-button>
    </g-popover>

    <g-popover position="bottom" z-index="1000">
      <template slot="popover" slot-scope="{ close }">
        <div class="pop-body">
          <div class="title">标题</div>
          <div class="info">
            <p>内部触发关闭</p>
            <p>这里是内容</p>
            <g-button @click="close">关闭</g-button>
          </div>
        </div>
      </template>
      <g-button>bottom</g-button>
    </g-popover>

    <h4>hover 触发</h4>
    <g-popover position="left" trigger="hover" z-index="1000">
      <template slot="popover">
        this is a content
      </template>
      <g-button>left</g-button>
    </g-popover>
    <g-popover position="top" trigger="hover" z-index="1000">
      <template slot="popover">
        this is a content
      </template>
      <g-button>top</g-button>
    </g-popover>
    <g-popover position="right" trigger="hover" z-index="1000">
      <template slot="popover">
        this is a content
      </template>
      <g-button>right</g-button>
    </g-popover>
    <g-popover position="bottom" trigger="hover" z-index="1000">
      <template slot="popover">
        this is a content
      </template>
      <g-button>bottom</g-button>
    </g-popover>
    <h4>禁止触发</h4>

    <g-popover position="left" trigger="hover" disabled>
      <template slot="popover">
        this is a content
      </template>
      <g-button>left</g-button>
    </g-popover>
  </div>
</template>
```

```js{4}
import GPopover from '../../../src/popover/popover'
import GButton from '../../../src/button/button'
export default {
  components: {
    GPopover,
    GButton
  }
}
```

```css
.pop-body {
  width: 200px;
  .title {
    padding: 8px 0;
    font-size: 18px;
    color: #333333;
    font-weight: 700;
    border-bottom: 1px solid #ddd;
  }
  p {
    line-height: normal;
  }
}
```

### API

| 参数     |       说明       |          类型 | 默认值 |            可选值 |
| -------- | :--------------: | ------------: | -----: | ----------------: |
| position |  卡片内容的位置  |        String |    top | right/bottom/left |
| trigger  | 卡片内容触发方式 |        String |  click |             hover |
| disabled |   卡片是否可用   |       Boolean |  false |              true |
| zIndex   | 卡片 CSS 的层级  | String/Number |     10 |                —— |
