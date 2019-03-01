import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import { mount } from '@vue/test-utils'

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

describe('Tabs', () => {
  it('存在.', () => {
    expect(Tabs).to.be.ok
  })
  it('接受 selected 属性', done => {
    const wrapper = mount(Tabs, {
      propsData: {
        selected: 'music'
      },
      slots: {
        default: `
            <g-tabs-header>
                <g-tabs-item name="sport">sport</g-tabs-item>
                <g-tabs-item name="music">music</g-tabs-item>
                <g-tabs-item name="moving">moving</g-tabs-item>
            </g-tabs-header>
            <g-tabs-body>
                <g-tabs-pane name="sport">sport content</g-tabs-pane>
                <g-tabs-pane name="music">music content</g-tabs-pane>
                <g-tabs-pane name="moving">moving content</g-tabs-pane>
            </g-tabs-body>
              `
      }
    })
    setTimeout(() => {
      const element = wrapper.find('.g-tabs-item[data-name="music"]')
      expect(element.exists()).to.be.true
      expect(wrapper.find('.g-tabs-pane[data-name="music"]').isVisible()).to.be
        .true
      done()
    })
  })
  it('可以设置 direction .', done => {
    const wrapper = mount(Tabs, {
      propsData: {
        selected: 'music',
        direction: 'vertical'
      },
      slots: {
        default: `
            <g-tabs-header>
                <g-tabs-item name="sport">sport</g-tabs-item>
                <g-tabs-item name="music">music</g-tabs-item>
                <g-tabs-item name="moving">moving</g-tabs-item>
            </g-tabs-header>
            <g-tabs-body>
                <g-tabs-pane name="sport">sport content</g-tabs-pane>
                <g-tabs-pane name="music">music content</g-tabs-pane>
                <g-tabs-pane name="moving">moving content</g-tabs-pane>
            </g-tabs-body>
              `
      }
    })
    setTimeout(() => {
      const element = wrapper.find('.g-tabs-item[data-name="music"].vertical')
      expect(element.exists()).to.be.true
      done()
    })
  })
  it('没有子组件时为空 .', done => {
    const wrapper = mount(Tabs, {
      propsData: {
        selected: 'music'
      },
      slots: {
        default: ''
      }
    })
    setTimeout(() => {
      expect(wrapper.isEmpty()).to.be.true
      done()
    })
  })
})
