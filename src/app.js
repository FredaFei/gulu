import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './buttonGroup'
import Input from './input'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)

new Vue({
  el: '#app',
  data(){
    return {
      loading: true,
      value: '张三',
      message: '名字长度需大于2'
    }
  },
  created(){
    setTimeout(()=> {
      let event = new Event('change')
      let inputEl = this.$el.querySelector('input')
      inputEl.dispatchEvent(event)
      console.log('end')
    }, 3000);
  }
})