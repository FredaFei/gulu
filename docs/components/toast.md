---
title: 'Toast 全局提示'
sidebarDepth: 2
---

### 效果预览

<ClientOnly>
  <toast-demo-1/>
</ClientOnly>

### 使用方式

```vue{4}
<template>
  <div>
    <h5>基础用法</h5>
    <p>默认居中显示，3 秒后自动消失。</p>
    <g-button @click="showTaost1">顶部</g-button>
    <g-button @click="showTaost2">居中</g-button>
    <g-button @click="showTaost3">底部</g-button>
    <h5>手动关闭</h5>
    <g-button @click="showTaost4">顶部</g-button>
    <h5>使用HTML片段</h5>
    <g-button @click="showTaost5">顶部</g-button>
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
          position: 'top',
          zIndex: 9999
        }
      )
    },
    showTaost2() {
      this.$toast(
        `i am a toast!i am a toast!  ${parseInt(Math.random() * 100)}`
      )
    },
    showTaost3() {
      this.$toast(
        `i am a toast!i am a toast! ${parseInt(Math.random() * 100)}`,
        {
          position: 'bottom'
        }
      )
    },
    showTaost4() {
      this.$toast('i am a toast!', {
        autoClose: false,
        zIndex: 9999,
        position: 'top',
        closeButton: {
          text: '关闭',
          callback() {
            alert('我点击了关闭~')
          }
        }
      })
    },
    showTaost5() {
      this.$toast(
        'i am a toast!i am a toast! <a href="https://www.baidu.com"> baidu.com</a>',
        {
          position: 'top',
          enableHtml: true,
          zIndex: 9999
        }
      )
    }
  }
}
```

### API

| 参数        |        说明         |           类型 | 默认值 |     可选值 |
| ----------- | :-----------------: | -------------: | -----: | ---------: |
| autoClose   |  默认显示关闭按钮   | Boolean/Number |      3 |         —— |
| closeButton |   自定义关闭按钮    |         Object |     —— |         —— | —— |
| position    |    设置显示位置     |         String | middle | top/bottom |
| zIndex      |    设置 CSS 层级    |  String/Number |      1 |         —— |
| enableHtml  | 是否允许内容为 HTML |        Boolean |  false |       true |

::: tip
toast 组件在实际项目中使用时，会出现层级覆盖的问题，可以通过 zIndex 参数设置层级值，或者用户手动设置 CSS 中的 z-index 属性值 。
:::
::: warning
enableHtml 设置为 true 存在网站被攻击的风险
:::
