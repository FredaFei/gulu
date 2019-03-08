---
title: 'Pager 分页'
sidebarDepth: 2
---

<ClientOnly>
  <pager-demo-1/>
  <pager-demo-2/>
</ClientOnly>

```vue{4}
<template>
  <div>
    <am-pagination
      :current-page="currentPage"
      :total-page="10"
      :hide-on-single-page="false"
      :current-page.sync="currentPage"
    ></am-pagination>
  </div>
</template>
```

```js{4}
export default {
  data() {
    return {
      currentPage: 1
    }
  }
}
```

### API

| 参数             |                说明                |     类型 | 默认值 | 可选值 |
| ---------------- | :--------------------------------: | -------: | -----: | -----: |
| currentPage      |              当前页数              |   Number |      - |      - |
| totalPage        |               总页数               |   Number |      - |      - |
| hideOnSinglePage |      只有一页时是否隐藏分页器      |  Boolean |   true |  false |
| click            | 页码改变的回调，参数是改变后的页码 | Function |      - |      - |

::: tip
hideOnSinglePage 默认为 true, 当只有一页时是隐藏分页器的
:::
