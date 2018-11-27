import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount } from '@vue/test-utils'
chai.use(sinonChai)

import Vue from 'vue'
import Tabs from '@/tabs'
import TabsHeader from '@/tabsHeader'
import TabsBody from '@/tabsBody'
import TabsItem from '@/tabsItem'
import TabsPane from '@/tabsPane'

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-header', TabsHeader)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

describe('TabsItem', () => {
  it('存在.', () => {
    expect(TabsItem).to.be.ok
  })
  it('接受 name 属性 ', (done) => {
    const wrapper = mount(TabsItem, {
      propsData: {
        name: 'test2'
      }
    })
    setTimeout(() => {
      expect(wrapper.attributes('data-name')).to.be.eq('test2')
      done()
    })
  })
  it('可以设置 disabled .', (done) => {
    const callback = sinon.fake()
    const wrapper = mount(TabsItem, {
      propsData: {
        disabled: true,
        name: 'test2'
      }
    })
    expect(wrapper.classes('disabled')).to.be.true
    setTimeout(() => {
      expect(callback).to.have.not.been.called
      done()
    })
  })
})
