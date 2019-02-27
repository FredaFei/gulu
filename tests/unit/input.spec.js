import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import { mount } from '@vue/test-utils'

import Vue from 'vue'
import Input from '../../src/input/input'

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
  it('可以设置 clearable,监听 clear 事件', done => {
    const inputCall = sinon.fake()
    const changeCall = sinon.fake()
    const clearCall = sinon.fake()
    const blurCall = sinon.fake()
    const focusCall = sinon.fake()
    const wrapper = mount(Input, {
      propsData: {
        clearable: true,
        value: '123'
      },
      listeners: {
        input: inputCall,
        change: changeCall,
        blur: blurCall,
        clear: clearCall,
        focus: focusCall
      }
    })
    const input = wrapper.find('input')
    input.trigger('input')
    input.trigger('focus')
    expect(inputCall).to.have.been.called
    expect(focusCall).to.have.been.called
    const svg = wrapper.find('use')
    setTimeout(() => {
      svg.trigger('click')
      expect(inputCall).to.have.been.calledWith('')
      input.trigger('change')
      expect(changeCall).to.have.been.calledWith('')
      expect(clearCall.calledOnce).to.be.true
      input.trigger('blur')
      expect(blurCall).to.have.been.called
      expect(wrapper.find('use').element).to.not.exist
      done()
    })
  })
  it('可以监听 enter 事件', done => {
    const callback = sinon.fake()
    const wrapper = mount(Input, {
      propsData: {
        value: '123'
      },
      listeners: {
        'keyup-enter': callback
      }
    })
    const input = wrapper.find('input')
    setTimeout(() => {
      input.trigger('keyup.enter')
      expect(callback).to.have.been.called
      done()
    })
  })
  it('可以设置前面icon的名字 prefix', () => {
    const wrapper = mount(Input, {
      propsData: {
        prefix: 'error'
      }
    })
    const el = wrapper.vm.$el.querySelector('use')
    expect(el.getAttribute('xlink:href')).to.eq('#i-error')
  })
  it('可以设置后面icon的名字 suffix', () => {
    const wrapper = mount(Input, {
      propsData: {
        suffix: 'date'
      }
    })
    const el = wrapper.vm.$el.querySelector('use')
    expect(el.getAttribute('xlink:href')).to.eq('#i-date')
  })
  it('可以设置 type', () => {
    const wrapper = mount(Input, {
      propsData: {
        type: 'textarea',
        value: '123'
      }
    })
    const textarea = wrapper.find('textarea')
    const input = wrapper.find('input')
    expect(textarea.element).to.exist
    expect(input.element).to.not.exist
  })
  xit('调用 setRawValue 方法', () => {
    // const Component = {
    //   template: `
    //       < name="music">
    //         <div>nav 1</div>
    //       </>
    //     `
    // }
    const wrapper = mount(Input)
    const clickMethodStub = sinon.stub()
    const input = wrapper.find('input')
    console.log(wrapper.vm.$el)
    console.log(wrapper.vm.$refs.gInput)
    // wrapper.find('button').trigger('click')
    wrapper.vm.$refs.gInput.setRawValue('21')
    expect(clickMethodStub).to.have.been.calledWith('21')
  })
  it('支持 change/input/focus/blur ', () => {
    ;['change', 'input', 'focus', 'blur'].forEach(eventName => {
      it('点击 Input 输入内容触发 change 事件', eventName => {
        const callback = sinon.fake()
        const wrapper = mount(Input)
        wrapper.vm.$on(eventName, callback)
        let event = new Event(eventName)
        Object.defineProperty(event, 'target', {
          value: { value: 'hi' },
          enumerable: true
        })
        let inputElement = wrapper.vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith(event)
        expect(callback).to.have.been.calledWith('hi')
      })
    })
  })
})
