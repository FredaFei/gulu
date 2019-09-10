import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import { mount, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import DatePicker from '../../src/datePicker/index'
import moment from '../../src/datePicker/moment'

describe('DatePicker', () => {
  it('存在.', () => {
    expect(DatePicker).to.be.ok
  })
  it('默认 value 为空.', () => {
    const wrapper = mount(DatePicker, {
      propsData: {
        value: ''
      }
    })
    const input = wrapper.find('input')
    expect(input.element.value).to.eq('')
  })
  it('设置 value .', () => {
    const callback = sinon.fake()
    const wrapper = mount(DatePicker, {
      propsData: {
        value: new Date('2019/09/08')
      },
      listeners:{
        'input': callback
      }
    })
    const input = wrapper.find('input')
    expect(input.element.value).to.eq('2019-09-08')
    input.trigger('click')
    const today = wrapper.find('.today')
    today.trigger('click')
    expect(callback).to.have.been.called
    expect(wrapper.find('.am-date-picker-pop').exists()).to.eq(false)
  })
  it('可以设置 placeholder.', () => {
    const wrapper = mount(DatePicker, {
      propsData: {
        placeholder: 'settings'
      }
    })
    let el = wrapper.find('input')
    expect(el.attributes('placeholder')).to.eq('settings')
  })
  it('可以设置 disabled.', () => {
    const wrapper = mount(DatePicker, {
      propsData: {
        disabled: true
      }
    })
    wrapper.find('input').trigger('click')
    expect(wrapper.find('.am-popover-content').exists()).to.eq(false)
  })
  it('可以设置 readonly.', () => {
    const wrapper = mount(DatePicker, {
      propsData: {
        readonly: true
      }
    })
    const el = wrapper.vm.$el.querySelector('input')
    expect(el.readOnly).to.be.true
  })
})
