import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import { mount, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Nav from '../../src/nav/nav'
import NavItem from '../../src/nav/navItem'
import SubNav from '../../src/nav/subNav'

Vue.component('am-nav', Nav)
Vue.component('am-nav-item', NavItem)
Vue.component('am-sub-nav', SubNav)

describe('SubNav', () => {
  it('subNav.vue 存在.', () => {
    expect(SubNav).to.be.ok
  })
  describe('props', () => {
    it('可以设置 name.', () => {
      const Component = {
        inject: ['root'],
        template: `
          <am-sub-nav name="books">
            <template slot="title">music</template>
            <am-nav-item name="pop">
              <div>nav 1</div>
            </am-nav-item>
          </am-sub-nav>
        `
      }
      const wrapper = shallowMount(Component, {
        provide: {
          root() {
            return { root: this }
          }
        }
      })
      expect(wrapper.find('[name="books"]').exists()).to.be.true
    })
  })
})
