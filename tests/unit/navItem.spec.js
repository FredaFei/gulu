import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import { mount, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Nav from '../../src/nav/nav'
import NavItem from '../../src/nav/navItem'
import SubNav from '../../src/nav/subNav'

Vue.component('g-nav', Nav)
Vue.component('g-nav-item', NavItem)

describe('NavItem', () => {
  it('navItem.vue 存在.', () => {
    expect(NavItem).to.be.ok
  })
  describe('props', () => {
    it('可以设置 name.', () => {
      const Component = {
        inject: ['root'],
        template: `
          <g-nav-item name="music">
            <div>nav 1</div>
          </g-nav-item>
        `
      }
      const wrapper = shallowMount(Component, {
        provide: {
          root () {
            return { root: this }
          }
        }
      })
      expect(wrapper.find('[name="music"]').exists()).to.be.true
    })
  })
})
