import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import { mount, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import DatePicker from '../../src/datePicker/datePicker'

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
  it('设置 value 为当天.', done => {
    const wrapper = mount(DatePicker, {
      propsData: {
        value: new Date()
      }
    })
    let today = new Date()
      .toLocaleDateString()
      .split('/')
      .join('-')
    const input = wrapper.find('input')
    setTimeout(() => {
      console.log(wrapper.vm.$el.querySelector('input').value)
      console.log(input.element.value)
      done()
    })
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
    expect(wrapper.find('.g-popover-content').exists()).to.eq(false)
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
