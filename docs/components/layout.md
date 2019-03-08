---
title: 'Layout 布局'
sidebarDepth: 2
---

<ClientOnly>
  <layout-demo-1/>
</ClientOnly>

```vue{4}
<template>
  <div>
    <am-layout style="color: white; margin-bottom:50px;">
      <am-header style="height: 50px; background:lightskyblue;">
        header
      </am-header>
      <am-content style="height: 100px; background:deepskyblue;">
        content
      </am-content>
      <am-footer style="height: 50px; background:lightskyblue;">
        footer
      </am-footer>
    </am-layout>

    <am-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <am-header style="height: 50px; background:lightskyblue;">
        header
      </am-header>
      <am-layout>
        <am-aside
          style="height: 100px; background:#ddd; width:200px; color: black;"
        >
          sider
        </am-aside>
        <am-content style="height: 100px; background:deepskyblue;">
          content
        </am-content>
      </am-layout>
      <am-footer style="height: 50px; background:lightskyblue;">
        footer
      </am-footer>
    </am-layout>

    <am-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <am-aside style=" background:#ddd; width:200px; color: black;">
        sider
      </am-aside>
      <am-layout>
        <am-header style="height: 50px; background:lightskyblue;">
          header
        </am-header>
        <am-content style="height: 100px; background:deepskyblue;">
          content
        </am-content>
        <am-footer style="height: 50px; background:lightskyblue;">
          footer
        </am-footer>
      </am-layout>
    </am-layout>
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
