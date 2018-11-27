import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import { mount } from '@vue/test-utils'

import Vue from 'vue'
import Input from '@/input'

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.be.ok
  })
  it('可以设置value.', () => {
    const wrapper = mount(Input, {
      propsData: {
        iconType: 'error',
        value: '123'
      }
    })
    const el = wrapper.vm.$el.querySelector('input')
    expect(el.value).to.eq('123')
  })
  it('可以设置disabled', () => {
    const wrapper = mount(Input, {
      propsData: {
        disabled: true
      }
    })
    const el = wrapper.vm.$el.querySelector('input')
    expect(el.disabled).to.be.true
  })
  it('可以设置readonly', () => {
    const wrapper = mount(Input, {
      propsData: {
        readonly: true
      }
    })
    const el = wrapper.vm.$el.querySelector('input')
    expect(el.readOnly).to.be.true
  })
  it('可以设置iconType', () => {
    const wrapper = mount(Input, {
      propsData: {
        iconType: 'error'
      }
    })
    const el = wrapper.vm.$el.querySelector('use')
    expect(el.getAttribute('xlink:href')).to.eq('#i-error')
  })
  it('可以设置message', () => {
    const wrapper = mount(Input, {
      propsData: {
        iconType: 'error',
        message: 'hello'
      }
    })
    const messageElement = wrapper.vm.$el.querySelector('.message')
    expect(messageElement.textContent).to.eq('hello')
  })

  it('支持 change/input/focus/blur ', () => {
    ;['change', 'input', 'focus', 'blur'].forEach(eventName => {
      it('点击 Input 输入内容触发 change 事件', eventName => {
        const callback = sinon.fake()
        const wrapper = mount(Input)
        wrapper.vm.$on(eventName, callback)
        let event = new Event(eventName)
        Object.defineProperty(
            event, 'target',{
                value: {value: 'hi'},
                enumerable: true
            }
        )
        let inputElement = wrapper.vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith(event)
        expect(callback).to.have.been.calledWith('hi')
      })
    })
  })
})
