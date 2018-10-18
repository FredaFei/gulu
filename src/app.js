import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './buttonGroup'
import Input from './input'
import GCol from './gCol'
import GRow from './gRow'
import Toast from './toast'
import plugin from './plugin'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-col', GCol)
Vue.component('g-row', GRow)
Vue.component('g-toast', Toast)
Vue.use(plugin)

new Vue({
  el: '#app',
  data() {
    return {
      loading: true,
      value: '张三',
      message: '名字长度需大于2',
      value2: 'ha'
    }
  },
  mounted() {
    // this.showTaost()
  },
  methods: {
    showTaost() {
      this.$toast('i am a toast!i am a toast!')
    },
    showTaost1() {
      this.$toast('i am a toast!i am a toast!', {
        autoCloseDelay: 4
      })
    },
    showTaost2() {
      this.$toast('i am a toast!i am a toast!', {
        autoClose: false
      })
    },
    showTaost3() {
      this.$toast('i am a toast!i am a toast!', {
        autoClose: false,
        closeButton: {
          text: '关闭',
          callback() {
            console.log('i know')
          }
        }
      })
    },
    showTaost4() {
      this.$toast('i am a toast!i am a toast!', {
        autoClose: true
      })
    }
  }
})
