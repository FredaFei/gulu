---
title: 'Popover 气泡卡片'
sidebarDepth: 2
---

### 效果预览

<ClientOnly>
  <popover-demo-1/>
</ClientOnly>

### 使用方式

```vue{4}
<template>
  <div class="example-box">
    <am-popover position="left" z-index="1000">
      <template slot="popover">
        <div class="pop-body">
          <div class="title">标题</div>
          <div class="info">
            <p>这里是内容</p>
            <p>这里是内容</p>
          </div>
        </div>
      </template>
      <am-button>left</am-button>
    </am-popover>
    <am-popover position="top" z-index="1000">
      <template slot="popover">
        <div class="pop-body">
          <div class="title">标题</div>
          <div class="info">
            <p>这里是内容</p>
            <p>这里是内容</p>
          </div>
        </div>
      </template>
      <am-button>top</am-button>
    </am-popover>

    <am-popover position="right" z-index="1000">
      <template slot="popover">
        this is a content
      </template>
      <am-button>right</am-button>
    </am-popover>

    <am-popover position="bottom" z-index="1000">
      <template slot="popover" slot-scope="{ close }">
        <div class="pop-body">
          <div class="title">标题</div>
          <div class="info">
            <p>内部触发关闭</p>
            <p>这里是内容</p>
            <am-button @click="close">关闭</am-button>
          </div>
        </div>
      </template>
      <am-button>bottom</am-button>
    </am-popover>

    <h4>hover 触发</h4>
    <am-popover position="left" trigger="hover" z-index="1000">
      <template slot="popover">
        this is a content
      </template>
      <am-button>left</am-button>
    </am-popover>
    <am-popover position="top" trigger="hover" z-index="1000">
      <template slot="popover">
        this is a content
      </template>
      <am-button>top</am-button>
    </am-popover>
    <am-popover position="right" trigger="hover" z-index="1000">
      <template slot="popover">
        this is a content
      </template>
      <am-button>right</am-button>
    </am-popover>
    <am-popover position="bottom" trigger="hover" z-index="1000">
      <template slot="popover">
        this is a content
      </template>
      <am-button>bottom</am-button>
    </am-popover>
    <h4>禁止触发</h4>

    <am-popover position="left" trigger="hover" disabled>
      <template slot="popover">
        this is a content
      </template>
      <am-button>left</am-button>
    </am-popover>
  </div>
</template>
```

### API

| 参数     |       说明       |          类型 | 默认值 |            可选值 |
| -------- | :--------------: | ------------: | -----: | ----------------: |
| position |  卡片内容的位置  |        String |    top | right/bottom/left |
| trigger  | 卡片内容触发方式 |        String |  click |             hover |
| disabled |   卡片是否可用   |       Boolean |  false |              true |
| zIndex   | 卡片 CSS 的层级  | String/Number |     10 |                —— |
