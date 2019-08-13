import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import { mount } from '@vue/test-utils'
import Message from '../../src/message/message'

describe('Message', () => {
  it('Message 存在', () => {
    expect(Message).to.be.ok
  })
  it('设置 title', () => {
    const wrapper = mount(Message, {
      propsData: {
        title: 'test'
      }
    })
    expect(wrapper.props().title).to.eq('test')
  })
  it('默认 title', () => {
    const wrapper = mount(Message)
    expect(wrapper.props().title).to.eq('标题')
  })

  it('设置 cancelButton', done => {
    const callback = sinon.fake()
    const wrapper = mount(Message, {
      propsData: {
        cancelButton: {
          text: 'c',
          callback
        },
        confirmButton: {}
      },
      slots: {
        default: 'ha'
      }
    })
    wrapper.setData({ visible: true })
    setTimeout(() => {
      const btn = wrapper.findAll('.am-message-btn')
      expect(btn.at(0).exists()).to.eq(true)
      expect(btn.at(0).text()).to.eq('c')
      expect(btn.length).to.eq(1)
      btn.at(0).trigger('click')
      expect(callback).to.have.been.called
      expect(wrapper.html()).to.eq(undefined)
      done()
    }, 20)
  })
  it('设置 confirmButton', done => {
    const callback = sinon.fake()
    const wrapper = mount(Message, {
      propsData: {
        confirmButton: {
          text: 'a',
          callback
        },
        cancelButton: {}
      },
      slots: {
        default: 'ha'
      }
    })
    wrapper.setData({ visible: true })
    setTimeout(() => {
      const btn = wrapper.findAll('.am-message-btn')
      expect(btn.at(0).exists()).to.eq(true)
      expect(btn.at(0).text()).to.eq('a')
      expect(btn.length).to.eq(1)
      btn.at(0).trigger('click')
      expect(callback).to.have.been.called
      expect(wrapper.html()).to.eq(undefined)
      done()
    }, 20)
  })
})
