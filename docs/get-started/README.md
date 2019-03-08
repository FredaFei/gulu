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

::: tip
安装 使用本框架前，请在 CSS 中开启 border-box

```
*,*::before,*::after{box-sizing: border-box;}
```

:::

[项目实战应用](https://codesandbox.io/s/ojvvl27v6q)
