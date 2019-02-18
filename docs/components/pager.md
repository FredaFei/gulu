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
    <g-pager
      :current-page="currentPage"
      :total-page="1"
      :hide-on-single-page="false"
      :current-page.sync="currentPage"
    ></g-pager>
  </div>
</template>
```

```js{4}
import GPager from '../../../src/pager/pager'
export default {
  components: {
    GPager
  },
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
