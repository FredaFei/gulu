import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Nav from '../../src/nav/nav'
import NavItem from '../../src/nav/navItem'
import SubNav from '../../src/nav/subNav'

Vue.component('am-nav', Nav)
Vue.component('am-nav-item', NavItem)
Vue.component('am-sub-nav', SubNav)

describe('Nav', () => {
  it('nav.vue 存在.', () => {
    expect(Nav).to.be.ok
  })
  describe('props', () => {
    it('可以设置 selected.', done => {
      const wrapper = mount(Nav, {
        propsData: {
          selected: 'music'
        },
        slots: {
          default: `
            <am-nav-item name="music">
              <div>nav 1</div>
            </am-nav-item>
            <am-nav-item name="sport">
              <div>nav 3</div>
            </am-nav-item>
          `
        }
      })
      setTimeout(function() {
        expect(wrapper.find('[data-name="music"].selected').exists()).to.be.true
        done()
      })
    })
    it('可以设置 vertical.', done => {
      const wrapper = mount(Nav, {
        propsData: {
          selected: 'music',
          vertical: true
        },
        slots: {
          default: `
            <am-nav-item name="music">
              <div>nav 1</div>
            </am-nav-item>
            <am-nav-item name="sport">
              <div>nav 3</div>
            </am-nav-item>
          `
        }
      })
      setTimeout(function() {
        expect(wrapper.classes('vertical')).to.be.true
        done()
      })
    })
  })
  describe('事件', () => {
    it('触发 update:selected 事件', done => {
      const callback = sinon.fake()
      const wrapper = mount(Nav, {
        propsData: {
          selected: 'music'
        },
        slots: {
          default: `
            <am-nav-item name="music">
              <div>nav 1</div>
            </am-nav-item>
            <am-nav-item name="sport">
              <div>nav 3</div>
            </am-nav-item>
          `
        },
        listeners: {
          'update:selected': callback
        }
      })
      setTimeout(() => {
        wrapper.find('[data-name="sport"]').trigger('click')
        expect(callback).to.have.been.calledWith('sport')
        done()
      })
    })
  })
})
