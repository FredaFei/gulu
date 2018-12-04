<template>
  <div>
    <h3>代码演示</h3>
    <g-button @click="showTaost1">默认</g-button>
    <g-button @click="showTaost2">手动关闭</g-button>
    <g-button @click="showTaost3">居中</g-button>
    <g-button @click="showTaost4">底部</g-button>
    <h3>使用方式</h3>
  </div>
</template>
<script>
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
  data() {
    return {
      selectedTabs: 'sport'
    }
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
</script>
<style lang="scss">
</style>

