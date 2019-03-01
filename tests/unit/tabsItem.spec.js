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

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-header', TabsHeader)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

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
      wrapper.find('.g-tabs-item[data-name="test2"]').trigger('click')
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
      wrapper.find('.g-tabs-item[data-name="test2"]').trigger('click')
      // expect(callback).to.have.been.called()
      done()
    })
  })
})
