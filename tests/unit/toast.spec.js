import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import { mount } from '@vue/test-utils'
import Toast from '../../src/toast/toast'

describe('Toast', () => {
  it('存在.', () => {
    expect(Toast).to.be.ok
  })
  it('可以设置 autoClose.', done => {
    const callback = sinon.fake()
    mount(Toast, {
      propsData: {
        autoClose: 20
      },
      slots: {
        default: 'ha'
      },
      listeners: {
        close: callback
      }
    })
    setTimeout(() => {
      expect(callback).to.have.been.called
      done()
    }, 22)
  })
  it('设置 callback，自动关闭时调用', done => {
    const callback1 = sinon.fake()
    const callback2 = sinon.fake()
    mount(Toast, {
      propsData: {
        autoClose: 20,
        callback: callback1
      },
      slots: {
        default: 'ha'
      },
      listeners: {
        close: callback2
      }
    })
    setTimeout(() => {
      expect(callback2).to.have.been.called
      expect(callback1).to.have.been.called
      done()
    }, 22)
  })
  it('接受 buttonText 属性, 手动关闭时调用', () => {
    const callback1 = sinon.fake()
    const callback2 = sinon.fake()
    const wrapper = mount(Toast, {
      propsData: {
        autoClose: false,
        callback: callback2,
        buttonText: 'k'
      },
      slots: {
        default: 'ha'
      },
      listeners: {
        close: callback1
      }
    })
    wrapper.find('.am-toast-close').trigger('click')
    expect(callback2).to.have.been.called
    expect(callback1).to.have.been.called
  })
  it('接受 position 属性', () => {
    const wrapper = mount(Toast, {
      propsData: {
        autoClose: 20,
        position: 'middle'
      },
      slots: {
        default: 'ha'
      }
    })
    expect(wrapper.classes('position-middle')).to.eq(true)
  })
})
