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
  describe('props', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('可以设置value.', () => {
      vm = new Constructor({
        propsData: {
          iconType: 'error',
          value: '123'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.eq('123')
    })

    it('可以设置disabled', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount(div)
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.eq(true)
      vm.$el.remove()
    })
    it('可以设置readonly', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount(div)
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.eq(true)
      vm.$el.remove()
    })
    it('可以设置iconType', () => {
      vm = new Constructor({
        propsData: {
          iconType: 'error'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.eq('#i-error')
    })
    it('可以设置message', () => {
      vm = new Constructor({
        propsData: {
          iconType: 'error',
          message: 'hello'
        }
      }).$mount()
      const messageElement = vm.$el.querySelector('.message')
      expect(messageElement.textContent).to.eq('hello')
    })
  })
  describe('事件', () => {
    const Constructor = Vue.extend(Input)
    let vm
    it('支持 change/input/focus/blur ', () => {
      ['change', 'input', 'focus', 'blur']
      .forEach(eventName => {
        it('点击 Input 输入内容触发 change 事件', (eventName) => {
          vm = new Constructor({}).$mount()
          const callback = sinon.fake()
          vm.$on(eventName, callback)
          let event = new Event(eventName)
          Object.defineProperty(
              event, 'target',{
                  value: {value: 'hi'},
                  enumerable: true
              }
          )
          let inputElement = vm.$el.querySelector('input')
          inputElement.dispatchEvent(event)
          expect(callback).to.have.been.calledWith(event)
          expect(callback).to.have.been.calledWith('hi')
        })
      })
    })
  })
})
