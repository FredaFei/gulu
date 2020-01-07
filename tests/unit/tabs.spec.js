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

Vue.component('am-tabs', Tabs)
Vue.component('am-tabs-header', TabsHeader)
Vue.component('am-tabs-body', TabsBody)
Vue.component('am-tabs-item', TabsItem)
Vue.component('am-tabs-pane', TabsPane)

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
            <am-tabs-header>
                <am-tabs-item name="sport">sport</am-tabs-item>
                <am-tabs-item name="music">music</am-tabs-item>
                <am-tabs-item name="moving">moving</am-tabs-item>
            </am-tabs-header>
            <am-tabs-body>
                <am-tabs-pane name="sport">sport content</am-tabs-pane>
                <am-tabs-pane name="music">music content</am-tabs-pane>
                <am-tabs-pane name="moving">moving content</am-tabs-pane>
            </am-tabs-body>
              `
      }
    })
    setTimeout(() => {
      const element = wrapper.find('.am-tabs-item[data-name="music"]')
      expect(element.exists()).to.be.true
      expect(wrapper.find('.am-tabs-pane[data-name="music"]').isVisible()).to.be
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
            <am-tabs-header>
                <am-tabs-item name="sport">sport</am-tabs-item>
                <am-tabs-item name="music">music</am-tabs-item>
                <am-tabs-item name="moving">moving</am-tabs-item>
            </am-tabs-header>
            <am-tabs-body>
                <am-tabs-pane name="sport">sport content</am-tabs-pane>
                <am-tabs-pane name="music">music content</am-tabs-pane>
                <am-tabs-pane name="moving">moving content</am-tabs-pane>
            </am-tabs-body>
              `
      }
    })
    setTimeout(() => {
      const element = wrapper.find('.am-tabs-item[data-name="music"].vertical')
      expect(element.exists()).to.be.true
      done()
    })
  })

  it('可以设置 lineWidthOrHeight .', done => {
    const wrapper = mount(Tabs, {
      propsData: {
        selected: 'music',
        lineWidthOrHeight: 24
      },
      slots: {
        default: `
            <am-tabs-header>
                <am-tabs-item name="sport">sport</am-tabs-item>
                <am-tabs-item name="music">music</am-tabs-item>
                <am-tabs-item name="moving">moving</am-tabs-item>
            </am-tabs-header>
            <am-tabs-body>
                <am-tabs-pane name="sport">sport content</am-tabs-pane>
                <am-tabs-pane name="music">music content</am-tabs-pane>
                <am-tabs-pane name="moving">moving content</am-tabs-pane>
            </am-tabs-body>
              `
      }
    })
    setTimeout(() => {
      expect(wrapper.props().lineWidthOrHeight).to.eq(24)
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
