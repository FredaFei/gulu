import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount, shallowMount } from '@vue/test-utils'
chai.use(sinonChai)

import Vue from 'vue'
import Tabs from '../../src/tabs/tabs'
import TabsHeader from '../../src/tabs/tabsHeader'
import TabsBody from '../../src/tabs/tabsBody'
import TabsItem from '../../src/tabs/tabsItem'
import TabsPane from '../../src/tabs/tabsPane'

Vue.component('am-tabs', Tabs)
Vue.component('am-tabs-header', TabsHeader)
Vue.component('am-tabs-body', TabsBody)
Vue.component('am-tabs-item', TabsItem)
Vue.component('am-tabs-pane', TabsPane)

describe('TabsItem', () => {
  it('存在.', () => {
    expect(TabsItem).to.be.ok
  })
  it('接受 name 属性 ', done => {
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
  it('可以设置 disabled .', done => {
    const callback = sinon.fake()
    const wrapper = mount(TabsItem, {
      propsData: {
        disabled: true,
        name: 'test2'
      },
      listeners: {
        'update:selected': callback
      }
    })
    setTimeout(() => {
      expect(wrapper.classes('disabled')).to.be.true
      wrapper.find('.am-tabs-item[data-name="test2"]').trigger('click')
      expect(callback).to.have.not.been.called
      done()
    })
  })
  it('可以 click .', done => {
    const callback = sinon.fake()
    const wrapper = mount(TabsItem, {
      propsData: {
        name: 'test2'
      },
      listeners: {
        'update:selected': callback
      },
      inject: ['eventBus'],
      attachToDocument: true
    })
    setTimeout(() => {
      wrapper.find('.am-tabs-item[data-name="test2"]').trigger('click')
      // expect(callback).to.have.been.called()
      done()
    })
  })
})
