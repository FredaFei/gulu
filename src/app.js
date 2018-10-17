import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './buttonGroup'
import Input from './input'
import GCol from './gCol'
import GRow from './gRow'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-col', GCol)
Vue.component('g-row', GRow)

new Vue({
    el: '#app',
    data() {
        return {
            loading: true,
            value: '张三',
            message: '名字长度需大于2',
            value2: 'ha'
        }
    }
})
