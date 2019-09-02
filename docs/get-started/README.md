---
title: '快速上手'
---

### 引入 Amazing UI

1. 完整引入，在 main.js 中写入以下内容：

```
import Vue from 'vue'
import AmazingUI from 'amazing-ui'
import 'amazing-ui/dist/amazing-ui.css'
import App from './App.vue'

Vue.use(AmazingUI)

new Vue({
el: '#app',
components: { App }
})

```

2. 单独引入某个组件

```
import Vue from 'vue'
import {Button,Input} from 'amazing-ui'
import 'amazing-ui/dist/amazing-ui.css'
import App from './App.vue'

Vue.component(Button.name, Button)
Vue.component(Input.name, Input)

new Vue({
el: '#app',
components: { App }
})

```

### 使用 Amazing UI 示例

[点我跳转 项目实战应用](https://codesandbox.io/s/ojvvl27v6q)

::: tip 重要说明
本框架支持的Vue2 v2.5.20前。v2.6.0+ 因修复了nextTick的一些Bug，对个别组件的使用会有影响。特别是datePicker组件,因使用了popover组件，在同一区域作条件切换时（对年月日点击时），会造成闪现的Bug。
后期会对datePicker组件做优化

参考：
+ [vue releases v2.6.0](https://github.com/vuejs/vue/releases/tag/v2.6.0)
+ [nextTick #8450](https://github.com/vuejs/vue/pull/8450)
+ [Vue中DOM的异步更新策略以及nextTick机制](https://segmentfault.com/a/1190000013314893)


安装 使用本框架前，请在 CSS 中开启 border-box

```
*,*::before,*::after{box-sizing: border-box;}
```

:::
