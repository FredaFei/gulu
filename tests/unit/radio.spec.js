import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)
import {mount} from '@vue/test-utils'

import AmRadio from '../../src/radio/index'

describe('AmCheckbox', () => {
  it('存在.', () => {
    expect(AmRadio).to.be.ok
  })
  it('设置 disabled', () => {
    const callback = sinon.fake()
    const wrapper = mount(AmRadio, {
      propsData: {
        model: true,
        disabled: true
      }
    })
    wrapper.trigger('click')
    expect(callback).to.not.have.been.called
  })
  it('设置 name', () => {
    const wrapper = mount(AmRadio, {
      propsData: {
        model: true,
        name: 'ha'
      }
    })
    expect(wrapper.props('name')).to.eq('ha')
  })
  it('设置 v-model 为布尔', () => {
    const wrapper = mount(AmRadio, {
      propsData: {
        model: true
      }
    })
    expect(wrapper.props('model')).to.eq(true)
  })
  it('设置 v-model 为字符串, 默认不选中', () => {
    const callback = sinon.fake()
    const wrapper = mount(AmRadio, {
      attachToDocument: true,
      propsData: {
        model: '',
        value: 'a'
      },
      listeners: {
        'change': callback
      }
    })
    wrapper.trigger('click')
    expect(callback).to.have.been.calledWith('a')
  })
})
