---
title: 'Toast'
sidebarDepth: 2
---

<ClientOnly>
  <toast-demo-1/>
</ClientOnly>

```vue{4}
<template>
  <div>
    <g-button @click="showTaost1">默认</g-button>
    <g-button @click="showTaost2">手动关闭</g-button>
    <g-button @click="showTaost3">居中</g-button>
    <g-button @click="showTaost4">底部</g-button>
  </div>
</template>
```

```js{4}
import Button from '../../../src/button/button'
import Toast from '../../../src/toast/toast'
import plugin from '../../../src/plugin.js'
import Vue from 'vue'
Vue.use(plugin)

export default {
  components: {
    GButton: Button,
    GToast: Toast
  },
  methods: {
    showTaost1() {
      this.$toast(
        `i am a toast!i am a toast! ${parseInt(Math.random() * 100)}`,
        {
          autoClose: 3
        }
      )
    },
    showTaost2() {
      this.$toast(
        `i am a toast!i am a toast! ${parseInt(Math.random() * 100)}`,
        {
          autoClose: false,
          position: 'top'
        }
      )
    },
    showTaost3() {
      this.$toast('i am a toast!', {
        autoClose: false,
        position: 'middle',
        closeButton: {
          text: '关闭',
          callback() {
            console.log('i know')
          }
        }
      })
    },
    showTaost4() {
      this.$toast(
        'i am a toast!i am a toast! <strong id="test">test strong</strong>',
        {
          position: 'bottom',
          enableHtml: true
        }
      )
    }
  }
}
```

### API

| 参数        |        说明         |           类型 | 默认值 |     可选值 |
| ----------- | :-----------------: | -------------: | -----: | ---------: |
| autoClose   |  默认显示关闭按钮   | Boolean/Number |      3 |          - |
| closeButton |   自定义关闭按钮    |         Object |      - |          - | - |
| position    |    设置显示位置     |         String | middle | top/bottom |
| enableHtml  | 是否允许内容为 HTML |        Boolean |  false |       true |

::: tip
toast 组件在实际项目中使用时，会出现层级覆盖的问题，可以通过 zIndex 参数设置层级值，或者用户手动设置 CSS 中的 z-index 属性值 。
:::
::: warning
enableHtml 设置为 true 存在网站被攻击的风险
:::
