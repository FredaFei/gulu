import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

import {mount} from '@vue/test-utils'

import Vue from 'vue'
import AmSelect from '../../src/select/index'
import AmOption from '../../src/select/option'

Vue.component('am-select', AmSelect)
Vue.component('am-option', AmOption)

describe('AmOption', () => {
  it('存在.', () => {
    expect(AmOption).to.be.ok
  })
  it('设置 disabled', (done) => {
    const Component = {
      inject: ['root'],
      template: `
        <am-select>
          <am-option value="A" disabled>Apple</am-option>
          <am-option value="B">Banana</am-option>
          <am-option value="C">Cherry</am-option>
        </am-select>
        `
    }
    const wrapper = mount(Component, {
      provide: {
        root() {
          return {root: this}
        }
      },
    })
    wrapper.find('.am-select').trigger('click')
    setTimeout(() => {
      const el = wrapper.find('[data-name="A"]')
      expect(el.classes('disabled')).to.eq(true);

      const callback = sinon.fake()
      wrapper.vm.$on('update:selected', callback)
      el.trigger('click')
      expect(callback).to.not.have.been.called
      done()
    })
  })
})
