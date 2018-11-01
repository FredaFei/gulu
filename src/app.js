import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './buttonGroup'
import Input from './input'
import GCol from './gCol'
import GRow from './gRow'
import GLayout from './layout'
import GSider from './sider'
import GHeader from './header'
import GContent from './content'
import GFooter from './footer'
import Toast from './toast'
import Tabs from './tabs'
import TabsHeader from './tabsHeader'
import TabsBody from './tabsBody'
import TabsItem from './tabsItem'
import TabsPane from './tabsPane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapseItem'
import Cascader from './Cascader'

import plugin from './plugin'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-col', GCol)
Vue.component('g-row', GRow)
Vue.component('g-layout', GLayout)
Vue.component('g-sider', GSider)
Vue.component('g-header', GHeader)
Vue.component('g-content', GContent)
Vue.component('g-footer', GFooter)
Vue.component('g-toast', Toast)
Vue.use(plugin)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-header', TabsHeader)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)
Vue.component('g-cascader', Cascader)

import db from './db'
function ajax(parentId=0) {
    return db.filter(item=>item.parent_id === parentId)
}

new Vue({
  el: '#app',
  data() {
    return {
      loading: true,
      value: '张三',
      message: '名字长度需大于2',
      value2: 'ha',
      selectedTabs: 'sport',
      selectedTab: ['3'],
      source: ajax(),
      selected: []
    }
  },
  mounted() {
    // this.showTaost()
    console.log(this.selectedTab)
  },
  methods: {
    selectedFn() {
      console.log(89)
    },
    showTaost() {
      this.$toast('i am a toast!i am a toast!')
    },
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
})
