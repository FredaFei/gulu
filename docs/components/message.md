---
title: 'Message 全局提示'
sidebarDepth: 2
---

### 效果预览

<ClientOnly>
  <message-demo-1/>
</ClientOnly>

### 使用方式

```vue{4}
<template>
  <div class="example-box">
    <p><strong>基础用法</strong></p>
    <am-button>默认</am-button>
    <am-button @click="open1">alert</am-button>
    <am-button @click="open2">confirm</am-button>
    <am-button @click="open3">自定义</am-button>
  </div>
</template>

```
```js{4}
  Vue.use(Message);
  export default {
    ...
    methods: {
      open1() {
        this.$alert('i am a alert! <a href="https://www.zhihu.com"> zhihu.com</a>', {title: 'test', enableHtml: true});
      },
      open2() {
        this.$confirm('i am a confirm!', {title: 'test'});
      },
      open3() {
        this.$alert('i am a alert!', {
          confirmButton: {
            text: '我知道了',
            callback(){
              alert('yes')
            }
          }
        });
      }
    }
    ...
  };
```

### API

| 参数        |        说明         |           类型 | 默认值 |     可选值 |
| ----------- | :-----------------: | -------------: | -----: | ---------: |
| title   |  标题   | String |      标题 |         —— |
| cancelButton |   自定义取消按钮    |         Object{text,callback} |     —— |         —— | —— |
| confirmButton |   自定义确定按钮    |         Object{text,callback} |     —— |         —— | —— |
| zIndex      |    设置 CSS 层级    |  String/Number |      100 |         —— |
| enableHtml  | 是否允许内容为 HTML |        Boolean |  false |       true |

::: tip
toast 组件在实际项目中使用时，会出现层级覆盖的问题，可以通过 zIndex 参数设置层级值，或者用户手动设置 CSS 中的 z-index 属性值 。
:::
::: warning
enableHtml 设置为 true 存在网站被攻击的风险
:::
